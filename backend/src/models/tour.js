const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tour = new Schema(
  {
    name: String,
    start_time: String,
    period: String,
    main_image_url: String,
    prices: String,
    addressFrom: String,
    addressTo: String,
    describe: { type: String },
    slotStill: { type: Number },
    tourGuide: { type: Array },
    vehicle: { type: String },
    visitLocation: { type: String },
    slotMax: { type: Number },
    favorites: { type: Number },
    adultPrice: { type: Number },
    childrenPrice: { type: Number },
    kidPrice: { type: Number },
    discountId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tour", Tour);
