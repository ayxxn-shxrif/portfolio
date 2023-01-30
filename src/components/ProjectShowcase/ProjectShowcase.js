import React, { useState } from "react";

import ProjectShowcaseItem from "./ProjectShowcaseItem/ProjectShowcaseItem";
import ProjectShowcaseFilter from "./ProjectShowcaseFilter/ProjectShowcaseFilter";
import Projects from "./Projects";
import { AnimatePresence } from "framer-motion";

import "./ProjectShowcase.scoped.scss";

const ProjectShowcase = () => {
  const [filter, setFilter] = useState("All");

  // const getProjects = () => {
  //   return Projects.map((project, i) => {
  //     const projectComponent = (
  //       <ProjectShowcaseItem
  //         key={filter + String(i)}
  //         img={project.img}
  //         imgStyle={project.imgStyle}
  //         title={project.title}
  //         description={project.description}
  //         skills={project.skills}
  //         link={project.link}
  //       />
  //     );
  //     // keep this off while new projects are made with specific filters i.e (react native, golang, docker, etc)
  //     // if (filter === "All") return projectComponent;
  //     if (project.skillsArray.includes(filter)) return projectComponent;
  //     return null;
  //   });
  // };

  // cleaner implementation of filter for now
  const getProjects = () => {
    const filteredProjects = Projects.filter((project) =>
      project.skillsArray.includes(filter)
    );
    return filteredProjects.map((project, i) => {
      return (
        <ProjectShowcaseItem
          key={filter + String(i)}
          img={project.img}
          imgStyle={project.imgStyle}
          title={project.title}
          description={project.description}
          skills={project.skills}
          link={project.link}
        />
      );
    });
  };

  return (
    <>
      <ProjectShowcaseFilter filter={filter} setFilter={setFilter} />
      <div className="project-showcase-container">
        <AnimatePresence>{getProjects()}</AnimatePresence>
      </div>
    </>
  );
};

export default ProjectShowcase;
