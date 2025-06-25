import PropTypes from 'prop-types'
import { FaDownload } from 'react-icons/fa'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function About({ description = {
  es: 'Soy un desarrollador web apasionado por crear soluciones digitales innovadoras. Me especializo en el desarrollo Front End y disfruto construyendo aplicaciones web que combinen funcionalidad con una excelente experiencia de usuario.',
  en: 'I am a web developer passionate about creating innovative digital solutions. I specialize in Front End development and enjoy building web applications that combine functionality with excellent user experience.'
} }) {
  const { language } = useLanguage()

  const content = {
    es: {
      title: 'Sobre Mí',
      downloadCV: 'Ver CV',
      experience: {
        title: 'Experiencia',
        text: '+2 años desarrollando aplicaciones web'
      },
      education: {
        title: 'Educación',
        text: 'Ingeniero en Tecnologias Computacionales\n(Tecnologico de Monterrey)'
      },
      interests: {
        title: 'Intereses',
        text: 'Desarrollo Web, UX/UI, Nuevas Tecnologías'
      }
    },
    en: {
      title: 'About Me',
      downloadCV: 'View CV',
      experience: {
        title: 'Experience',
        text: '1 year developing web applications'
      },
      education: {
        title: 'Education',
        text: 'Computer Technology Engineer\n(Tecnologico de Monterrey)'
      },
      interests: {
        title: 'Interests',
        text: 'Web Development, UX/UI, New Technologies'
      }
    }
  }

  return (
    <LazyMotion features={domAnimation}>
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
            {content[language].title}
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
                animate={{ y: [-5, 5, -5], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
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
                {description[language]}
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
                {content[language].downloadCV}
              </motion.a>
            </div>
            <div className="about-cards">
              {[
                {
                  icon: '💼',
                  title: content[language].experience.title,
                  text: content[language].experience.text
                },
                {
                  icon: '🎓',
                  title: content[language].education.title,
                  text: content[language].education.text
                },
                {
                  icon: '🚀',
                  title: content[language].interests.title,
                  text: content[language].interests.text
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
                  animate={{ y: [-3, 3, -3], transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 } }}
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
            max-width: 800px;
            margin: 0 auto 2rem;
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-color);
          }

          .cv-download-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.8rem 1.5rem;
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
            color: white;
            border-radius: 2rem;
            font-weight: 500;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .cv-download-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.15);
          }

          .download-icon {
            font-size: 1.2rem;
          }

          .about-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 3rem;
          }

          .about-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 1rem;
            padding: 2rem;
            text-align: center;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          .card-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .about-card h3 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .about-card p {
            font-size: 1rem;
            color: var(--text-color);
            line-height: 1.6;
          }

          @media (max-width: 768px) {
            .about-section {
              padding: 3rem 1rem;
            }

            .section-title {
              font-size: 2rem;
            }

            .about-description {
              font-size: 1rem;
              padding: 0 1rem;
            }

            .about-cards {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </motion.section>
    </LazyMotion>
  )
}

About.propTypes = {
  description: PropTypes.shape({
    es: PropTypes.string.isRequired,
    en: PropTypes.string.isRequired
  })
}

export default About