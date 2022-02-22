const express = require("express");
const { mongo } = require("./config.json");
const {connect} = require("mongoose");
const Profile = require("./models/profiles");


const router = express.Router();


connect(mongo, err => err ? console.error(err) : console.log("Connected to mongodb"));


router.get("/", (req, res) => {
  res.end("Server listening")
});

router.post("/register", (req, res) => {
  let body = req.body;
  console.log("Register >> ", body);
  let profile = new Profile(body);
  profile.save((err, ok) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(ok)
    }
  })
});

router.post("/login", (req, res) => {
  const {username, password} = req.body;

  Profile.findOne({username, password}, (err, profile) => {
    if (err) {
      console.log(err);
    } else {
      if (!profile) {
        res.status(401).send("Invalid username");
      } else {
        if (profile.password !== password) {
          res.status(401).send("Invalid password");
        } else {
          res.status(200).send(profile)
        }
      }
    }
  })
})


module.exports = router