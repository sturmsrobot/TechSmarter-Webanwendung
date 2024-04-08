const express = require("express");
const { registration } = require("../controllers/userController");
const router = express.Router();

// GET-Anforderungen (Benutzerdaten abrufen):
router.get("/users", (req, res) => {
  // Code, um Benutzerdaten abzurufen
  res.send("Benutzerdaten erfolgreich abgerufen!");
});

// POST-Anforderungen (Neuen Benutzer erstellen):
router.post("/users", (req, res) => {
  // Code, um einen Benutzer zu erstellen
  res.send("Neuer Benutzer erfolgreich erstellt!");
});

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

//registraion route
router.post("/registration", registration);
//login route
router.post("/login", login);

module.exports = router;
