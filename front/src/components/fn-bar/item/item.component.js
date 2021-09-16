import React from "react";
import styles from "./item.module.scss";

const Item = ({ icon }) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default Item;
