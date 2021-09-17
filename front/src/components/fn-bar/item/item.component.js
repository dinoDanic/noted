import React from "react";
import styles from "./item.module.scss";

const Item = ({ icon, ...otherProps }) => {
  return (
    <div className={styles.item} {...otherProps}>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default Item;
