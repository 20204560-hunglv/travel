const express = require("express");
const router = express.Router();

const apiRouter = require("../controllers/ApiController");

router.post("/tours", apiRouter.createTour);
router.get("/tours", apiRouter.getAllTours);
router.put("/tours", apiRouter.updateTour);
router.delete("/tours/:id", apiRouter.deleteTour);

router.get("/users", apiRouter.getAllUsers);
router.get("/user/:username", apiRouter.getUser);
// router.put("/user_crud/:username", apiRouter.updateUser);
router.put("/user_crud", apiRouter.updateUserByAdmin);
router.delete("/users/:username", apiRouter.deleteUser);

router.put("/change_password/:username", apiRouter.updatePassword);
router.post("/signup",apiRouter.signUp)
router.post("/login",apiRouter.login)
router.post("/login_admin",apiRouter.loginAdmin)

module.exports = router;