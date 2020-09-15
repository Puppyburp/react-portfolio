import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span>&copy; 2020 - React Portfolio - JLW </span>
          <ul className="social-networks">
        <li>
          <a href="https://www.linkedin.com/in/jennifer-walason/">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Puppyburp">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
