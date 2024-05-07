import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT ME"
        text="Experienced MERN stack developer with 1 year of expertise in JavaScript, React.js, Node.js, and MongoDB. Proficient in building scalable web applications with strong skills in both front-end and back-end development."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
