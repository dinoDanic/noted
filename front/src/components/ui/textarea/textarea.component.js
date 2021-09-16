import React from "react";
import styles from "./textarea.module.scss";

const Textarea = ({ ...otherPorps }) => {
  return <textarea className={styles.textarea} {...otherPorps} />;
};

export default Textarea;
