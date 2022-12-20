import React, { createContext, useState } from "react";
import { getCookieConsentValue } from "react-cookie-consent";

const setWithExpiry = (key, value, ttl) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return item.value;
};

const DarkModeContext = createContext("dark");

function DarkModeProvider(props) {
  const themeKey = "themeWithExpiry";

  const [theme, setTheme] = useState(
    getCookieConsentValue()
      ? getWithExpiry(themeKey)
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    if (getCookieConsentValue()) {
      setWithExpiry(themeKey, newTheme, 1 * 60 * 60 * 1000);
    }
    setTheme(newTheme);
  };

  return (
    <div>
      <DarkModeContext.Provider value={{ theme, switchTheme }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
}

export { DarkModeContext, DarkModeProvider };
