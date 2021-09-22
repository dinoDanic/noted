import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./note.module.scss";

import Input from "../ui/input/input.component";
import Textarea from "../ui/textarea/textarea.component";
import Card from "../ui/card/card.component";
import Options from "../../components/options/options.component";

import { updateNote } from "../../redux/notes/notes.actions";

const Note = ({ note }) => {
  const { title, text, _id, color } = note;
  const dispatch = useDispatch();
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [noteUpdate, setNoteUpdate] = useState({
    title: title,
    text: text,
    _id: _id,
    color: color,
  });
  useEffect(() => {
    let timeout = null;
    timeout = setTimeout(function () {
      dispatch(updateNote(noteUpdate));
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteUpdate]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNoteUpdate({
      ...noteUpdate,
      [name]: value,
    });
  };

  useEffect(() => {
    setNoteUpdate({
      ...noteUpdate,
      color: color,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  return (
    <div
      className={styles.note}
      onMouseEnter={() => setOptionsVisible(true)}
      onMouseLeave={() => setOptionsVisible(false)}
    >
      <Card padding="md" color={noteUpdate.color}>
        <div className={styles.header}>
          <Input
            name="title"
            empty
            placeholder="Title.."
            value={noteUpdate.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.content}>
          <Textarea
            name="text"
            empty
            placeholder="Note.."
            value={noteUpdate.text}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Options
          setNoteUpdate={setNoteUpdate}
          noteUpdate={noteUpdate}
          createMode
          visible={optionsVisible}
        />
      </Card>
    </div>
  );
};

export default Note;
