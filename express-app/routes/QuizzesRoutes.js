const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Quizzes = require("../models/Quizzes");

router.get("/quizzes", (req, res) => {
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
    "/quizzes",
    [
      body("quiz_id").isString,
      body("quiz_name").isString,
      body("questions_total").isString,
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      res.send("Neue Quiz-Statistik erfolgreich erstellt!");
    }
  );
  

  router.put("/quizzes/:quiz_id", (req, res) => {
    res.send("Quiz-Statistik erfolgreich aktualisiert!");
  });
  

  router.delete("/quizzes/:quiz_id", (req, res) => {
    res.send("Quiz-Statistik erfolgreich gelöscht!");
  });
  
  router.get("/quizzes/search", (req, res) => {
    const { quiz_name } = req.query; 
    console.log("Hello World");
    Quizzess.findAll({ where: { quiz_name } })
      .then((users) => {
        res.json(Quizzes);
      })
      .catch((err) => {
        console.error("Fehler bei der Suche nach Quizzes:", err);
        res.status(500).json({ message: "Interner Serverfehler!" });
      });
  });
  
module.exports = router;