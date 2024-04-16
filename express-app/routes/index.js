const express = require("express");
const router = express.Router();

// Importiere Routen
const authRoutes = require("./authRoutes");
const apiRoutes = require("./apiRoutes");
const gamificationRoutes = require("./gamificationRoutes");

// Verwende Routen
router.use("/auth", authRoutes);
router.use("/api", apiRoutes);
router.use("/gamification", gamificationRoutes);

module.exports = router;
