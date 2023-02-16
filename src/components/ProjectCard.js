import "./ProjectCardStyles.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Project Img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} alt="See Live" target='_blank' className="btn" rel="noreferrer">See Live</a>
          <a href={props.source} alt="Source Code" target='_blank' className="btn btn-light" rel="noreferrer">Source</a>
        </div>
      </div>
    </div>
  ); 
};

export default ProjectCard;
