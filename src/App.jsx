import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardDemo from './components/DashboardDemo';
import Privacy from './components/Privacy';
import Articles from './components/Articles';
import StartForm from './components/StartForm';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { navLinks } from './assets/data';

const SECTION_IDS = navLinks.map((l) => l.id);

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-night dark:text-paper font-sans antialiased">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Header isDark={isDark} toggleTheme={toggleTheme} activeId={activeId} />

      <main id="main">
        <Hero />
        <Features />
        <DashboardDemo />
        <Privacy />
        <Articles />
        <StartForm />
      </main>

      <Footer />
    </div>
  );
}
