import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import EngineeringApproach from './components/EngineeringApproach';
import Skills from './components/Skills';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* Subtle Ambient Background Highlights */}
      <div className="ambient-glow ambient-glow-1"></div>
      <div className="ambient-glow ambient-glow-2"></div>

      {/* Navigation */}
      <Header />

      {/* Main Content Flow */}
      <main>
        <Hero />
        <About />
        <Projects />
        <EngineeringApproach />
        <Skills />
        <GithubActivity />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
