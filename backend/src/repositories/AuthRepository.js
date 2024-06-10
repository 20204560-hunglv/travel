const Customer = require("../models/customers");

/**
 * Save Otp email
 * @param {string} customerId
 * @param {string} OtpEmail
 * @returns {Promise<void>}
 */
async function create(customerId, OtpEmail) {
  await Customer.updateOne({ _id: customerId }, { OtpEmail: OtpEmail });
}

module.exports = { create };
