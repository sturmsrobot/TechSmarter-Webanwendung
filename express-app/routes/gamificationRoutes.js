const express = require("express");
const router = express.Router();

// POST /gamification/addPoints
router.post("/addPoints", (req, res) => {
  // Hier die Logik zum Hinzufügen von Punkten implementieren
  res.status(200).json({ message: "Points added successfully" });
});

// POST /gamification/removePoints
router.post("/removePoints", (req, res) => {
  // Hier die Logik zum Entfernen von Punkten implementieren
  res.status(200).json({ message: "Points removed successfully" });
});

module.exports = router;
