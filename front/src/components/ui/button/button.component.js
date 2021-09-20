import React, { useState } from "react";
import styles from "./button.module.scss";
import { Spinner } from "react-bootstrap";

import Label from "../label/label.component";

import "../../../theme/button.scss";

const Button = ({
  size,
  loading,
  children,
  valid = true,
  customClass,
  label,
  ...otherProps
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonStyle = {
    cursor: !valid && "not-allowed",
    opacity: !valid && 0.5,
  };
  return (
    <button
      className={`${styles.button} ${customClass}`}
      {...otherProps}
      style={buttonStyle}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {loading && (
        <div className={styles.spinner}>
          <Spinner animation="grow" size="sm" />
        </div>
      )}
      {children}
      {label && (
        <Label
          fontSize={12}
          name={label}
          visible={isVisible}
          label={label}
          style={{ top: "-40px" }}
        />
      )}
    </button>
  );
};

export default Button;
