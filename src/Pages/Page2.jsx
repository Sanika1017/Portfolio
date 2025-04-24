import React from 'react';
import { Code, Briefcase, GraduationCap, Heart, Mail, MapPin } from 'lucide-react';
import '../styles/Page2.css';
import galaxy from '../images/galaxy.mp4';
import sanika from '../images/img1.png'; // Ensure this path is correct

const Page2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="about-section" id="about">
      {/* Video Background Container */}
      <div className="video-background">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          onError={() => console.error('Video failed to load')}
        >
          <source src={galaxy} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Stars overlay for additional effect */}
      <div className="stars-overlay"></div>

      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="profile-section">
            <div className="profile-image-container">
              <img 
                src={sanika} 
                alt="Profile" 
                className="profile-image" 
              />
              <div className="profile-overlay">
                <div className="status-badge">
                  <span className="status-dot"></span>
                  Available for Projects
                </div>
              </div>
            </div>

            <div className="quick-info">
              <div className="info-item">
                <Code size={20} />
                <span>Full Stack Developer</span>
              </div>
              <div className="info-item">
                <MapPin size={20} />
                <span>Mumbai, India</span>
              </div>
              <div className="info-item">
                <Mail size={20} />
                <span>sanika@example.com</span>
              </div>
            </div>
          </div>

          <div className="details-section">
            <div className="bio-section">
              <p className="bio-text">
                Hi! I'm <span className="highlight">Sanika</span>, a passionate Computer Engineering student 
                with a love for creating innovative solutions through code. I specialize in full-stack development 
                and have a growing interest in AI and machine learning.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <Briefcase size={24} />
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <GraduationCap size={24} />
                <h3>8.54</h3>
                <p>GPA</p>
              </div>
              <div className="stat-card">
                <Code size={24} />
                <h3>8+</h3>
                <p>Technologies</p>
              </div>
              <div className="stat-card">
                <Heart size={24} />
                <h3>100%</h3>
                <p>Project Success</p>
              </div>
            </div>

            <div className="education-section">
              <h3>Education</h3>
              <div className="education-card">
                <GraduationCap size={20} />
                <div>
                  <h4>Computer Engineering</h4>
                  <p>Saraswati College of Engineering, Mumbai University</p>
                  <span>2022 - 2026</span>
                </div>
              </div>
            </div>

            <div className="interests-section">
              <h3>Interests & Hobbies</h3>
              <div className="interests-grid">
                <div className="interest-tag">📚 Tech Blogs</div>
                <div className="interest-tag">🎨 UI/UX Design</div>
                <div className="interest-tag">🎵 Music</div>
                <div className="interest-tag">📷 Photography</div>
                <div className="interest-tag">🌱 Learning</div>
                <div className="interest-tag">🤖 AI/ML</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Page2;