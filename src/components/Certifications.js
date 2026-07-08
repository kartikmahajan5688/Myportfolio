import React from "react";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { certGroups, badges } from "../data/portfolio";
import "./Certifications.css";

const CertCard = ({ cert }) => (
  <a
    className="cert-card card"
    href={cert.file}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="cert-card__media">
      {cert.image ? (
        <img src={cert.image} alt={cert.title} />
      ) : (
        <div className="cert-card__placeholder">
          <FiAward />
          <span>{cert.issuer}</span>
        </div>
      )}
    </div>
    <div className="cert-card__meta">
      <div>
        <h4>{cert.title}</h4>
        <p>{cert.issuer}</p>
      </div>
      <FiExternalLink className="cert-card__ext" />
    </div>
  </a>
);

const Certifications = () => {
  return (
    <section className="section reveal" id="certifications">
      <div className="section-head">
        <span className="eyebrow">Credentials</span>
        <h2 className="section-title">Certifications &amp; Badges</h2>
        <p className="section-subtitle">
          Continuous learning across Generative AI, agentic systems, and cloud.
        </p>
      </div>

      {badges.length > 0 && (
        <div className="badges">
          {badges.map((b) => (
            <div className="badge" key={b.title} title={b.title}>
              <img src={b.image} alt={b.title} />
              <span>{b.title}</span>
            </div>
          ))}
        </div>
      )}

      {certGroups.map((group) => (
        <div className="cert-group" key={group.group}>
          <h3 className="projects__group">{group.group}</h3>
          <div className="certs__grid">
            {group.items.map((cert) => (
              <CertCard cert={cert} key={cert.title} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
