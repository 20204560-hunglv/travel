const Customer = require("../models/customers");

/**
 *
 * @param {string} id
 * @param {object} tours
 * @returns
 */
const findOrderTour = async ({ id, tours }) => {
  return await Customer.findOneAndUpdate(
    { _id: id },
    { $push: { tours } },
    { new: true }
  ).sort();
};

/**
 *
 * @param {string} id
 * @returns
 */
const findOrder = async (id) => {
  return await Customer.findOne({ _id: id });
};

/**
 *
 * @param id
 * @param dataUpdate
 */
const updateOrder = async ({ id, dataUpdate }) => {
  await Customer.updateOne(
    { _id: id },
    {
      tours: dataUpdate,
    }
  );
};

/**
 *
 * @returns
 */
const get = async () => {
  return await Customer.find({});
};

/**
 *
 * @param {object} filter
 * @returns
 */
const findUser = async (filter = {}) => {
  return await Customer.findOne(filter);
};

/**
 *
 * @param {object} userData
 */
const createUser = async (userData) => {
  await Customer.create(userData);
};

/**
 *
 * @param id
 * @param request
 */
const updateUser = async ({ id, request }) => {
  await Customer.updateOne({ _id: id }, { ...request });
};

module.exports = {
  findOrderTour,
  findOrder,
  updateOrder,
  get,
  findUser,
  createUser,
  updateUser,
};
