import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks } from '../assets/data';

function Wordmark({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
        <rect width="64" height="64" rx="14" className="fill-ink dark:fill-paper" />
        <circle
          cx="30"
          cy="32"
          r="15"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="70 100"
          transform="rotate(130 30 32)"
          className="stroke-paper dark:stroke-ink"
        />
        <circle cx="45" cy="24" r="6" className="fill-volt" />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight">
        Clayo<sup className="text-[9px] font-normal align-super opacity-50">®</sup>
      </span>
    </span>
  );
}

export default function Header({ isDark, toggleTheme, activeId }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll + trap Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'backdrop-blur-md border-b border-line dark:border-line-dark bg-paper/80 dark:bg-night/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a
          href="#top"
          onClick={(e) => go(e, 'top')}
          className="text-ink dark:text-paper"
          aria-label="Clayo — back to top"
        >
          <Wordmark />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => go(e, link.id)}
              aria-current={activeId === link.id ? 'true' : undefined}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeId === link.id
                  ? 'text-ink dark:text-paper'
                  : 'text-muted hover:text-ink dark:hover:text-paper'
              }`}
            >
              {link.label}
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-paper-2 dark:bg-night-2"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="rounded-full border border-line dark:border-line-dark p-2.5 text-ink dark:text-paper hover:bg-paper-2 dark:hover:bg-night-2 transition-colors"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a href="#start" onClick={(e) => go(e, 'start')} className="btn-primary hidden sm:inline-flex">
            Start free
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="rounded-full p-2.5 text-ink dark:text-paper lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-paper dark:bg-night p-6 lg:hidden outline-none"
          >
            <div className="flex items-center justify-between">
              <Wordmark className="text-ink dark:text-paper" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-full p-2 text-ink dark:text-paper hover:bg-paper-2 dark:hover:bg-night-2"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => go(e, link.id)}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl font-display font-bold tracking-tight py-1 text-ink dark:text-paper"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="space-y-3">
              <a
                href="#start"
                onClick={(e) => go(e, 'start')}
                className="btn-primary w-full"
              >
                Start free
              </a>
              <button onClick={toggleTheme} className="btn-ghost w-full">
                {isDark ? 'Light mode' : 'Dark mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
