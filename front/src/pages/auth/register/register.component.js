import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { basicAnimation } from "../../../theme/animations";
import { newUser } from "../../../redux/user/user.actions";
import styles from "./register.module.scss";

import Button from "../../../components/ui/button/button.component";
import Input from "../../../components/ui/input/input.component";

const Register = () => {
  const dispatch = useDispatch();
  const [buttonValid, setButtonValid] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [newUserData, setNewUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (
      newUserData.email === "" ||
      newUserData.password === "" ||
      repeatPassword === "" ||
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
    if (!buttonValid) return;
    setButtonValid(false);
    setButtonLoading(true);
    setTimeout(() => {
      dispatch(newUser(newUserData));
      setButtonValid(true);
      setButtonLoading(false);
    }, 500);
  };

  return (
    <motion.div
      className={styles.register}
      variants={basicAnimation}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          center
          type="email"
          onChange={(e) =>
            setNewUserData({ ...newUserData, email: e.target.value })
          }
        />

        <Input
          type="password"
          label="Password"
          center
          onChange={(e) =>
            setNewUserData({ ...newUserData, password: e.target.value })
          }
        />

        <Input
          label="Repeat Password"
          center
          autoComplete="off"
          type="password"
          onChange={(e) => setRepeatPassword(e.target.value)}
        />

        <div className={styles.button}>
          <Button type="submit" loading={buttonLoading} valid={buttonValid}>
            Register
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default Register;
