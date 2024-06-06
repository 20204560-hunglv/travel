const express = require('express');
const router = express.Router();
const DiscountController = require('../controllers/DiscountController')

router.get('/discounts', DiscountController.get)

module.exports = router;