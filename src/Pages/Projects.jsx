import React from "react";
import "../styles/Projects.css";
import galaxy from '../images/galaxy.mp4';

const projects = [
  {
    id: 1,
    title: "IMPRO",
    description: "Manpower platform connecting employers and candidates.",
    imageUrl: "https://p7.hiclipart.com/preview/798/927/719/manpowergroup-consultant-recruitment-company-management-others.jpg",

  },
  {
    id: 2,
    title: "Frontend Templates",
    description: "Responsive HTML/CSS/JS templates for modern websites.",
    imageUrl: "https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65d5bfa43c1e3f4eee92efd4_65ced355bb7642d3cbd8fc5c-a5c83c114fa5e7903a67ef0168f6f9d0.jpeg",
  },
  {
    id: 3,
    title: "Shopify Customization",
    description: "Designed custom themes to boost sales and UX.",
    imageUrl: "https://webcomarketing.au/wp-content/uploads/2024/01/5_best_easy-to-use-Shopify-themes-cover.png",
  },
  {
    id: 4,
    title: "Investment Portal",
    description: "Full-stack portal for managing investments in stocks, bonds, and insurance.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5612AQGhvrN_659Nyw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692289858726?e=2147483647&v=beta&t=bO_tzGWT-0DcHAR4_GEHN7duPKFsYYB4fdzV_8-KWvY",
  },
  {
    id: 5,
    title: "Fintech",
    description: "FinTech has emerged as one of the most innovative and fast-growing areas of the already pervasive technology landscape",
    imageUrl: "https://swyply.com/wp-content/uploads/2024/03/3d-cryptocurrency-rendering-design-FinTech-Collaboration-IT-Staff-Augmentation-Trends-in-Investment-Banking-.jpeg",
  },
  {
    id: 6,
    title: "Bacca Bucci",
    description: "Interactive 3D scene using Three.js showcasing code editors.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQHc6e8In1EBiQ/company-logo_200_200/company-logo_200_200/0/1642760655717/baccabucci_logo?e=2147483647&v=beta&t=75wqwLawQwokWEAkn2x8KMFAIAv5wEf6hSKO29sp7Kw",
  },
];

const Projects = () => {
  return (
    <div className="project-section">
      <video className="background-video" autoPlay loop muted playsInline>
                         <source src={galaxy} type="video/mp4" />
                         Your browser does not support the video tag.
                       </video>
      

      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="card-inner">
              <div className="card-front">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="card-back">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
