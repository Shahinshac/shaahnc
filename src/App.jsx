import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  // Custom cursor movement (optional effect for "Technical WOW")
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="cyber-os">
      <Header />
      <main>
        <div id="identity">
          <Hero />
        </div>
        
        <div id="workshop" className="container">
          <h2 className="glitch gradient-text" data-text="02. Workshop_Modules" style={{ marginBottom: '4rem' }}>
            02. Workshop_Modules
          </h2>
          <Projects />
        </div>

        <div id="matrix" className="container" style={{ marginTop: '8rem' }}>
          <h2 className="glitch gradient-text" data-text="03. System_Matrix" style={{ marginBottom: '4rem' }}>
            03. System_Matrix
          </h2>
          <Skills />
        </div>
      </main>
      <Footer />
      
      {/* Visual Glitch Elements */}
      <div className="global-noise"></div>
    </div>
  )
}

export default App
