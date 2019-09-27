import React from "react";

const Button = ({ props, onSubmit }) => {
  return (
    <div>
      <button type="button" onClick={e => onSubmit(e)}>
        {props.label}
      </button>
    </div>
  );
};

export default Button;
