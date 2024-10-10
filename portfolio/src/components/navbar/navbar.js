import React from "react";
import { Link } from "react-router-dom";
import HRLogo from "../../images/HR-white.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img className="navImage" src={HRLogo} alt="Rizzo, Hugo Logo" />
        </a>
      </div>
      <ul className="nav-links">
      <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Experience">Experience</Link>
        </li>
        <li>
          <Link to="/Works">Works</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
