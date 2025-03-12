import React, { useState } from "react";

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: "AWS APAC Solutions Architecture Virtual Experience",
      issuer: "Amazon Web Services",
      date: "December 2024",
      description: "Designing a simple, scalable, hosting architecture",
      imageUrl: "path/to/certificate1.jpg",
    },
    {
      id: 2,
      title: "Goldman Sachs Software Engineering Virtual Experience",
      issuer: "Goldman Sachs",
      date: "December 2024",
      description: "Cracked leaked password database",
      imageUrl: "path/to/certificate2.jpg",
    },
    {
      id: 3,
      title: "Front-End Developer Intern",
      issuer: "Octanet",
      date: "November 2024",
      description: "Assisted in developing responsive websites",
      imageUrl: "path/to/certificate3.jpg",
    },
  ];

  const [viewedCertificate, setViewedCertificate] = useState(null);

  return (
    <div className="vertical-container">
      {certificates.map((cert) => (
        <div className="vertical-card" key={cert.id}>
          <h3>{cert.title}</h3>
          <p>Issued by: {cert.issuer} | {cert.date}</p>
          <p>{cert.description}</p>
          <button onClick={() => setViewedCertificate(cert.imageUrl)}>
            View Certificate
          </button>
          {viewedCertificate === cert.imageUrl && (
            <img src={cert.imageUrl} alt={cert.title} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Certificate;
