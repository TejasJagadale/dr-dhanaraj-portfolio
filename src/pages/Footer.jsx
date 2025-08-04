import React from "react";
import "../styles/Footer.css";
import {
  FaLinkedin,
  FaGoogle,
  FaResearchgate,
  FaOrcid,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-contact">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:dhanarajsms@gmail.com" className="email-link">
              dhanarajsms@gmail.com
            </a>
          </div>
          <div className="footer-address">
            <p>Department of Computer Science</p>
            <p>Bishop Heber College, Tiruchirappalli - 620 017</p>
          </div>
        </div>

        <div className="footer-social">
          <h3>Connect With Me</h3>
          <div className="social-icons">
            <a
              href="https://linkedin.com/in/dhanaraj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=XYZ123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
              className="social-link"
            >
              <FaGoogle className="social-icon scholar" />
            </a>
            <a
              href="https://www.researchgate.net/profile/Dhanaraj-S"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ResearchGate"
              className="social-link"
            >
              <FaResearchgate className="social-icon researchgate" />
            </a>
            <a
              href="https://orcid.org/0000-0000-0000-0000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ORCID"
              className="social-link"
            >
              <FaOrcid className="social-icon orcid" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Dr. S. Dhanaraj. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;