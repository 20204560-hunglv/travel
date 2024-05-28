const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Guide = new Schema({
  fullName: { type: String },
  gender: { type: String },
  birthday: { type: Date },
  address: { type: String },
  numberPhone: { type: String },
  email: { type: String },
  CCCD: { type: String },
});

module.exports = mongoose.model("Guide", Guide);
