import { motion } from "framer-motion";
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
//   let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      <div className="login">
        <h1
          className="contactTitle"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Login
        </h1>
        <div className="rightSide">
          <form id="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ text: "white" }}>
              Email Address:
            </label>
            <input
              name="email"
              placeholder="Enter email id"
              type="email"
              value={credentials.email}
              onChange={onChange}
            ></input>
            <label htmlFor="password"> Password: </label>
            <input
              name="password"
              placeholder="Enter password.."
              type="password"
              value={credentials.password}
              onChange={onChange}
            ></input>
            <button type="submit"> Submit </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
