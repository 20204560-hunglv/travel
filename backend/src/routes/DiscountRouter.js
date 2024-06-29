const express = require("express");
const router = express.Router();
const DiscountController = require("../controllers/DiscountController");

router.get("/discounts", DiscountController.get);
router.get("/discount/:id", DiscountController.getById);
router.post("/discounts", DiscountController.create);
router.delete("/discount/:_id", DiscountController.remove);
router.put("/discount/:_id", DiscountController.edit);

module.exports = router;
