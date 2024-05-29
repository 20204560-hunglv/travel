const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hotel = new Schema({
  name: { type: String },
  image: { type: String },
  address: { type: String },
});

module.exports = mongoose.model("Hotel", Hotel);
