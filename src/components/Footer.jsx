import { navLinks } from '../assets/data';

const REPO_URL = 'https://github.com/lakhyach/Clayo';

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="border-t border-line dark:border-line-dark bg-paper dark:bg-night">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="space-y-4 sm:col-span-1">
            <div className="font-display text-2xl font-bold tracking-tight text-ink dark:text-paper">
              Clayo<sup className="text-[10px] font-normal opacity-50">®</sup>
            </div>
            <p className="max-w-xs text-sm font-light leading-relaxed text-body dark:text-body-dark">
              Privacy-first product analytics. Understand behaviour without cookies, clutter, or
              lock-in.
            </p>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted hover:text-ink dark:hover:text-paper transition-colors"
            >
              View source on GitHub ↗
            </a>
          </div>

          <nav aria-label="Footer" className="space-y-3">
            <h2 className="eyebrow text-muted dark:text-muted-dark">Sections</h2>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => scrollTo(e, l.id)}
                    className="text-sm text-body dark:text-body-dark hover:text-ink dark:hover:text-paper transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#start"
                  onClick={(e) => scrollTo(e, 'start')}
                  className="text-sm text-body dark:text-body-dark hover:text-ink dark:hover:text-paper transition-colors"
                >
                  Get started
                </a>
              </li>
            </ul>
          </nav>

          <div className="space-y-3">
            <h2 className="eyebrow text-muted dark:text-muted-dark">Project</h2>
            <ul className="space-y-2.5 text-sm text-body dark:text-body-dark">
              <li>Built by Lakhyajit Changmai</li>
              <li>React · Vite · Tailwind CSS</li>
              <li>
                <a
                  href="https://github.com/Footprintarts/tech-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink dark:hover:text-paper transition-colors underline decoration-line dark:decoration-line-dark underline-offset-2"
                >
                  Derived from an open template
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 select-none overflow-hidden border-t border-line pt-10 dark:border-line-dark">
          <span
            aria-hidden="true"
            className="block font-display text-[18vw] leading-[0.8] font-bold tracking-tighter text-ink/90 dark:text-paper/90"
          >
            Clayo
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted dark:border-line-dark dark:text-muted-dark sm:flex-row">
          <span>© {new Date().getFullYear()} Clayo. A portfolio project.</span>
          <span>
            Illustrative product — sample data is synthetic and labelled in the UI.
          </span>
        </div>
      </div>
    </footer>
  );
}
