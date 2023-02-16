import "./ProjectCardStyles.css";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";

import React from "react";

const Project = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">My Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((value, index) => {
            return(
              <ProjectCard
                key={index}
                imgsrc={value.imgsrc}
                title={value.title}
                text={value.text}
                view={value.view}
                source={value.source}
              />
            );
          }
          )
        }
      </div>
    </div>
  ); 
};

export default Project;
