/**
 * Create OTP
 * @param {number} length
 * @returns {string}
 */
const createOtp = (length = 4) => {
  let otp = "";
  const arr = new Array(4);
  arr.fill().forEach((elem) => {
    otp += Math.floor(Math.random() * 10);
  });
  return otp;
};

module.exports = { createOtp };
