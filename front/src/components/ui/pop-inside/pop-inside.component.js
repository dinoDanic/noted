import React, { useState } from "react";
import styles from "./pop-inside.module.scss";

const PopInside = ({ children }) => {
  return <div className={styles.popInside}>{children}</div>;
};

export default PopInside;
