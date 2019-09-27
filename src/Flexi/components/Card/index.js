import React from "react";

const Card = ({ props }) => {
  return (
    <div style={props}>
      <label>{props.label}</label>
    </div>
  );
};

export default Card;
