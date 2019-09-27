import React from "react";

const RadioGroup = ({ props, handleChange }) => {
  return (
    <div>
      <form>
        <label>{props.label} :</label>
        {props.options.map(option => (
          <span>
            {option.label}
            <input
              type="radio"
              name="props.label"
              value={option.label}
              onChange={e => handleChange(e.target.value, props.label)}
            />
          </span>
        ))}
      </form>
    </div>
  );
};

export default RadioGroup;
