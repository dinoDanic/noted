import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import styles from "./home.module.scss";
import { getNotes } from "../../redux/notes/notes.actions";
import { noteEnter } from "../../theme/animations";

import Note from "../../components/note/note.component";

const Home = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);
  return (
    <>
      <div className={styles.home}>
        <div className={styles.noteWrap}>
          <h1>Notes</h1>
          <div className={styles.noteFlex}>
            {notes.map((note) => {
              return (
                <motion.div
                  key={note._id}
                  className={styles.holdNote}
                  variants={noteEnter}
                  animate="animate"
                  initial="initial"
                  exit="exit"
                >
                  <Note note={note} color="yellow" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
