const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/Users"); // Importiert das User-Modell
const Stats = require("../models/Stats");
const Quizzes = require("../models/Quizzes");
const Answer = require("../models/Answer");
const { Data } = require("../models/index");
const { where } = require("sequelize");
const { error } = require("winston");
const Question = require("../models/Question");

// Überprüfen, ob das User-Modell korrekt importiert wurde
if (!User) {
  console.error("Das User-Modell wurde nicht richtig importiert!");
}

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

router.get("/stats", (req, res) => {
  // Stats.findAll()
  Stats.findAll({
    attributes: [
      "quiz_id",
      "username",
      "progress",
      "right_answers",
      "wrong_answers",
      "score",
    ],
  })
    // Stats.findAll({ where: { username } })
    .then((stats) => {
      res.json(stats);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

router.get("/quizzes", (req, res) => {
  Quizzes.findAll({ attributes: ["quiz_id", "quiz_name", "questions_total"] })
    .then((quizzes) => {
      res.json(quizzes);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

router.get("/question", (req, res) => {
  Question.findAll({ attributes: ["quiz_id", "question_id", "question_text"] })
    .then((question) => {
      res.json(question);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

router.get("/answer", (req, res) => {
  Answer.findAll({ attributes: ["quiz_id"] })
    .then((answer) => {
      res.json(answer);
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
    body("username").trim().not().isEmpty().isString(),
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
