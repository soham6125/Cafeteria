import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Signup.css";

function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      window.location = "/";
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="signup">
        <h1
          className="signupTitle"
          style={{ display: "flex", justifyContent: "center" }}
        >
          SignUp
        </h1>
        <div className="rightSide">
          <form id="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="name" style={{ text: "white" }}>
              Full Name:
            </label>
            <input
              name="name"
              placeholder="Enter full name:"
              type="text"
              onChange={onChange}
            ></input>
            <label htmlFor="email" style={{ text: "white" }}>
              Email Address:
            </label>
            <input
              name="email"
              placeholder="Enter email id"
              type="email"
              onChange={onChange}
            ></input>
            <label htmlFor="password"> Password: </label>
            <input
              name="password"
              placeholder="Enter password.."
              type="password"
              onChange={onChange}
              required
              minLength={5}
            ></input>
            <label htmlFor="password"> Confirm Password: </label>
            <input
              name="cpassword"
              placeholder="Confirm password.."
              type="password"
              onChange={onChange}
              required
              minLength={5}
            ></input>
            <button type="submit"> Submit </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Signup;
