import React from "react";
import { Link } from "react-router-dom";

import { ProjectShowcase } from "../../components/index";

import "./Experience.scoped.scss";

const Experiences = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="experiences-container">
    
      <h1 className="project-title">Open Source Projects</h1>
      <ProjectShowcase />
       
      <button onClick={scrollToTop}>Back to the Top</button>
      
    </div>
  );
};

export default Experiences;
