const Discount = require("../models/discounts");

/**
 *
 * @returns
 */
const get = async () => {
  return await Discount.find({});
};

module.exports = { get };
