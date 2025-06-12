// src/components/Signupform.jsx
import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

// Use import instead of require (Vite/ESM compatible)
import hideIcon from "../assets/hide.png";
import revealIcon from "../assets/reveal.png";

const Signupform = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/dashboard"); // Navigate after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signupform-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <section className="name">
          <div className="input">
            <input type="text" required ref={firstNameRef} />
            <label>First name</label>
          </div>
          <div className="input">
            <input type="text" required ref={lastNameRef} />
            <label>Last name</label>
          </div>
        </section>
        <div className="input">
          <input type="email" required ref={emailRef} />
          <label>Email</label>
        </div>
        <div className="input">
          <input
            type={showPassword ? "text" : "password"}
            required
            ref={passwordRef}
          />
          <label>Password</label>
          <span>
            <img
              src={showPassword ? revealIcon : hideIcon}
              alt="Toggle password"
              onClick={togglePassword}
              style={{ cursor: "pointer" }}
            />
          </span>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Create Account</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <section className="linethrough">
          <hr /> or <hr />
        </section>
        <div className="signup-methods">
          <button
            className="signupbtn"
            onClick={handleGoogleSignup}
            type="button"
          >
            <span>
              <img src={google} alt="" />
            </span>
            Continue with Google
          </button>
          <button className="signupbtn" type="button">
            <span>
              <img src={facebook} alt="" />
            </span>
            Continue with Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signupform;
