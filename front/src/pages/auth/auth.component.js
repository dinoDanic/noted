import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "react-bootstrap-icons";

import Login from "../../pages/auth/login/login.component";
import Register from "../../pages/auth/register/register.component";
import Card from "../../components/ui/card/card.component";

import styles from "./auth.module.scss";
import { basicAnimation } from "../../theme/animations";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  const loginStyle = {
    opacity: isLogin ? 1 : 0.5,
  };

  const arrowStyle = {
    transform: !isLogin && "rotate(180deg)",
  };
  const registerStyle = { opacity: !isLogin ? 1 : 0.5 };
  return (
    <motion.div
      className={styles.auth}
      variants={basicAnimation}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <div className={styles.holder}>
        <div className={styles.switcher}>
          <div
            className={styles.login}
            style={loginStyle}
            onClick={toggleLogin}
          >
            Login
          </div>
          <div className={styles.arrow} style={arrowStyle}>
            <ArrowRight />
          </div>
          <div
            className={styles.register}
            style={registerStyle}
            onClick={toggleLogin}
          >
            Register
          </div>
        </div>
        <AnimatePresence exitBeforeEnter key="something">
          <Card shadow padding="md">
            {isLogin && <Login key="login" />}
            {!isLogin && <Register key="regiseter" />}
          </Card>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Auth;
