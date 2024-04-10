import React, { useState, useEffect } from "react";
import { navigate } from "react-router-dom"; 
import styles from "./index.css";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "Max Mustermann",
    profilePicture: "url_zum_profilbild.jpg",
    progress: 25, // Fortschrittsanzeige in Prozent
    points: 70, // Gesammelte Punkte
  });

  const [dropdownSichtbar, setDropdownSichtbar] = useState(false);
  const [ausgewählteSprache, setAusgewählteSprache] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('API_Endpunkt/zur/benutzerdaten');
      const userData = await response.json();

      const answeredQuestions = userData.answers.filter(answer => answer.correct);
      const progress = (answeredQuestions.length / TOTAL_QUESTIONS) * 100;

      setProfile({
        ...profile,
        progress: progress,
        points: userData.points
      });
    } catch (error) {
      console.error('Fehler beim Abrufen der Benutzerdaten:', error);
    }
  };

  const handleSprachauswahl = (sprache) => {
    setAusgewählteSprache(sprache);
    setDropdownSichtbar(false);
    
    // Je nach ausgewählter Sprache navigiere zu einer entsprechenden Seite
    switch (sprache) {
      case "Python":
        navigate("/python-seite");
        break;
      case "Javascript":
        navigate("/javascript-seite");
        break;
      case "HTML":
        navigate("/html-seite");
        break;
      case "React":
        navigate("/react-seite");
        break;
      default:
        console.error("Ungültige Sprache");
    }
  };

  const toggleDropdown = () => {
    setDropdownSichtbar(!dropdownSichtbar);
  };

  const handleQuizKlick = () => {
    navigate("/Quiz");
    console.log("Quiz geklickt");
  };

  const convertPoints = () => {
    let points = profile.points;
    let band = "";

    if (points >= 100) {
      band = "Platinband";
    } else if (points >= 75) {
      band = "Goldband";
    } else if (points >= 40) {
      band = "Silberband";
    } else if (points >= 15) {
      band = "Bronzeband";
    } else {
      band = "Kein Band erreicht";
    }

    alert(`Herzlichen Glückwunsch! Du hast das ${band} erreicht!`);
  };

  return (
    <div className={styles["profile-page"]}>
      <div className={styles["profile-info"]}>
        <img src={profile.profilePicture} alt="Profilbild" />
        <h2>{profile.name}</h2>
        <p>Fortschritt: {profile.progress.toFixed(2)}%</p>
        <p>Gesammelte Punkte: {profile.points}</p>
        <button onClick={convertPoints}>Punkte umwandeln</button>
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
            <button onClick={handleQuizKlick}>Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
