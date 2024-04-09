import React from "react";

function Aufgabe1() {
  return (
    <div className="App">
      <h1>Jacascript </h1>
      <TaskDescription />
    </div>
  );
}

function TaskDescription() {
  return (
    <div className="task-description">
      <h2>Aufgabe1 </h2>
      <p>
        Aufgabe: Erstelle eine interaktive Webanwendung, die den Benutzer nach
        seinem Namen fragt und dann eine personalisierte Begrüßung ausgibt.
      </p>
      <p>
        Schritte:
        <ol>
          Schritte: Erstelle eine HTML-Datei mit einem Eingabefeld für den Namen
          und einem Button, um die Begrüßung auszulösen. Verwende JavaScript, um
          den eingegebenen Namen zu erfassen, wenn der Benutzer auf den Button
          klickt. Schreibe eine Funktion, die den eingegebenen Namen verwendet,
          um eine personalisierte Begrüßung zu erstellen. Zeige die Begrüßung
          auf der Webseite an, nachdem der Benutzer den Button geklickt hat.
        </ol>
      </p>
    </div>
  );
}

export default Aufgabe1;
