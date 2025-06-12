import React, { useState } from "react";

const Generatelessonform = () => {
  const [topic, setTopic] = useState("");
  const [studentclass, setStudentClass] = useState("");
  const [subject, setSubject] = useState("");
  const [language, setLanguage] = useState("");
  return (
    <div className="lesson-generator-form-container">
      <div className="lesson-generator-form">
        <h3>Generate your lesson plan</h3>
        <p>
          Powered by AI - Create comprehensive, engaging lesson plan in seconds
        </p>
        <form action="">
          <input
            type="text"
            required
            placeholder="Enter topic..."
            value={topic}
            onChange={(e) => setTopic((t) => e.target.value)}
          />
          <select
            name=""
            id=""
            value={studentclass}
            onChange={(e) => setStudentClass((c) => e.target.value)}
          >
            <option value="">Select Level</option>
            <option value="PRY1-PRY6">Elementry(PRY1 - PRY6)</option>
            <option value="JSS1-JSS3">Middle School(JSS1 - JSS 3)</option>
            <option value="SS1-SS3">High School(SS1-SS3)</option>
            <option value="university">College/University</option>
          </select>
          <select
            name=""
            id=""
            value={subject}
            onChange={(e) => setSubject((s) => e.target.value)}
          >
            <option value="">Select Subject</option>
            <option value="">Mathematics</option>
            <option value="english">English</option>
            <option value="science">Science</option>
            <option value="arts">Arts</option>
            <option value="commercial">Commercial</option>
            <option value="others">Others</option>
          </select>
          <select
            name=""
            id=""
            value={language}
            onChange={(e) => setLanguage((l) => e.target.value)}
          >
            <option value="">Select Language</option>
            <option value="englis">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="portugese">Portugese</option>
            <option value="arabic">Arabic</option>
            <option value="others">Others</option>
          </select>
          <button>Generate Lesson Plan</button>
        </form>
      </div>
    </div>
  );
};

export default Generatelessonform;
