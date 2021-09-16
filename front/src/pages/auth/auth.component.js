import React, { useState } from "react";
import Login from "../../pages/auth/login/login.component";
import Register from "../../pages/auth/register/register.component";
import styles from "./auth.module.scss";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className={styles.auth}>
      {isLogin ? (
        <Login toggle={toggleLogin} />
      ) : (
        <Register toggle={toggleLogin} />
      )}
    </div>
  );
};

export default Auth;
