import React from "react";


import loading from "../../assets/loading.svg";
import "./Contact.scoped.scss";

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

const Contact = () => {
  return (
    <div className="contact-container">
      
      <h1>Get in touch</h1>
      <a href="mailto:ayaansharif42@gmail.com">ayaansharif42@gmail.com</a>
      <a href="tel:+91-8169788602">+91-8169788602</a>
    </div>
  );
};

export default Contact;
