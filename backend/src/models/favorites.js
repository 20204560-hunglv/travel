const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Favorite = new Schema(
  {
    customerId: String,
    tourId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Favorite", Favorite);
