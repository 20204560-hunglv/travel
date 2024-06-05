const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Customer = new Schema({
  username: String,
  password: String,
  fullName: String,
  email: String,
  numberPhone: { type: String},
  address: String,
  gender: String,
  birthDate: { type: Date },
  tours: {type: Array},
},{timestamps: true});

module.exports = mongoose.model("Customer", Customer);
