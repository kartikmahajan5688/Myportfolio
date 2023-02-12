import "./HeroImgStyles.css";
import React from "react";
import pdf from "../assets/Kartik's Resume.pdf";
import {NavLink} from "react-router-dom";

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
        <p>HI, I'M A FREELANCER</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/projects"
      className="btn">PROJECTS</Link>
          <Link to="/contact"
      className="btn btn-light">CONTACT</Link>
          {/* <button className="btn">
            <a href={pdf}>Resume</a>
          </button> */}
          <NavLink 
            to={pdf} 
            className="btn">
              Resume
          </NavLink>
        </div>
      </div>
    </div>
    );
};

export default HeroImg;
