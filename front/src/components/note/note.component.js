import React, { useState, useEffect } from "react";
import { CloudArrowUp, CloudCheck } from "react-bootstrap-icons";
import styles from "./note.module.scss";

import Input from "../ui/input/input.component";
import Textarea from "../ui/textarea/textarea.component";
import NoteMenu from "./note-menu/note-menu.component";
import FooterFn from "./footer-fn/footer-fn.component";
import Card from "../ui/card/card.component";
import Options from "../../components/options/options.component";

import { updateNote } from "../../api";

const Note = React.memo(({ note, color }) => {
  console.log(note, color);
  const { title, text, _id } = note;
  const [cloudUpload, setCloudUpload] = useState(false);
  const [cloudDone, setCloudDone] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [emptyNote, setEmptyNote] = useState(false);
  const [noteUpdate, setNoteUpdate] = useState({
    title: title,
    text: text,
    _id: _id,
  });

  useEffect(() => {
    let timeout = null;
    if (noteUpdate.title !== title || noteUpdate.text !== text) {
      setCloudUpload(true);
      timeout = setTimeout(function () {
        handleUpdate();
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteUpdate]);

  useEffect(() => {
    if (title === "" && text === "") {
      setEmptyNote(true);
    } else {
      setEmptyNote(false);
    }
  }, [title, text]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNoteUpdate({
      ...noteUpdate,
      [name]: value,
    });
  };

  const handleUpdate = async () => {
    try {
      await updateNote(_id, noteUpdate);
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
    <div
      className={styles.note}
      onMouseEnter={() => setOptionsVisible(true)}
      onMouseLeave={() => setOptionsVisible(false)}
    >
      <Card padding="md" color={note.color}>
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
        <div className={styles.save}>
          {cloudUpload && <CloudArrowUp size={15} />}
          {cloudDone && <CloudCheck size={15} />}
        </div>
        <Options save={false} visible={optionsVisible} />
      </Card>
    </div>
  );
});

export default Note;
