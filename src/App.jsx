import React from 'react';
import Navbar from '../src/components/Navbar';
import Page1 from '../src/Pages/Page1';
import Page2 from '../src/Pages/Page2';

import Projects from '../src/Pages/Projects';
import Page5 from '../src/Pages/Page5';
import ContactSection from '../src/Pages/ContactSection';

import CustomCursor from './components/Cursor';
import SkillSection from './Pages/SkillsSection';


const App = () => {
  return (
    <div>
     
      <Navbar />
      <CustomCursor />
      <section id="home"><Page1 /></section>
      <section id="page2"><Page2 /></section>
      
      
     
      <section id="projects"><Projects /></section>
      <section id="SkillSection"><SkillSection /></section>

    
      <section id="page5"><Page5 /></section>
     
      <section id="contact"><ContactSection /></section>
    </div>
  );
};

export default App;
