const express = require("express");
const app = express();
const cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
require("dotenv").config(); //to use env variable

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.86nll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const productCollection = client.db("emaJhon").collection("product");

    //Read all data
    app.get("/product", async (req, res) => {
      console.log(req.query);
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      const query = {};
      const cursor = productCollection.find(query);
      let products;
      if (page || size) {
        products = await cursor
          .skip(page * size) //skip mane koita skip korbe 1 no page 0 ta skip korbe 2 no page e 1*10=10 ta skip kobre array index wise evabe skip korte thakbe
          .limit(size) //limit set kore disi...
          .toArray();
      } else {
        products = await cursor.toArray();
      }
      res.send(products);
    });

    //get product count
    app.get("/productCount", async (req, res) => {
      const count = await productCollection.estimatedDocumentCount(); //getting count of products
      res.send({ count }); //response sob smy json hiseb sent korte hoi.or object akaare
    });


    //use post to get products by ids 
    app.post('/productByKeys/', async(req,res)=>{
        const keys = req.body;
        const ids = keys.map(id => ObjectId(id))
        const query = {_id: {$in: ids}} //keys diye product kujtese
        const cursor = productCollection.find(query);
        const products = await cursor.toArray();

        res.send(products);

    })
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Ema - Jhon server running..");
});

app.listen(port, () => {
  console.log("Listening to port: ", port);
});
