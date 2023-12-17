const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String,
  phone_number: String,
  create_date: String,
  email: String,
  id: String,
});

module.exports = mongoose.model("User", User);
