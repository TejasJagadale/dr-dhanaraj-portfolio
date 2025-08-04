import React from "react";
import "../styles/About.css";
import drimage from "../images/dr.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Dr. S. Dhanaraj</h1>
        <div className="header-divider"></div>
      </div>

      <div className="about-content">
        <div className="profile-section">
          <div className="profile-text">
            <h2>Academic Profile</h2>
            <p>
              Dr. S. Dhanaraj is a dedicated academician with extensive
              experience in computer science education. Currently serving as an
              Assistant Professor in the Department of Computer Science at
              Bishop Heber College, Tiruchirappalli, he has been shaping young
              minds since 2007.
            </p>
            <p>
              His academic journey includes a Ph.D. in Computer Science, M.Phil
              in Computer Science, and Master of Computer Applications (MCA). He
              is also a Microsoft Certified Professional, demonstrating his
              commitment to both academic and industry-relevant knowledge.
            </p>
          </div>
          <div className="profile-image">
            {/* Replace with actual image */}
            <div className="image-placeholder">
              {" "}
              <img className="image-placeholder" src={drimage} alt="" />
            </div>
          </div>
        </div>

        <div
          className="qualifications-section"
          style={{ backgroundColor: "white" }}
        >
          <h2>Educational Qualifications</h2>
          <ul>
            <li>
              <strong>Ph.D.</strong> in Computer Science
            </li>
            <li>
              <strong>M.Phil</strong> in Computer Science
            </li>
            <li>
              <strong>MCA</strong> (Master of Computer Applications)
            </li>
            <li>
              <strong>Microsoft Certified Professional</strong> (MCP)
            </li>
          </ul>
        </div>

        <div className="experience-section">
          <h2>Teaching Experience</h2>
          <div className="experience-grid">
            <div
              className="experience-card"
              style={{ backgroundColor: "#2c3e50" }}
            >
              <h3>Current Position</h3>
              <p>Assistant Professor</p>
              <p>Department of Computer Science</p>
              <p>Bishop Heber College, Tiruchirappalli</p>
              <p>Since 2007</p>
            </div>
            <div
              className="experience-card"
              style={{ backgroundColor: "#2c3e50" }}
            >
              <h3>Previous Experience</h3>
              <p>Lecturer in Computer Science</p>
              <p>Various institutions</p>
              <p>2004-2007</p>
            </div>
          </div>
        </div>

        <div className="research-section" style={{ backgroundColor: "white" }}>
          <h2>Research Interests</h2>
          <div className="research-areas">
            <div className="research-area">
              <h3>Primary Areas</h3>
              <ul>
                <li>Data Mining</li>
                <li>Machine Learning</li>
                <li>Artificial Intelligence</li>
              </ul>
            </div>
            <div className="research-area">
              <h3>Secondary Areas</h3>
              <ul>
                <li>Cloud Computing</li>
                <li>Big Data Analytics</li>
                <li>Educational Technology</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="achievements-section">
          <h2>Notable Achievements</h2>
          <ul>
            <li>Published numerous research papers in reputed journals</li>
            <li>
              Presented research findings at national and international
              conferences
            </li>
            <li>Recipient of research grants and awards</li>
            <li>Recognized for excellence in teaching</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
