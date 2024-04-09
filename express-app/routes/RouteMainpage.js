const express = require("express");
const router = express.Router();

// Route für MainPage
router.get("/main", (req, res) => {
  res.json({ message: "Daten für die Main_Page" });
});

module.exports = router;
