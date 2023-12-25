const express = require("express");
const router = express.Router();

const apiRouter = require("../controllers/ApiController");

router.post("/tours", apiRouter.createTour);
router.get("/tours", apiRouter.getAllTours);
router.put("/tours/:id", apiRouter.updateTour);
router.delete("/tours/:id", apiRouter.deleteTour);

module.exports = router;