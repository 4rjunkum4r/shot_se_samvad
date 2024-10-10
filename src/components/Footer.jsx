import React from "react";

const Footer = () => {
  return (
    <footer className="mb-0 text-center">
      <div className="d-flex align-items-center justify-content-between px-4 py-5">
        <div className="col-md-6 text-start">
          <p className="mb-3 mb-md-0">
            Made with ❤️ by Arjun Kumar
            <a
              className="text-dark fs-4 me-3 mx-1"
              href="https://github.com/4rjunkum4r"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
          </p>
        </div>

        <div className="col-md-6 text-md-start text-start">
          <div className="mb-3">
            <p className="fw-bold">Contact Us:</p> {/* Bold text */}
            <i className="fa fa-phone me-2 mx-1"></i>
            <a
              href="tel:+1234567890"
              className="text-dark"
              target="_blank"
              rel="noreferrer"
            >
              +91 123 456 7890
            </a>
            <i className="fa fa-envelope me-2 mx-1"></i>
            <a
              href="mailto:shotsesamvad@gmail.com"
              className="text-dark"
              target="_blank"
              rel="noreferrer"
            >
              shotsesamvad@gmail.com
            </a><br/>
            <a
              className="text-dark fs-4 me-3 mx-1"
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              className="text-dark fs-4 me-3 mx-1"
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="text-dark fs-4 me-3 mx-1"
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
