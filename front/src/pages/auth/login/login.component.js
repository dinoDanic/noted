import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { loginUser } from "../../../redux/user/user.actions";
import { setIsLoading } from "../../../redux/body/body.actions";

import styles from "./login.module.scss";

import Paper from "../../../components/ui/paper/paper.component";
import Input from "../../../components/ui/input/input.component";

const Login = ({ toggle }) => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    dispatch(loginUser(loginData));
  };

  return (
    <div className={styles.register}>
      <Paper color="yellow" title="Login" icon="sticky">
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <div className={styles.info}>Email:</div>
              <Input
                type="email"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </li>
            <li>
              <div className={styles.info}>Password:</div>
              <Input
                type="password"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </li>
          </ul>
          <div className={styles.button}>
            <Button type="submit" size="sm">
              Login
            </Button>
          </div>
        </form>
      </Paper>
      <div className={styles.login} onClick={toggle}>
        <p>Register</p>
      </div>
    </div>
  );
};

export default Login;
