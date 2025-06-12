import React from "react";
import hide from "../assets/hide.png";
import note from "../assets/note.png";
import check from "../assets/orangecheck.png";
import progress from "../assets/increase.png";
import user from "../assets/yellowuser.png";
import calender from "../assets/calender.png";
import book from "../assets/book.png";
import menu from "../assets/menu.png";
import pencil from "../assets/pencil.png";
import headphone from "../assets/headphone.png";
import speaker from "../assets/speaker.png";
import chart from "../assets/chart.jpg";
import message from "../assets/message.png";
import { useNavigate } from "react-router-dom";
const Dashboardcontent = () => {
  const openInNewTab = () => {
    window.open("http://127.0.0.1:5000", "_blank");
  }
  const openInNewTab2 = () => {
    window.open("http://127.0.0.1:5500/feedback_generator/index.html", "_blank");
  }
  const openInNewTab3 = () => {
    window.open("http://127.0.0.1:5001/", "_blank");
  }
  const navigate = useNavigate();
  const date = new Date();
  const day = date.getDate()
  const month = date.toLocaleString("default", {month:"long"})
  const year = date.getFullYear()
  const formatDate = `${day} ${month} ${year}`
  return (
    <div className="dashboard-content">
      <h2>Dashboard</h2>
      <div className="main-content">
        <div className="focus">
          <section onClick={openInNewTab}>
            <img src={note} alt="" />
            <h4>Generate Lesson Plan</h4>
            <p>Create comprehensvive lesson plans with AI assistance</p>
            <p className="progress">
              <img src={progress} alt="" />
              15 plans created
            </p>
          </section>
          <section onClick={openInNewTab3}>
            <img src={check} alt="" />
            <h4>Auto Grade System</h4>
            <p>Create comprehensvive lesson plans with AI assistance</p>
            <p className="progress">
              <img src={progress} alt="" />
              23 assignments graded
            </p>
          </section>
          <section  onClick={openInNewTab2}>
            <img src={message} alt="" />
            <h4>Feedback Generator</h4>
            <p>Generate personalized feeback from students performance</p>
            <p className="progress">
              <img src={progress} alt="" />8 feedback report
            </p>
          </section>
          <section onClick={openInNewTab3}>
            <img src={user} alt=""/>
            <h4>Manage Students</h4>
            <p>View and organise your student roaster</p>
            <p className="progress">
              <img src={progress} alt="" />
              15 plans created
            </p>
          </section>
        </div>
        <div className="recent-activities">
          <h4>Recent Activity</h4>
          <section>
            <h4>Created lesson </h4>
            <p>Algebra 1</p>
            <small>2 hours ago</small>
          </section>
          <section>
            <h4>Graded Assignment </h4>
            <p>History Essay</p>
            <small>4 hours ago</small>
          </section>
          <section>
            <h4>Generated Feedback </h4>
            <p>Science project</p>
            <small>1 day ago</small>
          </section>
        </div>
        <div className="planning">
          <div className="planning-head">
            <h3>
              Planning <sub>View All</sub>
            </h3>
            <div className="date">
              <img src={calender} alt="" />
              <h2>{formatDate}</h2>
            </div>
          </div>
          <div className="planning-body">
            <section>
              <span>
                <img src={book} alt="" />
              </span>
              <div className="txt">
                <h4>Reading- Beginner Topic 1</h4>
                <small>8:00AM - 10:00AM</small>
              </div>
              <img src={menu} alt="" className="menu" />
            </section>
            <section>
              <span>
                <img src={pencil} alt="" />
              </span>
              <div className="txt">
                <h4>Reading- Beginner Topic 1</h4>
                <small>01:00PM - 02:00PM</small>
              </div>
              <img src={menu} alt="" className="menu" />
            </section>
            <section>
              <span>
                <img src={headphone} alt="" />
              </span>
              <div className="txt">
                <h4>Listening- Intermediate Topic 1</h4>
                <small>03:00PM - 04:00PM</small>
              </div>
              <img src={menu} alt="" className="menu" />
            </section>
            <section>
              <span>
                <img src={speaker} alt="" />
              </span>
              <div className="txt">
                <h4>Speaking- Advanced Topic 1</h4>
                <small>07:00PM - 08:00PM</small>
              </div>
              <img src={menu} alt="" className="menu" />
            </section>
            <section>
              <span>
                <img src={speaker} alt="" />
              </span>
              <div className="txt">
                <h4>Speaking- Beginner topic 1</h4>
                <small>08:00AM - 12:00AM</small>
              </div>
              <img src={menu} alt="" className="menu" />
            </section>
            <section>
              <span>
                <img src={headphone} alt="" />
              </span>
              <div className="txt">
                <h4>Listening- Beginner Topic 1</h4>
                <small>08:00AM - 12:00PM</small>
              </div>
              <img src={menu} alt="" className="menu" />
            </section>
          </div>
        </div>
        <div className="stat">
          <img src={chart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboardcontent;
