import React from "react";

function Aufgabe1() {
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
      <h2>Aufgabe1 </h2>
      <p>
        Schreibe ein Python-Programm, das den Durchschnitt von einer Liste von
        Zahlen berechnet.
      </p>
      <p>
        Schritte:
        <ol>
          <li>
            Erstelle eine Liste von Zahlen. Schreibe eine Funktion, die den
            Durchschnitt dieser Zahlen berechnet. Gib den Durchschnitt aus.
          </li>
        </ol>
      </p>
      <button onClick={handleLoginKlick}>Hint 1 python</button>
    </div>
  );
}

export default Aufgabe1;
