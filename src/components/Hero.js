import React from "react";
import { FiArrowRight, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { profile, stats } from "../data/portfolio";
import me from "../assets/me.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__content">
          <span className="hero__status">
            <span className="hero__dot" /> Available for AI engineering roles
          </span>

          <h1 className="hero__title">
            Hi, I'm {profile.name.split(" ")[0]} —{" "}
            <span className="gradient-text">{profile.role}</span>
          </h1>

          <p className="hero__tagline">
            Building production <strong>{profile.tagline}</strong>.
          </p>

          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__meta">
            <span className="hero__loc">
              <FiMapPin /> {profile.location}
            </span>
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
            <div className="hero__socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__glow" />
          <div className="hero__photo-wrap">
            <img src={me} alt={profile.name} className="hero__photo" />
          </div>
          <div className="hero__badge hero__badge--1">
            <span className="mono">multi-agent</span>
          </div>
          <div className="hero__badge hero__badge--2">
            <span className="mono">RAG · LLMs</span>
          </div>
        </div>
      </div>

      <div className="hero__stats">
        {stats.map((s) => (
          <div className="hero__stat" key={s.label}>
            <div className="hero__stat-value gradient-text">{s.value}</div>
            <div className="hero__stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
