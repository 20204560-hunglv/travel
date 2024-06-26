const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.get("/orders", OrderController.get);
router.get("/order/:userId", OrderController.getByUserId);
router.post("/orders", OrderController.create);
router.delete("/order/:_id", OrderController.remove);
router.put("/order/:_id", OrderController.edit);

module.exports = router;
