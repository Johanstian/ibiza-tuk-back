const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Register user
router.post("/register", userController.register);

// Login user
router.post("/login", userController.login);

// Get all users
router.get("/", userController.getAllUsers);

// Find user by ID
router.get("/:id", userController.findUserById);

module.exports = router;

