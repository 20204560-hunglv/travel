const mongoose = require("mongoose");
const connect = async () => {
  try {
    // await mongoose.connect("mongodb+srv://travelLeVanHung:vanhung123456@cluster0.ulk4z58.mongodb.net/travel");
    // await mongoose.connect("mongodb://localhost:27017/travel");
    await mongoose.connect('mongodb+srv://travelLeVanHung:vanhung123456@cluster0.ulk4z58.mongodb.net/travel?retryWrites=true&w=majority&appName=Cluster0')
    console.log("connect successed");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connect };
