import React from "react";

import { motion } from "framer-motion";

import loading from "../../../assets/loading.svg";
import "./ProjectShowcaseItem.scoped.scss";

const AsyncImage = (props) => {
  const [loadedSrc, setLoadedSrc] = React.useState(null);
  React.useEffect(() => {
    const handleLoad = () => setLoadedSrc(props.src);
    const image = new Image();
    image.addEventListener("load", handleLoad);
    image.src = props.src;
    return () => image.removeEventListener("load", handleLoad);
  }, [props.src]);

  return (
    <img
      className={
        loadedSrc === props.src ? props.className : props.className + " loading"
      }
      src={loadedSrc === props.src ? props.src : loading}
      alt={props.alt}
      title={props.title}
    />
  );
};

const ProjectShowcaseItem = (props) => {
  return (
    <motion.div
      layout
      key={props.title}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.33 }}
    >
      <div className="project-showcase-item-container">
        <a href={props.link} target="_blank" rel="noreferrer">
          <div className="image-container">
            <AsyncImage
              src={props.img}
              alt="Side-project preview"
              style={props.imgStyle}
              className="image"
            />
          </div>
          <div className="text-container">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <p>
              <strong>Skills: </strong>
              {props.skills}
            </p>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectShowcaseItem;
