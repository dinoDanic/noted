import React from "react";
import styles from "./textarea.module.scss";

const Textarea = ({ ...otherPorps }) => {
  return (
    <textarea spellCheck="false" className={styles.textarea} {...otherPorps} />
  );
};

export default Textarea;
