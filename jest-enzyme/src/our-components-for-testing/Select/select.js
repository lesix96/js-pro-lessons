import React from "react";
import "./select.css";

const Input = ({ handleChange, options, value }) => (
  <div className="selectWrapper">
    {options.length > 0 ? (
      <>
        <select onChange={handleChange} defaultValue={value}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <span className="selectText">per page</span>
      </>
    ) : (
      <div className="placeholder">"No items"</div>
    )}
  </div>
);

Input.defaultProps = {
  handleChange: () => 'Test',
  options: [],
  value: 0,
};

export default Input;
