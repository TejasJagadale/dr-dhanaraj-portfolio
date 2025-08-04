import React from 'react';
import '../styles/Honors.css';

const Honors = () => {
  return (
    <div className="honors-container">
      {/* Header */}
      <div className="honors-header" >
        <h1>Honors & Awards</h1>
        <p className="subtitle">Recognitions for academic excellence and professional contributions</p>
      </div>

      {/* Main Content */}
      <div className="honors-content" style={{ backgroundColor: "rgb(179, 200, 207)"}}>
        {/* Academic Honors */}
        <section className="honors-section" style={{ backgroundColor: 'white' }}>
          <h2>
            <span className="icon">🏆</span>
            Academic Honors
          </h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Best Researcher Award</h3>
                <p className="institution">Bishop Heber College</p>
                <p>Recognized for outstanding contributions to computer science research with 15+ publications in indexed journals</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h3>Excellence in Teaching Award</h3>
                <p className="institution">University of Madras</p>
                <p>Awarded for innovative teaching methodologies in advanced computer science courses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Grants */}
        <section className="honors-section" style={{ backgroundColor: 'white' }}>
          <h2>
            <span className="icon">🔬</span>
            Research Grants
          </h2>
          <div className="grants-grid">
            <div className="grant-card">
              <h3>Major Research Project Grant</h3>
              <p className="meta">
                <span className="amount">₹4,80,000</span> | 
                <span className="year">2020-2022</span>
              </p>
              <p className="institution">UGC, New Delhi</p>
              <p>For project "Machine Learning Applications in Educational Data Mining"</p>
            </div>
            <div className="grant-card">
              <h3>Minor Research Project Grant</h3>
              <p className="meta">
                <span className="amount">₹1,50,000</span> | 
                <span className="year">2016-2017</span>
              </p>
              <p className="institution">TNSCST, Chennai</p>
              <p>For project "Cloud-based Learning Management Systems"</p>
            </div>
          </div>
        </section>

        {/* Professional Recognitions */}
        <section className="honors-section" style={{ backgroundColor: 'white' }}>
          <h2>
            <span className="icon">👔</span>
            Professional Recognitions
          </h2>
          <ul className="honors-list">
            <li>
              <h3>Best Paper Award</h3>
              <p className="meta">IEEE International Conference on Advanced Learning Technologies | 2019</p>
              <p>For paper "Adaptive Learning Systems Using Neural Networks"</p>
            </li>
            <li>
              <h3>Outstanding Reviewer</h3>
              <p className="meta">Journal of Educational Technology Systems | 2018</p>
            </li>
          </ul>
        </section>

        {/* Stats */}
        <div className="honors-stats">
          <div className="stat-card" style={{ backgroundColor: '#2c3e50', color: 'white' }}>
            <h3>15+</h3>
            <p>Years of Recognition</p>
          </div>
          <div className="stat-card" style={{ backgroundColor: '#E5E1DA' }}>
            <h3>6+</h3>
            <p>Major Awards</p>
          </div>
          <div className="stat-card" style={{ backgroundColor: '#F1F0E8' }}>
            <h3>₹6,30,000+</h3>
            <p>Research Grants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honors;