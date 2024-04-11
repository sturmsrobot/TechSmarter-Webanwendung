
import React, { useState } from 'react';
import questions from './questions'; // Importiere die Fragen

const Quiz = () => {
  const topics = ['Python', 'HTML', 'JavaScript'];
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const spinWheel = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * topics.length);
      setSelectedTopic(topics[randomIndex]);
      setIsSpinning(false);
    }, 2000); // Change the duration as needed
  };

  return (
    <div>
      <div className="wheel" style={{ border: '2px solid black', borderRadius: '50%', width: '200px', height: '200px', position: 'relative', backgroundColor: 'darkorchid' }}>
        {isSpinning ? (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '20px' }}>Spinning...</div>
        ) : (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '20px' }}>{selectedTopic}</div>
        )}
      </div>
      <button onClick={spinWheel} disabled={isSpinning} style={{ marginTop: '20px' }}>Spin</button>

      {selectedTopic && <QuizQuestion topic={selectedTopic} />}
    </div>
  );
};

const QuizQuestion = ({ topic }) => {
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    if (topic) {
      const randomIndex = Math.floor(Math.random() * questions[topic].length);
      setQuestionData(questions[topic][randomIndex]);
    }
  }, [topic]);

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  const checkAnswer = () => {
    if (selectedAnswer === questionData.correctAnswer) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      {questionData && (
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
          <button onClick={checkAnswer}>Check Answer</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;


