const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const AdminController = require("../controllers/AdminController");
const TourController = require("../controllers/TourController");

router.get("/tours", TourController.getAllTours);
router.get("/tours/:id", TourController.getTour);
router.post("/tour/search", TourController.searchTour);
router.put("/tour/:id", TourController.updateTour);
router.delete("/tours/:id", TourController.deleteTour);
router.post("/tours", TourController.createTour);

router.post("/users/tour/:id", UserController.userOrderTour);
router.get("/users/tour/:id", UserController.userGetOrderTour);
router.put("/users/tour/:id", UserController.userUpdateOrderTour);
router.get("/users", UserController.getAllUsers);
router.post("/users", UserController.createUser);
router.get("/user/:id", UserController.getUser);
router.put("/user_crud/:id", UserController.updateUser);
router.put("/user_crud", UserController.updateUserByAdmin);
router.delete("/user/:id", UserController.deleteUser);
router.put("/change_password/:id", UserController.updatePassword);
router.post("/signup", UserController.signUp);
router.post("/login", UserController.login);

router.post("/login_admin", AdminController.loginAdmin);

module.exports = router;
