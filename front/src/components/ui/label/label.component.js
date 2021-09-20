import React from "react";
import styles from "./label.module.scss";
import { CaretDownFill } from "react-bootstrap-icons";

import Card from "../card/card.component";

const Label = ({ name, fontSize, visible = false, ...otherPorps }) => {
  return (
    <>
      {visible && (
        <div className={styles.label} {...otherPorps}>
          <Card style={{ padding: "var(--sp-xs) var(--sp-md)" }}>
            <p style={{ fontSize: `${fontSize}px` }}>{name}</p>
            <div className={styles.arrow}>
              <CaretDownFill />
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default Label;
