import React from "react";

import styles from "./colors.module.scss";

const Colors = ({ returnColor }) => {
  return (
    <div className={styles.color}>
      <div className={styles.color1} onClick={() => returnColor("#333")} />
      <div className={styles.color2} onClick={() => returnColor("#4d2625")} />
      <div className={styles.color3} onClick={() => returnColor("#56411c")} />
      <div className={styles.color4} onClick={() => returnColor("#58521e")} />
      <div className={styles.color5} onClick={() => returnColor("#2e4f22")} />
      <div className={styles.color6} onClick={() => returnColor("#174642")} />
      <div className={styles.color7} onClick={() => returnColor("#284b53")} />
      <div className={styles.color8} onClick={() => returnColor("#1c3353")} />
      <div className={styles.color9} onClick={() => returnColor("#3a2352")} />
      <div className={styles.color10} onClick={() => returnColor("#501f3c")} />
      <div className={styles.color11} onClick={() => returnColor("#3b2a1a")} />
      <div className={styles.color12} onClick={() => returnColor("#35373a")} />
    </div>
  );
};

export default Colors;
