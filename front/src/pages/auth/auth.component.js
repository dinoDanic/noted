import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Login from "../../pages/auth/login/login.component";
import Register from "../../pages/auth/register/register.component";
import styles from "./auth.module.scss";
import { basicAnimation } from "../../theme/animations";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <motion.div
      className={styles.auth}
      variants={basicAnimation}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <AnimatePresence key="something">
        {isLogin && <Login toggle={toggleLogin} key="se" />}
        {!isLogin && <Register toggle={toggleLogin} key="33" />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Auth;
