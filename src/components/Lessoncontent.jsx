import React from "react";
import book from "../assets/book.png";
import Generatelessonform from "./Generatelessonform";
import Generatelessonresult from "./Generatelessonresult.jsx";
import Signuptext from "./Signuptext.jsx";
const Lessoncontent = () => {
  return (
    <div className="lesson-content">
      <Signuptext></Signuptext>
      <div className="lessonhead">
        <img src={book} alt="" />
        <h2>Generate Lesson Plans</h2>
      </div>
      <div className="interaction">
        <Generatelessonform />
        <Generatelessonresult></Generatelessonresult>
      </div>
    </div>
  );
};

export default Lessoncontent;
