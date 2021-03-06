import React from "react";
import "../styles/Home.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home" id="home">
        <div className="headerContainer">
          <h1> Cafeteria </h1>
          <p> Let us make your day! </p>
          <a href="#menu" style={{ textDecoration: "none" }}>
            <Link
              to="menu"
              activeClass="active"
              smooth={true}
              duration={500}
              style={{ fontSize: 15 }}
            >
            <button className="primary-button" id="order_btn">
              <NavLink to="/menu">
                <span style={{ color: 'white' }}> Order Now </span>
              </NavLink>
            </button>
            </Link>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
