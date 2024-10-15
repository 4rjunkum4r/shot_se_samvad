import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <motion.nav
      className={`navbar navbar-expand-lg ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } py-3 sticky-top`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          Shot Se Samvad
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/videos">
                Videos
              </NavLink>
            </li>
          </ul>
          <div className="ml-auto">
            <motion.button
              className="btn btn-outline-secondary"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"}></i>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
