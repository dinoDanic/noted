import React, { useState } from "react";
import {
  Alarm,
  CheckSquare,
  PaintBucket,
  PersonPlus,
  Save,
} from "react-bootstrap-icons";
import styles from "./options.module.scss";

import Button from "../ui/button/button.component";
import PopInside from "../ui/pop-inside/pop-inside.component";
import Colors from "../ui/colors/colors.component";

const Options = ({ save = true, visible = true }) => {
  const [isColor, setIsColor] = useState(false);
  return (
    <div className={styles.options} style={{ opacity: visible ? 1 : 0 }}>
      <div className={styles.color}>
        {isColor && (
          <PopInside setLayer={setIsColor} top={-98}>
            <Colors />
          </PopInside>
        )}
        <Button
          size="sm"
          customClass="squaer"
          label="Change Color"
          type="button"
          onClick={() => setIsColor(!isColor)}
        >
          <PaintBucket />
        </Button>
      </div>
      <Button size="sm" customClass="squaer" label="Set Alarm" type="button">
        <Alarm />
      </Button>
      <Button size="sm" customClass="squaer" label="Collaborator" type="button">
        <PersonPlus />
      </Button>
      <Button
        size="sm"
        customClass="squaer"
        label="Checkbox List"
        type="button"
      >
        <CheckSquare />
      </Button>
      {save && (
        <Button type="submit" customClass="light squaer" size="sm" label="Save">
          <Save />
        </Button>
      )}
    </div>
  );
};

export default Options;
