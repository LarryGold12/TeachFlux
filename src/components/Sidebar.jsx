import React from "react";
import logo from "../assets/logo.png";
import reactlogo from "../assets/react.svg";
import home from "../assets/home.png";
import check from "../assets/check.png";
import lesson from "../assets/note.png";
import message from "../assets/message.png";
import user from "../assets/user.png";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const linkClass = ({ isActive }) => (isActive ? "active" : "");
  return (
    <div className="sidebar">
      <div className="sidebarlogo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <li className={linkClass}>
          <NavLink to="/dashboard">
            <img src={home} alt="" />
            Dashboard
          </NavLink>
        </li>
        <li className={linkClass}>
          <NavLink to="http://127.0.0.1:5000/">
            <img src={lesson} alt="" />
            Lesson Plan
          </NavLink>
        </li>
        <li className={linkClass}>
          <NavLink to="http://127.0.0.1:5001/">
            <img src={check} alt="" />
            Auto-Grade system
          </NavLink>
        </li>
        <li className={linkClass}>
          <NavLink to="http://127.0.0.1:5500/feedback_generator/index.html">
            <img src={message} alt="" />
            Feedback system
          </NavLink>
        </li>
        <li className={linkClass} to="http://127.0.0.1:5001/">
          <NavLink to="/manage">
            <img src={user} alt="" />
            Manage Student
          </NavLink>
        </li>
        {/* <li className={linkClass}>
          <NavLink to="/setting">
            <img src={reactlogo} alt="" />
            Setting
          </NavLink>
        </li> */}
      </div>
    </div>
  );
};

export default Sidebar;
