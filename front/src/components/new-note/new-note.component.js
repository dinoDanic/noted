import React, { useState, useEffect, useRef } from "react";
import styles from "./new-note.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { createNote } from "../../redux/notes/notes.actions";

import Input from "../ui/input/input.component";
import Textarea from "../ui/textarea/textarea.component";

import Card from "../ui/card/card.component";
import Options from "../options/options.component";

const NewNote = () => {
  const newNote = useSelector((state) => state.newNote);
  const dispatch = useDispatch();
  const textRef = useRef();
  const [noteData, setNoteData] = useState({
    title: "",
    text: "",
    color: newNote.color,
  });

  useEffect(() => {
    textRef.current.focus();
  }, []);

  useEffect(() => {
    setNoteData({
      ...noteData,
      color: newNote.color,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newNote]);

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
        <Card shadow padding="md" color={newNote.color}>
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
                empty
                placeholder="Note.."
                name="text"
                onChange={(e) => setChange(e)}
              />
            </div>
            <Options />
          </form>
        </Card>
      </div>
    </div>
  );
};

export default NewNote;
