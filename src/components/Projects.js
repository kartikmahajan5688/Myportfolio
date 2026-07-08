import React from "react";
import { FiExternalLink, FiGithub, FiZap } from "react-icons/fi";
import { aiProjects, webProjects } from "../data/portfolio";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="section reveal" id="projects">
      <div className="section-head">
        <span className="eyebrow">Selected Work</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          AI systems I've designed and built, plus full-stack web work.
        </p>
      </div>

      <h3 className="projects__group">AI &amp; Generative AI</h3>
      <div className="projects__ai">
        {aiProjects.map((p) => (
          <article className="ai-card card" key={p.title}>
            <div className="ai-card__media">
              {p.image ? (
                <img src={p.image} alt={p.title} />
              ) : (
                <div className="ai-card__placeholder">
                  <FiZap />
                </div>
              )}
              <span className="ai-card__metric">{p.metric}</span>
            </div>

            <div className="ai-card__body">
              <h4 className="ai-card__title">{p.title}</h4>
              <p className="ai-card__blurb">{p.blurb}</p>
              <div className="ai-card__stack">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>

              {(p.view || p.source) && (
                <div className="ai-card__links">
                  {p.view && (
                    <a href={p.view} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink /> Live
                    </a>
                  )}
                  {p.source && (
                    <a href={p.source} target="_blank" rel="noopener noreferrer">
                      <FiGithub /> Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <h3 className="projects__group">Web Development</h3>
      <div className="projects__web">
        {webProjects.map((p) => (
          <article className="web-card card" key={p.title}>
            <div className="web-card__body">
              <h4 className="web-card__title">{p.title}</h4>
              <p className="web-card__blurb">{p.blurb}</p>
            </div>
            <div className="web-card__links">
              <a href={p.view} target="_blank" rel="noopener noreferrer">
                <FiExternalLink /> Live
              </a>
              <a href={p.source} target="_blank" rel="noopener noreferrer">
                <FiGithub /> Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
