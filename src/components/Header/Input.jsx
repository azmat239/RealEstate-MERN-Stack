import React from "react";

const Input = ({ typeInput, value, onChange, placeholder, classes }) => {
  return (
    <div>
      <input
        type={typeInput}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classes ?? "p-2 focus:outline-none rounded-md"}
      />
    </div>
  );
};

export default Input;
