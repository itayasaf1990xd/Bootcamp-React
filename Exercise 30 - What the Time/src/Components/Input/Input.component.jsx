import React from "react";
import "./Input.component.css";

const Input = ({ value, name, onChange }) => {
  return (
    <div className="time-fields">
      <label className="time-label" htmlFor={name}>
        {name}
      </label>
      <input
        className="time-input"
        type="text"
        name={name}
        id={name}
        value={value}
        minLength="1"
        maxLength="10"
        pattern="[0-9]+"
        onInput={onChange}
      />
    </div>
  );
};

export default Input;
