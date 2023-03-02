import React from "react";
import "./AboutContentStyles.css";
import pdf from "../assets/Kartik's Resume.pdf";
import React1 from "../assets/me.png";


const AboutContent = () => {
  return(
    <div className="about">
      <div className="left">
        <div>
          <h1>Who Am I?</h1>
          <p>I am Kartik Mahajan. A FrontEnd developer who responsible for the design and implementation of user interfaces and UI components using React, a front-end JavaScript library.</p>
          
        </div>
        <div className="skills">
          <p>My Key Skills Are : </p>
          <ul className="skills_list btn btn-light">
            <li>HTML </li>
            <li>CSS </li>
            <li>JAVASCRIPT + ES6 </li>
            <li>REACT JS </li>
            <li> GIT  & GITHUB </li>
            <li>NODE + NPM </li>
            <li>REDUX </li>
          </ul>
        </div>
        <div>
          <a href={pdf} className="btn resume">RESUME</a>
        </div>
      </div>
      <div className="right">
            <img src={React1} 
              className="img"
              alt="true"
            />
      </div>
    </div>
  ); 
};

export default AboutContent;
