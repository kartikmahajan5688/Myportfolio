import React from "react";
import {
  FiCpu,
  FiGitMerge,
  FiSearch,
  FiMessageSquare,
  FiCode,
  FiCloud,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";
import { coreSkills, skills } from "../data/portfolio";
import "./Skills.css";

const iconMap = {
  genai: FiCpu,
  agents: FiGitMerge,
  rag: FiSearch,
  voice: FiMessageSquare,
  python: FiCode,
  cloud: FiCloud,
  vector: FiDatabase,
  fullstack: FiLayers,
};

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

      <h3 className="skills__label">Core Expertise</h3>
      <div className="core-skills">
        {coreSkills.map((s) => {
          const Icon = iconMap[s.icon] || FiCpu;
          return (
            <div className="core-skill card" key={s.label}>
              <span className="core-skill__icon">
                <Icon />
              </span>
              <div>
                <h4>{s.label}</h4>
                <p>{s.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="skills__label">Full Toolbox</h3>
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
