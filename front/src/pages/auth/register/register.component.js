import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { newUser } from "../../../redux/user/user.actions";

import styles from "./register.module.scss";

import Paper from "../../../components/ui/paper/paper.component";
import Input from "../../../components/ui/input/input.component";
import { motion } from "framer-motion";
import { basicAnimation } from "../../../theme/animations";

const Register = ({ toggle }) => {
  const dispatch = useDispatch();
  const [buttonValid, setButtonValid] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [newUserData, setNewUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (
      newUserData.email === "" ||
      newUserData.password === "" ||
      !newUserData.email.includes("@")
    ) {
      setButtonValid(false);
    } else {
      setButtonValid(true);
    }
  }, [newUserData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUserData.password !== repeatPassword) {
      alert("passwords  do not match");
      return;
    }
    if (newUserData.email === "") {
      alert("enter email");
      return;
    }
    dispatch(newUser(newUserData));
  };

  return (
    <motion.div
      className={styles.register}
      variants={basicAnimation}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <Paper color="yellow" title="Register" icon="sticky">
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <div className={styles.info}>Email:</div>
              <Input
                type="email"
                onChange={(e) =>
                  setNewUserData({ ...newUserData, email: e.target.value })
                }
              />
            </li>
            <li>
              <div className={styles.info}>Password:</div>
              <Input
                type="password"
                onChange={(e) =>
                  setNewUserData({ ...newUserData, password: e.target.value })
                }
              />
            </li>
            <li>
              <div className={styles.info}>Repeat Pass:</div>
              <Input
                autoComplete="off"
                type="password"
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </li>
          </ul>
          <div className={styles.button}>
            <Button type="submit" size="sm" disabled={!buttonValid}>
              Register
            </Button>
          </div>
        </form>
      </Paper>
      <div className={styles.login} onClick={toggle}>
        <p>Login</p>
      </div>
    </motion.div>
  );
};

export default Register;
