const Hotel = require("../models/hotels");

async function get() {
  return await Hotel.find();
}

async function create(data) {
  await Hotel.create(data);
}

async function update({ id, data }) {
  await Hotel.updateOne({ _id: id }, data);
}

async function remove(id) {
  await Hotel.deleteOne({ _id: id });
}

module.exports = { get, create, update, remove };
