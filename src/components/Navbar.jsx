import PropTypes from 'prop-types'

function Navbar({ activeSection, setActiveSection }) {
  const handleHomeClick = (e) => {
    e.preventDefault();
    setActiveSection('home');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">FG</div>
      <div className="nav-links">
        <a
          href="#home"
          onClick={handleHomeClick}
          className={activeSection === 'home' ? 'active' : ''}
        >
          Inicio
        </a>
        <a
          href="#about"
          onClick={() => setActiveSection('about')}
          className={activeSection === 'about' ? 'active' : ''}
        >
          Sobre Mí
        </a>
        <a
          href="#projects"
          onClick={() => setActiveSection('projects')}
          className={activeSection === 'projects' ? 'active' : ''}
        >
          Proyectos
        </a>
        <a
          href="#skills"
          onClick={() => setActiveSection('skills')}
          className={activeSection === 'skills' ? 'active' : ''}
        >
          Habilidades
        </a>
        <a
          href="#contact"
          onClick={() => setActiveSection('contact')}
          className={activeSection === 'contact' ? 'active' : ''}
        >
          Contacto
        </a>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired
}

export default Navbar