const Order = require("../models/orders");

/**
 *
 * @returns
 */
const get = async () => {
  return await Order.find({}).sort({ updatedAt: -1 });
};

const getById = async (_id) => {
  return await Order.findOne({ _id });
};

const getByUserId = async (customerId) => {
  return await Order.find({ customerId });
};

/**
 * @param {object} data
 * @returns
 */
const create = async (data) => {
  await Order.create(data);
};

/**
 *
 * @param {string} id
 */
const remove = async (_id) => {
  await Order.deleteOne({ _id });
};

/**
 *
 * @param {string} id
 */
const edit = async ({ _id, data }) => {
  await Order.updateOne({ _id }, data);
};

module.exports = { get, create, remove, edit, getByUserId, getById };
