const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const productRouter = require("./routes/product.route");

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/v1/product", productRouter);
app.get("/", (req, res) => {
  res.send("Route is working..");
});
module.exports = app;
