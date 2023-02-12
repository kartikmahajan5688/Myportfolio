import "./ProjectCardStyles.css";
// import ProjectCardData from "./ProjectCardData";
// import {NavLink} from "react-router-dom";
// import {Link} from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Project Img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          {/* <Link 
            to= {props.view}
            className="btn">
              View
          </Link> */}
          <a href={props.view} alt="See Live" className="btn">See Live</a>
          {/* <Link 
            to={props.source}
            className="btn">
              Source
          </Link> */}
          <a href={props.source} alt="Source Code" className="btn">Source</a>
        </div>
      </div>
    </div>
  ); 
};

export default ProjectCard;
