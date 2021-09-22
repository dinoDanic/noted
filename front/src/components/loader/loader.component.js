import React from "react";
import { useSelector } from "react-redux";
import { CloudCheck } from "react-bootstrap-icons";
import { Spinner } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./loader.module.scss";

const Loader = () => {
  const cloudUpload = useSelector((state) => state.body.cloudUpload);
  const cloudDone = useSelector((state) => state.body.cloudDone);

  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <div className={styles.loader}>
      <AnimatePresence exitBeforeEnter>
        {cloudUpload && (
          <motion.div
            key="spinner"
            variants={animation}
            animate="animate"
            initial="initial"
            exit="exit"
          >
            <Spinner animation="border" variant="light" size="sm" />
          </motion.div>
        )}
        {cloudDone && !cloudUpload && (
          <motion.div
            key="cloud"
            variants={animation}
            animate="animate"
            initial="initial"
            exit="exit"
          >
            <CloudCheck size={28} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loader;
