import React from 'react';
import './inputOne.css';
//input component for all input boxes in future implementation
const InputOne = ({ heading, placeholder, value, onChange }) => {
  return (
    <div className="input-field">
      <label>
        <h3>{heading}</h3>
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default InputOne;
