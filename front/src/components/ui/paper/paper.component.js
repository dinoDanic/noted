import React from "react";
import styles from "./paper.module.scss";
import { Sticky } from "react-bootstrap-icons";

const Paper = ({ color, title, children, icon }) => {
  const sticky = () => {
    return <Sticky />;
  };
  const icons = {
    sticky: sticky(),
  };
  return (
    <div
      style={{ backgroundColor: `var(--${color})` }}
      className={styles.paper}
    >
      {title && (
        <div className={styles.header}>
          {icon && <div className={styles.icon}>{icons[icon]}</div>}
          <div
            className={styles.title}
            style={{ marginBottom: !children && "10px" }}
          >
            <h5>{title}</h5>
          </div>
        </div>
      )}
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Paper;
