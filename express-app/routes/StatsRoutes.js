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
    body("statsId").trim().isEmpty().isNumeric().notEmpty(),
    body("quizId").trim().isEmpty().isNumeric().notEmpty(),
    body("userId").trim().not().notEmpty().isNumeric(),
    body("progress").trim().isEmpty().notEmpty().isEmail(),
    body("rightAnswers").trim().isNumeric(),
    body("wrongAnswers").trim().isNumeric(),
    body("score").trim().isNumeric(),
  ],
 async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { statsId, quizId, userId, progress, rightAnswers, wrongAnswers, score } = req.body;
    const stat = await Stats.create({
      statsId: statsId,
      quizId: quizId,
      userId: userId,
      progress: progress,
      rightAnswers: rightAnswers,
      wrongAnswers: wrongAnswers,
      score: score,
  });

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
