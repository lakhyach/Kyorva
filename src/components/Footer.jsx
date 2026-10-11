import React from 'react';

// Inline mark: lucide-react 1.x dropped brand icons (Github).
const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.02 2.79-.02 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

// The template's footer shipped a list-page of dead "#" links ("Home V1",
// "Contact V2", …) and empty social buttons. The visual design — always-dark
// band, oversized animated gradient "Clayo®" wordmark — is original and kept;
// the links now point at real sections and real repositories.
export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white pt-20 pb-8 border-t border-neutral-900">
      {/* Dynamic Injection of the smooth shifting keyframe animation */}
      <style>{`
        @keyframes swissGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-swiss-fluid {
          background-image: linear-gradient(
            45deg, 
            #FF0000, 
            #FF007F, 
            #9A00FF, 
            #00DFFF, 
            #FF007F
          );
          background-size: 300% 300%;
          animation: swissGradient 12s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-swiss-fluid { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/50">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Clayo is a financial analytics concept: real-time insight, reports you shape yourself, and the same clarity on every screen.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/lakhyach" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <GithubIcon size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <nav aria-label="Pages" className="space-y-3">
              <a href="#home" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Home</a>
              <a href="#services" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Services</a>
              <a href="#about" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">About Us</a>
            </nav>
            <nav aria-label="Content" className="space-y-3">
              <a href="#insights" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Insights</a>
              <a href="#get-started" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Get Started</a>
            </nav>
            <nav aria-label="Source" className="space-y-3 col-span-2 sm:col-span-1">
              <a href="https://github.com/Footprintarts/tech-web" target="_blank" rel="noopener noreferrer" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Original template</a>
            </nav>
          </div>
        </div>

        {/* Brand Display Section with custom abstract graphic mask applied directly */}
        <div className="py-8 text-center select-none pointer-events-none" aria-hidden="true">
          <h2 className="relative text-[14vw] sm:text-[16vw] logo-font font-bold tracking-tighter mb-4 leading-normal inline-block animate-swiss-fluid">
            Clayo 
            <sup className="text-2xl md:text-4xl lg:-ml-10 lg:absolute lg:right-0 lg:top-20 bg-none [-webkit-text-fill-color:initial] text-zinc-400">
              &reg;
            </sup>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-500 font-light border-t border-zinc-900 pt-6">
          <div>
            <span>© {new Date().getFullYear()} Clayo Analytics. All Rights Reserved.</span>
          </div>
          <div className="text-zinc-600">
            Design system and sections by the original template author; improvements by Lakhyajit Changmai.
          </div>
        </div>
      </div>
    </footer>
  );
}
