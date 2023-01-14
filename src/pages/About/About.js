import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import "./About.scoped.scss";
import loading from "../../assets/loading.svg";
// import pls from "../../assets/pls.jpg";

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

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="about-container">
      <div className="text-container">
         
        <h1>Hello World!</h1>
        <p>I'm Ayaan!</p>
        <p>
          I'm pursuing my graduation at the university of mumbai on AI and Data Science.<b/>I'm passionate about Software development, Programming, Data Science, Business. I have experience making projects in both
frontend and backend development using the MERN stack as well as doing data analysis stuff using python/R.
        </p>
        <p>
        
        </p>
        <p>Thanks for stopping by!</p>
      </div>
       <div className="download-container">
        <h3 className="download-heading">Feel free to download my resume!</h3>
        <Link
          className="download-button"
          to=""
          target="_blank"
          rel="noreferrer"
        >
          Download
        </Link>
      </div>
      
      <button onClick={scrollToTop}>Back to the Top</button>
    </div>
  );
};

export default About;
