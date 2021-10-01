import React, { useState, useEffect } from "react";
import {
  Alarm,
  CheckSquare,
  PaintBucket,
  PersonPlus,
  Save,
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import styles from "./options.module.scss";

import { updateNewNoteColor } from "../../redux/new-note/new-note.actions";

import Button from "../ui/button/button.component";
import PopInside from "../ui/pop-inside/pop-inside.component";
import Colors from "../colors/colors.component";

const Options = ({ createMode, setNoteUpdate, noteUpdate }) => {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState("");
  const [isColor, setIsColor] = useState(false);
  const [isAlarm, setIsAlarm] = useState(false);

  useEffect(() => {
    if (!createMode) {
      console.log("dispatching color");
      dispatch(updateNewNoteColor(selectedColor));
    } else {
      setNoteUpdate({
        ...noteUpdate,
        color: selectedColor,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor]);

  return (
    <div className={styles.options}>
      <div className={styles.color}>
        {isColor && (
          <PopInside setLayer={setIsColor} top={-98}>
            <Colors returnColor={setSelectedColor} />
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
      <div className={styles.alarm}>
        <Button
          size="sm"
          customClass="squaer"
          label="Set Alarm"
          type="button"
          onClick={() => setIsAlarm(!isAlarm)}
        >
          <Alarm />
        </Button>
      </div>
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
      {!createMode && (
        <Button type="submit" customClass="light squaer" size="sm" label="Save">
          <Save />
        </Button>
      )}
    </div>
  );
};

export default Options;
