import React from "react";
import styles from "./button.module.scss";
import { Spinner } from "react-bootstrap";

const Button = ({ loading, children, valid, ...otherProps }) => {
  const buttonStyle = {
    cursor: !valid && "not-allowed",
    opacity: !valid && 0.5,
  };
  return (
    <button className={styles.button} {...otherProps} style={buttonStyle}>
      {loading && (
        <div className={styles.spinner}>
          <Spinner animation="grow" size="sm" />
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
