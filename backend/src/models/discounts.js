const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Discount = new Schema({
  name: { type: String },
  discountValue: { type: Number },
  startDate: { type: String },
  endDate: { type: String },
  isActive: { type: Boolean },
});

module.exports = mongoose.model("Discount", Discount);
