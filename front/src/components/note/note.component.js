import React, { useState } from "react";
import styles from "./note.module.scss";

import Paper from "../ui/paper/paper.component";
import Input from "../ui/input/input.component";
import Textarea from "../ui/textarea/textarea.component";

const Note = ({ note, color }) => {
  const { title, text } = note;
  const [newNote, setNewNote] = useState({
    title: title,
    text: text,
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNewNote({
      ...newNote,
      [name]: value,
    });
    let time = 5;
  };
  return (
    <div className={styles.note} style={{ backgroundColor: `var(--${color})` }}>
      <div className={styles.header}>
        <Input
          name="title"
          empty
          value={newNote.title}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={styles.content}>
        <Textarea
          name="text"
          empty
          value={newNote.text}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default Note;
