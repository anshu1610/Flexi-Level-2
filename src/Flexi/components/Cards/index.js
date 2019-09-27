import React from "react";
import Card from "../Card";

const Cards = ({ props }) => {
  return (
    <div>
      {props.cards.map(card => {
        return <Card props={card} />;
      })}
    </div>
  );
};

export default Cards;
