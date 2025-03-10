import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGit, FaDocker, FaPython } from 'react-icons/fa'
import { SiFlutter, SiDart } from 'react-icons/si'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

function SkillCard({ icon: Icon, name, category }) {
  return (
    <motion.div 
      className="skill-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <Icon className="skill-icon" />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {name}
      </motion.h3>
      <motion.span 
        className="skill-category"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {category}
      </motion.span>
      <style jsx>{`
        .skill-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          padding: 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .skill-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--primary-color);
          transition: transform 0.3s ease;
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.1);
        }

        h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .skill-category {
          display: inline-block;
          font-size: 0.9rem;
          color: var(--text-color);
          opacity: 0.8;
        }
      `}</style>
    </motion.div>
  )
}

SkillCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

function Skills() {
  const skillsByCategory = {
    Frontend: [
      { icon: FaHtml5, name: 'HTML5', level: 90 },
      { icon: FaCss3Alt, name: 'CSS3', level: 85 },
      { icon: FaJs, name: 'JavaScript', level: 85 },
      { icon: FaReact, name: 'React', level: 80 }
    ],
    'Mobile Development': [
      { icon: SiFlutter, name: 'Flutter', level: 85 },
      { icon: SiDart, name: 'Dart', level: 85 }
    ],
    Backend: [
      { icon: FaPython, name: 'Python', level: 85 },
      { icon: FaNode, name: 'Node.js', level: 75 },
      { icon: FaDatabase, name: 'Databases', level: 70 }
    ],
    Tools: [
      { icon: FaGit, name: 'Git', level: 85 }
    ]
  }

  return (
    <motion.section 
      id="skills" 
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Mis Habilidades
      </motion.h2>
      {Object.entries(skillsByCategory).map(([category, skills]) => (
        <motion.div 
          key={category} 
          className="skills-category"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="category-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {category}
          </motion.h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} category={category} />
            ))}
          </div>
        </motion.div>
      ))}
      <style jsx>{`
        .skills-section {
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .skills-section::before {
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

        .skills-category {
          margin-bottom: 3rem;
        }

        .category-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--text-color);
          opacity: 0.9;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .category-title {
            font-size: 1.5rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.section>
  )
}

export default Skills