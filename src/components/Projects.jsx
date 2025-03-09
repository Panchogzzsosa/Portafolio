import PropTypes from 'prop-types'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function ProjectCard({ title, description, image, technologies, githubUrl, liveUrl }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <div className="project-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> Código
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaExternalLinkAlt /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
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

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
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

        .project-card:hover .project-image img {
          transform: scale(1.1);
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
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
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
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .project-link:hover {
          transform: scale(1.05);
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
          transition: transform 0.2s ease;
        }

        .tech-tag:hover {
          transform: scale(1.05);
          background: rgba(99, 102, 241, 0.2);
        }
      `}</style>
    </div>
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
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico con carrito de compras, pagos y gestión de productos.',
      image: '/jersix.jpeg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/Panchogzzsosa/JersixMx',
      liveUrl: 'https://jersix.mx'
    },
    {
      title: 'Landing Page for Financial Education Platform',
      description: 'Página de destino para una plataforma de educación financiera.',
      image: '/capitanfinanciero.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/Panchogzzsosa/CapitanFinanciero',
      liveUrl: 'https://capitanfinanciero.com'
    },
    {
      title: '',
      description: 'Plataforma de blog con editor rich text y sistema de comentarios.',
      image: '/project3.jpg',
      technologies: ['React', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com/username/blog-platform',
      liveUrl: 'https://blog-platform-demo.com'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <style jsx>{`
        .projects-section {
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .projects-section::before {
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects