import PropTypes from 'prop-types'
import { FaDownload } from 'react-icons/fa'

function About({ description = 'Soy un desarrollador web apasionado por crear soluciones digitales innovadoras. Me especializo en el desarrollo Front End y disfruto construyendo aplicaciones web que combinen funcionalidad con una excelente experiencia de usuario.' }) {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-container">
          <div className="profile-section">
            <div className="profile-image">
              <img src="/perfil.jpeg" alt="Mi foto de perfil" />
            </div>
            <p className="about-description">{description}</p>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-download-button">
              <FaDownload className="download-icon" />
              Ver CV
            </a>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon">💼</div>
              <h3>Experiencia</h3>
              <p>+2 años desarrollando aplicaciones web</p>
            </div>
            <div className="about-card">
              <div className="card-icon">🎓</div>
              <h3>Educación</h3>
              <p>Ingeniero en Tecnologias Computacionales
                <br />
                (Tecnologico de Monterrey)</p>
            </div>
            <div className="about-card">
              <div className="card-icon">🚀</div>
              <h3>Intereses</h3>
              <p>Desarrollo Web, UX/UI, Nuevas Tecnologías</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-section {
          background: var(--bg-color);
          position: relative;
          overflow: hidden;
          padding: 4rem 2rem;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .profile-section {
          text-align: center;
          margin-bottom: 3rem;
        }

        .profile-image {
          width: 200px;
          height: 200px;
          margin: 0 auto 2rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--primary-color);
          box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);
          transition: transform 0.3s ease;
        }

        .profile-image:hover {
          transform: scale(1.05);
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .about-description {
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto;
          color: var(--text-color);
        }
        
        .about-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .about-card {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(99, 102, 241, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
          backdrop-filter: blur(10px);
        }
        
        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px -1px rgba(0, 0, 0, 0.15);
        }
        
        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .about-card h3 {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .about-cards {
            grid-template-columns: 1fr;
          }
          
          .section-title {
            font-size: 2rem;
          }

          .profile-image {
            width: 150px;
            height: 150px;
          }

          .about-card {
            padding: 1.5rem;
          }
        }

        .cv-download-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
          color: white;
          border-radius: 2rem;
          font-size: 1.2rem;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.2);
          position: relative;
          z-index: 1;
        }

        .cv-download-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
        }

        .cv-download-button:active {
          transform: translateY(1px);
        }

        .download-icon {
          font-size: 1.4rem;
        }
      `}</style>
    </section>
  )
}

About.propTypes = {
  description: PropTypes.string
}

export default About