import React from "react";
import { useNavigate } from "react-router-dom";


import "./404.scoped.scss";

const FourZeroFour = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
     
      
      <h3>This isn't a valid page on this website.</h3>
      <button onClick={() => navigate(-1)}>Go Back </button>
    </div>
  );
};

export default FourZeroFour;
