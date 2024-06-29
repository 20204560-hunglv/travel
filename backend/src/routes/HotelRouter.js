const express = require("express");
const router = express.Router();
const HotelController = require("../controllers/HotelController");

router.get("/hotels", HotelController.get);
router.get("/hotel/:id", HotelController.getById);
router.post("/hotels", HotelController.create);
router.put("/hotel/:id", HotelController.update);
router.delete("/hotel/:id", HotelController.remove);

module.exports = router;
