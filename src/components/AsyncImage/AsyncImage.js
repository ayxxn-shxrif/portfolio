import React from "react";

import loading from "../../assets/loading.svg";

import "./AsyncImage.scoped.scss";

const AsyncImage = (props) => {
  const [loadedSrc, setLoadedSrc] = React.useState(null);
  React.useEffect(() => {
    const handleLoad = () => setLoadedSrc(props.src);
    const image = new Image();
    image.addEventListener("load", handleLoad);
    // image.src = props.src;
    return () => image.removeEventListener("load", handleLoad);
  }, [props.src]);

  return (
    <img
      className={loadedSrc === props.src ? "" : "loading"}
      src={loadedSrc === props.src ? props.src : loading}
      alt={props.alt}
      title={props.title}
      style={props.style}
    />
  );
};

export default AsyncImage;
