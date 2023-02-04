import React, { useContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import CookieConsent from "react-cookie-consent";

import { DarkModeContext } from "./contexts/DarkModeContext";
import { LoadingContext } from "./contexts/LoadingContext";


import { Template } from "./components/index";
import {
  Home,
  FourZeroFour,
  About,
  Experience,
  Contact,
} from "./pages/index";
import "./App.css";

function App() {
  // set html theme for out of bounds background color
  const { theme } = useContext(DarkModeContext);
  document.querySelector("html").setAttribute("data-theme", theme);


  return (
    <HashRouter>
      <Routes>
        <Route element={<Template />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/experience" element={<Experience />}/>
        </Route>
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
       <CookieConsent
        location="bottom"
        enableDeclineButton
        buttonText="Allow Cookies"
        declineButtonText="Dark Mode is Boring"
        flipButtons={true}
        style={{
          background: "var(--font-color)",
          color: "var(--bg-color)",
          transition: "background .5s ease, color .5s ease",
        }}
        buttonStyle={{
          borderRadius: 10,
          marginLeft: 15,
          marginRight: 0,
        }}
        declineButtonStyle={{ borderRadius: 10 }}
      >
        This website uses cookies to save theme preferences. You can change
        themes by clicking the doodle on the top left.
      </CookieConsent>
    </HashRouter>
  );
}

export default App;
