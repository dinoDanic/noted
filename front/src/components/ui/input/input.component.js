import React from "react";
import styles from "./input.module.scss";

const Input = ({ empty, ...otherProps }) => {
  return (
    <input
      autoComplete="off"
      className={styles.input}
      {...otherProps}
      style={{ border: empty && "none" }}
    />
  );
};

export default Input;
