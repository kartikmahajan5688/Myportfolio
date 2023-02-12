import "./HeroImgStyles.css";
import React from "react";
// import pdf from "../assets/Kartik's Resume.pdf";
// import {NavLink} from "react-router-dom";

import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img 
          className= "intro-img" 
          src={IntroImg} 
          alt="IntroImg" 
        />
      </div>
      <div className="content">
        <p>WELCOME IN MY PORTFOLIO</p>
        <h1>I'm a React Developer</h1>
        <div>
          <Link to="/projects"
      className="btn">PROJECTS</Link>
          <Link to="/about"
      className="btn btn-light">Hire Me</Link>
          {/* <button className="btn">
            <a href={pdf}>Resume</a>
          </button> */}
          {/* <NavLink 
            to={pdf} 
            className="btn">
              Resume
          </NavLink> */}
        </div>
      </div>
    </div>
    );
};

export default HeroImg;
