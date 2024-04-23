const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Quizzes = require("../models/Quizzes");

router.get("/all", (req, res) => {
  Quizzes.findAll()
    .then((quizzes) => {
      res.json(quizzes);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byId", (req, res) => {
  const { quizId } = req.query;
  Quizzes.findOne({ where: { quizId: quizId } })
    .then((quiz) => {
      res.json(quiz);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byName", (req, res) => {
  const { quizName } = req.query;
  Quizzes.findOne({ where: { quizName: quizName } })
    .then((quiz) => {
      res.json(quiz);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

router.post(
  "/",
  [
    body("quizId").trim().isNumeric().notEmpty(),
    body("quizName").trim().isString(),
    body("questionsTotal").trim().isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { quizId, quizName, questionsTotal } = req.body;
    const quiz = await Quizzes.create({
      quizId: quizId,
      quizName: quizName,
      questionsTotal: questionsTotal,
  });

    res.send("Neues Quiz erfolgreich erstellt!");
  }
);

router.put(
  "/:quizId",
  [
    body("quizId").trim().isNumeric().notEmpty(),
    body("quizName").trim().isString(),
    body("questionsTotal").trim().isNumeric(),
  ],
  async (req, res) => {
    const { quizId } = req.params;
    const { quizName, questionsTotal } = req.body;

  try {
    const quiz = await Quizzes.findOne({ where: { quizId: quizId } });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz nicht gefunden!" });
    }

    quiz.quizName = quizName;
    quiz.questionsTotal = questionsTotal;
    await quiz.save()

    res.json(quiz);
  } catch (error) {
    console.error("Fehler beim Aktualisieren des Quizzes:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

router.delete("/:quizId", async (req, res) => {
  const { quizId } = req.params;

  try {

    const quiz = await Quizzes.findOne({ where: { quizId: quizId } });

    if (!Quizzes) {
      return res.status(404).json({ message: "Quiz nicht gefunden!" });
    }

    await quiz.destroy();

    res.json({ message: "Quiz erfolgreich gelöscht!" });
  } catch (error) {
    console.error("Fehler beim Löschen des Quizzes:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

router.get("/search", (req, res) => {
  const { quizName } = req.query;
  console.log("Hello World");
  Quizzes.findAll({ where: { quizName } })
    .then((Quizzes) => {
      res.json(Quizzes);
    })
    .catch((err) => {
      console.error("Fehler bei der Suche nach Quizzes:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

module.exports = router;
