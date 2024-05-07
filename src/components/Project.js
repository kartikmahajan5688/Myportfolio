import React from "react";
import ProjectCard from "./ProjectCard";
import {
  // LearningProjectsCardData,
  BigProjectsCardData,
} from "./ProjectCardData";
import "./ProjectCardStyles.css";

const Project = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {BigProjectsCardData.map((value, index) => {
          return (
            <ProjectCard
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
              source={value.source}
            />
          );
        })}
      </div>
      {/* <h1 className="project-heading">Learning Projects</h1>
      <div className="project-container">
        {LearningProjectsCardData.map((value, index) => {
          return (
            <ProjectCard
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
              source={value.source}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default Project;
