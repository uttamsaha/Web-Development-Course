const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utlis/dbConnect");
const toolsRoute = require("./routes/v1/tools.route");
const viewCount = require("./middleware/viewCount");
const errorHandler = require("./middleware/errorHandler");


app.use(cors());
app.use(express.json());
app.use(express.static("files")); // files folder er moddhe ja thakbe seta localhost:5000/filename.extension diye access kora jabe. example: localhost:5000/komol.txt
// Apply the rate limiting middleware to all requests
//import rateLimit from 'express-rate-limit'
//app.use(limiter)
app.use(viewCount); // middleware routes er opore use korte hoi.
dbConnect();

app.use("/api/v1/tools", toolsRoute); // tools route //server side route er age /api/ use korbo


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/files/komol.txt"); // localhost:5000 e gele readme.md fiel download hobe
});

//not found route
app.all("*", (req, res) => {
  res.send("No route found");
});

app.use(errorHandler); // error handler app.listen er opore rakhbo sob smy
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
