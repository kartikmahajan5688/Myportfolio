import React from "react";
import { FiCpu, FiGitMerge, FiDatabase, FiBookOpen } from "react-icons/fi";
import { profile, education } from "../data/portfolio";
import "./About.css";

const focus = [
  {
    icon: <FiCpu />,
    title: "Generative AI",
    text: "LLM apps, prompt engineering, RAG pipelines and evaluation.",
  },
  {
    icon: <FiGitMerge />,
    title: "Agentic Systems",
    text: "Multi-agent orchestration with AWS Strands, LangChain & MCP.",
  },
  {
    icon: <FiDatabase />,
    title: "AI Infrastructure",
    text: "Amazon Bedrock, vector databases, and cloud deployment.",
  },
];

const About = () => {
  return (
    <section className="section reveal" id="about">
      <div className="section-head">
        <span className="eyebrow">About</span>
        <h2 className="section-title">Turning language models into products</h2>
      </div>

      <div className="about__grid">
        <div className="about__lead">
          <p>{profile.summary}</p>
          <p>
            I focus on the space where research meets production — designing
            agent networks, grounding models in real data, and shipping AI that
            measurably improves accuracy and cuts manual effort.
          </p>

          <div className="about__edu card">
            <FiBookOpen className="about__edu-icon" />
            <div>
              <h4>{education.degree}</h4>
              <p>
                {education.school} · {education.period}
              </p>
            </div>
          </div>
        </div>

        <div className="about__focus">
          {focus.map((f) => (
            <div className="about__focus-card card" key={f.title}>
              <span className="about__focus-icon">{f.icon}</span>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
