import React from "react";
import styles from "./textarea.module.scss";

const Textarea = ({ empty, theRef, ...otherPorps }) => {
  const style = {
    padding: empty && "0px",
  };
  return (
    <textarea
      spellCheck="false"
      ref={theRef}
      className={styles.textarea}
      style={style}
      {...otherPorps}
    />
  );
};

export default Textarea;
