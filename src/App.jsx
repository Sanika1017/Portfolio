import React from 'react';
import Navbar from '../src/components/Navbar';
import Page1 from '../src/Pages/Page1';
import Page2 from '../src/Pages/Page2';
import SkillsSection from '../src/Pages/SkillsSection';
import Projects from '../src/Pages/Projects';
import Page5 from '../src/Pages/Page5';
import ContactSection from '../src/Pages/ContactSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home"><Page1 /></section>
      <section id="about"><Page2 /></section>
      <hr />
      <section id="skills"><SkillsSection /></section>
      <hr />
      <section id="projects"><Projects /></section>
      <hr />
      <section id="page5"><Page5 /></section>
      <hr />
      <section id="contact"><ContactSection /></section>
    </div>
  );
};

export default App;
