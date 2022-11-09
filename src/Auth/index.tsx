import classNames from "classnames";
import React, { useState } from "react";
import { ReactComponent as LogoSvg } from "../shared/assets/img/logo.svg";
import Login from "./components/Login";

const Auth = () => {
  const [formType, setFormType] = useState<"login" | "signup">("login");

  const loginClasses = classNames({
    "switch-button": true,
    active: formType === "login",
  });

  const signupClasses = classNames({
    "switch-button": true,
    active: formType === "signup",
  });

  return (
    <div className="landing">
      <div className="landing_decoration"></div>
      <div className="landing_info">
        <div className="landing_info-logo">
          <LogoSvg className="logo_img" />
        </div>
        <h3 className="landing_info-subtitle">Welcome to</h3>
        <h1 className="landing_info-title">Vikinger</h1>
        <p className="landing_info-text">
          The next generation social network & community! Connect with your
          friends and play with our quests and badges gamification system!
        </p>
        <div className="landing_info-switch">
          <p className={loginClasses} onClick={() => setFormType("login")}>
            Login
          </p>
          <p className={signupClasses} onClick={() => setFormType("signup")}>
            Register
          </p>
        </div>
      </div>
      <div className="landing_form">
        <Login />
      </div>
    </div>
  );
};

export default Auth;
