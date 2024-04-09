const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { User } = require("../models/Users"); // Importiert das User-Modell
const { where } = require("sequelize");
const { error } = require("winston");

// Überprüfen, ob das User-Modell korrekt importiert wurde
if (!User) {
  console.error("Das User-Modell wurde nicht richtig importiert!");
}

// GET-Anforderungen (Benutzerdaten abrufen):
router.get("/users", (req, res) => {
  // Code, um Benutzerdaten abzurufen
  res.send("Benutzerdaten erfolgreich abgerufen!");
});

// POST-Anforderungen (Neuen Benutzer erstellen):
router.post(
  "/users",
  [
    // Hier fügst du die Validierungsregeln hinzu
    body("username").notEmpty().isString(),
    body("email").notEmpty().isEmail(),
    body("password").notEmpty().isString().isLength({ min: 6 }),
  ],
  (req, res) => {
    // Validierungsergebnisse überprüfen
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

// Route für die Main_Page
router.get("/main", (req, res) => {
  res.json({ message: "Daten für die Main_Page" });
});

router.get("/users/search", (req, res) => {
  const { username } = req.query; // Benutzername wird aus Query-Parametern extrahiert
  User.findAll({ where: { username } }) // Suche nach angegebenem Benutzernamen
    .then((users) => {
      res.json(users); // sendet die gefundenen Benutzer als JSON-Antwort zurück
    })
    .catch((err) => {
      console.error("Fehler bei der Suche nach Benutzern:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

module.exports = router;
