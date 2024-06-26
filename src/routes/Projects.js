import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Project from "../components/Project";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Welcome To My Development World" />
      <Project />
      <Footer />
    </div>
  );
};

export default Projects;
