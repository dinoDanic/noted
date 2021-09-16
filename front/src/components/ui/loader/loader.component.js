import ReactDOM from "react-dom";
import React from "react";
import styles from "./loader.module.scss";
import { useSelector } from "react-redux";

import { Spinner } from "react-bootstrap";

const Loader = () => {
  const isLoading = useSelector((state) => state.body.isLoading);
  const content = (
    <div className={styles.loader}>
      <Spinner animation="border" variant="black" />
    </div>
  );
  return (
    <>
      {isLoading &&
        ReactDOM.createPortal(content, document.getElementById("loader"))}
    </>
  );
};

export default Loader;
