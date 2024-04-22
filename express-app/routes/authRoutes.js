const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// Route für die Benutzerregistrierung
router.post("/register", authController.registerUser);

// Route für die Benutzeranmeldung
router.post("/login", authController.loginUser);

module.exports = router;
