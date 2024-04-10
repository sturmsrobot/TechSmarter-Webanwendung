import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../images/Tech.png";
import styles from "./Main_Page.module.css";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const [ausgewählteSprache, setAusgewählteSprache] = useState(null);
  const [dropdownSichtbar, setDropdownSichtbar] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://example.com/api/data"); //  URL für Datenbank-API
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSprachauswahl = (sprache) => {
    setAusgewählteSprache(sprache);
    setDropdownSichtbar(false);
  };

  const toggleDropdown = () => {
    setDropdownSichtbar(!dropdownSichtbar);
  };

  const handleLoginKlick = () => {
    navigate("/Login");
    console.log("Login geklickt");
  };

  const handleRegistrierungKlick = () => {
    navigate("/Registrierung");
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
        {data.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
        "Willkommen bei TechSmarter - deiner ultimativen Lernplattform für
        technologisches Know-how und intelligente Lösungen! Hier bist du genau
        richtig, um deine Fähigkeiten zu erweitern, deine Neugier zu stillen und
        in die faszinierende Welt der Technologie einzutauchen."
      </div>
    </div>
  );
};

export default Main;
