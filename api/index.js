const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection with MongoDB is successfully."))
  .catch(err => console.log(err));

app.listen(8080, () => {
  console.log("Backed server is started at port 8080");
});