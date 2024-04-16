const express = require("express");
const router = express.Router();
const { GameEngine } = require("@chromeq/age");

// Initialisiere das Gamification-System
const engine = new GameEngine();

// Definiere Routen für Gamification
router.post("/addPoints", (req, res) => {
  const { playerId, points } = req.body;
  // Füge dem Spieler Punkte hinzu
  engine.addPoints(playerId, points);
  res.status(200).json({ message: "Points added successfully" });
});

router.post("/removePoints", (req, res) => {
  const { playerId, points } = req.body;
  // Entferne dem Spieler Punkte
  engine.removePoints(playerId, points);
  res.status(200).json({ message: "Points removed successfully" });
});

// Weitere Gamification-Routen hier definieren:

module.exports = router;
