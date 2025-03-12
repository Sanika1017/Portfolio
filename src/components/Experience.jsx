import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Prodigy Infotech",
      duration: "Rainy 2023",
      description: "Worked on creating responsive and dynamic web applications using React and Node.js.",
    },
    {
      id: 2,
      title: "Front-End Developer Intern",
      company: "Octanet",
      duration: "Winter 2023",
      description: "Assisted in developing responsive websites and learned backend technologies.",
    },
  ];

  return (
    <div className="vertical-container">
      {experiences.map((exp) => (
        <div className="vertical-card" key={exp.id}>
          <h3>{exp.title}</h3>
          <p>{exp.company} | {exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
