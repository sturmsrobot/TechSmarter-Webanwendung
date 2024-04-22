const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");
const { body } = require("express-validator");

router.get("/", (req, res) => {
  Stats.findAll()
    .then((stats) => {
      res.json(stats);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

router.post(
  "/",
  [
    body("stats_id").trim().isEmpty().isNumeric().notEmpty(),
    body("quiz_id").trim().isEmpty().isNumeric().notEmpty(),
    body("userId").trim().not().notEmpty().isNumeric(),
    body("progress").trim().isEmpty().notEmpty().isEmail(),
    body("right_answers").trim().isNumeric(),
    body("wrong_answers").trim().isNumeric(),
    body("score").trim().isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("Neue User-Statistik erfolgreich erstellt!");
  }
);

router.put("/:stats_id", (req, res) => {
  res.send("User-Statistik erfolgreich aktualisiert!");
});

router.delete("/:stats_id", (req, res) => {
  res.send("User-Statistik erfolgreich gelöscht!");
});

router.get("/search", (req, res) => {
  const { username } = req.query;
  console.log("Hello World");
  Stats.findAll({ where: { username } })
    .then((users) => {
      res.json(Stats);
    })
    .catch((err) => {
      console.error("Fehler bei der Suche nach Benutzern:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

module.exports = router;
