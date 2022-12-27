import React from "react";
import { Link } from "react-router-dom";

import DarkModeButton from "./DarkModeButton/DarkModeButton";

import "./NavBar.scoped.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <DarkModeButton />
      <ul className="nav-links">
      
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
       
        <li className="nav-link">
          <Link to="/experience">Projects</Link>
        </li>
        
         <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
