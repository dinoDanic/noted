import React, { useState } from "react";
import Card from "../card/card.component";
import styles from "./pop-inside.module.scss";

const PopInside = ({ children, setLayer, top }) => {
  return (
    <>
      <div className={styles.popInside} style={{ marginTop: `${top}px` }}>
        <div className={styles.container}>
          <Card padding="sm">{children}</Card>
        </div>
      </div>
      <div className={styles.layer} onClick={() => setLayer(false)} />
    </>
  );
};

export default PopInside;
