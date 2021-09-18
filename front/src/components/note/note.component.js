import React, { useState, useEffect } from "react";
import { CloudArrowUp, CloudCheck } from "react-bootstrap-icons";
import styles from "./note.module.scss";

import Input from "../ui/input/input.component";
import Textarea from "../ui/textarea/textarea.component";
import NoteMenu from "./note-menu/note-menu.component";
import FooterFn from "./footer-fn/footer-fn.component";

import { updateNote } from "../../api";

const Note = React.memo(({ note, color }) => {
  const { title, text, _id } = note;
  const [cloudUpload, setCloudUpload] = useState(false);
  const [cloudDone, setCloudDone] = useState(false);
  const [newNote, setNewNote] = useState({
    title: title,
    text: text,
    _id: _id,
  });

  useEffect(() => {
    let timeout = null;
    if (newNote.title !== title || newNote.text !== text) {
      setCloudUpload(true);
      timeout = setTimeout(function () {
        handleUpdate();
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [newNote]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  };

  const handleUpdate = async () => {
    try {
      await updateNote(_id, newNote);
    } catch (error) {
      console.log(error.message);
      alert("something went wrong with updating the note, try again latter!");
      setCloudUpload(false);
      return;
    }
    setCloudUpload(false);
    setCloudDone(true);
    setTimeout(() => setCloudDone(false), 2000);
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
      <div className={styles.save}>
        {cloudUpload && <CloudArrowUp />}
        {cloudDone && <CloudCheck />}
      </div>
      <div className={styles.menu}>
        <NoteMenu id={_id} />
      </div>
      <FooterFn />
    </div>
  );
});

export default Note;
