import React, { useState } from 'react';

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
    }, 2000); 
  };

  return (
    <div>
      <div className="wheel" style={{ border: '2px solid black', borderRadius: '50%', width: '200px', height: '200px', position: 'relative' }}>
        {isSpinning ? (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '20px' }}>Spinning...</div>
        ) : (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '20px' }}>{selectedTopic}</div>
        )}
      </div>
      <button onClick={spinWheel} disabled={isSpinning} style={{ marginTop: '20px' }}>Spin</button>
    </div>
  );
};

export default Quiz;
