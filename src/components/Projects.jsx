import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useLanguage } from '../context/LanguageContext'

function ProjectCard({ title, description, image, technologies, githubUrl, liveUrl }) {
  const { language } = useLanguage()
  const buttonText = {
    es: {
      code: 'Código',
      demo: 'Demo'
    },
    en: {
      code: 'Code',
      demo: 'Demo'
    }
  }

  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="project-image">
        <img src={image} alt={title} />
        <motion.div 
          className="project-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-links">
            {githubUrl && (
              <motion.a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> {buttonText[language].code}
              </motion.a>
            )}
            {liveUrl && (
              <motion.a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt /> {buttonText[language].demo}
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
      <div className="project-content">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {description}
        </motion.p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              className="tech-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .project-image {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          background: var(--primary-color);
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          transition: background 0.2s ease;
        }

        .project-link:hover {
          background: var(--gradient-end);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .project-content p {
          color: var(--text-color);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary-color);
          padding: 0.4rem 1rem;
          border-radius: 1rem;
          font-size: 0.9rem;
        }

        .tech-tag:hover {
          background: rgba(99, 102, 241, 0.2);
        }
      `}</style>
    </motion.div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubUrl: PropTypes.string,
  liveUrl: PropTypes.string
}

function Projects() {
  const { language } = useLanguage()
  
  const projectsData = {
    es: [
      {
        title: 'Plataforma E-commerce',
        description: 'Plataforma de comercio electrónico con carrito de compras, pagos y gestión de productos.',
        image: '/jersix.jpeg',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
        githubUrl: 'https://github.com/Panchogzzsosa/JersixMx',
        liveUrl: 'https://jersix.mx'
      },
      {
        title: 'Landing Page de Plataforma de Educación Financiera',
        description: 'Página de destino para una plataforma de educación financiera.',
        image: '/capitanfinanciero.png',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
        githubUrl: 'https://github.com/Panchogzzsosa/CapitanFinanciero',
        liveUrl: 'https://capitanfinanciero.com'
      },
      {
        title: 'Python Adventure',
        description: 'Juego interactivo de programación en Python',
        image: '/PythonAdventure.png',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap','React'],
        githubUrl: 'https://github.com/Panchogzzsosa/Python-Adventure',
        liveUrl: 'https://pythonadventure.netlify.app/'
      }
    ],
    en: [
      {
        title: 'E-commerce Platform',
        description: 'E-commerce platform with shopping cart, payments, and product management.',
        image: '/jersix.jpeg',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
        githubUrl: 'https://github.com/Panchogzzsosa/JersixMx',
        liveUrl: 'https://jersix.mx'
      },
      {
        title: 'Financial Education Platform Landing Page',
        description: 'Landing page for a financial education platform.',
        image: '/capitanfinanciero.png',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
        githubUrl: 'https://github.com/Panchogzzsosa/CapitanFinanciero',
        liveUrl: 'https://capitanfinanciero.com'
      },
      {
        title: 'Python Adventure',
        description: 'Interactive Python programming game',
        image: '/PythonAdventure.png',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap','React'],
        githubUrl: 'https://github.com/username/blog-platform',
        liveUrl: 'https://blog-platform-demo.com'
      }
    ]
  }

  const content = {
    es: {
      title: 'Mis Proyectos'
    },
    en: {
      title: 'My Projects'
    }
  }

  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {content[language].title}
      </motion.h2>
      <div className="projects-grid">
        {projectsData[language].map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <style jsx>{`
        .projects-section {
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects