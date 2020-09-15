import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <Link className="navbar-brand" to="/">
      <img src={ logo } alt="Logo" />
      </Link>
      <div>
        <ul className="navbar-nav mr-sm-2">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/work"
              className={window.location.pathname === "/work" ? "nav-link active" : "nav-link"}
            >
              Work
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
