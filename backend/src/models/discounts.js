const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Discount = new Schema({
  name: { type: String },
  discountValue: { type: Number },
  startDate: { type: String },
  endDate: { type: String },
  isActive: { type: Boolean },
  tours: { type: Array },
});

module.exports = mongoose.model("Discount", Discount);
