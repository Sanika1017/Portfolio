import React, { useState } from 'react';
import { Award, Briefcase, Calendar, ChevronRight, ExternalLink, MapPin, Star, Trophy, Users } from 'lucide-react';
import '../styles/Page5.css'; // adjust the path as per your structure
import galaxyVideo from '../images/galaxy.mp4'; // adjust the path as per your structure

const certificatesData = [
  {
    name: 'Advanced Java Development',
    issuer: 'Oracle University',
    date: 'December 2023',
    credentialId: 'OCP-2023-12345',
    skills: ['Java SE 17', 'Spring Boot', 'Microservices'],
    url: 'https://example.com/java-cert'
  },
  {
    name: 'Full Stack Development',
    issuer: 'Meta',
    date: 'October 2023',
    credentialId: 'FSE-2023-67890',
    skills: ['React', 'Node.js', 'MongoDB'],
    url: 'https://example.com/fullstack-cert'
  },
  {
    name: 'Cloud Architecture',
    issuer: 'AWS',
    date: 'August 2023',
    credentialId: 'AWS-2023-11223',
    skills: ['AWS Services', 'Cloud Design', 'Security'],
    url: 'https://example.com/cloud-cert'
  },
  {
    name: 'Advanced Python Programming',
    issuer: 'Python Institute',
    date: 'June 2023',
    credentialId: 'PCEP-2023-44556',
    skills: ['Python 3', 'Django', 'Data Science'],
    url: 'https://example.com/python-cert'
  }
];

const experienceData = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2023 - Present',
    type: 'Full-time',
    achievements: [
      'Led a team of 5 developers in developing a microservices architecture',
      'Improved system performance by 40% through optimization',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    location: 'Remote',
    period: 'Mar 2022 - Dec 2022',
    type: 'Contract',
    achievements: [
      'Developed 3 major client projects with 100% satisfaction rate',
      'Mentored 4 junior developers',
      'Implemented automated testing increasing code coverage to 90%'
    ],
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis']
  }
];

const achievements = [
  { icon: <Trophy size={24} />, value: '15+', label: 'Certificates' },
  { icon: <Users size={24} />, value: '50+', label: 'Team Members Led' },
  { icon: <Star size={24} />, value: '98%', label: 'Client Satisfaction' },
  { icon: <Award size={24} />, value: '20+', label: 'Projects Completed' }
];

const ExperienceCertificatesSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [showAll, setShowAll] = useState(false);
  const [expandedExp, setExpandedExp] = useState(null);

  const displayedCertificates = showAll ? certificatesData : certificatesData.slice(0, 2);

  return (
    <section className="exp-cert-section">
      <div className="background-container">
        <div className="stars-overlay"></div>
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={galaxyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content-wrapper">
        <h1 className="section-title">Experience & Certifications</h1>

       

        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={20} />
            <span>Experience</span>
          </button>
          <button
            className={`tab-button ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            <Award size={20} />
            <span>Certifications</span>
          </button>
        </div>

        {activeTab === 'experience' && (
          <div className="experience-grid">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`experience-card ${expandedExp === index ? 'expanded' : ''}`}
                onClick={() => setExpandedExp(expandedExp === index ? null : index)}
              >
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className="company-name">{exp.company}</span>
                  <div className="experience-meta">
                    <span className="location">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                    <span className="period">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="experience-content">
                  <div className="achievements-list">
                    <h4>Key Achievements</h4>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>
                          <ChevronRight size={16} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies-used">
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="certificates-grid">
            {displayedCertificates.map((cert, index) => (
              <div key={index} className="certificate-card">
                <div className="certificate-header">
                  <Award size={24} className="certificate-icon" />
                  <h3>{cert.name}</h3>
                  <span className="issuer">{cert.issuer}</span>
                </div>

                <div className="certificate-details">
                  <div className="credential-info">
                    <span className="date">{cert.date}</span>
                    <span className="credential-id">ID: {cert.credentialId}</span>
                  </div>

                  <div className="certificate-skills">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>

                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="view-certificate">
                    View Certificate
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}

            {!showAll && certificatesData.length > 2 && (
              <button className="show-more-btn" onClick={() => setShowAll(true)}>
                Show More Certificates
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceCertificatesSection;
