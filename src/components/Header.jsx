import { useState } from "react";
import { navLinks } from "../data/siteData.js";
import { useTheme } from "../hooks/useTheme.jsx";
import { scrollToSection, useScrollSpy } from "../hooks/useScrollSpy.js";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { activeSection, navStrict } = useScrollSpy();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    scrollToSection(href);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp${
        navStrict ? " nav-strict" : ""
      }`}
      id="mh-header"
    >
      <div className={`overlay${menuOpen ? " active" : ""}`} onClick={closeMenu} />
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg mh-nav nav-btn active">
            <a
              className="navbar-brand"
              href="#home"
              onClick={(event) => handleNavClick(event, "#home")}
            >
              JS
            </a>
            <button
              className={`navbar-toggler${menuOpen ? " active" : ""}`}
              type="button"
              aria-controls="navbarSupportedContent"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon icon" />
            </button>

            <div
              className={`collapse navbar-collapse${menuOpen ? " active show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-0 ml-auto">
                {navLinks.map(({ href, label }) => {
                  const sectionId = href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <li key={href} className={`nav-item${isActive ? " active" : ""}`}>
                      <a
                        className="nav-link"
                        href={href}
                        onClick={(event) => handleNavClick(event, href)}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
                <li className="nav-item theme-toggle-item">
                  <button
                    type="button"
                    className="theme-toggle"
                    id="theme-toggle"
                    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                    title={isDark ? "Light mode" : "Dark mode"}
                    onClick={toggleTheme}
                  >
                    <i
                      className="fa fa-sun"
                      aria-hidden="true"
                      style={{ display: isDark ? "inline-block" : "none" }}
                    />
                    <i
                      className="fa fa-moon"
                      aria-hidden="true"
                      style={{ display: isDark ? "none" : "inline-block" }}
                    />
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
