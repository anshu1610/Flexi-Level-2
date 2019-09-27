import React from "react";

const TextField = ({ props, handleChange }) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.inputType}
        onChange={e => handleChange(e.target.value, props.name)}
      />
    </div>
  );
};

export default TextField;
