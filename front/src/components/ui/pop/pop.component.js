import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./pop.module.scss";
import { popButtom } from "../../../theme/animations";

const Pop = ({ show, setShow, children, variant }) => {
  return (
    <>
      {show &&
        ReactDOM.createPortal(
          <motion.div
            key="1232"
            className={styles.pop}
            variants={popButtom}
            animate="animate"
            initial="initial"
            exit="exit"
          >
            <div className={styles.layer} onClick={() => setShow()} />
            <div className={styles.content}>{children}</div>
          </motion.div>,
          document.getElementById("pop")
        )}
    </>
  );
};

export default Pop;
