import React from "react";
import {
  Alarm,
  Archive,
  CheckSquare,
  PaintBucket,
  Save,
} from "react-bootstrap-icons";
import styles from "./options.module.scss";

import Button from "../ui/button/button.component";

const Options = () => {
  return (
    <div className={styles.options}>
      <Button size="sm" customClass="squaer">
        <PaintBucket />
      </Button>
      <Button size="sm" customClass="squaer">
        <Alarm />
      </Button>
      <Button size="sm" customClass="squaer">
        <Archive />
      </Button>
      <Button size="sm" customClass="squaer">
        <CheckSquare />
      </Button>
      <Button type="submit" customClass="light squaer" size="sm">
        <Save />
      </Button>
    </div>
  );
};

export default Options;
