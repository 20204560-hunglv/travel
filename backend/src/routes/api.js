const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const AdminController = require("../controllers/AdminController");
const TourController = require("../controllers/TourController");

router.get("/tours", TourController.getAllTours);
router.get("/tours/:id", TourController.getTour);
router.post("/tour/search", TourController.searchTour);
router.put("/tours", TourController.updateTour);
router.delete("/tours/:id", TourController.deleteTour);
router.post("/tours", TourController.createTour);

router.post("/users/tour/:username", UserController.userOrderTour);
router.get("/users/tour/:username", UserController.userGetOrderTour);
router.put("/users/tour/:username", UserController.userUpdateOrderTour);
router.get("/users", UserController.getAllUsers);
router.get("/user/:username", UserController.getUser);
router.put("/user_crud/:username", UserController.updateUser);
router.put("/user_crud", UserController.updateUserByAdmin);
router.delete("/user/:id", UserController.deleteUser);
router.put("/change_password/:id", UserController.updatePassword);
router.post("/signup", UserController.signUp);
router.post("/login", UserController.login);

router.post("/login_admin", AdminController.loginAdmin);

module.exports = router;
