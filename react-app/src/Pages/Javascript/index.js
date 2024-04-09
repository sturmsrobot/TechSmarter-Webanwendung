import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./JavaScript.module.css";

const Javascript = () => {
  const [text, setText] = useState("");
  const welcomeText = "Willkommen zum Javascript Lernen!";

  let interval;

  useEffect(() => {
    const animateText = () => {
      let currentIndex = 0;
      interval = setInterval(() => {
        if (currentIndex <= welcomeText.length) {
          setText(welcomeText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    };

    animateText();

    return () => clearInterval(interval);
  }, []);

  const importTask = (taskName) => {
    console.log(`Importiere Aufgabe: ${taskName}`);
    // Hier könntest du die Logik für den Import der Aufgaben implementieren
  };

  const redirectToLink = (link) => {
    window.location.href = link;
  };

  return (
    <div className="container">
      <h1>{text}</h1>
      <h2>
        JavaScript ist eine verbreitete Programmiersprache.Als clientseitige
        Skriptsprache ist sie eine der Kerntechnologien des World Wide Web.
      </h2>
      <div className="buttons">
        <button onClick={() => importTask("Aufgabe 1")}>
          Aufgabe 1 importieren
        </button>
        <button onClick={() => importTask("Aufgabe 2")}>
          Aufgabe 2 importieren
        </button>
        <button
          onClick={() =>
            redirectToLink(
              "https://wiki.selfhtml.org/wiki/JavaScript/Tutorials"
            )
          }
        >
          Externer Link
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Javascript />
  </React.StrictMode>,
  document.getElementById("root")
);

export default Javascript;
