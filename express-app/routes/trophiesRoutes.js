const express = require("express");
const router = express.Router();
const Trophy = require("../models/Trophy");
const TestDataTrophies = require("../__tests__/setup/test-data/TestDataTrophies");

// GET-Endpunkt für alle Trophäen
router.get("/", async (req, res) => {
  try {
    const trophies = await Trophy.findAll();
    res.json(trophies);
  } catch (error) {
    console.error("Fehler beim Abrufen der Trophäen:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
});

// POST-Endpunkt zum Vergeben einer neuen Trophäe nach der Anmeldung eines neuen Benutzers
router.post("/newUserTrophy", async (req, res) => {
  try {
    // Logik zum Überprüfen, ob der Benutzer die Bedingung für die Trophäe erfüllt
    // Annahme: Jeder neue Benutzer erhält automatisch eine Trophäe
    const newTrophy = await Trophy.create(TestDataTrophies[0]); // Verwende die erste Trophäe aus dem TestDataTrophies-Array
    res.json({ message: "New user trophy awarded", trophy: newTrophy });
  } catch (error) {
    console.error("Fehler beim Vergeben der Trophäe:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
});

// POST-Endpunkt zum Vergeben einer neuen Trophäe basierend auf Quiz-Punkten
router.post("/quizPointsTrophy", async (req, res) => {
  const { userId, points } = req.body;
  try {
    // Logik zum Überprüfen, ob der Benutzer die Bedingung für die Trophäe erfüllt
    // Annahme: Der Benutzer erhält eine Trophäe für jeweils 1 Punkte im Quiz
    const pointsThreshold = 1;
    if (points >= pointsThreshold) {
      const newTrophy = await Trophy.create(TestDataTrophies[1]); // Verwende die zweite Trophäe aus dem TestDataTrophies-Array
      res.json({ message: "Quiz points trophy awarded", trophy: newTrophy });
    } else {
      res.json({ message: "Not enough points for trophy" });
    }
  } catch (error) {
    console.error("Fehler beim Vergeben der Trophäe:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
});

// POST-Endpunkt zum Vergeben einer weiteren Trophäe basierend auf Quiz-Punkten
router.post("/quizPointsTrophyTenPoints", async (req, res) => {
  const { userId, points } = req.body;
  try {
    // Logik zum Überprüfen, ob der Benutzer die Bedingung für die Trophäe erfüllt
    // Annahme: Der Benutzer erhält eine Trophäe für jeweils 10 Punkte im Quiz
    const pointsThreshold = 10;
    if (points >= pointsThreshold) {
      const newTrophy = await Trophy.create(TestDataTrophies[2]); // Verwende die dritte Trophäe aus dem TestDataTrophies-Array
      res.json({ message: "Quiz points trophy awarded", trophy: newTrophy });
    } else {
      res.json({ message: "Not enough points for trophy" });
    }
  } catch (error) {
    console.error("Fehler beim Vergeben der Trophäe:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
});

module.exports = router;
