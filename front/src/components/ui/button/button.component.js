import React from "react";
import styles from "./button.module.scss";
import { Spinner } from "react-bootstrap";
import "../../../theme/button.scss";

const Button = ({
  size,
  loading,
  children,
  valid = true,
  customClass,
  ...otherProps
}) => {
  const buttonStyle = {
    cursor: !valid && "not-allowed",
    opacity: !valid && 0.5,
  };
  return (
    <button
      className={`${styles.button} ${customClass}`}
      {...otherProps}
      style={buttonStyle}
    >
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
