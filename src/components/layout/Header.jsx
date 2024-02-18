import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const logo = "https://i.ibb.co/3rBPDG1/Logo-SkY.png";
function Header() {
  return (
    <header className="header">
      <nav className="header-top">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-header">
          <ul>
            <li>
              <Link to="/">
                <stromg>Home</stromg>
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
