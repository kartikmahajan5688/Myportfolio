import "./FooterStyles.css";
import {FaHome, FaPhone, FaMailBulk,FaFacebook , FaGithub, FaLinkedin} from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
              <FaHome 
                size={20} 
                style={{color:"#fff", marginRight:"2rem"}}
              />
            <p>Sector 48, Gurgaon</p>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                  size={20} 
                  style={{color:"#fff", marginRight:"2rem"}}
              />
              <a href="tel:9501145677">+91 9501145677</a>
            </h4>
          </div>
          <div className="email">
          <a href = "mailto: kartikmahajan5688@gmail.com">
            <h4>
              <FaMailBulk
                  size={20} 
                  style={{color:"#fff", marginRight:"2rem"}}
              />
              kartikmahajan5688@gmail.com
            </h4>
          </a>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>This is me Kartik Mahajan. I am from a technical background and right now looking for a good career opportunity to start.</p>
          <div className="social">
            <a href="https://github.com/kartikmahajan5688">
              <FaGithub
                size={30} 
                style={{color:"#fff", marginRight:"1rem"}}
              />
            </a>
            <a href="https://www.linkedin.com/in/kartikmahajanktm/">
              <FaLinkedin
                size={30} 
                style={{color:"#fff", marginRight:"1rem"}}
              />
            </a>
            <a href="url">
              <FaFacebook
                  size={30} 
                  style={{color:"#fff", marginRight:"1rem"}}
                />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
