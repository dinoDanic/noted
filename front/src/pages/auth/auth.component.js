import React, { useState } from "react";
import Login from "../../pages/auth/login/login.component";
import Register from "../../pages/auth/register/register.component";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      {isLogin ? (
        <Login toggle={toggleLogin} />
      ) : (
        <Register toggle={toggleLogin} />
      )}
    </div>
  );
};

export default Auth;
