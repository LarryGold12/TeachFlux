// src/components/Loginform.jsx
import React, { useRef, useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import hide from "../assets/hide.png";
import reveal from "../assets/reveal.png";

const Loginform = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const imgRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
      imgRef.current.src = reveal;
    } else {
      passwordRef.current.type = "password";
      imgRef.current.src = hide;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/dashboard"); // replace with your actual post-login page
    } catch (err) {
      setError("Invalid email or password");
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
    <div className="loginform-container">
      <h2>Welcome back</h2>
      <p>
        Let's make today more productive. <br />
        Login to continue inspiring your students
      </p>
      <form onSubmit={handleLogin}>
        <div className="input">
          <input type="email" required ref={emailRef} />
          <label>Email</label>
        </div>
        <div className="input">
          <input type="password" required ref={passwordRef} />
          <label>Password</label>
          <span>
            <img
              src={hide}
              alt="Toggle visibility"
              onClick={togglePassword}
              ref={imgRef}
            />
          </span>
        </div>
        <Link to="" className="forget-password">
          Forget Password?
        </Link>
        {error && <p style={{ color: "red", marginBottom: "0" }}>{error}</p>}
        <button type="submit">Sign in</button>
        <p>
          New to TeachFlux? <Link to="/">Sign up</Link>
        </p>
        <section className="linethrough">
          <hr /> or <hr />
        </section>
        <div className="signup-methods">
          <button
            className="signupbtn"
            type="button"
            onClick={handleGoogleSignup}
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

export default Loginform;
