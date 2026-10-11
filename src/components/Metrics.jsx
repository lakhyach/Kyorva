import React from 'react';

// The template shipped invented figures ($10m, 50m users, "10+"). They were
// replaced with the product's actual positioning statements — same layout.
const pillars = [
  {
    headline: 'Real-time',
    caption: 'Analytics that keep pace with the decisions you make today',
  },
  {
    headline: 'Tailored',
    caption: 'Financial overviews shaped around your workflow, not ours',
  },
  {
    headline: 'Anywhere',
    caption: 'The same clarity on a phone as on a trading desk',
  },
];

export default function Metrics({ darkMode }) {
  return (
    <section aria-label="Product principles" className={`${darkMode ? 'bg-[#111111] border-zinc-800' : 'bg-white border-zinc-200/80'} border-y py-12`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200/60">
        {pillars.map((pillar, index) => (
          <div key={index} className={`${index === 0 ? 'pt-4 sm:pt-0' : 'pt-8 sm:pt-0'}`}>
            <h3 className={`text-4xl font-semibold tracking-tight mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{pillar.headline}</h3>
            <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-400'} text-xs font-light`}>{pillar.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
