import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      home: 'Main',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello! I\'m',
      role: 'Web Developer',
      description: 'Creating exceptional web experiences with passion and creativity'
    },
    about: {
      title: 'About Me',
      description: 'I am a web developer passionate about creating innovative digital solutions. I specialize in Front End development and enjoy building web applications that combine functionality with excellent user experience.',
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
      },
      viewCV: 'View CV'
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      viewCode: 'View Code'
    },
    skills: {
      title: 'Skills'
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      message: 'Message',
      send: 'Send',
      success: 'Thank you for your message! I will contact you soon.',
      error: 'Please fill in all fields',
      emailError: 'Please enter a valid email'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto'
    },
    hero: {
      greeting: '¡Hola! Soy',
      role: 'Desarrollador Web',
      description: 'Creando experiencias web excepcionales con pasión y creatividad'
    },
    about: {
      title: 'Sobre Mí',
      description: 'Soy un desarrollador web apasionado por crear soluciones digitales innovadoras. Me especializo en el desarrollo Front End y disfruto construyendo aplicaciones web que combinen funcionalidad con una excelente experiencia de usuario.',
      experience: {
        title: 'Experiencia',
        text: '1 año desarrollando aplicaciones web'
      },
      education: {
        title: 'Educación',
        text: 'Ingeniero en Tecnologias Computacionales\n(Tecnologico de Monterrey)'
      },
      interests: {
        title: 'Intereses',
        text: 'Desarrollo Web, UX/UI, Nuevas Tecnologías'
      },
      viewCV: 'Ver CV'
    },
    projects: {
      title: 'Proyectos',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código'
    },
    skills: {
      title: 'Habilidades'
    },
    contact: {
      title: 'Contacto',
      name: 'Nombre',
      message: 'Mensaje',
      send: 'Enviar',
      success: '¡Gracias por su mensaje! Me pondré en contacto pronto.',
      error: 'Por favor, complete todos los campos',
      emailError: 'Por favor, ingrese un email válido'
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}