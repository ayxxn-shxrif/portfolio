import React from "react";

import loading from "../../assets/loading.svg";
import me from "../../assets/me.jpg";
import "./Home.scoped.scss";

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

const Home = () => {
  return (
    <div className="home-container">
      <h1>Ayaan Sharif</h1>
      <h3>Developer || Analyst</h3>
      <AsyncImage className="me" src={me} alt="Me" title="Hi" />
    </div>
  );
};

export default Home;
