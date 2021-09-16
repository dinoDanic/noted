import React from "react";
import styles from "./input.module.scss";

const Input = ({ ...otherProps }) => {
  return <input autoComplete="off" className={styles.input} {...otherProps} />;
};

export default Input;
