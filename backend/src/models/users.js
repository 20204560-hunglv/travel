const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String,
  fullname: String,
  email: String,
  address: String,
  gender: String,
},{timestamps: true});

module.exports = mongoose.model("User", User);
