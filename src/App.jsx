import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <LanguageProvider>
      <div className="app">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          <Hero name="Francisco G." />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App