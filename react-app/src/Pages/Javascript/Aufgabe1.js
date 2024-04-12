import React, { useState } from "react";

function Aufgabe1() {
  return (
    <div className="App">
      <h1>Javascript</h1>
      <TaskDescription />
    </div>
  );
}

function TaskDescription() {
  const [hint1Visible, setHint1Visible] = useState(false);
  const [hint2Visible, setHint2Visible] = useState(false);

  const handleHint1Click = () => {
    setHint1Visible(true);
    setHint2Visible(false);
  };

  const handleHint2Click = () => {
    setHint1Visible(false);
    setHint2Visible(true);
  };

  return (
    <div className="task-description">
      <h2>Aufgabe1</h2>
      <p>
        Aufgabe: Erstelle eine interaktive Webanwendung, die den Benutzer nach
        seinem Namen fragt und dann eine personalisierte Begrüßung ausgibt.
      </p>
      <p>
        Schritte:
        <ol>
          <li>
            Erstelle eine HTML-Datei mit einem Eingabefeld für den Namen und
            einem Button, um die Begrüßung auszulösen. Verwende JavaScript, um
            den eingegebenen Namen zu erfassen, wenn der Benutzer auf den Button
            klickt. Schreibe eine Funktion, die den eingegebenen Namen verwendet,
            um eine personalisierte Begrüßung zu erstellen. Zeige die Begrüßung
            auf der Webseite an, nachdem der Benutzer den Button geklickt hat.
          </li>
        </ol>
      </p>
      <button onClick={handleHint1Click}>Hint 1 </button>
      <button onClick={handleHint2Click}>Hint 2 </button>
      {hint1Visible && (
        <img src="../../images/hint1 javascript.png" alt="Hint 1" />
      )}
      {hint2Visible && (
        <img src="../images/hint2 javascript.png" alt="Hint 2" />
      )}
    </div>
  );
}

export default Aufgabe1;

