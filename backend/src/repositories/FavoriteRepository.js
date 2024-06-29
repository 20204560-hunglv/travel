const Favorite = require("../models/favorites");
const getAll = async () => {
  return await Favorite.find();
};
const getOne = async (field) => {
  return await Favorite.findOne(field);
};
async function create(data) {
  await Favorite.create(data);
}
async function remove(id) {
  await Favorite.deleteOne({ _id: id });
}
module.exports = { getAll, getOne, create, remove };
