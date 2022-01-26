const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/user");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json("User created Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userisFound = await User.findOne({ email: req.body.email });
    !userisFound && res.status(400).json("Wrong Credentials");
    const validate = await bcrypt.compare(
      req.body.password,
      userisFound.password
    );
    !validate && res.status(400).json("Wrong Credentials");
    res.status(200).json("Success");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
