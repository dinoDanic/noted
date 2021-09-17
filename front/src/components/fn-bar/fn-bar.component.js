import React, { useState } from "react";
import { Sticky } from "react-bootstrap-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import { setNote } from "../../redux/body/body.actions";

import styles from "./fn-bar.module.scss";
import Item from "./item/item.component";
import NewNote from "../new-note/new-note.component";
import Pop from "../ui/pop/pop.component";

const FnBar = () => {
  const newNote = useSelector((state) => state.body.newNote);
  const dispatch = useDispatch();
  const toggleShow = () => {
    dispatch(setNote(!newNote));
  };
  return (
    <>
      <div className={styles.fnBar}>
        <motion.div
          className={styles.bar}
          initial={{ y: 60 }}
          animate={{ y: 0 }}
          exit={{ y: 60 }}
        >
          <Item icon={<Sticky size="25" />} onClick={toggleShow} />
        </motion.div>
      </div>
      <AnimatePresence key="323">
        {newNote && (
          <Pop show={newNote} setShow={toggleShow} variant="buttom" key="tet">
            <NewNote />
          </Pop>
        )}
      </AnimatePresence>
    </>
  );
};

export default FnBar;
