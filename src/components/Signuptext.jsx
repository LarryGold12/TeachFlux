import React from "react";
import logo from "../assets/logo.png";
const Signuptext = () => {
  return (
    <div className="signup-text">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <section className="writeup">
        <p>Plan Smart</p>
        <p>Grade Fast</p>
        <p>Teach Better</p>
      </section>
    </div>
  );
};

export default Signuptext;
