import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Navbar.css';

export default function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/logo.png" alt="logo" className="logo-img" />
        <span>
          <span className="logo-highlight">Sanika</span>
        </span>
      </div>

      {/* Center Tabs */}
      <div className="navbar-tabs-wrapper">
        <div className="navbar-tabs">
          <button className="tab-button" onClick={() => handleScroll('home')}>Home</button>
          <button className="tab-button" onClick={() => handleScroll('page2')}>About</button>
          <button className="tab-button" onClick={() => handleScroll('skills')}>Skills</button>
          <button className="tab-button" onClick={() => handleScroll('projects')}>Projects</button>
          <button className="tab-button" onClick={() => handleScroll('page5')}>Experience</button>
          <button className="tab-button" onClick={() => handleScroll('contact')}>Contact</button>
        </div>
      </div>

      {/* Social Icons */}
      <div className="navbar-icons">
        <a href="#"><FaGithub size={20} /></a>
        <a href="#"><FaLinkedin size={20} /></a>
      </div>
    </nav>
  );
}
