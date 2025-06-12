import React from "react";
import Gradeform from "./Gradeform.jsx";
import Graderesult from "./Graderesult.jsx";
import Signuptext from "./Signuptext.jsx";
const Gradecontent = () => {
  return (
    <div className="grade-content">
      <Signuptext></Signuptext>
      <div className="gradeheader">
        <h2>AI Auto-Grading System</h2>
      </div>
      <div className="interaction">
        <Gradeform></Gradeform>
        <Graderesult></Graderesult>
      </div>
    </div>
  );
};

export default Gradecontent;
