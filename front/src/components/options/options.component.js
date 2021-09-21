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
import Colors from "../ui/colors/colors.component";

const Options = ({ visible = true, createMode, setNoteUpdate, noteUpdate }) => {
  const dispatch = useDispatch();
  const [isColor, setIsColor] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

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
    <div className={styles.options} style={{ opacity: visible ? 1 : 0 }}>
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
      {!createMode && (
        <Button type="submit" customClass="light squaer" size="sm" label="Save">
          <Save />
        </Button>
      )}
    </div>
  );
};

export default Options;
