import React from "react";

const GameFrame = () => {
  return (
    <div>
      <iframe
        src="game/index-spiel.html"
        title="Quiz"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default GameFrame;
