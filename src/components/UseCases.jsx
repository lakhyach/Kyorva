import React from 'react';

// Replaces the old "Team" section: the brief removed personal names from the
// public site, and a one-person anonymous card grid would ring hollow. Same
// visual role (gradient panel + overlay label cards), but now it answers a
// real question — who this product is for. Audiences, never invented customers.
const audiences = [
  {
    initials: 'II',
    title: 'Independent investors',
    desc: 'Track positions and cashflow without renting someone else\'s dashboard.',
    gradient: 'from-[#863bff] via-[#a78bfa] to-[#47bfff]',
  },
  {
    initials: 'FT',
    title: 'Finance teams',
    desc: 'One shared source of numbers, reshaped per report instead of per request.',
    gradient: 'from-[#47bfff] via-[#a78bfa] to-[#f0abfc]',
  },
  {
    initials: 'SB',
    title: 'Small business owners',
    desc: 'The weekly picture that used to take a spreadsheet afternoon — in one glance.',
    gradient: 'from-[#f0abfc] via-[#c7d2fe] to-[#863bff]',
  },
];

export default function UseCases({ darkMode }) {
  return (
    <section className="py-24 mx-auto max-w-7xl px-6 lg:px-12">
      <div className="space-y-3 mb-16">
        <div className={`flex items-center gap-2 text-xs font-medium tracking-wide uppercase ${darkMode ? 'text-zinc-400' : 'text-zinc-400'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span>Who it's for</span>
        </div>
        <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
          Built for people who live in the numbers
        </h2>
        <p className={`text-xs sm:text-sm font-light max-w-xl leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-400'}`}>
          Kyorva's design targets three kinds of readers — the same clarity each of them asks for, at a different scale.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {audiences.map((item, index) => (
          <div key={index} className="group relative rounded-2xl overflow-hidden shadow-sm">
            {/* Monogram panel — abstract mark, no stock photography */}
            <div className={`w-full h-100 bg-gradient-to-br ${item.gradient} relative flex items-center justify-center`}>
              <span className="logo-font text-white/95 text-8xl font-bold select-none" aria-hidden="true">{item.initials}</span>
            </div>
            {/* Overlay label */}
            <div className={`${darkMode ? 'bg-zinc-900/80 border-zinc-700 text-zinc-200' : 'bg-white/95 border-zinc-200/50 text-zinc-900'} absolute bottom-4 left-4 right-4 backdrop-blur-sm p-4 rounded-xl border`}>
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <p className={`${darkMode ? 'text-zinc-400' : 'text-zinc-400'} text-[11px] font-light mt-0.5`}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
