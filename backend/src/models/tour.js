const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tour = new Schema({
  name: String,
  start_time: String,
  period: String,
  main_image_url: String,
  code: String,
  status: String,
});

module.exports = mongoose.model("Tour", Tour);
