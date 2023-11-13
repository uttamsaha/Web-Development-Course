const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 5000;
const ObjectId = require("mongodb").ObjectId; // getting particular object id for delete and update

//use middleware
app.use(cors());
app.use(express.json());

//username: dbuser5
//pass: Kyk4nBR8qlGMC5ym

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://dbuser5:Kyk4nBR8qlGMC5ym@cluster0.6vrwt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const usersCollection = client.db("foodExpress").collection("users"); //db name & table name database mongodb te na thakle create kore nibe.
    // const user = { name: "uttam saha", email: "uttam@gmail.com" }; //creating user.
    // const result = await usersCollection.insertOne(user);
    // console.log(`user inserted with id ${result.insertedId}`);

    //get users read users
    app.get("/user", async (req, res) => {
      const query = {};
      const cursor = usersCollection.find(query); //reading data from database
      const users = await cursor.toArray(); // user gulo k array te convert korbo..
      res.send(users);
    });

    //handle post method add a new user
    app.post("/user", async (req, res) => {
      const newUser = req.body; //getting user data
      console.log("Adding new user", newUser);
      //inserting client side data to database
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });

    //delete a user
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id; //getting id
      const query = { _id: ObjectId(id) }; // getting delete query with id
      const result = await usersCollection.deleteOne(query);
      //deleting user
      res.send(result);
    });

    // get dynamic route for update user
    app.put("/user/:id", async (req, res) => {
      const id = req.params.id;
      const updatedUser = req.body;
      const query = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          name: updatedUser.name,
          email: updatedUser.email,
        },
      };
      const result = await usersCollection.updateOne(
        query,
        updatedDoc,
        options
      );
      res.send(result);
    });

    // update user read data for update
    app.get("/user/:id", async (req, res) => {
      const id = req.params.id; //getting id
      const query = { _id: ObjectId(id) };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir); //calling run function

app.get("/", (req, res) => {
  res.send("Running my crud server");
});

app.listen(port, () => {
  console.log("CRUD server is running");
});
