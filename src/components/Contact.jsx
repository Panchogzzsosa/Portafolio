import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { motion, LazyMotion, domAnimation } from 'framer-motion'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    message: '',
    type: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Por favor, complete todos los campos',
        type: 'error'
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Por favor, ingrese un email válido',
        type: 'error'
      })
      return
    }

    // Here you would typically send the form data to a server
    setFormStatus({
      message: '¡Gracias por su mensaje! Me pondré en contacto pronto.',
      type: 'success'
    })

    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'Franciscogzz03@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Teléfono',
      value: '+52 8123584236'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Ubicación',
      value: 'Monterrey, México'
    }
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      url: 'https://github.com/Panchogzzsosa',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/francisco-miguel-gonzález-sosa-13a46430b/',
      label: 'LinkedIn'
    }
  ]

  return (
    <LazyMotion features={domAnimation}>
      <motion.section 
      id="contact" 
      className="contact-section"
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
        Contacto
      </motion.h2>
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="info-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="info-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <info.icon className="info-icon" />
                <div className="info-content">
                  <h3>{info.label}</h3>
                  <p>{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.form 
          className="contact-form" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensaje"
              required
            ></textarea>
          </div>
          {formStatus.message && (
            <div className={`form-status ${formStatus.type}`}>
              {formStatus.message}
            </div>
          )}
          <motion.button 
            type="submit" 
            className="submit-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enviar Mensaje
          </motion.button>
        </motion.form>
      </div>
      <style jsx>{`
        .contact-section {
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
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

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          padding: 2rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .info-item:last-child {
          margin-bottom: 0;
        }

        .info-icon {
          font-size: 1.5rem;
          color: var(--primary-color);
        }

        .info-content h3 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          color: var(--text-color);
        }

        .info-content p {
          color: var(--text-color);
          opacity: 0.8;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          .contact-info {
            order: 1;
          }

          .contact-form {
            order: 0;
          }
        }

        .social-link {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-color);
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0.8;
        }

        .social-link:hover {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary-color);
          transform: translateY(-3px);
          opacity: 1;
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 1rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: var(--text-color);
          transition: all 0.3s ease;
        }

        .form-group textarea {
          height: 150px;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }

        .form-status {
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }

        .form-status.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .form-status.success {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .submit-button {
          width: 100%;
          padding: 1rem;
          background: var(--primary-color);
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-button:hover {
          background: var(--gradient-end);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2rem;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </motion.section>
    </LazyMotion>
  )
}

export default Contact