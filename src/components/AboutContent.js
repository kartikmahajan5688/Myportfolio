import React from "react";
import "./AboutContentStyles.css";
import pdf from "../assets/Kartik's Resume.pdf";
import React1 from "../assets/me.png";
import ReactCertificate from "../assets/React-Certificate.png";
import React_Certification from "../assets/Udemy-ReactJs-Cerification.pdf";
import NextJsCertificate from "../assets/NextJS_certificate.png";
import NextJS_Certification from "../assets/NextJs-Udemy-Certification.pdf";
import WebDeveloperCertificate from "../assets/Web-Developer-Cerificate.png";
import WebDeveloper_Certification from "../assets/Udemy-Complete-Web-Developer-ZTM-Cerifications.pdf";
import Mongo_icon from "../assets/mongo_icon.png";
import Redux_icon from "../assets/redux.png";
import SQl_icon from "../assets/sql.png";

const AboutContent = () => {
  return (
    <>
      <div className="skills-container">
        <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>
          MY KEY SKILLS
        </h2>
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-list">
            <div class="skill-item">
              <i class="fab fa-react"></i>
              <span>React JS</span>
            </div>

            <div class="skill-item">
              <i className="fab fa-html5"></i>
              <span>HTML5</span>
            </div>
            <div class="skill-item">
              <i className="fab fa-css3-alt"></i>
              <span>CSS3</span>
            </div>
            <div class="skill-item">
              <i className="fab fa-js"></i>
              <span>JavaScript ES6</span>
            </div>
            <div class="skill-item">
              <i className="fab fa-bootstrap"></i>
              <span>Bootstrap</span>
            </div>
            <div class="skill-item">
              <i className="fab fa-sass"></i>
              <span>SASS</span>
            </div>
            <div class="skill-item">
              <i class="fab fa-react"></i>
              <span>React Native</span>
            </div>
            <div className="skill-item">
              <img src={Redux_icon} alt="Redux" className="database-icon" />
              <span>Redux</span>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Backend</h3>
          <div className="skills-list">
            <div class="skill-item">
              <i class="fab fa-node"></i>
              <span>Node JS</span>
            </div>
            <div class="skill-item">
              <i className="fab fa-node-js"></i>
              <span>Express JS</span>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Database</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={Mongo_icon} alt="MongoDB" className="database-icon" />
              <span>MongoDB</span>
            </div>
            <div className="skill-item">
              <img src={SQl_icon} alt="SQL" className="database-icon" />
              <span>SQL</span>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>DevOps</h3>
          <div className="skills-list">
            <div class="skill-item">
              <i class="fab fa-aws"></i>
              <span>AWS S3</span>
            </div>
            <div class="skill-item">
              <i className="fab fa-digital-ocean"></i>
              <span>Digital Ocean</span>
            </div>
            <div class="skill-item">
              <i className="fab fa-git"></i>
              <span>Git</span>
            </div>
            <div class="skill-item">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-container">
        <a
          href={pdf}
          className="btn resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </div>

      {/* Certification Section  */}
      <div
        style={{
          backgroundColor: "rgb(255,255,255,0.2)",
          margin: "1rem 0",
          padding: "1rem 0",
        }}
      >
        <h1 style={{ textAlign: "center", marginTop:"1rem" }}>My Certifications</h1>
        <div className="about">
          <div>
            <div>
              <h1>React : The Complete Guide 2024</h1>
              <br />
              <br />
            </div>
            <div>
              <h4>Key Learnings</h4>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  How React works, building components with React & building UIs
                  with React Components, props & dynamic data binding
                </li>
                <li>
                  React Hooks (in-depth)! Working with built-in Hooks and
                  building custom Hooks
                </li>
                <li>
                  How to debug React apps Styling React apps with "Styled
                  Components" and "CSS Modules" Working with "Fragments" &
                  "Portals"
                </li>
                <li>
                  Dealing with side effects. Class-based components and
                  functional components
                </li>
                <li>
                  Sending Http requests & handling transitional states +
                  responses.
                </li>
                <li>
                  Handling forms and user input (incl. validation). Redux &
                  Redux Toolkit Routing with React Router
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <a
              href={React_Certification}
              alt="React Certificate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ReactCertificate} className="img" alt="true" />
            </a>
          </div>
        </div>
        <hr style={{ margin: "0 3rem" }} />

        <div className="about">
          <div>
            <div>
              <h1>Next.js 14 and React - The Complete Guide</h1>
              <br />
              <br />
            </div>
            <div>
              <h4>Key Learnings</h4>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Creating NextJS projects from the ground up & understanding
                  these projects Working with file-based routing
                </li>
                <li>
                  Adding dynamic routes and catch-all routes. Implementing
                  different forms of page pre-rendering and server-side
                  rendering. Working with data and adding data fetching +
                  pre-fetching to your apps. Handling form submissions with
                  Server Actions
                </li>
                <li>
                  Handling File upload Pre-generating dynamic and static pages.
                  Adding optimizations like metadata to pages
                </li>
                <li>
                  Optimizing images with the NextJS Image component. Building
                  fullstack apps with API routes or Server Actions. Managing
                  app-wide state with React context (in NextJS apps)
                </li>
                <li>
                  Adding authentication to NextJS apps. Multiple complete apps
                  where we'll apply all these core concepts!
                </li>
              </ul>
            </div>
            <div></div>
          </div>
          <div className="right">
            <a
              href={NextJS_Certification}
              alt="Next JS Certificate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={NextJsCertificate} className="img" alt="true" />
            </a>
          </div>
        </div>
        <hr style={{ margin: "0 3rem" }} />

        <div className="about">
          <div>
            <div>
              <h1>The Complete Web Developer in 2023 : Zero To Mastery</h1>
              <br />
              <br />
            </div>
            <div>
              <h4>Key Learnings</h4>
              <ul style={{ marginLeft: "20px" }}>
                <li>Learn to implement user authentication</li>
                <li>
                  Use Express, SQL and PostgreSQL to create fullstack
                  applications that scale
                </li>
                <li>Master fundamental concepts in Web Development </li>
                <li>Use NodeJS to write server-side JavaScript</li>
                <li>
                  Learn best practices to write clean, performant, and bug free
                  code + Learn to use ChatGPT as a developer
                </li>
                <li>Build a professional Portfolio Website</li>
                <li>Master beginner and advanced JavaScript topics</li>
                <li>
                  Learn React + Redux to build rich front end applications
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <a
              href={WebDeveloper_Certification}
              alt="Web Developer Certificate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WebDeveloperCertificate} className="img" alt="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
