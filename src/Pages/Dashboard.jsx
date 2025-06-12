import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboardcontent from "../components/Dashboardcontent";
import Signuptext from "../components/Signuptext.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Signuptext></Signuptext>
      <Sidebar></Sidebar>
      <Dashboardcontent></Dashboardcontent>
    </div>
  );
};

export default Dashboard;
