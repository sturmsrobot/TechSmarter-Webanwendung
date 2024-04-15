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


router.put("/:id", (req, res) => {
  const statId = req.params.id; // ID der zu aktualisierenden Statistik

  // Code zum Aktualisieren der Statistikdaten
  // Daten aus dem Anfragekörper verwenden

  // Beispiel: Statistikdaten aus dem Anfragekörper holen
  const { score } = req.body;

  Stats.update({ score }, { where: { id: statId } })
    .then(() => {
      res.status(200).json({ message: "Statistik erfolgreich aktualisiert!" });
    })
    .catch((err) => {
      console.error("Fehler beim Aktualisieren der Statistik:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

module.exports = router;