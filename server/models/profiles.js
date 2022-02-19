const { Schema, model } = require("mongoose");


const profilesSchema = Schema({
  username: String,
  password: String
});

module.exports = model("profile", profilesSchema, "boost")