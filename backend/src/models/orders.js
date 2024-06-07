const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema({
  fullName: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  status: { type: String },
  sumPrice: { type: Number },
  childrenCount: { type: Number },
  kidCount: { type: Number },
  createdDate: { type: String },
  adultCount: { type: Number },
  customerId: { type: String },
  tourId: { type: String },
});

module.exports = mongoose.model("Order", Order);
