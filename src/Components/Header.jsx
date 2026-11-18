/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import PropTypes from "prop-types";

const Header = ({ isDarkMode, onToggleTheme }) => {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
      <button
        type="button"
        className="theme-toggle"
        aria-pressed={isDarkMode}
        onClick={onToggleTheme}
      >
        Dark mode
      </button>
    </nav>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

export default Header;
