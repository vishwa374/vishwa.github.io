import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="font-roboto">
      <Hero />
      <About />
      <Internships />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
