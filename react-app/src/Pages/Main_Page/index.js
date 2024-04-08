import React, { useState } from "react";
import logo from "../../images/Tech.png";
import "./App.module.css";

const Main = () => {
  const [beschreibung, setBeschreibung] = useState("");
  const [ausgewählteSprache, setAusgewählteSprache] = useState(null);

  const handleSprachauswahl = (sprache) => {
    setAusgewählteSprache(sprache);
  };

  const handleLoginKlick = () => {
    // Füge hier die Logik für den Login-Button hinzu
    console.log("Login geklickt");
  };

  const handleRegistrierungKlick = () => {
    // Füge hier die Logik für den Registrierungs-Button hinzu
    console.log("Registrierung geklickt");
  };

  return (
    <div className="app">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <button onClick={() => handleSprachauswahl("Python")}>
              Python
            </button>
            <button onClick={() => handleSprachauswahl("Javascript")}>
              Javascript
            </button>
            <button onClick={() => handleSprachauswahl("HTML")}>HTML</button>
            <button onClick={() => handleSprachauswahl("React")}>React</button>
          </div>
        </div>
        {ausgewählteSprache && <p>Ausgewählte Sprache: {ausgewählteSprache}</p>}
      </div>
      <div className="content">
        <textarea
          placeholder="Willkommen bei TechSmarter - deiner ultimativen Lernplattform für technologisches Know-how und intelligente Lösungen! Hier bist du genau richtig, um deine Fähigkeiten zu erweitern, deine Neugier zu stillen und in die faszinierende Welt der Technologie einzutauchen."
          value={beschreibung}
          onChange={(e) => setBeschreibung(e.target.value)}
        />
        <button onClick={handleLoginKlick}>Anmelden</button>
        <button onClick={handleRegistrierungKlick}>Registrieren</button>
      </div>
    </div>
  );
};

export default Main;
