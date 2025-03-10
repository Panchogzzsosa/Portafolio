import PropTypes from 'prop-types'
import { FaDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'

function About({ description = 'Soy un desarrollador web apasionado por crear soluciones digitales innovadoras. Me especializo en el desarrollo Front End y disfruto construyendo aplicaciones web que combinen funcionalidad con una excelente experiencia de usuario.' }) {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-content">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sobre Mí
        </motion.h2>
        <div className="about-container">
          <div className="profile-section">
            <motion.div
              className="profile-image"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src="/perfil.jpeg" alt="Mi foto de perfil" />
            </motion.div>
            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {description}
            </motion.p>
            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-download-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <FaDownload className="download-icon" />
              Ver CV
            </motion.a>
          </div>
          <div className="about-cards">
            {[
              {
                icon: '💼',
                title: 'Experiencia',
                text: '+2 años desarrollando aplicaciones web'
              },
              {
                icon: '🎓',
                title: 'Educación',
                text: 'Ingeniero en Tecnologias Computacionales\n(Tecnologico de Monterrey)'
              },
              {
                icon: '🚀',
                title: 'Intereses',
                text: 'Desarrollo Web, UX/UI, Nuevas Tecnologías'
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="about-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * (index + 3) }}
                whileHover={{ y: -5, boxShadow: '0 8px 12px -1px rgba(0, 0, 0, 0.15)' }}
              >
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.div>
            ))}
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
    </motion.section>
  )
}

About.propTypes = {
  description: PropTypes.string
}

export default About