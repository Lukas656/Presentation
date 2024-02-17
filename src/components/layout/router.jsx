import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../views/Home.jsx";
import Login from "../../views/Login.jsx";
import About from "../../views/About.jsx";
import NotFound from "../../views/NotFound.jsx";


const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
