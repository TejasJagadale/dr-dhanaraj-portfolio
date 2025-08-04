import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p className="subtitle">
          Academic and professional communication channels
        </p>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        {/* Primary Contact */}
        <section className="contact-section">
          <h2>
            <span className="icon">📬</span>
            Primary Contact
          </h2>
          <div className="contact-card">
            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <h3>Department Address</h3>
              <p>
                Department of Computer Science<br />
                Bishop Heber College<br />
                Tiruchirappalli - 620 017<br />
                Tamil Nadu, India
              </p>
            </div>
            <div className="contact-method">
              <div className="contact-icon">✉️</div>
              <h3>Electronic Mail</h3>
              <p>
                <a href="mailto:dhanarajsms@gmail.com" className="contact-link">
                  dhanarajsms@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Professional Networks */}
        <section className="contact-section">
          <h2>
            <span className="icon">🌐</span>
            Professional Networks
          </h2>
          <div className="network-grid">
            <a
              href="https://linkedin.com/in/dhanaraj"
              className="network-card linkedin-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>LinkedIn</h3>
              <p>/in/dhanaraj</p>
            </a>
            <a
              href="https://scholar.google.com/citations?user=XYZ123"
              className="network-card scholar-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Google Scholar</h3>
              <p>Dr. S. Dhanaraj</p>
            </a>
            <a
              href="https://orcid.org/0000-0000-0000-0000"
              className="network-card orcid-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>ORCID</h3>
              <p>0000-0000-0000-0000</p>
            </a>
          </div>
        </section>

        {/* Availability */}
        <section className="contact-section">
          <h2>
            <span className="icon">🕒</span>
            Availability
          </h2>
          <div className="availability">
            <div className="availability-item">
              <div className="availability-icon">🕙</div>
              <h3>Office Hours</h3>
              <p>Monday - Friday</p>
              <p>10:00 AM - 4:00 PM IST</p>
            </div>
            <div className="availability-item">
              <div className="availability-icon">📅</div>
              <h3>Meeting Policy</h3>
              <p>Prior appointment required</p>
              <p>Email for scheduling</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;