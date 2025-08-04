import React from "react";
import "../styles/Footer.css";
import {
  FaLinkedin,
  FaTwitter,
  FaGoogle,
  FaResearchgate,
  FaOrcid
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Email */}
        <div className="footer-email">
          <a href="mailto:dhanarajsms@gmail.com" className="email-link">
            dhanarajsms@gmail.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a
            href="https://linkedin.com/in/dhanaraj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://twitter.com/dhanaraj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=XYZ123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
          >
            <FaGoogle className="social-icon" />
          </a>
          <a
            href="https://www.researchgate.net/profile/Dhanaraj-S"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ResearchGate"
          >
            <FaResearchgate className="social-icon" />
          </a>
          <a
            href="https://orcid.org/0000-0000-0000-0000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ORCID"
          >
            <FaOrcid className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
