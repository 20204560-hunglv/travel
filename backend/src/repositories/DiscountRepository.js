const Discount = require("../models/discounts");

/**
 *
 * @returns
 */
const get = async () => {
  return await Discount.find({});
};

async function getOne(field) {
  return await Discount.findOne(field);
}

/**
 * @param {object} data
 * @returns
 */
const create = async (data) => {
  await Discount.create(data);
};

/**
 *
 * @param {string} id
 */
const remove = async (_id) => {
  await Discount.deleteOne({ _id });
};

/**
 *
 * @param {string} id
 */
const edit = async ({ _id, data }) => {
  await Discount.updateOne({ _id }, data);
};

module.exports = { get, create, remove, edit, getOne };
