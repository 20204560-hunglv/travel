const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hotel = new Schema({
  name: { type: String },
  image: { type: String },
  address: { type: String },
  city: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  singleRoom: { type: Object },
  doubleRoom: { type: Object },
});

module.exports = mongoose.model("Hotel", Hotel);
