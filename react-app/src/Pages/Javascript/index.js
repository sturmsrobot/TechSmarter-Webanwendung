
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Javascript = () => {
  const [text, setText] = useState("");
  const welcomeText = "Willkommen zum Javascript Lernen!";
    return (
      <div className={styles.container}>
        <h2>JavaScript</h2>
        <p>
          JavaScript ist eine Programmiersprache, die hauptsächlich für die
          clientseitige Entwicklung von Webanwendungen verwendet wird.
        </p>
      </div>
    );
  };
  useEffect(() => {
    const animateText = () => {
      let currentIndex = 0;
      const interval = setInterval(() => {
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


ReactDOM.render(
  <React.StrictMode>
    <HTML />
  </React.StrictMode>,
  document.getElementById("root")
);

export default Javascript