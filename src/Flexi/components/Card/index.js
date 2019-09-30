import React from "react";

const Card = ({ props, child }) => {
  return (
    <div style={{ background: "red", ...props }}>
      <label>{props.label}</label>
      {child}
    </div>
  );
};

export default Card;
