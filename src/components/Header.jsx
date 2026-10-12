/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown, LayoutGrid, Activity } from 'lucide-react';

export default function Header({
  darkMode,
  setDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  dropdownOpen,
  setDropdownOpen,
}) {
  // Mobile overlay: Escape closes it and the page behind stops scrolling
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMobileMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  // Desktop dropdown: Escape closes it and returns focus context
  useEffect(() => {
    if (!dropdownOpen) return;
    const onKey = (e) => e.key === 'Escape' && setDropdownOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [dropdownOpen, setDropdownOpen]);

  // Framer Motion Variants mirroring high-end institutional typography shifts
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: [0.7, 0, 0.84, 0] } }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300 ${
      darkMode ? 'bg-[#0B0B0B]/90 border-zinc-900' : 'bg-white/80 border-zinc-100'
    }`}>
      <div className="mx-auto cursor-pointer flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a href="#home" className={`font-bold tracking-tighter text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
          <span className="logo-font">Kyorva <sup className="text-[10px] font-mono font-normal tracking-none -ml-0.5">®</sup></span>
        </a>

        {/* ─── DESKTOP NAVIGATION ─── */}
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-wider font-semibold lg:flex">
          <a href="#home" className={`transition-colors ${darkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-black'}`}>Home</a>
          <a href="#services" className={`transition-colors ${darkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-black'}`}>Services</a>
          <a href="#about" className={`transition-colors ${darkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-black'}`}>About Us</a>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className={`transition-colors flex items-center gap-1 focus:outline-none ${
                darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'
              }`}
            >
              <span>System Index</span>
              <ChevronDown size={12} className={`transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className={`absolute left-0 mt-3 w-56 border p-1 shadow-xl focus:outline-none rounded-lg ${
                    darkMode ? 'bg-[#111112] border-zinc-800 shadow-black/40' : 'bg-white border-zinc-200/80 shadow-zinc-200/40'
                  }`}
                >
                  <div className="space-y-0.5">
                    <a href="#services" onClick={() => setDropdownOpen(false)} className={`flex items-center gap-2.5 px-3 py-2 text-xs font-medium transition-colors rounded-md ${
                      darkMode ? 'text-zinc-300 hover:bg-zinc-900 hover:text-white' : 'text-zinc-600 hover:bg-zinc-50 hover:text-black'
                    }`}>
                      <LayoutGrid size={13} className="text-zinc-500" />
                      <span>Services overview</span>
                    </a>
                    <a href="#insights" onClick={() => setDropdownOpen(false)} className={`flex items-center gap-2.5 px-3 py-2 text-xs font-medium transition-colors rounded-md ${
                      darkMode ? 'text-zinc-300 hover:bg-zinc-900 hover:text-white' : 'text-zinc-600 hover:bg-zinc-50 hover:text-black'
                    }`}>
                      <Activity size={13} className="text-zinc-500" />
                      <span>Latest insights</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className={`p-2.5 rounded-full border transition-all ${
              darkMode ? 'border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800' : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100'
            }`}
          >
            {darkMode ? <Sun color='white' size={14} /> : <Moon size={14} />}
          </button>

          <a href="#get-started" className={`text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-full transition-all ${
            darkMode ? 'bg-white text-black hover:bg-zinc-200' : 'bg-[#111111] text-white hover:bg-zinc-800'
          }`}>
            Get Started
          </a>
        </div>

        {/* ─── MOBILE CONTROLS TRIGGER ─── */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className={`p-2 rounded-full border transition-colors ${
              darkMode ? 'border-zinc-900 bg-zinc-950 text-yellow-400' : 'border-zinc-100 bg-zinc-50 text-zinc-600'
            }`}
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
            className={`rounded-full p-2 transition-colors ${darkMode ? 'text-zinc-400 hover:bg-zinc-900' : 'text-zinc-600 hover:bg-zinc-100'}`}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* ─── SWISS FULL SCREEN OVERLAY ARCHITECTURE ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed bg-zinc-100/95 h-screen inset-0 z-999 flex flex-col justify-between p-6 sm:p-12 lg:hidden ${
              darkMode ? 'bg-[#070708] text-white' : ' text-black'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            {/* Overlay Top Bar Layout */}
            <div className="flex  items-center justify-between w-full border-b pb-6 border-current/10">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] opacity-40">INDEXED_MENU // 2026</div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 transition-transform hover:rotate-90 duration-200"
                aria-label="Close mobile menu"
              >
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>

            {/* Asymmetric Typography Navigation Stack */}
            <div className="flex  flex-col justify-center space-y-4 grow my-auto max-w-xl text-left">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'About Us', href: '#about' }
              ].map((link, idx) => (
                <div key={idx} className="overflow-hidden py-1">
                  <motion.a
                    custom={idx}
                    variants={itemVariants}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-5xl sm:text-7xl font-bold tracking-tighter uppercase leading-none border-b border-transparent hover:border-current transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </div>
              ))}
            </div>

            {/* System Status Metrics Bottom Row */}
            <div className="border-t pt-8 border-current/10 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full items-end">
              <div className="space-y-3">
                <span className="block text-[10px] font-mono uppercase tracking-widest opacity-40">System Core Targets</span>
                <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-wider">
                  <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity flex items-center gap-1.5">
                    <span>Services overview</span>
                  </a>
                  <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity flex items-center gap-1.5">
                    <span>Latest insights</span>
                  </a>
                </div>
              </div>

              <div>
                <a href="#get-started" onClick={() => setMobileMenuOpen(false)} className={`block w-full py-4 text-xs font-bold uppercase tracking-widest text-center transition-colors ${
                  darkMode ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-900'
                }`}>
                  Get Started
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}