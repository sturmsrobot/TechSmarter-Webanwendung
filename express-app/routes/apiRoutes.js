const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authenticateToken");
// Definierte API-Routen
router.get("/protected", authenticateToken, (req, res) => {
  // Geschützte Route
});

router.post("/users", (req, res) => {
  // Route zum Erstellen eines Benutzers
});

// Weitere API-Routen hier definieren:

module.exports = router;
