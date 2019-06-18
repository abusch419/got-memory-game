import React from "react";
import "./style.css";

function GameCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.id}
          src={props.image}
          onClick={() => props.clickCount(props.id)}
        />
      </div>
    </div>
  );
}

export default GameCard;
