import React from "react";
import Sidebar from "../components/Sidebar";
import Gradecontent from "../components/Gradecontent";
const Gradepage = () => {
  return (
    <div className="gradepage-container">
      <Sidebar></Sidebar>
      <Gradecontent></Gradecontent>
    </div>
  );
};

export default Gradepage;
