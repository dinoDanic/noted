import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { loginUser } from "../../../redux/user/user.actions";

import styles from "./login.module.scss";
import { basicAnimation } from "../../../theme/animations";

import Input from "../../../components/ui/input/input.component";
import Button from "../../../components/ui/button/button.component";

const Login = () => {
  const dispatch = useDispatch();
  const [buttonValid, setButtonValid] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
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
    if (!buttonValid) return;
    setButtonLoading(true);
    setButtonValid(false);
    setTimeout(() => {
      dispatch(loginUser(loginData));
      setButtonValid(true);
      setButtonLoading(false);
    }, 500);
  };

  return (
    <motion.div
      className={styles.login}
      variants={basicAnimation}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <form onSubmit={handleSubmit}>
        <Input
          center
          type="email"
          label="Email"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <Input
          center
          label="Password"
          type="password"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <div className={styles.button}>
          <Button loading={buttonLoading} valid={buttonValid}>
            Login
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default Login;
