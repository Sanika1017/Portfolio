import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    id: 1,
    title: "IMPRO (Industrial Manpower Resource Organization)",
    description:
      "Manpower agencies, also known as staffing agencies or employment agencies, play a crucial role in the job market by providing employers with qualified candidates for job positions.",
    imageUrl:
      "https://deosoft.net/wp-content/uploads/2023/07/manpower-management-solution-ranchi-deosoft.jpg",
  },
  {
    id: 2,
    title: "Frontend Templates",
    description:
      "Creating a frontend template was an exciting challenge, where I focused on combining clean, responsive design with efficient coding practices. I used HTML, CSS, and JavaScript to build a user-friendly interface, ensuring compatibility across various devices and browsers.",
    imageUrl:
      "https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65d5bfa43c1e3f4eee92efd4_65ced355bb7642d3cbd8fc5c-a5c83c114fa5e7903a67ef0168f6f9d0.jpeg",
  },
  {
    id: 3,
    title: "Medsync",
    description:
      "It integrates the Data Sets for personalized treatment plans based on patient data. Combines healthcare, data analysis, and technology for a holistic solution. Reduces time and cost by automating recommendations and tracking progress.",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/11/358171308/AU/YW/QI/65567988/medicine-drop-copy-copy.jpg",
  },
  {
    id: 4,
    title: "Tradition Trails",
    description:
      "A Tradition Trails serves as an informative platform, showcasing the cultural, natural, or historical significance of globally recognized landmarks. It provides detailed descriptions, images, and historical context, promoting awareness and conservation efforts.",
    imageUrl:
      "https://hellolata.wordpress.com/wp-content/uploads/2017/12/shutterstock_465558758-illustration-of-india-background-showing-its-culture-and-diversity-with-monument-dance-and-festival.jpg",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-intro">
        <h2>My Projects</h2>
        <p>
          These are some of the projects I've worked on, showcasing my skills in
          frontend and backend development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-photo">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
