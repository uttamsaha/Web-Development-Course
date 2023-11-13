const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config(); //to use env variable

//middleware
app.use(cors());
app.use(express.json());

//mongodb connection

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6vrwt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const serviceCollection = client.db("geniusCar").collection("service"); //db & table connect

    //read all data
    app.get("/service", async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      res.send(services);
    });

    //load /read single data id wise /server/id te service pabo server side e client side e seta load korbo..
    app.get("/service/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const service = await serviceCollection.findOne(query);
      res.send(service);
    });

    //POST // insert data
    app.post('/service', async(req,res)=>{
        const newService = req.body;

        const result = await serviceCollection.insertOne(newService);
        res.send(result);
    });

    //DELTE singel post
    app.delete('/service/:id',async(req,res)=>{
        const id = req.params.id;
        const query = {_id: ObjectId(id)};
        const result = await serviceCollection.deleteOne(query);
        res.send(result);
    })
  } finally {
  }
}
run().catch(console.dir); //calling run function

app.get("/", (req, res) => {
  res.send("Running Car services server");
});
app.get("/updated", (req, res) => {
  res.send("Testing updated server running");
});

app.listen(port, () => {
  console.log("Listening to port: ", port);
});
