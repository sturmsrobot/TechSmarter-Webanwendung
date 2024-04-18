const express = require("express");
const router = express.Router();

// Importiere Routen
const authRoutes = require("./authRoutes");
const apiRoutes = require("./apiRoutes");
const gamificationRoutes = require("./gamificationRoutes");
const StatsRoutes = require("./StatsRoutes");

// Verwende Routen
router.use("/auth", authRoutes);
router.use("/api", apiRoutes);
router.use("/gamification", gamificationRoutes);
router.use("/stats", StatsRoutes);

module.exports = router;
