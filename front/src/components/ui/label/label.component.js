import React from "react";
import styles from "./label.module.scss";
import { CaretDownFill } from "react-bootstrap-icons";

import Card from "../card/card.component";

const Label = ({ name, visible = false }) => {
  return (
    <>
      {visible && (
        <div className={styles.label}>
          <Card style={{ padding: "var(--sp-xs) var(--sp-md)" }}>
            {name}
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
