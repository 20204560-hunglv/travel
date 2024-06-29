const express = require("express");
const router = express.Router();
const FavoriteController = require("../controllers/FavoriteController");

router.get("/favorites", FavoriteController.getAmount);
router.get("/favorite", FavoriteController.get);
router.post("/favorites", FavoriteController.create);
router.delete("/favorite/:id", FavoriteController.remove);


module.exports = router;
