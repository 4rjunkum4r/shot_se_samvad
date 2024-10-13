import React from "react";

const Footer = () => {
  return (
    <footer className="mb-0 text-center">
      <div className="d-flex align-items-center justify-content-between px-4 py-5">
        <div className=" text-start">
          <p className="fw-bold fs-4">
            Contact Us <i class="fa-solid fa-angles-right mx-2"></i>
            <a
              className="text-dark"
              href="https://instagram.com/shotsesamvad"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram mx-2"></i>
            </a>
            <a
              className="text-dark"
              href="https://youtube.com/shotsesamvad"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-youtube mx-2"></i>

              <a
                href="tel:+916260085106"
                className="text-dark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-phone mx-2"></i>
              </a>

              <a
                href="mailto:shotsesamvad11@gmail.com"
                className="text-dark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-envelope mx-2"></i>
              </a>
            </a>
          </p>
          <br />
        </div>
      </div>
      <p className="mb-3 mb-md-0">Made with ❤️ in Bhopal, India</p>
      <p>Copyright © 2024 - Shot Se Samvad</p>
    </footer>
  );
};

export default Footer;
