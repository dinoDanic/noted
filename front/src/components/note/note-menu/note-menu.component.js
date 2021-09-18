import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./note-menu.module.scss";
import PopInside from "../../ui/pop-inside/pop-inside.component";
import { NavDropdown } from "react-bootstrap";
import { deleteNote } from "../../../redux/notes/notes.actions";

const NoteMenu = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteNote(id));
  };
  return (
    <div className={styles.noteMenu}>
      <NavDropdown menuVariant="dark">
        <NavDropdown.Item onClick={handleDelete}>Delete</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default NoteMenu;
