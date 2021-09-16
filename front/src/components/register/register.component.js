import React, { useState } from "react";
import { Button } from "react-bootstrap";

import styles from "./register.module.scss";

import Paper from "../ui/paper/paper.component";
import Input from "../ui/input/input.component";

const Register = () => {
  const [repeatPassword, setRepeatPassword] = useState("");
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.password !== repeatPassword) {
      alert("passwords  do not match");
      return;
    }
  };
  return (
    <div className={styles.register}>
      <Paper color="yellow" title="Register" icon="sticky">
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <div className={styles.info}>Email:</div>
              <Input
                type="email"
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </li>
            <li>
              <div className={styles.info}>Password:</div>
              <Input
                type="password"
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
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
            <Button type="submit" size="sm">
              Register
            </Button>
          </div>
        </form>
      </Paper>
      <div className={styles.login}>
        <p>Login</p>
      </div>
    </div>
  );
};

export default Register;
