const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes/routes");

app.use("/api", routes); // Verwendung definierter Routen

app.get("/", (req, res) => {
  res.send("Willkommen auf unserer Express-App!");
});

app.listen(PORT, () => {
  console.log(`Dieser Server läuft auf Port ${PORT}`); // Serverstart
});
