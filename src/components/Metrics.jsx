import React from 'react';

export default function Metrics({ darkMode }) {
  return (
    <section className={`${darkMode ? 'bg-[#111111] border-zinc-800' : 'bg-white border-zinc-200/80'} border-y py-12`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200/60">
        <div className="pt-4 sm:pt-0">
          <h3 className={`text-4xl font-semibold tracking-tight mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>10+</h3>
          <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-400'} text-xs font-light`}>Innovation and adoption insight</p>
        </div>
        <div className="pt-8 sm:pt-0">
          <h3 className={`text-4xl font-semibold tracking-tight mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>$10m</h3>
          <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-400'} text-xs font-light`}>Highly efficient financial overviews</p>
        </div>
        <div className="pt-8 sm:pt-0">
          <h3 className={`text-4xl font-semibold tracking-tight mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>50m</h3>
          <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-400'} text-xs font-light`}>Users worldwide</p>
        </div>
      </div>
    </section>
  );
}
