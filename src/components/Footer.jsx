import React from 'react';

// The template's footer shipped a list-page of dead "#" links ("Home V1",
// "Contact V2", …) and empty social buttons. The visual design — always-dark
// band, oversized animated gradient wordmark — is original and kept; links
// point at real sections. Per the brand brief, personal names and the
// template-promotion link are off the public site (attribution lives in the
// repository's LICENSE and README, where the license requires it).
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
              Kyorva is a financial analytics concept: real-time insight, reports you shape yourself, and the same clarity on every screen.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <nav aria-label="Pages" className="space-y-3">
              <a href="#home" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Home</a>
              <a href="#services" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Services</a>
              <a href="#about" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">About Us</a>
            </nav>
            <nav aria-label="Content" className="space-y-3">
              <a href="#workflow" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">How It Works</a>
              <a href="#insights" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Insights</a>
              <a href="#get-started" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Get Started</a>
            </nav>
          </div>
        </div>

        {/* Brand Display Section with custom abstract graphic mask applied directly */}
        <div className="py-8 text-center select-none pointer-events-none" aria-hidden="true">
          <h2 className="relative text-[14vw] sm:text-[16vw] logo-font font-bold tracking-tighter mb-4 leading-normal inline-block animate-swiss-fluid">
            Kyorva 
            <sup className="text-2xl md:text-4xl lg:-ml-10 lg:absolute lg:right-0 lg:top-20 bg-none [-webkit-text-fill-color:initial] text-zinc-400">
              &reg;
            </sup>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-500 font-light border-t border-zinc-900 pt-6">
          <div>
            <span>© {new Date().getFullYear()} Kyorva Analytics. All Rights Reserved.</span>
          </div>
          <div className="text-zinc-600">
            A product concept website — no data is collected or stored.
          </div>
        </div>
      </div>
    </footer>
  );
}
