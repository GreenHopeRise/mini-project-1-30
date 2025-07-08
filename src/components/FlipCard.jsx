import React from "react";
import "./FlipCard.css";

const FlipCard = () => {
  return (
    <div className="flip-card">
      <h1>Flip Card</h1>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2>Front Side</h2>
        </div>
        <div className="flip-card-back">
          <p>Back Side: More Info</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
