const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

//databse connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log("DB is connected");
});

//server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("App is running on port ", port);
});

