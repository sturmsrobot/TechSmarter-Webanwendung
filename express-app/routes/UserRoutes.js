const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/Users");

  // GET-Anforderungen (Benutzerdaten abrufen):
  router.get("/users", (req, res) => {
    // Code, um Benutzerdaten abzurufen
    // Code, um Daten aus der Datenbank abzurufen
    // Daten aus einer Datenbanktabelle abrufen:
  
    User.findAll()
      .then((user) => {
        res.json(user); // Sendet die abgerufenen Daten als JSON-Antwort zurück
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
      // Hier fügst du die Validierungsregeln hinzu
      body("id").trim().isEmpty().isNumeric().notEmpty(),
      body("username").trim().not().isEmpty().isString(),
      body("email").trim().isEmpty().notEmpty().isEmail(),
      body("password").trim().isEmpty().notEmpty().isString().isLength({ min: 6 }),
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
  
  router.get("/users/search", (req, res) => {
    const { username } = req.query; // Benutzername wird aus Query-Parametern extrahiert
    console.log("Hello World");
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