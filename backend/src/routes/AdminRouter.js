const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");

router.post("/login_admin", AdminController.loginAdmin);

module.exports = router;
