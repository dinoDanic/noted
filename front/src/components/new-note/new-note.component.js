import React, { useState, useEffect, useRef } from "react";
import styles from "./new-note.module.scss";
import { useDispatch } from "react-redux";

import { createNote } from "../../redux/notes/notes.actions";

import Input from "../ui/input/input.component";
import Textarea from "../ui/textarea/textarea.component";
import { Button } from "react-bootstrap";
import { Save } from "react-bootstrap-icons";
import Card from "../ui/card/card.component";

const NewNote = () => {
  const dispatch = useDispatch();
  const textRef = useRef();
  const [noteData, setNoteData] = useState({
    title: "",
    text: "",
  });

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const setChange = (e) => {
    const target = e.target.name;
    const value = e.target.value;
    setNoteData({
      ...noteData,
      [target]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote(noteData));
  };

  return (
    <div className={styles.newNote}>
      <div className={styles.noteHolder}>
        <Card shadow padding="sm">
          <form onSubmit={handleSubmit}>
            <div className={styles.addTitle}>
              <Input
                name="title"
                empty
                placeholder="Title.."
                onChange={(e) => setChange(e)}
              />
            </div>
            <div className="addText">
              <Textarea
                theRef={textRef}
                placeholder="Note.."
                name="text"
                onChange={(e) => setChange(e)}
              />
            </div>
            <div className={styles.button}>
              <Button type="submit" variant="light" size="sm">
                <Save />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default NewNote;
