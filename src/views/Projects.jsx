import React from "react";
import ProjectThumbnail from "../components/ProjectThumbnail.jsx"; 
import "./projects.css";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
const project1Image = "https://i.ibb.co/0mrcn39/Captura-de-tela-2024-02-18-225300.png"; 
const project2Image = "https://i.ibb.co/BsVwQyj/Captura-de-tela-2024-02-18-232223.png"; 
const project3Image = "https://i.ibb.co/RvRw8Sj/Captura-de-tela-2024-02-18-233422.png"; 
const project4Image = "https://i.ibb.co/23KnydG/Captura-de-tela-2024-02-18-224226.png"; 
const project5Image = "https://i.ibb.co/DkyqZ9Y/Captura-de-tela-2024-02-18-225551.png"; 
const project6Image = "https://i.ibb.co/nDGSfT7/Batman.png"; 

function Projects() {
  // Defina os detalhes de seus projetos (título, URL e imagem)
  const projects = [
    {
      title: "Fundamentos React",
      imageUrl: project1Image,
      url: "https://celadon-peony-cc43be.netlify.app",
    },
    {
      title: "Calculator-React",
      url: "https://65d2baf69917de0008db318d--delicate-youtiao-2ae17e.netlify.app",
      imageUrl: project2Image,
    },
    {
      title: "Projeto Fotografia",
      url: "https://65d2be51abfb5f00084285b3--comforting-sorbet-4bc302.netlify.app/pages/principal",
      imageUrl: project3Image,
    },
    {
      title: "Projeto barbearia",
      url: "https://dulcet-pudding-eff3a0.netlify.app",
      imageUrl: project4Image,
    },
    {
      title: "Projeto KNTEC",
      url: "https://kntec.netlify.app",
      imageUrl: project5Image,
    },
    {
      title: "Projeto Batman",
      url: "https://zippy-phoenix-ed0ab0.netlify.app",
      imageUrl: project6Image,
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <>
      <Header />
      <section className="info">
        <h1>Meus Projetos</h1>
      </section>
        
        <div className="thumbnails-container">
          {projects.map((project, index) => (
            <ProjectThumbnail
              key={index}
              title={project.title}
              url={project.url}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      <Footer />
    </>
  );
}

export default Projects;
