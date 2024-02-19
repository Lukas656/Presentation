import React from "react";

const ProjectThumbnail = ({ imageUrl, title, url }) => {
  return (
    <div className="project-thumbnail">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} className="thumb-img"/>
      </a>
    </div>
  );
};

export default ProjectThumbnail;
