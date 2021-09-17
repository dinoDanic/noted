import React, { useState } from "react";
import { Sticky } from "react-bootstrap-icons";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./fn-bar.module.scss";
import Item from "./item/item.component";
import NewNote from "../new-note/new-note.component";
import Pop from "../ui/pop/pop.component";

const FnBar = () => {
  const [showNote, setShowNote] = useState(false);
  const toggleShow = () => {
    setShowNote(!showNote);
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
        {showNote && (
          <Pop show={showNote} setShow={toggleShow} variant="buttom" key="tet">
            <NewNote />
          </Pop>
        )}
      </AnimatePresence>
    </>
  );
};

export default FnBar;
