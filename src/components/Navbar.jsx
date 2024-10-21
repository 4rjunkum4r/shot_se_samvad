// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import './navbar.css'; // Importing the CSS file for Navbar
import { FaSun, FaMoon } from 'react-icons/fa'; // Importing icons

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false); // State to manage menu visibility

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const handleToggleMenu = () => {
    setMenuActive(!menuActive); // Toggle the menu active state
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`navbar navbar-expand-lg ${isScrolled ? 'scrolled' : ''} ${theme}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Shot Se Samvad
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleMenu} // Toggle menu on click
          aria-controls="navbarMenu"
          aria-expanded={menuActive}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">☰</span> {/* Hamburger icon */}
        </button>
        <div className={`navbar-menu ${menuActive ? 'active' : ''}`} id="navbarMenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/videos">
                Videos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/editor">
                Script Editor
              </NavLink>
            </li>
            <li className="nav-item">
              <motion.button
                className="btn-theme-toggle"
                onClick={toggleTheme} // Call the toggleTheme function
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
