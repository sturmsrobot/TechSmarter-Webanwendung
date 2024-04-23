const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");
const { body } = require("express-validator");

router.get("/all", (req, res) => {
  Stats.findAll()
    .then((stats) => {
      res.json(stats);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byId", (req, res) => {
  const { statsId} = req.query;
  Stats.findOne({ where: { statsId: statsId } })
    .then((stats) => {
      res.json(stats);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byUserId", (req, res) => {
  const { userId } = req.query;
  Stats.findOne({ where: { userId: userId } })
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
    body("statsId").trim().isNumeric().notEmpty(),
    body("quizId").trim().isNumeric().notEmpty(),
    body("userId").trim().not().notEmpty().isNumeric(),
    body("progress").trim().notEmpty().isEmail(),
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

router.put(
  "/:statsId", 
  [
    body("statsId").trim().isNumeric().notEmpty(),
    body("quizId").trim().isNumeric().notEmpty(),
    body("userId").trim().not().notEmpty().isNumeric(),
    body("progress").trim().notEmpty().isEmail(),
    body("rightAnswers").trim().isNumeric(),
    body("wrongAnswers").trim().isNumeric(),
    body("score").trim().isNumeric(),
  ],
  async (req, res) => {
    const { statsId  } = req.params;
    const { quizId, userId, progress, rightAnswers, wrongAnswers, score } = req.body;

  try {

    const stats = await Stats.findOne({ where: { statsId: statsId } });

    if (!stats) {
      return res.status(404).json({ message: "Statistik nicht gefunden!" });
    }

    stats.quizId = quizId,
    stats.userId = userId,
    stats.progress = progress,
    stats.rightAnswers = rightAnswers,
    stats.wrongAnswers = wrongAnswers,
    stats.score = score,
    await stats.save

    res.json(stats);
  } catch (error) {
    console.error("Fehler beim Aktualisieren der Statistik:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

router.delete("/:statsId", async (req, res) => {
  const { statsId } = req.params;

  try {
    const stats = await Stats.findOne({ where: { statsId: statsId } });

    if (!Stats) {
      return res.status(404).json({ message: "Statistik nicht gefunden!" });
    }
    await stats.destroy();

    res.json({ message: "Statistik erfolgreich gelöscht!" });
  } catch (error) {
    console.error("Fehler beim Löschen der Statistik:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

module.exports = router;
