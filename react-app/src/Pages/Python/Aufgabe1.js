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
          Erstelle eine Liste von Zahlen. Schreibe eine Funktion, die den
          Durchschnitt dieser Zahlen berechnet. Gib den Durchschnitt aus.
        </ol>
      </p>
      <button onClick={handleLoginKlick}>Hint 1 python</button>
    </div>
  );
}

export default Aufgabe1;
