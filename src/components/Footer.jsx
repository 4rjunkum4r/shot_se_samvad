// src/components/Footer.jsx
import React from 'react';
import './footer.css'; // Ensure to import the corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-section">
          <p className="fw-bold fs-4">
            Contact Us <i className="fa-solid fa-angles-right mx-2"></i>
            <a
              className="text-light"
              href="https://instagram.com/shotsesamvad"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fa fa-instagram mx-2"></i>
            </a>
            <a
              className="text-light"
              href="https://youtube.com/shotsesamvad"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <i className="fa fa-youtube mx-2"></i>
            </a>
            <a
              className="text-light"
              href="mailto:shotsesamvad11@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <i className="fa fa-envelope mx-2"></i>
            </a>
          </p>
        </div>
        <div className="footer-section">
          <p>Made with ❤️ in Bhopal, India</p>
          <p>Copyright © 2024 - Shot Se Samvad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
