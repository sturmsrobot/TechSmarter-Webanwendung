const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/Users");

// GET-Anforderungen (Benutzerdaten abrufen):
router.get("/users", (req, res) => {
  User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

// POST-Anforderungen (Neuen Benutzer erstellen):
router.post(
  "/users",
  [
    body("id").trim().isEmpty().isNumeric().notEmpty(),
    body("username").trim().not().isEmpty().isString(),
    body("email").trim().isEmpty().notEmpty().isEmail(),
    body("password").trim().isEmpty().notEmpty().isString().isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Code, um einen Benutzer zu erstellen
    res.send("Neuer Benutzer erfolgreich erstellt!");
  }
);

// PUT-Anforderungen (Benutzerdaten aktualisieren):
router.put("/users/:id", (req, res) => {
  // Code, um Benutzerdaten zu aktualisieren
  res.send("Benutzerdaten erfolgreich aktualisiert!");
});

// DELETE-Anforderungen (Benutzerdaten löschen):
router.delete("/users/:id", (req, res) => {
  // Code, um Benutzerdaten zu löschen
  res.send("Benutzerdaten erfolgreich gelöscht!");
});

// Benutzerpunkte hinzufügen:
router.post("/api/addPoints", async (req, res) => {
  const { username, points } = req.body;
  try {
    // Finde den Benutzer in der Datenbank
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "Benutzer nicht gefunden" });
    }
    // Füge die Punkte zum Benutzer hinzu
    user.points += points;
    await user.save();
    res.json({ message: "Punkte erfolgreich hinzugefügt" });
  } catch (error) {
    console.error("Fehler beim Hinzufügen von Punkten:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

// Benutzerpunkte subtrahieren:
router.post("/api/subtractPoints", async (req, res) => {
  const { username, points } = req.body;
  try {
    // Finde den Benutzer in der Datenbank
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "Benutzer nicht gefunden" });
    }
    // Überprüfe, ob genügend Punkte vorhanden sind
    if (user.points < points) {
      return res
        .status(400)
        .json({ message: "Nicht genügend Punkte vorhanden" });
    }
    // Subtrahiere die Punkte vom Benutzer
    user.points -= points;
    await user.save();
    res.json({ message: "Punkte erfolgreich abgezogen" });
  } catch (error) {
    console.error("Fehler beim Subtrahieren von Punkten:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

module.exports = router;
