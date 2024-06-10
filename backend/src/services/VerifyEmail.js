const CustomerRepository = require("../repositories/CustomerRepository");

/**
 *
 * @param customerId
 * @param OTP
 * @returns {Promise<boolean>}
 */
const compareOtp = async (customerId, OTP) => {
  const customer = await CustomerRepository.findUser({ _id: customerId });
  return OTP === customer.OtpEmail;
};

module.exports = { compareOtp };
