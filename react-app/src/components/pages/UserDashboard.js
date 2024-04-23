import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserPoints } from "../../api/config/api";

const UserDashboard = () => {
  // Simuliere Testdaten für den Benutzer
  const initialUserData = {
    username: "ChristianeKrise",
    points: 100,
    // Weitere Felder hier hinzufügen, falls erforderlich
  };
  const [userData, setUserData] = useState(initialUserData);

  useEffect(() => {
    // Funktion zum Abrufen der Benutzerdaten aufrufen, wenn die Komponente montiert ist
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await getUserPoints();
      console.log("Hallöchen", response.data);
      setUserData(response.data);
    } catch (error) {
      console.error("Fehler beim Abrufen der Benutzerdaten:", error);
    }
  };

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      {userData ? (
        <div className="user-info">
          <p>Name: {userData.username}</p>
          <p>Punkte: {userData.points}</p>
          {/* Weitere Benutzerdaten anzeigen */}
        </div>
      ) : (
        <p>Lade Benutzerdaten...</p>
      )}
    </div>
  );
};

export default UserDashboard;
