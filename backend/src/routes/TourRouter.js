const express = require("express");
const router = express.Router();
const TourController = require("../controllers/TourController");

router.get("/tours", TourController.getAllTours);
router.get("/tours/:id", TourController.getTour);
router.post("/tour/search", TourController.searchTour);
router.put("/tour/:id", TourController.updateTour);
router.delete("/tours/:id", TourController.deleteTour);
router.post("/tours", TourController.createTour);

module.exports = router;
