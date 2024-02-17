import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./notfound.css";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

function About() {

  return (
    <div className="about">
     <Header/>
     <h1>About</h1>

      <Footer />
    </div>
  );
}

export default About;
