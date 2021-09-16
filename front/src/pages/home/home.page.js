import React from "react";

import styles from "./home.module.scss";

import NewNote from "../../components/new-note/new-note.component";

const Home = () => {
  return (
    <div className={styles.home}>
      <NewNote />
    </div>
  );
};

export default Home;
