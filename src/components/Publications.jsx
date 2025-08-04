import React from 'react';
import '../styles/Publications.css';

const Publications = () => {
  return (
    <div className="publications-container">
      {/* Header */}
      <div className="publications-header">
        <h1>Research Publications</h1>
        <p className="subtitle">Peer-reviewed journals, conference proceedings, and book chapters</p>
      </div>

      {/* Main Content */}
      <div className="publications-content">
        {/* Journal Publications */}
        <section className="publication-section">
          <h2>
            <span className="icon">📚</span>
            Journal Publications
          </h2>
          <div className="publication-list">
            <div className="publication-item">
              <h3>Machine Learning Approaches for Educational Data Mining</h3>
              <p className="publication-meta">
                <span className="journal">International Journal of Advanced Computer Science</span> | 
                <span className="year"> 2021</span> | 
                <span className="impact"> Impact Factor: 3.2</span>
              </p>
            </div>

            <div className="publication-item">
              <h3>Optimizing Cloud Resource Allocation Using Hybrid Algorithms</h3>
              <p className="publication-meta">
                <span className="journal">Journal of Cloud Computing</span> | 
                <span className="year"> 2020</span> | 
                <span className="impact"> Impact Factor: 2.8</span>
              </p>
            </div>

            <div className="publication-item">
              <h3>Data Privacy Framework for IoT Devices in Smart Education</h3>
              <p className="publication-meta">
                <span className="journal">IEEE Transactions on Education</span> | 
                <span className="year"> 2019</span> | 
                <span className="impact"> Impact Factor: 4.5</span>
              </p>
            </div>
          </div>
        </section>

        {/* Conference Papers */}
        <section className="publication-section">
          <h2>
            <span className="icon">🎤</span>
            Conference Proceedings
          </h2>
          <div className="publication-list">
            <div className="publication-item">
              <h3>AI-Driven Adaptive Learning Systems (ICALT 2022)</h3>
              <p className="publication-meta">
                <span>IEEE International Conference on Advanced Learning Technologies</span> | 
                <span className="year"> 2022</span>
              </p>
            </div>

            <div className="publication-item">
              <h3>Blockchain for Academic Credential Verification (ICCCE 2021)</h3>
              <p className="publication-meta">
                <span>International Conference on Computer and Communication Engineering</span> | 
                <span className="year"> 2021</span>
              </p>
            </div>
          </div>
        </section>

        {/* Book Chapters */}
        <section className="publication-section">
          <h2>
            <span className="icon">📖</span>
            Book Chapters
          </h2>
          <div className="publication-list">
            <div className="publication-item">
              <h3>Chapter 5: Neural Networks in Educational Data Analysis</h3>
              <p className="publication-meta">
                <span>In "Advances in Machine Learning for Education"</span> | 
                <span className="year"> 2020</span> | 
                <span className="publisher"> Springer</span>
              </p>
            </div>
          </div>
        </section>

        {/* Research Stats */}
        <div className="research-stats">
          <div className="stat-card journal-stat">
            <h3>15+</h3>
            <p>Journal Publications</p>
          </div>
          <div className="stat-card conference-stat">
            <h3>10+</h3>
            <p>Conference Papers</p>
          </div>
          <div className="stat-card book-stat">
            <h3>3</h3>
            <p>Book Chapters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;