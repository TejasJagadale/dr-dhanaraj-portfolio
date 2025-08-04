import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if path matches exactly or starts with (for nested routes)
  const isActive = (path) => {
    return activePath === path || (path !== "/" && activePath.startsWith(path));
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-link" onClick={toggleMenu}>
          <div className="navbar-brand">Dr.S.Dhanaraj</div>
        </a>

        <button
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-list">
            {[
              { path: "/", name: "Home" },
              { path: "/about", name: "About" },
              { path: "/publications", name: "Publications" },
              { path: "/certifications", name: "Certifications" },
              { path: "/honors", name: "Honors" },
              { path: "/contact", name: "Contact" },
            ].map((item) => (
              <li className="navbar-item" key={item.path}>
                <a
                  href={item.path}
                  className={`navbar-link ${isActive(item.path) ? "active" : ""}`}
                  onClick={toggleMenu}
                >
                  {item.name}
                  <span className="nav-indicator"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;