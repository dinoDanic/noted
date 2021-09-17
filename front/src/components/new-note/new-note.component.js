import React, { useState } from "react";
import styles from "./new-note.module.scss";
import { useDispatch } from "react-redux";

import { createNote } from "../../redux/notes/notes.actions";

import Input from "../ui/input/input.component";
import Paper from "../ui/paper/paper.component";
import Textarea from "../ui/textarea/textarea.component";
import { Button } from "react-bootstrap";
import { Save } from "react-bootstrap-icons";

const NewNote = () => {
  const dispatch = useDispatch();

  const [noteData, setNoteData] = useState({
    title: "",
    text: "",
  });

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
        <Paper color="yellow">
          <form onSubmit={handleSubmit}>
            <div className="addTitle">
              <Input
                name="title"
                empty
                placeholder="Title.."
                onChange={(e) => setChange(e)}
              />
            </div>
            <div className="addText">
              <Textarea
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
        </Paper>
      </div>
    </div>
  );
};

export default NewNote;
