import React, { forwardRef } from "react";

import "./input.scss";

export const Input = forwardRef((props, ref) => {
  const {
    id,
    value,
    label,
    erroMessage,
    password,
    placeholder,
    maxLength,
    onChange,
    name
  } = props;

  return (
    <div >
      {label && (
        <label htmlFor="input" className="label">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        className={["input", erroMessage && "--error"].join(" ")}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
        maxLength={maxLength}
        type={password ? "password" : "text"}
        ref={ref}
      />
      {erroMessage && (
        <span className="error-wrapper">
          <p className="error-text">{erroMessage}</p>
        </span>
      )}
    </div>
  );
});

export default Input;
