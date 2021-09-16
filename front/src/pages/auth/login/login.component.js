import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { loginUser } from "../../../redux/user/user.actions";
import { setIsLoading } from "../../../redux/body/body.actions";

import styles from "./login.module.scss";
import { basicAnimation } from "../../../theme/animations";

import Paper from "../../../components/ui/paper/paper.component";
import Input from "../../../components/ui/input/input.component";

const Login = ({ toggle }) => {
  const dispatch = useDispatch();
  const [buttonValid, setButtonValid] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (
      loginData.email === "" ||
      loginData.password === "" ||
      !loginData.email.includes("@")
    ) {
      setButtonValid(false);
    } else {
      setButtonValid(true);
    }
  }, [loginData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    dispatch(loginUser(loginData));
  };

  return (
    <motion.div
      className={styles.register}
      variants={basicAnimation}
      animate="animate"
      initial="initial"
      exit="exit"
      style={{ width: "400px" }}
    >
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
            <Button type="submit" size="sm" disabled={!buttonValid}>
              Login
            </Button>
          </div>
        </form>
      </Paper>
      <div className={styles.login} onClick={toggle}>
        <p>Register</p>
      </div>
    </motion.div>
  );
};

export default Login;
