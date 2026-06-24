import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import AboutSection from './components/AboutSection';
import Features from './components/Features';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Articles from './components/Articles';
import Footer from './components/Footer';
import { features, team, testimonials, articles } from './assets/data';


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
        darkMode ? 'bg-[#0B0B0B] text-zinc-100 selection:bg-zinc-800' : 'bg-white text-[#1A1A1A] selection:bg-zinc-200'
      }`}
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />

      <main>
        <Hero darkMode={darkMode} />
        <Metrics darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        <Features features={features} darkMode={darkMode} />
        <Team team={team} darkMode={darkMode} />
        <Testimonials testimonials={testimonials} darkMode={darkMode} />
        
        <Articles articles={articles} darkMode={darkMode} />
      </main>

      <Footer />
    </div>
  );
}
