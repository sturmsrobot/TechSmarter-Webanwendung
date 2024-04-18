const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Quizzes = require("../models/Quizzes");

router.get("/", (req, res) => {
  Quizzes.findAll()
    .then((quizzes) => {
      res.json(quizzes);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

router.post(
  "/",
  [
    body("quiz_id").trim().isEmpty().isNumeric().notEmpty(),
    body("quiz_name").trim().isString(),
    body("questions_total").trim().isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("Neues Quiz erfolgreich erstellt!");
  }
);

router.put("/:quiz_id", (req, res) => {
  res.send("Quiz erfolgreich aktualisiert!");
});

router.delete("/:quiz_id", (req, res) => {
  res.send("Quiz erfolgreich gelöscht!");
});

router.get("/search", (req, res) => {
  const { quiz_name } = req.query;
  console.log("Hello World");
  Quizzes.findAll({ where: { quiz_name } })
    .then((users) => {
      res.json(Quizzes);
    })
    .catch((err) => {
      console.error("Fehler bei der Suche nach Quizzes:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

module.exports = router;
