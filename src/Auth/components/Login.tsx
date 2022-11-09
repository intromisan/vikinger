import React from "react";
import RocketImg from "../../shared/assets/img/rocket.png";

const Login = () => {
  return (
    <div className="form-box">
      <div className="form-box_decorator">
        <img src={RocketImg} alt="Rocket" />
      </div>
      <h2 className="form-box_big-title">Login</h2>
    </div>
  );
};

export default Login;
