import "./HeroImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img 
          className= "intro-img" 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
          alt="IntroImg" 
        />
      </div>
      <div className="content">
        <p className="animate__animated animate__bounce">WELCOME IN MY PORTFOLIO</p>
        <h1 className="animate__animated animate__slideInLeft">I'm a FrontEnd Developer</h1>
        <div className ="hero-btns">
          <Link to="/projects"
      className="btn">PROJECTS</Link>
          <Link to="/about"
      className="btn btn-light">Hire Me</Link>
        </div>
      </div>
    </div>
    );
};

export default HeroImg;
