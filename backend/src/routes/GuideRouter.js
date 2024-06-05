const express = require("express");
const router = express.Router();
const GuideController = require("../controllers/GuideController");

router.get("/guides", GuideController.get);
router.post("/guides", GuideController.create);
router.put("/guides", GuideController.update);
router.delete("/guide/:id", GuideController.deleteGuide);

module.exports = router;
