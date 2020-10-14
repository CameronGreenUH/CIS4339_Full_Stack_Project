const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

//Points to the userController methods for the routes
router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);
router.get("/me", userController.getUserDetails);
router.post("/account", userController.deleteUserDetails);

module.exports = router;