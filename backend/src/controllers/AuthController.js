const { createOtp } = require("../utils/createOtp");
const AuthRepository = require("../repositories/AuthRepository");
const { sentToEmail } = require("../services/sentToEmail");
const {compareOtp} = require("../services/VerifyEmail")

const verifyByEmail = async (req, res) => {
  try {
    const { customerId } = req.params;
    const { email } = req.body;
    const OTP = createOtp();
    await Promise.all([
      AuthRepository.create(customerId, OTP),
      sentToEmail(email, OTP),
    ]);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const checkOtpEmail = async (req, res) => {
  try {
    const { customerId } = req.params;
    const { OTP } = req.body;
    const responseCompare = await compareOtp(customerId, OTP);
    return res.status(200).json({
      success: true,
      isAuthenticated: responseCompare
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { verifyByEmail, checkOtpEmail };
