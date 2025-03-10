import PropTypes from 'prop-types'
import { useLanguage } from '../context/LanguageContext'
import { useState } from 'react'

function Navbar({ activeSection, setActiveSection }) {
  const { language, toggleLanguage, translations } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault();
    setActiveSection('home');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">FG</div>
      <button 
        className="mobile-menu-button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a
          href="#home"
          onClick={handleHomeClick}
          className={activeSection === 'home' ? 'active' : ''}
        >
          Inicio
        </a>
        <a
          href="#about"
          onClick={() => handleNavClick('about')}
          className={activeSection === 'about' ? 'active' : ''}
        >
          {translations[language].nav.about}
        </a>
        <a
          href="#projects"
          onClick={() => handleNavClick('projects')}
          className={activeSection === 'projects' ? 'active' : ''}
        >
          {translations[language].nav.projects}
        </a>
        <a
          href="#skills"
          onClick={() => handleNavClick('skills')}
          className={activeSection === 'skills' ? 'active' : ''}
        >
          {translations[language].nav.skills}
        </a>
        <a
          href="#contact"
          onClick={() => handleNavClick('contact')}
          className={activeSection === 'contact' ? 'active' : ''}
        >
          {translations[language].nav.contact}
        </a>
      </div>
      <button
        onClick={toggleLanguage}
        className="language-toggle"
        aria-label="Toggle language"
      >
        {language.toUpperCase()}
      </button>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: rgba(17, 17, 17, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
        }

        .nav-brand {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--primary-color);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--text-color);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--primary-color);
        }

        .language-toggle {
          padding: 0.5rem 1rem;
          background: transparent;
          border: 1px solid var(--primary-color);
          color: var(--primary-color);
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .language-toggle:hover {
          background: var(--primary-color);
          color: white;
        }

        .mobile-menu-button {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
        }

        .mobile-menu-button span {
          width: 100%;
          height: 3px;
          background-color: var(--primary-color);
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .mobile-menu-button {
            display: flex;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 70%;
            flex-direction: column;
            background: rgba(17, 17, 17, 0.98);
            padding: 5rem 2rem;
            transition: right 0.3s ease;
          }

          .nav-links.open {
            right: 0;
          }

          .language-toggle {
            position: fixed;
            top: 1rem;
            right: 5rem;
          }
        }
      `}</style>
    </nav>
  )
}

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired
}

export default Navbar