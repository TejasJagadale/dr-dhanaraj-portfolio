import React from "react";
import "../styles/Home.css";
import drimage from "../images/dr.png";

const Home = () => {
  return (
    <div className="home-container">
      {/* Mobile Image (shown only on small screens) */}
      <div className="mobile-image-container">
        <div className="profile-imagehome">
          <img className="profile-imagehome1" src={drimage} alt="Dr. S. Dhanaraj" />
        </div>
      </div>

      <div className="home-content">
        <div className="text-content">
          <div className="title-group">
            <h1>Dr. S. Dhanaraj</h1>
            <h2>MCA, M.Phil, Ph.D</h2>
            <div className="professional-tag">Microsoft Certified Professional</div>
          </div>
          
          <p className="mission-statement">
            Dedicated educator and researcher committed to enhancing students' 
            performance through innovative teaching methodologies and cutting-edge 
            computer science applications.
          </p>
          
          <div className="highlight-card">
            <h3>Professional Certification</h3>
            <p>
              Microsoft Certified Professional (MCP) in Developing and Implementing 
              Windows-based Applications with Visual Studio .NET
            </p>
          </div>
        </div>

        <div className="button-group">
          <a href="/about" className="about-button">
            ABOUT ME
          </a>
          <a href="/contact" className="contact-button">
            CONTACT ME
          </a>
        </div>
      </div>

      {/* Desktop Image (shown only on larger screens) */}
      <div className="desktop-image">
        <div className="profile-image">
          <img src={drimage} alt="Dr. S. Dhanaraj" />
        </div>
      </div>
    </div>
  );
};

export default Home;