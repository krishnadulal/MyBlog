const router = require("express").Router();
const User = require("../models/User");
//const Post = require("../models/Post");


router.get("/:id", async (req, res) => {
    try {
      const follower = await User.findById(req.params.id);
      res.status(200).json(follower);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET ALL FOLLOWERS BY EMAIL
router.get("/", async (req, res) => {
   // const username = req.query.user;
    const mail = req.query.email;
    try {
      let followers;
      if (mail) {
        followers = await User.find({ followers });
      } else {
        followers = await User.find();
      }
      res.status(200).json(followers);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
