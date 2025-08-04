import React from "react";
import "../styles/Home.css";
import drimage from "../images/dr.png";

const Home = () => {
  return (
    <div className="home-container">
      {/* Mobile Image (shown only on small screens) */}
      <div className="mobile-image-container">
        <div className="mobile-image-placeholder">
          {" "}
          <img className="mobile-image-placeholder" src={drimage} alt="" />
        </div>
      </div>

      <div className="home-content">
        <div className="text-content">
          <h1>Dr.S.Dhanaraj., MCA.,M.Phil.,Ph.D</h1>
          <h2>Microsoft Certified Professional</h2>
          <p>
            To obtain a position that will enable me to use my skills,
            educational background, and ability to work well with people to
            enhance students' performance.
          </p>
          <ul>
            <li>
              Microsoft Certified Professional [MCP] in Developing and
              Implementing Windows based Applications
            </li>
          </ul>
        </div>
        <div className="button-group">
          <a href="/about">
            <button className="about-button">ABOUT ME</button>
          </a>
          <a href="/contact">
            <button className="contact-button">CONTACT ME</button>
          </a>
        </div>
      </div>

      {/* Desktop Image (shown only on larger screens) */}
      <div className="desktop-image">
        <div className="image-placeholderhome">
          <img className="image-placeholder" src={drimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
