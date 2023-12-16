import React from "react";

export const Input = ({ label, handleChange, type = "text" }) => {
  return (
    <label>
      {label}
      <input type={type} onChange={handleChange} />
    </label>
  );
};
