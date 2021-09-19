import React from "react";
import styles from "./textarea.module.scss";

const Textarea = ({ theRef, ...otherPorps }) => {
  return (
    <textarea
      spellCheck="false"
      ref={theRef}
      className={styles.textarea}
      {...otherPorps}
    />
  );
};

export default Textarea;
