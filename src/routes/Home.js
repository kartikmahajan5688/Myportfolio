import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import AboutContent from "../components/AboutContent";
import Project from "../components/Project";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Project />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default Home;
