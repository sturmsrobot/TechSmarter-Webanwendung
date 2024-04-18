const express = require("express");
const router = express.Router();

// Importiere Routen
const authRoutes = require("./authRoutes");
const StatsRoutes = require("./StatsRoutes");
const UserRoutes = require("./UserRoutes");

// Verwende Routen
router.use("/auth", authRoutes);
router.use("/stats", StatsRoutes);
router.use("/user", UserRoutes);

module.exports = router;
