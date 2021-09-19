import React, { useState } from "react";
import styles from "./input.module.scss";

const Input = ({ empty, label, center, ...otherProps }) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputStyle = {
    border: empty && "none",
    textAlign: center && "center",
    fontWeight: empty && "600",
  };
  const labelStyle = {
    textAlign: center && "center",
    opacity: isFocus ? 1 : 0.5,
  };

  return (
    <div className={styles.wrap}>
      {label && (
        <div className={styles.label} style={labelStyle}>
          {label}
        </div>
      )}
      <input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        autoComplete="off"
        spellCheck="false"
        className={styles.input}
        {...otherProps}
        style={inputStyle}
      />
    </div>
  );
};

export default Input;
