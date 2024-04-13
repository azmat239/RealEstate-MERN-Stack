const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Router/UserRoute");
const signUpRoute = require("./Router/SignUpRoute");
const app = express();
const port = 3000;
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(async () => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api", userRoute);
app.use("/api", signUpRoute);

app.get("/", (req, res) => {
  try {
    res.send("Hello !Welcome");
  } catch (error) {
    console.log("error");
  }
});

app.listen(port, () => {
  try {
    console.log("Listening At Port : ", port);
  } catch (error) {
    console.log("Error");
  }
});
