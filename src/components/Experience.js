import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { experience } from "../data/portfolio";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="section reveal" id="experience">
      <div className="section-head">
        <span className="eyebrow">Career</span>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          From full-stack products to production AI systems.
        </p>
      </div>

      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline__item" key={job.company + job.period}>
            <div className="timeline__marker">
              <FiBriefcase />
            </div>

            <div className="timeline__card card">
              <div className="timeline__top">
                <div>
                  <h3 className="timeline__role">{job.role}</h3>
                  <p className="timeline__company">
                    {job.company} · <span>{job.location}</span>
                  </p>
                </div>
                <span className="timeline__period">{job.period}</span>
              </div>

              {job.project && (
                <p className="timeline__project">
                  Project: <strong>{job.project}</strong>
                </p>
              )}

              <ul className="timeline__points">
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <div className="timeline__stack">
                {job.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
