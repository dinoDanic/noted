import React from "react";
import { useDispatch } from "react-redux";
import { updateNewNoteColor } from "../../../redux/new-note/new-note.actions";

import styles from "./colors.module.scss";

const Colors = () => {
  const dispatch = useDispatch();
  const setColor = (value) => {
    dispatch(updateNewNoteColor(value));
  };
  return (
    <div className={styles.color}>
      <div className={styles.color1} onClick={() => setColor("#333")} />
      <div className={styles.color2} onClick={() => setColor("#4d2625")} />
      <div className={styles.color3} onClick={() => setColor("#56411c")} />
      <div className={styles.color4} onClick={() => setColor("#58521e")} />
      <div className={styles.color5} onClick={() => setColor("#2e4f22")} />
      <div className={styles.color6} onClick={() => setColor("#174642")} />
      <div className={styles.color7} onClick={() => setColor("#284b53")} />
      <div className={styles.color8} onClick={() => setColor("#1c3353")} />
      <div className={styles.color9} onClick={() => setColor("#3a2352")} />
      <div className={styles.color10} onClick={() => setColor("#501f3c")} />
      <div className={styles.color11} onClick={() => setColor("#3b2a1a")} />
      <div className={styles.color12} onClick={() => setColor("#35373a")} />
    </div>
  );
};

export default Colors;
