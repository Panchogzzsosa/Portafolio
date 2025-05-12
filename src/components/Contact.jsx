import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function Contact() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    message: '',
    type: ''
  })

  const content = {
    es: {
      title: 'Contacto',
      form: {
        name: 'Nombre',
        email: 'Correo Electrónico',
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
        errors: {
          required: 'Por favor, complete todos los campos',
          invalidEmail: 'Por favor, ingrese un email válido'
        },
        success: '¡Gracias por su mensaje! Me pondré en contacto pronto.'
      },
      contact: {
        email: 'Correo',
        phone: 'Teléfono',
        location: 'Ubicación'
      }
    },
    en: {
      title: 'Contact',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        errors: {
          required: 'Please fill in all fields',
          invalidEmail: 'Please enter a valid email'
        },
        success: 'Thank you for your message! I will get back to you soon.'
      },
      contact: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location'
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: content[language].form.errors.required,
        type: 'error'
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: content[language].form.errors.invalidEmail,
        type: 'error'
      })
      return
    }

    setFormStatus({
      message: content[language].form.success,
      type: 'success'
    })

    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: content[language].contact.email,
      value: 'Franciscogzz03@gmail.com'
    },
    {
      icon: FaPhone,
      label: content[language].contact.phone,
      value: '+52 8123584236'
    },
    {
      icon: FaMapMarkerAlt,
      label: content[language].contact.location,
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
          {content[language].title}
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <style jsx>{`
          .contact-section {
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

          .contact-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .info-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 1rem;
            padding: 2rem;
            margin-bottom: 2rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .info-item {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .info-item:last-child {
            margin-bottom: 0;
          }

          .info-icon {
            font-size: 1.5rem;
            color: var(--primary-color);
            margin-right: 1rem;
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
            margin-top: 1rem;
            justify-content: center;
          }

          .social-link {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-color);
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .contact-form {
            background: rgba(255, 255, 255, 0.05);
            padding: 2rem;
            border-radius: 1rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .form-group {
            margin-bottom: 1.5rem;
          }

          label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text-color);
          }

          input,
          textarea {
            width: 100%;
            padding: 0.75rem;
            border-radius: 0.5rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--text-color);
            transition: all 0.3s ease;
          }

          input:focus,
          textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            background: rgba(255, 255, 255, 0.15);
          }

          textarea {
            min-height: 150px;
            resize: vertical;
          }

          .submit-button {
            width: 100%;
            padding: 1rem;
            border: none;
            border-radius: 0.5rem;
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
            color: white;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .submit-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }

          .form-status {
            margin-bottom: 1rem;
            padding: 0.75rem;
            border-radius: 0.5rem;
            text-align: center;
          }

          .form-status.error {
            background: rgba(255, 0, 0, 0.1);
            color: #ff4444;
          }

          .form-status.success {
            background: rgba(0, 255, 0, 0.1);
            color: #00cc00;
          }

          @media (max-width: 768px) {
            .contact-container {
              grid-template-columns: 1fr;
            }

            .contact-info {
              order: 2;
            }

            .contact-form {
              order: 1;
            }

            .section-title {
              font-size: 2rem;
            }
          }
        `}</style>
      </motion.section>
    </LazyMotion>
  )
}

export default Contact