const express = require("express");
const router = express.Router();
const Trophy = require("../models/Trophy");
const { Op } = require("sequelize");

// GET-Endpunkt für alle Trophäen
router.get("/", async (req, res) => {
  try {
    const trophies = await Trophy.findAll();
    res.json(trophies);
  } catch (error) {
    console.error("Fehler beim Abrufen der Trophäen:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
});
// GET-Endpunkt für alle Punkte
router.get("/points", async (req, res) => {
  try {
    const { points } = req.query;
    const trophies = await Trophy.findAll({
      where: { points: { [Op.lte]: points } },
    });
    res.json(trophies);
  } catch (error) {
    console.error("Fehler beim Abrufen der Trophäen:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
});

module.exports = router;
