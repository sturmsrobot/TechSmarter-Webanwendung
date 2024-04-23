import React from "react";
import "../../App";
import { Button } from "../buttons/Button";
import "./TopV.css";
import { Link } from "react-router-dom";

function eyecatch() {
  return (
    <div className="eyecatch-container">
      <video src="videos/world.mp4" autoPlay loop muted />
      <h1>Ready?</h1>
      <p>Test your knowledge...</p>
      <div className="eyecatch-btns">
        <Link to="/quiz">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            {" "}
            Lets go!
          </Button>
        </Link>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          {" "}
          Top Brains <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default eyecatch;
