import React from "react";
import "./AboutContentStyles.css";
import pdf from "../assets/Kartik's Resume.pdf";
import React1 from "../assets/me.png";


const AboutContent = () => {
  return(
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a React FrontEnd Developer. I create responsive secure websites with HTML, CSS, BOOTSTRAP and JS. I'm a React FrontEnd Developer. I create responsive secure websites with HTML, CSS, BOOTSTRAP and JS</p>
        <div>
          <a href={pdf} className="btn">RESUME</a>
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
