import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Star } from 'lucide-react';
import '../styles/Projects.css';
import galaxyVideo from '../images/galaxy.mp4'; // adjust the path as per your structure


const projects = [
  {
    id: 1,
    title: "IMPRO",
    description: "A cutting-edge manpower platform revolutionizing recruitment with AI-powered matching algorithms.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    duration: "3 months",
    imageUrl: "https://www.recruitoutsource.com/wp-content/uploads/2024/11/recruit-new-slide-img-3.png",
    githubUrl: "https://github.com/yourusername/impro",
    stats: { stars: 128, forks: 45, contributors: 8 }
  },
  {
    id: 2,
    title: "Frontend Templates",
    description: "Modern, accessible web templates with stunning animations and responsive designs.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
    duration: "2 months",
    imageUrl: "https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-illustration-download-in-svg-png-gif-file-formats--website-development-web-programming-backend-pack-business-illustrations-6024620.png",
    githubUrl: "https://github.com/yourusername/frontend-templates",
    stats: { stars: 256, forks: 89, contributors: 12 }
  },
  {
    id: 3,
    title: "Shopify Customization",
    description: "High-performance Shopify themes with advanced analytics and conversion optimization.",
    technologies: ["Liquid", "JavaScript", "Shopify API"],
    duration: "1.5 months",
    imageUrl: "https://www.jaipuriageeks.com/cdn/shop/files/theme-customization_c2a8e452-d6b8-48cf-948b-5df2144b0a75.png?v=1665041926&width=1100",
    githubUrl: "https://github.com/yourusername/shopify-customization",
    stats: { stars: 167, forks: 34, contributors: 5 }
  },
  {
    id: 4,
    title: "Investment Portal",
    description: "Real-time investment tracking with ML-powered market predictions and portfolio optimization.",
    technologies: ["React", "Express", "PostgreSQL", "Docker"],
    duration: "4 months",
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/049/159/784/small/finance-increasing-investing-money-concept-png.png",
    githubUrl: "https://github.com/yourusername/investment-portal",
    stats: { stars: 312, forks: 78, contributors: 15 }
  },
  {
    id: 5,
    title: "Fintech Platform",
    description: "Next-gen financial platform with blockchain integration and smart contract automation.",
    technologies: ["Vue.js", "Python", "Django", "Redis"],
    duration: "5 months",
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/016/715/175/small/financial-management-concept-and-investment-flat-design-of-payment-and-finance-with-pile-coins-or-stack-of-coins-free-png.png",
    githubUrl: "https://github.com/yourusername/fintech",
    stats: { stars: 423, forks: 156, contributors: 23 }
  },
  {
    id: 6,
    title: "Bacca Bucci",
    description: "Interactive 3D product visualization with AR try-on features and real-time customization.",
    technologies: ["Three.js", "WebGL", "JavaScript"],
    duration: "2 months",
    imageUrl: "https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-green-transparent-sports-shoes-png-image_6687298.png",
    githubUrl: "https://github.com/yourusername/bacca-bucci",
    stats: { stars: 289, forks: 67, contributors: 9 }
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggleProjects = () => {
    console.log('Before toggle - showAll:', showAll);
    setShowAll(prev => {
      console.log('After toggle - showAll:', !prev);
      return !prev;
    });
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  console.log('Displayed projects:', displayedProjects.length);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' }
    }),
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.8,
      transition: { duration: 0.3, ease: 'easeIn' }
    }
  };

  return (
    <section className="project-section" id="projects">
      <div className="page2-wrapper">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          onError={() => console.error('Video failed to load: /galaxy.mp4')}
        >
          <source src={galaxyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="stars-overlay"></div>
      </div>

      <div className="content-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className="project-grid">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0, 255, 255, 0.3)' }}
                layout
              >
                <div className="card-content">
                  <div className="card-header">
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                  </div>

                  <div className="card-body">
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="tech-stack">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    <div className="project-duration">
                      <span className="duration-label">Duration:</span>
                      <span className="duration-value">{project.duration}</span>
                    </div>

                    <div className="card-actions">
                      <a href={project.githubUrl} className="github-link" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                        <span>View Code</span>
                      </a>
                      <button className="demo-button">
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.button
          className="view-more-button"
          onClick={handleToggleProjects}
          whileHover={{ scale: 1.05, boxShadow: '0 5px 20px rgba(0, 255, 255, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {showAll ? 'Show Less' : 'View More Projects'}
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;