const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

router.post("/verify-email/:customerId", AuthController.verifyByEmail);
router.post("/check-otp-email/:customerId", AuthController.checkOtpEmail);

module.exports = router;
