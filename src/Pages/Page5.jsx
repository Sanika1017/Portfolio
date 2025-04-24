// ExperienceCertificatesSection.jsx
import React, { useState } from 'react';
import '../styles/Page5.css'; // Adjust the path as necessary
import galaxy from '../images/galaxy.mp4'; // Adjust the path as necessary

const certificatesData = [
  { name: 'Java Certification', url: 'https://example.com/java-cert' },
  { name: 'Python for Beginners', url: 'https://example.com/python-cert' },
  { name: 'React Developer Course', url: 'https://example.com/react-cert' },
  { name: 'Full-Stack Bootcamp', url: 'https://example.com/fullstack-cert' },
  { name: 'MongoDB Essentials', url: 'https://example.com/mongodb-cert' },
  { name: 'Cloud Computing Basics', url: 'https://example.com/cloud-cert' },
];

const experienceData = [
  { name: 'Intern - XYZ Tech (3 Months)' },
  { name: 'Freelance Developer - ABC Startup (6 Months)' },
];

const Page5 = () => {
  const [activeTab, setActiveTab] = useState('certificate');
  const [showAll, setShowAll] = useState(false);

  const displayedCertificates = showAll ? certificatesData : certificatesData.slice(0, 2);

  return (
    <div className="exp-cert-section">
      <video className="background-video" autoPlay loop muted playsInline>
                    <source src={galaxy} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
      <h2 className="section-title">Experience & Certificates</h2>
      <div className="tab-buttons">
        <button
          className={activeTab === 'certificate' ? 'active' : ''}
          onClick={() => setActiveTab('certificate')}
        >
          Certificates
        </button>
        <button
          className={activeTab === 'experience' ? 'active' : ''}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
      </div>

      {activeTab === 'certificate' && (
        <div className="certificates">
          {displayedCertificates.map((cert, index) => (
            <div key={index} className="card">
              <h3>{cert.name}</h3>
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                <button className="view-button">View Certificate</button>
              </a>
            </div>
          ))}
          {!showAll && (
            <button className="show-more" onClick={() => setShowAll(true)}>
              Show More
            </button>
          )}
        </div>
      )}

      {activeTab === 'experience' && (
        <div className="experiences">
          {experienceData.map((exp, index) => (
            <div key={index} className="card">
              <h3>{exp.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page5;
