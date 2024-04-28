import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useFirebase } from "../context/firebase";

const Register = () => {
  const { signupUserWithEmailandPassword, isLoggedIn } = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SignIn up a user..........");
    try {
      const result = await signupUserWithEmailandPassword(email, password);
      console.log("Successful", result);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="form">
      <p>
        Welcome,<span>sign un to continue</span>
      </p>

      <div className="separator">
        <div></div>
        <span>OR</span>
        <div></div>
      </div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="oauthButton" type="submit">
          Continue
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 17 5-5-5-5"></path>
            <path d="m13 17 5-5-5-5"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Register;
