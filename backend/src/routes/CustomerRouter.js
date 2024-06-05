const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/CustomerController");

router.post("/users/tour/:id", CustomerController.userOrderTour);
router.get("/users/tour/:id", CustomerController.userGetOrderTour);
router.put("/users/tour/:id", CustomerController.userUpdateOrderTour);
router.get("/users", CustomerController.getAllUsers);
router.post("/users", CustomerController.createUser);
router.get("/user/:id", CustomerController.getUser);
router.put("/user_crud/:id", CustomerController.updateUser);
router.put("/user_crud", CustomerController.updateUserByAdmin);
router.delete("/user/:id", CustomerController.deleteUser);
router.put("/change_password/:id", CustomerController.updatePassword);
router.post("/signup", CustomerController.signUp);
router.post("/login", CustomerController.login);

module.exports = router;
