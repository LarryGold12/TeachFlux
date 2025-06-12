import React from "react";
import Sidebar from "../components/Sidebar";
import Lessoncontent from "../components/Lessoncontent";

const Lessonpage = () => {
  return (
    <div className="lesson-container">
      <Sidebar></Sidebar>
      <Lessoncontent></Lessoncontent>
    </div>
  );
};

export default Lessonpage;
