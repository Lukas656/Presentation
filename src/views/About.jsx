import React from "react";
// import { Link } from "react-router-dom";
import "./about.css";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import Perfil from "../assets/Cara do homi.jpg";
import { Link } from "react-router-dom";
import apresentacaoPdf from "../assets/apresentacao.pdf"

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <section className="info">
       
        </section>
        <sectio className="about-info">
          <img src={Perfil} alt="perfil" className="perfil" />
          <div className="apresentation">
            <p>
              Olá! Meu nome é <strong>Lucas Santos Nascimento</strong>, tenho <strong>21 anos</strong>e estou no
              emocionante último semestre da minha jornada na faculdade de
              <strong> Análise e Desenvolvimento de Sistemas</strong>.
            
              Sou um entusiasta da tecnologia desde muito jovem e estou ansioso
              para canalizar minha paixão em uma carreira gratificante. Ao longo
              dos meus estudos, mergulhei em uma variedade de disciplinas, desde
              programação até design de interface do usuário, adquirindo
              habilidades práticas que estou ansioso para aplicar no mundo real.
            
            
              Minha abordagem para resolver problemas é criativa e meticulosa,
              sempre buscando soluções inovadoras e eficientes.
              <strong>Estou agora em busca de uma oportunidade de estágio</strong> onde possa aplicar e expandir
              meus conhecimentos, contribuindo para projetos desafiadores e
              colaborando com uma equipe dinâmica. Estou confiante de que minha
              paixão pela tecnologia, combinada com minha determinação e
              capacidade de aprendizado rápido, me tornam um candidato ideal
              para essa posição.
            
            Estou pronto para enfrentar novos desafios e comprometo-me a trazer
            uma energia positiva e uma ética de trabalho exemplar para qualquer
            equipe. Estou animado para explorar as oportunidades que este
            estágio pode oferecer e contribuir significativamente para o sucesso
            da empresa.
            
              Obrigado pela consideração e estou ansioso para discutir como
              posso fazer a diferença em sua equipe.<br/><br/> 
              Atenciosamente, Lucas Santos Nascimento
            </p>
            <Link to="/projects">Veja aqui alguns dos meus Projetos mais rescentes.</Link>
          </div>
        </sectio>
        <iframe
          src={apresentacaoPdf}
          title="Apresentação"
          width="150px"
          height="900px"
        ></iframe>
        {/* Adicionando um link para download do PDF */}
        <a href={apresentacaoPdf} download className="download-link">
          Baixar CV
        </a>
      </div>
      <Footer />
    </>
  );
}

export default About;
