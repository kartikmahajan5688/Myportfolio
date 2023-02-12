import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Project from "../components/Project";
// import PricingCard from "../components/PricingCard";
import Footer from "../components/Footer";

const Projects = () => {
  return <div>
    <Navbar/>
    <HeroImg2 heading="PROJECTS" text="Some of my recent works" />
    <Project />
    {/* <PricingCard /> */}
    <Footer/>
  </div>;
};

export default Projects;
