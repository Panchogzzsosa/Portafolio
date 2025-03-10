import PropTypes from 'prop-types'
import React from 'react'
import styles from './Hero.module.css'
import { useLanguage } from '../context/LanguageContext'

function Hero({ name = '[Tu Nombre]' }) {
  const { language, translations } = useLanguage();
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
        <h1>{translations[language].hero.greeting} {name}</h1>
        <p>{translations[language].hero.role}</p>
        <p className={styles['hero-description']}>
          {translations[language].hero.description}
        </p>
        <button className="cta-button" onClick={scrollToProjects}>
          {translations[language].projects.viewProject}
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