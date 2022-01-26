const router = require("express").Router();
const bcrypt = require("bcrypt");

const Blog = require("../models/blog");
const User = require("../models/user");

router.put("/:id", async (req, res) => {
  if (req.body.id === req.params.id) {
    if (req.body.password) {
      const salt = bcrypt.genSalt(10);
      req.body.password = bcrypt.hash(req.body.password, salt);
    }
    try {
      const update = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Credentials updated successfully");
    } catch (error) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("Not Authenticated");
  }
});

router.delete("/:id", async (req, res) => {
  if (req.body.id === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Blog.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Deleted...");
      } catch (error) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(400).json("User not found");
    }
  } else {
    res.status(401).json("Not Authenticated");
  }
});

module.exports = router;
