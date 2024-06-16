const express = require("express");
const router = express.Router();
const GuideController = require("../controllers/GuideController");

router.get("/guides", GuideController.get);
router.get("/guide/:id", GuideController.getById);
router.post("/guides", GuideController.create);
router.put("/guides", GuideController.update);
router.delete("/guide/:id", GuideController.deleteGuide);

module.exports = router;
