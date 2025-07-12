import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import DevOpsWorkflow from './components/DevOpsWorkflow';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HireMeButton from './components/HireMeButton';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <DevOpsWorkflow />
      <Timeline />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <HireMeButton />
    </div>
  );
}

export default App;