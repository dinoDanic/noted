import React from "react";
import { Sticky } from "react-bootstrap-icons";
import { motion } from "framer-motion";

import styles from "./fn-bar.module.scss";
import Item from "./item/item.component";

const FnBar = () => {
  return (
    <div className={styles.fnBar}>
      <motion.div
        className={styles.bar}
        initial={{ y: 60 }}
        animate={{ y: 0 }}
        exit={{ y: 60 }}
      >
        <Item icon={<Sticky size="25" />} />
      </motion.div>
    </div>
  );
};

export default FnBar;
