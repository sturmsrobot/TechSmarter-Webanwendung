import React, { useEffect } from "react";
import { getUserPoints } from "../../api/config/api";
import { useAuth } from "../../api/auth/AuthProvider";
import TrophiesList from "../trophies/TrophiesList";
import "../../App.css";

const UserDashboard = () => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    // Funktion zum Abrufen der Benutzerdaten aufrufen, wenn die Komponente montiert ist
    const fetchUserData = async () => {
      try {
        const response = await getUserPoints(user.id);

        console.log("Hallöchen", response.data);
        setUser({ ...user, ...response });
      } catch (error) {
        console.error("Fehler beim Abrufen der Benutzerdaten:", error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, []);

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      {user ? (
        <div className="user-info">
          <p>Name: {user.username}</p>
          <p>Punkte: {user.points}</p>
          {/* Weitere Benutzerdaten anzeigen */}
          <TrophiesList points={user.points} />
        </div>
      ) : (
        <p>Lade Benutzerdaten...</p>
      )}
    </div>
  );
};

export default UserDashboard;
