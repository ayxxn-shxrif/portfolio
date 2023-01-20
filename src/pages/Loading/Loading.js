import React, { useState, useEffect } from "react";

import DarkModeButton from "../../components/NavBar/DarkModeButton/DarkModeButton";

import "./Loading.scoped.scss";

const Loading = () => {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setDotCount((prevCount) => (prevCount + 1) % 4),
      500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <DarkModeButton />
      <h1>Loading{".".repeat(dotCount)}</h1>
      <h3>Getting resources, please be patient.</h3>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default Loading;
