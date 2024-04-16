const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");


router.get("/stats", (req, res) => {
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
    "/stats",
    [
      body("stats_id").isNumeric(),
      body("quiz_id").isNumeric(),
      body("username").trim().not().isEmpty().isString(),
      body("progress").notEmpty().isEmail(),
      body("right_answers").isNumeric(),
      body("wrong_answers").isNumeric(),
      body("score").isNumeric(),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      res.send("Neue User-Statistik erfolgreich erstellt!");
    }
  );
  

  router.put("/stats/:stats_id", (req, res) => {
    res.send("User-Statistik erfolgreich aktualisiert!");
  });
  

  router.delete("/stats/:stats_id", (req, res) => {
    res.send("User-Statistik erfolgreich gelöscht!");
  });
  
  router.get("/stats/search", (req, res) => {
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