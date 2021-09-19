import React from "react";
import styles from "./card.module.scss";

const Card = ({ shadow, children, padding, ...otherPorps }) => {
  const paddings = {
    xs: "var(--sp-xs)",
    sm: "var(--sp-sm)",
    md: "var(--sp-md)",
    lg: "var(--sp-lg)",
  };
  const cardStyle = {
    boxShadow: shadow && "-4px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: paddings[padding],
  };
  return (
    <div className={styles.card} style={cardStyle} {...otherPorps}>
      {children}
    </div>
  );
};

export default Card;
