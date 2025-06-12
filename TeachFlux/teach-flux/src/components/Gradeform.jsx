import React, { useState } from "react";

const Gradeform = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  return (
    <div className="gradeform-container">
      <div className="gradeform-form">
        <h3>Submit Student Work</h3>
        <p>
          Upload or paste student answers for AI-powered grading and feedback
        </p>
        <form action="">
          <input
            type="text"
            required
            placeholder="Enter the original question or assignment prompt..."
            value={question}
            onChange={(e) => setQuestion((q) => e.target.value)}
          />
          <p>Paste Student Answer text here:</p>
          <input
            type="text"
            className="student-answer"
            placeholder="Paste the Student's answer here..."
            value={answer}
            onChange={(e) => setAnswer((a) => e.target.value)}
          />
          <button>Grade with AI</button>
        </form>
      </div>
    </div>
  );
};

export default Gradeform;
