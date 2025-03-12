import React, { useState } from "react";
import Experience from "../components/Experience";
import Certificate from "../components/Certificate";
import "../styles/Page5.css";

const Page5 = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="page5-container">
      <div className="tabs">
        <button
          className={activeTab === "experience" ? "active" : ""}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={activeTab === "certificate" ? "active" : ""}
          onClick={() => setActiveTab("certificate")}
        >
          Certificate
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "experience" ? <Experience /> : <Certificate />}
      </div>
    </div>
  );
};

export default Page5;
