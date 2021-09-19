import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import styles from "./pop.module.scss";
import { popButtom } from "../../../theme/animations";

const Pop = ({ show, setShow, children, variant }) => {
  const popStyle = {
    alignItems: variant === "bottom" && "flex-end",
  };
  return (
    <>
      {show &&
        ReactDOM.createPortal(
          <div className={styles.container} style={popStyle}>
            <div className={styles.layer} onClick={() => setShow()} />
            <motion.div
              className={styles.content}
              variants={popButtom}
              animate="animate"
              initial="initial"
              exit="exit"
            >
              {children}
            </motion.div>
          </div>,
          document.getElementById("pop")
        )}
    </>
  );
};

export default Pop;
