import React, { useState } from "react";
import logo from "../../images/Tech.png";
import styles from "./Main_Page.module.css";

const Main = () => {
  const [ausgewählteSprache, setAusgewählteSprache] = useState(null);
  const [dropdownSichtbar, setDropdownSichtbar] = useState(false);

  const handleSprachauswahl = (sprache) => {
    setAusgewählteSprache(sprache);
    setDropdownSichtbar(false);
  };

  const toggleDropdown = () => {
    setDropdownSichtbar(!dropdownSichtbar);
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
      <div className={styles.header}>
        <img
          src={logo}
          alt="Logo"
          className="logo"
          style={{ width: "80px", height: "auto" }}
        />
        <div className="header-buttons">
          <button onClick={handleLoginKlick}>Anmelden</button>
          <button onClick={handleRegistrierungKlick}>Registrieren</button>
        </div>
      </div>
      <div className={styles.dropdown}>
        <button className="dropbtn" onClick={toggleDropdown}>
          Dropdown
        </button>
        {dropdownSichtbar && (
          <div className={styles.dropdowncontent}>
            <button onClick={() => handleSprachauswahl("Python")}>
              Python
            </button>
            <button onClick={() => handleSprachauswahl("Javascript")}>
              Javascript
            </button>
            <button onClick={() => handleSprachauswahl("HTML")}>HTML</button>
            <button onClick={() => handleSprachauswahl("React")}>React</button>
          </div>
        )}
      </div>
      {ausgewählteSprache && <p>Ausgewählte Sprache: {ausgewählteSprache}</p>}
      <div className="content">
        "Willkommen bei TechSmarter - deiner ultimativen Lernplattform für
        technologisches Know-how und intelligente Lösungen! Hier bist du genau
        richtig, um deine Fähigkeiten zu erweitern, deine Neugier zu stillen und
        in die faszinierende Welt der Technologie einzutauchen."
      </div>
    </div>
  );
};

export default Main;
