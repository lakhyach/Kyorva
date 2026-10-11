import React from 'react';

// Inline mark: lucide-react 1.x dropped brand icons (Github).
const GithubIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.02 2.79-.02 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

// The template shipped six invented people on stock-photo Unsplash images
// (under a "Financer" heading that didn't even match the Clayo brand).
// The card layout is preserved; the content is now the real, single maker.
export default function Team({ team, darkMode }) {
  return (
    <section className="py-24 mx-auto max-w-7xl px-6 lg:px-12">
      <div className="space-y-3 mb-16">
        <div className={`flex items-center gap-2 text-xs font-medium tracking-wide uppercase ${darkMode ? 'text-zinc-400' : 'text-zinc-400'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span>Our Team</span>
        </div>
        <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
          Meet the Clayo team
        </h2>
        <p className={`text-xs sm:text-sm font-light max-w-xl leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-400'}`}>
          Clayo is an independent project — one maker handling design and engineering end to end.
        </p>
      </div>

      {/* MAKER CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {team.map((member, index) => (
          // Member Card
          <div key={index} className="group relative rounded-2xl overflow-hidden shadow-sm">
            {/* Monogram panel — local, no stock photography */}
            <div className="w-full h-100 bg-gradient-to-br from-[#863bff] via-[#a78bfa] to-[#47bfff] relative flex items-center justify-center">
              <span className="logo-font text-white/95 text-8xl font-bold select-none" aria-hidden="true">{member.initials}</span>
            </div>
            {/* Overlay with Name, Role, and GitHub */}
            <div className={`${darkMode ? 'bg-zinc-900/80 border-zinc-700 text-zinc-200' : 'bg-white/95 border-zinc-200/50 text-zinc-900'} absolute bottom-4 left-4 right-4 backdrop-blur-sm p-4 rounded-xl border flex justify-between items-center`}>
              <div>
                <h4 className="text-sm font-semibold">{member.name}</h4>
                <p className={`${darkMode ? 'text-zinc-400' : 'text-zinc-400'} text-[11px] font-light mt-0.5`}>{member.role}</p>
              </div>
              <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on GitHub`} className={`${darkMode ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white' : 'bg-zinc-100 text-zinc-500 hover:bg-black hover:text-white'} w-7 h-7 rounded-full flex items-center justify-center transition-colors`}>
                <GithubIcon size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
