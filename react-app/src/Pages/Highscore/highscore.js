import React, { useState } from "react";
import "./highscore.module.css";

// const HighscoreBoard = () => {
//   const [highscores, setHighscores] = useState([]);

//   useEffect(() => {
// Funktion zum Abrufen der Benutzerdaten aus der Datenbank
// fetchHighscores();
//   }, []); // Leeres Array als zweites Argument bewirkt, dass der Effekt nur einmal nach dem Rendern ausgeführt wird

//   const fetchHighscores = async () => {
// try {
// Hier annehmen, dass die API einen Endpunkt /highscores bereitstellt, der die Highscores zurückgibt
//   const response = await fetch('/api/highscores'); // Passe den Pfad entsprechend deiner API an
//   if (!response.ok) {
// throw new Error('Fehler beim Abrufen der Highscores');
//   }
//   const data = await response.json();
//   setHighscores(data); // Setze die abgerufenen Highscores im Zustand
// } catch (error) {
//   console.error('Fehler beim Abrufen der Highscores:', error);
// }
//   };
const HighscoreBoard = () => {
  // Hier könnte die Liste der Highscores aus einer API oder einer anderen Datenquelle geladen werden
  const [highscores, setHighscores] = useState([
    { name: "Benutzer 1", score: 100 },
    { name: "Benutzer 2", score: 90 },
    { name: "Benutzer 3", score: 80 },
    // Weitere Highscores hier hinzufügen...
  ]);

  return (
    <div>
      <h1>Highscore Board</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {highscores.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighscoreBoard;
