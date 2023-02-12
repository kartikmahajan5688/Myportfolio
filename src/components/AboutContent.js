import React from "react";
import "./AboutContentStyles.css";
import {Link} from "react-router-dom";
import pdf from "../assets/Kartik's Resume.pdf";
// import {NavLink} from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return(
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a react front-end developer. I create responsive secure websites.</p>
        <Link to={pdf}>
          <button className="btn">RESUME</button>
        </Link>
        {/* <NavLink 
            to={pdf} 
            className="btn">
              Resume
          </NavLink> */}
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} 
              className="img"
              alt="true"
            />
          </div>
          <div className="img-stack bottom">
            <img src={React2} 
              className="img"
              alt="true"
            />
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default AboutContent;
