const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.post("/api/addPoints", userController.addPoints);
router.post("/api/subtractPoints", userController.subtractPoints);

// Route für die Benutzerregistrierung
router.post("/register", authController.registerUser);

// Route für die Benutzeranmeldung
router.post("/login", authController.loginUser);

// Route für das Hinzufügen von Benutzerpunkten
router.post("/addPoints", userController.addPoints);

// Route für das Subtrahieren von Benutzerpunkten
router.post("/subtractPoints", userController.subtractPoints);

module.exports = router;
