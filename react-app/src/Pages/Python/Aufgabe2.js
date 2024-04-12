import React from "react";

function Aufgabe2() {
  return (
    <div className="App">
      <h1>Python </h1>
      <TaskDescription />
    </div>
  );
}

function TaskDescription() {
  const handleLoginKlick = () => {
    // Hier kannst du den Code für den Klick-Handler hinzufügen
    console.log("Der Button wurde geklickt!");
    // Zum Beispiel:
    // Gib einen Hinweis für die Aufgabe aus
    alert("Hier ist ein Hinweis für die Aufgabe!");
  };

  return (
    <div className="task-description">
      <h2>Aufgabe2 </h2>
      <p>
        Schreibe ein Python-Programm, das überprüft, ob ein eingegebenes Wort
        ein Palindrom ist oder nicht. Ein Palindrom ist ein Wort, das vorwärts
        und rückwärts gelesen dasselbe ist, z.B. "anna" oder "level".
      </p>
      <p>
        Schritte:
        <ol>
          <li>
            Erhalte das Eingabewort vom Benutzer. Überprüfe, ob das Wort
            vorwärts und rückwärts gelesen dasselbe ist. Gib eine entsprechende
            Nachricht aus, ob das Wort ein Palindrom ist oder nicht.
          </li>
        </ol>
      </p>
      <button onClick={handleLoginKlick}>Hint 2 python</button>
    </div>
  );
}

export default Aufgabe2;
