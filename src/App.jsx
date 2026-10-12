import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import AboutSection from './components/AboutSection';
import Features from './components/Features';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Articles from './components/Articles';
import StartForm from './components/StartForm';
import Footer from './components/Footer';
import { features, team, testimonials, articles } from './assets/data';

const THEME_KEY = 'clayo-theme';

// Restore the visitor's previous choice; fall back to their OS preference.
function getInitialDarkMode() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return false;
  }
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Persist the theme choice across visits, and keep the <html> backdrop
  // (set pre-paint by the inline script in index.html) in sync with toggles.
  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light');
    } catch {
      /* storage unavailable (private mode) — theme still works for the session */
    }
    const el = document.documentElement.style;
    el.background = darkMode ? '#0B0B0B' : '#ffffff';
    el.colorScheme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
        darkMode ? 'bg-[#0B0B0B] text-zinc-100 selection:bg-zinc-800' : 'bg-white text-[#1A1A1A] selection:bg-zinc-200'
      }`}
    >
      <a href="#main" className="skip-link">Skip to content</a>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />

      <main id="main">
        <Hero darkMode={darkMode} />
        <Metrics darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        <Features features={features} darkMode={darkMode} />
        <Team team={team} darkMode={darkMode} />
        <Testimonials testimonials={testimonials} darkMode={darkMode} />

        <Articles articles={articles} darkMode={darkMode} />
        <StartForm darkMode={darkMode} />
      </main>

      <Footer />
    </div>
  );
}
