import React from "react";
import { skills } from "../data/portfolio";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="section reveal" id="skills">
      <div className="section-head">
        <span className="eyebrow">Toolbox</span>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <p className="section-subtitle">
          The stack I use to design, build, and ship AI systems end to end.
        </p>
      </div>

      <div className="skills__grid">
        {skills.map((group) => (
          <div className="skills__card card" key={group.category}>
            <h3 className="skills__cat">{group.category}</h3>
            <div className="skills__chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
