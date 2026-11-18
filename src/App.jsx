/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React, { useState } from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Alexandrie Grenier",
  title: "Web Designer & Content Creator",
  email: "alex@example.com",
  gitHub: "microsoft",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};

const themeStorageKey = "portfolio-theme";

const getInitialTheme = () => {
  try {
    return window.localStorage.getItem(themeStorageKey) === "dark" ? "dark" : "light";
  } catch (error) {
    if (error.name !== "SecurityError") throw error;
    console.warn("Could not read the theme preference.", error);
    return "light";
  }
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch (error) {
      if (error.name !== "SecurityError" && error.name !== "QuotaExceededError") throw error;
      console.warn("Could not save the theme preference.", error);
    }
  };

  return (
    <div id="main" data-theme={theme}>
      <Header isDarkMode={theme === "dark"} onToggleTheme={toggleTheme} />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} />
    </div>
  );
};

export default App;
