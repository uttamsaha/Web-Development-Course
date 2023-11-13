const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 5000;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//middlewares
app.use(cors());
app.use(express.json());
require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kckwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "UnAuthorized access" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      return res.status(403).send({ message: "Forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
}

async function run() {
  try {
    await client.connect();
    const servicesCollection = client.db("doctors").collection("services");
    const bookingCollection = client.db("doctors").collection("bookings");
    const userCollection = client.db("doctors").collection("users");
    const doctorCollection = client.db("doctors").collection("doctor");


    const verifyAdmin = async(req, res, next) => {
      const requester = req.decoded.email;
      const requesterAccount = await userCollection.findOne({
        email: requester,
      });
      if (requesterAccount.role === "admin"){
        next();
      }
      else{
        res.status(403).send({message: 'forbidden access'});
      }
    }


    //get payment 
    app.post('/create-payment-intent', async(req, res) =>{
      const service = req.body;
      const price = service.price;
      const amount = price*100;
      const paymentIntent = await stripe.paymentIntents.create({
        amount : amount,
        currency: 'usd',
        payment_method_types:['card']
      });
      res.send({clientSecret: paymentIntent.client_secret})
    });
    //get all users form DB
    app.get("/user", verifyJWT, async (req, res) => {
      const users = await userCollection.find().toArray();
      res.send(users);
    });

    app.get('/admin/:email', async(req, res) =>{
      const email = req.params.email;
      const user = await userCollection.findOne({email: email});
      const isAdmin = user.role === 'admin';
      res.send({admin: isAdmin})
    })

    app.put("/user/admin/:email", verifyJWT, verifyAdmin, async (req, res) => {
      //verifying admin using middleware
      const email = req.params.email;
        const filter = { email: email };
        const updateDoc = {
          $set: { role: "admin" },
        };
        const result = await userCollection.updateOne(filter, updateDoc);
        res.send(result);
    });

    //storing user email to database
    app.put("/user/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      const token = jwt.sign(
        { email: email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      res.send({ result, token });
    });

    app.get("/service", async (req, res) => {
      const query = {};
      const cursor = servicesCollection.find(query).project({name: 1}); //.project diye service theke sudo name field select kortesi.. project er moddeh jeta dibo segula select hobe only.. 1 value dite hobe. select korte.
      
      const result = await cursor.toArray();
      res.send(result);
    });

    //my bookings
    app.get("/booking", verifyJWT, async (req, res) => {
      const patient = req.query.patient;
      const decodedEmail = req.decoded.email;
      if (patient === decodedEmail) {
        const query = { patient: patient };
        const bookings = await bookingCollection.find(query).toArray();
        return res.send(bookings);
      } else {
        return res.status(403).send({ message: "forbidden access" });
      }
    });

    //get single booking using booking id
    app.get('/booking/:id', verifyJWT, async(req,res) => {
      const id = req.params.id;
      const query = {_id: ObjectId(id)};
      const booking = await bookingCollection.findOne(query);
      res.send(booking);
    })

    app.get("/available", async (req, res) => {
      const date = req.query.date;
      //step1. get all services
      const services = await servicesCollection.find().toArray();

      //step 2 get the booking of the day
      const query = { date: date };
      const bookings = await bookingCollection.find(query).toArray();

      //step3 for each service find boookings for that service
      services.forEach((service) => {
        const serviceBookings = bookings.filter(
          (b) => b.treatment === service.name
        );
        const booked = serviceBookings.map((s) => s.slot);
        // service.booked = booked;

        // select those slots that are not in bookedSlots finding availbale slots
        const available = service.slots.filter((s) => !booked.includes(s));
        service.slots = available;
      });
      res.send(services);
    });

    app.post("/booking", async (req, res) => {
      const booking = req.body;
      const query = {
        treatment: booking.treatment,
        date: booking.date,
        patient: booking.patient,
      }; //same patient same day te same treatment dite  parbe na setar jonno query.
      const exist = await bookingCollection.findOne(query); // database e find kortesi query diye j oi user er oi date e oi treatment ache kina tahkle false dibe.
      if (exist) {
        return res.send({ success: false, booking: exist });
      }
      const result = await bookingCollection.insertOne(booking);
      res.send({ success: true, result });
    });

    //get doctors form DB
    app.get('/doctor', verifyJWT, verifyAdmin, async(req, res) => {
      const doctors = await doctorCollection.find().toArray();
      res.send(doctors);
    });
    //adding doctor details in databse
    app.post('/doctor', verifyJWT, verifyAdmin, async(req,res) => {
      const doctor = req.body;
      const result = await doctorCollection.insertOne(doctor);
      res.send(result);
    });

    app.delete('/doctor/:email', verifyJWT, verifyAdmin, async(req,res) => {
      const email = req.params.email;
      const filter = {email: email};
      const result = await doctorCollection.deleteOne(filter);
      res.send(result);
    });
  } finally {
    // client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Doctors portal server is running...");
});

app.listen(port, (req, res) => {
  console.log("Listening to port: ", port);
});
