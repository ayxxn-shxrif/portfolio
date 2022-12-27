import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";
/* import { faBolt } from "@fortawesome/free-solid-svg-icons"; */

import "./Footer.scoped.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-media-container">
        <div className="icon-container">
          <a
            href="https://www.linkedin.com/in/ayaansharif/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
          </a>
        </div>
        <div className="icon-container">
          <a
            href="https://github.com/ayxxn-shxrif"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
        </div>
        <div className="icon-container">
          <a
            href="https://t.me/ayxxn_shxrif"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faTelegram} />
          </a>
        </div>
        <div className="icon-container">
          <a
            href="https://www.instagram.com/shxrifayxxn/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
        </div>
       
      </div>
      <p className="copyright">Copyright © Ayaan Sharif</p>
    </div>
  );
};

export default Footer;
