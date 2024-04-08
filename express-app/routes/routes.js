const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

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

module.exports = router;
