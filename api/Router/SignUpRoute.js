const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

router.post("/signup", async (req, res) => {
  try {
    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      await user.save();
    }
    res.json({ success: true });
  } catch (error) {
    res.json({ succes: false });
  }
});

module.exports = router;
