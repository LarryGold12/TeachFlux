import React from "react";
import Signuptext from "../components/Signuptext";
import Loginform from "../components/Loginform";
const Loginpage = () => {
  return (
    <div className="login-container">
      <Loginform></Loginform>
      <Signuptext></Signuptext>
    </div>
  );
};

export default Loginpage;
