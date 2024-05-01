const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  _id: mongoose.ObjectId,
  username: String,
  password: String,
  fullname: String,
  email: String,
  address: String,
  gender: String,
  tours: {type: Array},
},{timestamps: true});

module.exports = mongoose.model("User", User);
