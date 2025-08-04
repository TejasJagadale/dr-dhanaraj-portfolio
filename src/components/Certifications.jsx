import React from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  return (
    <div className="certifications-container">
      {/* Header */}
      <div className="certifications-header">
        <h1>Professional Certifications</h1>
        <p className="subtitle">Industry-recognized credentials validating technical expertise</p>
      </div>

      {/* Main Content */}
      <div className="certifications-content">
        {/* Microsoft Certifications */}
        <section className="certification-section">
          <h2>
            <span className="icon">🔧</span>
            Microsoft Certifications
          </h2>
          <div className="certification-grid">
            <div className="certification-card">
              <div className="card-header">
                <h3>Microsoft Certified Professional (MCP)</h3>
                <div className="certification-badge microsoft-badge">Microsoft</div>
              </div>
              <p className="certification-meta">
                <span className="year">Issued: 2005</span> | 
                <span className="id"> ID: 1234567</span>
              </p>
              <p className="certification-desc">
                Certified in Developing and Implementing Windows-based Applications with Visual Studio .NET
              </p>
            </div>

            <div className="certification-card">
              <div className="card-header">
                <h3>Microsoft Technology Associate (MTA)</h3>
                <div className="certification-badge microsoft-badge">Microsoft</div>
              </div>
              <p className="certification-meta">
                <span className="year">Issued: 2018</span> | 
                <span className="id"> ID: 7654321</span>
              </p>
              <p className="certification-desc">
                Fundamentals of Windows Development, Database Administration, and Software Testing
              </p>
            </div>
          </div>
        </section>

        {/* Cloud & Data Science */}
        <section className="certification-section">
          <h2>
            <span className="icon">☁️</span>
            Cloud & Data Science
          </h2>
          <div className="certification-grid">
            <div className="certification-card">
              <div className="card-header">
                <h3>AWS Certified Cloud Practitioner</h3>
                <div className="certification-badge aws-badge">AWS</div>
              </div>
              <p className="certification-meta">
                <span className="year">Issued: 2020</span> | 
                <span className="id"> ID: AWS-CCP-9876</span>
              </p>
              <p className="certification-desc">
                Foundational understanding of AWS Cloud concepts, services, and architecture
              </p>
              <div className="validity-badge">Valid until: 2023</div>
            </div>

            <div className="certification-card">
              <div className="card-header">
                <h3>Google Data Analytics Professional</h3>
                <div className="certification-badge google-badge">Google</div>
              </div>
              <p className="certification-meta">
                <span className="year">Issued: 2021</span> | 
                <span className="id"> Coursera</span>
              </p>
              <p className="certification-desc">
                Data cleaning, analysis, visualization with R, SQL, and Tableau
              </p>
            </div>
          </div>
        </section>

        {/* Academic & Teaching */}
        <section className="certification-section">
          <h2>
            <span className="icon">🎓</span>
            Academic & Teaching
          </h2>
          <div className="certification-grid">
            <div className="certification-card">
              <div className="card-header">
                <h3>Post Graduate Diploma in Computer Applications (PGDCA)</h3>
                <div className="certification-badge academic-badge">Academic</div>
              </div>
              <p className="certification-meta">
                <span className="year">Issued: 2003</span> | 
                <span className="id"> Bharathidasan University</span>
              </p>
            </div>

            <div className="certification-card">
              <div className="card-header">
                <h3>Faculty Development Program (FDP)</h3>
                <div className="certification-badge academic-badge">Academic</div>
              </div>
              <p className="certification-meta">
                <span className="year">Issued: 2019</span> | 
                <span className="id"> IIT Madras</span>
              </p>
              <p className="certification-desc">
                4-week intensive program on Machine Learning in Education
              </p>
            </div>
          </div>
        </section>

        {/* Certification Stats */}
        <div className="certification-stats">
          <div className="stat-card years-stat">
            <h3>10+</h3>
            <p>Years Certified</p>
          </div>
          <div className="stat-card domains-stat">
            <h3>4</h3>
            <p>Technology Domains</p>
          </div>
          <div className="stat-card total-stat">
            <h3>6</h3>
            <p>Total Certifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;