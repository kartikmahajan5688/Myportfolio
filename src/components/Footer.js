import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolio";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">KM</span>
          <div>
            <strong>{profile.name}</strong>
            <p>{profile.role} · {profile.tagline}</p>
          </div>
        </div>

        <div className="footer__socials">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a href="#top" className="footer__top" aria-label="Back to top">
            <FiArrowUp />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>
          © {profile.name}. Built with React.
        </span>
        <span className="mono">Designed &amp; developed with care.</span>
      </div>
    </footer>
  );
};

export default Footer;
