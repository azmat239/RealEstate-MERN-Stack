const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

router.post("/user", async (req, res) => {
  const { userName, password, email } = req.body;
  try {
    const userData = await User.findOne({ userName });
    if (userData) {
      if (
        (userData.email === email || userData.userName === userName) &&
        userData.password === password
      ) {
        res.json({ login: true, msg: "User Logged In" });
      } else {
        res.json({ login: false, msg: "Please Provide Correct Details" });
      }
    } else {
      res.json({ login: false, msg: "User Not Found" });
    }
  } catch (error) {
    res.json({ login: false, msg: `Error in Database ${error}` });
    res.status(401);
  }
});

module.exports = router;
