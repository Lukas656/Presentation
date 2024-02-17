import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import ComponetCarousel  from "../components/Carousel.jsx";
import './home.css'
import Cards from "../data/cards.js";
import { Link } from "react-router-dom";


function Home() {
  function getCards() {
    return Cards.map((card, i) => (
      <div className="card" key={i}>
        <img src={card.href} alt={card.at} className="card-img"/>
        <div  className="card-info">
              <img src={card.logo} alt={card.alt} className="card-logo" />
              <div className="card-titulo">
              <h2>{card.titulo}</h2> 
              <p>{card.descricao}</p>
              </div>
        </div>
        <Link to={card.url} id="card-link">{card.link}</Link>
      </div>
    ));
  }


  return (
    <>
      <Header />
      <div className="home">
      <div className="info"><p> Minha Apresentaçaõ Front-End <Link to="">Bora Conhecer!</Link></p></div>
        <ComponetCarousel/>
        <section className="destaque-servicos">{getCards()}</section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
