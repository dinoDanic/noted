import React from "react";
import styles from "./card.module.scss";

const Card = ({ shadow, children }) => {
  return (
    <div
      className={styles.card}
      style={{ boxShadow: shadow && "-4px 4px 4px rgba(0, 0, 0, 0.25)" }}
    >
      {children}
    </div>
  );
};

export default Card;
