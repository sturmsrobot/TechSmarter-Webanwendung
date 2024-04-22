// import React, { useState, useEffect } from "react";
// import "./quizcon/style.css"; // Stil kann hier importiert werden

// const Quiz = () => {
//   // Zustandsvariablen für die Fragen, die Zeit, den aktuellen Stand der Fragen und den Punktestand
//   const [questions, setQuestions] = useState([]);
//   const [time, setTime] = useState(30);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);

//   // Timer-Variable
//   let timer;

//   // Funktionsaufruf zum Starten des Quiz
//   const startQuiz = () => {
//     // Implementiere den Start des Quiz hier
//     const num = document.getElementById("numquestions").value;
//     const cat = document.getElementById("category").value;
//     const diff = document.getElementById("difficulty").value;

//     const url = `https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple`;

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         // Speichern Sie die abgerufenen Fragen in einem Array
//         const fetchedQuestions = data.results;

//         // Setzen Sie die Fragen im State
//         setQuestions(fetchedQuestions);

//         // Verbergen Sie den Startbildschirm und zeigen Sie das Quiz an
//         document.querySelector(".start-screen").classList.add("hide");
//         document.querySelector(".quiz").classList.remove("hide");

//         // Beginnen Sie mit der Anzeige der ersten Frage
//         setCurrentQuestion(0);
//         showQuestion(fetchedQuestions[currentQuestion]);
//       })
//       .catch((error) => console.error("Fehler beim Laden der Fragen:", error));
//   };

//   // Funktion zum Anzeigen einer Frage
//   const showQuestion = (question) => {
//     // Implementieren Sie hier die Anzeige der Frage und der Antwortmöglichkeiten
//     // Verwenden Sie setState, um die Frage anzuzeigen
//   };

//   // Funktionsaufruf, um die nächste Frage anzuzeigen
//   const nextQuestion = () => {
//     // Inkrementiere den aktuellen Fragenindex
//     setCurrentQuestion((prevQuestion) => prevQuestion + 1);

//     // Überprüfe, ob weitere Fragen vorhanden sind
//     if (currentQuestion + 1 < questions.length) {
//       // Zeige die nächste Frage an
//       showQuestion(questions[currentQuestion + 1]);
//     } else {
//       // Zeige den Endbildschirm an, wenn alle Fragen beantwortet wurden
//       // Hier können Sie eine Funktion implementieren, um den Endbildschirm anzuzeigen
//     }
//   };

//   // Funktionsaufruf zum Überprüfen der Antwort
//   const checkAnswer = () => {
//     clearInterval(timer);

//     // Holen Sie sich die ausgewählte Antwort
//     const selectedAnswer = document.querySelector(".answer.selected");

//     if (selectedAnswer) {
//       // Extrahieren Sie den Text der ausgewählten Antwort
//       const answerText = selectedAnswer.querySelector(".text").innerHTML;

//       // Überprüfen Sie, ob die ausgewählte Antwort korrekt ist
//       if (answerText === questions[currentQuestion].correct_answer) {
//         // Inkrementieren Sie den Punktestand und fügen Sie die "correct"-Klasse hinzu
//         setScore((prevScore) => prevScore + 1);
//         selectedAnswer.classList.add("correct");
//       } else {
//         // Fügen Sie die "wrong"-Klasse zur ausgewählten Antwort hinzu
//         selectedAnswer.classList.add("wrong");

//         // Zeigen Sie die korrekte Antwort an, indem Sie die "correct"-Klasse hinzufügen
//         const correctAnswer = document.querySelectorAll(".answer");
//         correctAnswer.forEach((answer) => {
//           if (
//             answer.querySelector(".text").innerHTML ===
//             questions[currentQuestion].correct_answer
//           ) {
//             answer.classList.add("correct");
//           }
//         });
//       }
//     } else {
//       // Wenn keine Antwort ausgewählt wurde, zeigen Sie die korrekte Antwort an
//       const correctAnswer = document.querySelectorAll(".answer");
//       correctAnswer.forEach((answer) => {
//         if (
//           answer.querySelector(".text").innerHTML ===
//           questions[currentQuestion].correct_answer
//         ) {
//           answer.classList.add("correct");
//         }
//       });
//     }

//     // Fügen Sie die "checked"-Klasse zu allen Antworten hinzu, um die Auswahl zu markieren
//     const allAnswers = document.querySelectorAll(".answer");
//     allAnswers.forEach((answer) => {
//       answer.classList.add("checked");
//     });

//     // Deaktivieren Sie den "Senden"-Button und zeigen Sie den "Nächste Frage"-Button an
//     const submitBtn = document.querySelector(".submit");
//     const nextBtn = document.querySelector(".next");
//     submitBtn.style.display = "none";
//     nextBtn.style.display = "block";
//   };

//   // JSX-Element für die Quiz-Komponente
//   return (
//     <div className="container">
//       {/* Quiz-Startbildschirm */}
//       <div className="start-screen">
//         <h1 className="heading">Quiz</h1>
//         <div className="setting">
//           <label htmlFor="num-questions">Anzahl der Fragen</label>
//           <select name="" id="numquestions">
//             <option value="5">5</option>
//             <option value="10">10</option>
//             <option value="15">15</option>
//             <option value="20">20</option>
//             <option value="25">25</option>
//             <option value="30">30</option>
//           </select>
//           {/* Weitere Einstellungen können hier eingefügt werden */}
//         </div>
//         <button className="btn start" onClick={startQuiz}>
//           Let's go!
//         </button>
//       </div>

//       {/* Quiz-Bildschirm mit Fragen */}
//       <div className="quiz hide">
//         <div className="timer">
//           <div className="progress">
//             <div className="progress-bar"></div>
//             <span className="progress-text">{time}</span>
//           </div>
//         </div>
//         <div className="question-wrapper">
//           <div className="number">
//             Frage <span className="current">{currentQuestion + 1}</span>
//             <span className="total">/{questions.length}</span>
//           </div>
//           <div className="question">Hier wird die Frage angezeigt</div>
//         </div>
//         <div className="answer-wrapper">
//           {/* Hier werden die Antworten angezeigt */}
//         </div>
//         <button className="btn submit" onClick={checkAnswer} disabled>
//           Senden
//         </button>
//         <button className="btn next" onClick={nextQuestion}>
//           Nächste Frage
//         </button>
//       </div>

//       {/* Endbildschirm mit Ergebnis */}
//       <div className="end-screen hide">
//         <h1 className="heading">SUPER QUIZ</h1>
//         <div className="score">
//           <span className="score-text">Punktestand:</span>
//           <div>
//             <span className="final-score">{score}</span>
//             <span className="total-score">/{questions.length}</span>
//           </div>
//           <button className="btn restart" onClick={startQuiz}>
//             Neustart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;

import React, { useState, useEffect } from "react";
import questions from "../../Pages/Quiz/questions"; // Importiere die Fragen
import "../../Pages/Quiz/styles.css";
import film from "../../videos/Particle_Tunnel_4K_Motion_Background_Loop.mp4";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Quiz = () => {
  const topics = ["Python", "HTML", "JavaScript"];
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const spinWheel = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * topics.length);
      setSelectedTopic(topics[randomIndex]);
      setIsSpinning(false);
    }, 2000);
  };

  useEffect(() => {
    if (selectedTopic) {
      const randomIndex = Math.floor(
        Math.random() * questions[selectedTopic].length
      );
      setQuestionData(questions[selectedTopic][randomIndex]);
    }
  }, [selectedTopic]);

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  const checkAnswer = () => {
    if (selectedAnswer === questionData.correctAnswer) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  };

  // '<div className="spinner"></div>'

  return (
    <div className="container">
      <video autoPlay loop muted className="background-video">
        <source src={film} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="quiz-container">
        <div className="wheel">
          {isSpinning ? (
            <div className="spinner-container">
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            </div>
          ) : (
            <div className="wheel-text">{selectedTopic}</div>
          )}
        </div>
        <button
          className="spin-button"
          onClick={spinWheel}
          disabled={isSpinning}
        >
          Spin
        </button>
        {questionData && (
          <div className="question-container">
            <div>
              <h2>Question:</h2>
              <p>{questionData.question}</p>
              <h3>Options:</h3>
              {questionData.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={option}
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelection(option)}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
              <button className="check-answer" onClick={checkAnswer}>
                Check Answer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
