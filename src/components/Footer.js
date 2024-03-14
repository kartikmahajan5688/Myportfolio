import "./FooterStyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Bandra Kurla Complex, Mumbai</p>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="tel:9501145677">+91 9501145677</a>
            </h4>
          </div>
          <div className="email">
            <a href="mailto: kartikmahajan5688@gmail.com">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                kartikmahajan5688@gmail.com
              </h4>
            </a>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            As a confident and skilled Software Engineer, I am actively seeking
            a challenging position where I can leverage my technical expertise
            to deliver outstanding results.
          </p>
          <div className="social">
            <a href="https://github.com/kartikmahajan5688">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/kartikmahajanktm/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="url">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div id="footer-line">
        <p>
          Made with
          <FaHeart size={20} style={{ color: "red", margin: "0 0.5rem" }} />
          by Kartik Mahajan
        </p>
      </div>
    </div>
  );
};

export default Footer;
