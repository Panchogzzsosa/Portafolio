import PropTypes from 'prop-types'
import React from 'react'
import styles from './Hero.module.css'

function Hero({ name = '[Tu Nombre]', title = 'Desarrollador Web Full Stack' }) {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles['hero-section']}>
      <div className={styles['hero-background-shapes']}>
        <div className={`${styles.shape} ${styles['shape-1']}`}></div>
        <div className={`${styles.shape} ${styles['shape-2']}`}></div>
        <div className={`${styles.shape} ${styles['shape-3']}`}></div>
      </div>
      <div className={styles['hero-content']}>
        <h1>¡Hola! Soy {name}</h1>
        <p>{title}</p>
        <p className={styles['hero-description']}>
          Creando experiencias web excepcionales con pasión y creatividad
        </p>
        <button className="cta-button" onClick={scrollToProjects}>
          Ver Proyectos
          <span className={styles['button-icon']}>→</span>
        </button>
      </div>
    </div>
  )
}

Hero.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string
}

export default Hero