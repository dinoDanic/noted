import React, { useState } from "react";
import styles from "./item.module.scss";

import Label from "../../ui/label/label.component";

const Item = ({ name, icon, ...otherProps }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div
        className={styles.item}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        {...otherProps}
      >
        <Label visible={isVisible} name={name} />
        <div className={styles.icon}>{icon}</div>
      </div>
    </>
  );
};

export default Item;
