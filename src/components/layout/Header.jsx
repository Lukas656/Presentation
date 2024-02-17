import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const logo = "https://i.ibb.co/3rBPDG1/Logo-SkY.png"; 

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hideHeaderTop, setHideHeaderTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setHideHeaderTop(currentPosition > scrollPosition);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header className={`header ${hideHeaderTop ? "hide-top" : ""}`}>
      <nav className={`header-top ${hideHeaderTop ? "hide" : ""}`}>
        <div className="header-box1">
          <Link to=""> Conteudo </Link>
        </div>
        <div className="header-box2">
          <p>Theme:</p>
          <button>D</button>
          <button>L</button>
        </div>
      </nav>
      <nav className="header-bottom">
        <img src={logo} alt="Logo" className="logo"/> 
        <div className="nav-header">
          <ul>
            <li>
              <Link to="/"><strong>Home</strong></Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;