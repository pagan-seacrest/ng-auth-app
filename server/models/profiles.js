const { Schema, model } = require("mongoose");


const profilesSchema = new Schema({
  username: String,
  password: String
});

module.exports = model("profile", profilesSchema, "boost")