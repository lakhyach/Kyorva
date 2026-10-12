import React from 'react';

// "How it works" — the product workflow the concept actually describes.
// Swiss numbered steps in the existing card language; no invented
// screenshots or claims of shipped functionality.
const steps = [
  {
    num: '01',
    title: 'Bring your data in',
    desc: 'Connect market feeds, ledgers, or a simple spreadsheet export. Kyorva reads figures as they change instead of waiting for an end-of-day batch.',
  },
  {
    num: '02',
    title: 'Shape the report',
    desc: 'Compose overviews from building blocks — charts, tables, alerts — and rearrange them until the story matches how you think about the numbers.',
  },
  {
    num: '03',
    title: 'Read it anywhere',
    desc: 'The same layout stays legible on a phone at the checkout or a widescreen at the desk — no stripped-down mobile version, no lost context.',
  },
];

export default function Workflow({ darkMode }) {
  return (
    <section id="workflow" className="py-24 mx-auto max-w-7xl px-6 lg:px-12">
      <div className="space-y-3 mb-16">
        <div className={`flex items-center gap-2 text-xs font-medium tracking-wide uppercase ${darkMode ? 'text-zinc-400' : 'text-zinc-400'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span>How it works</span>
        </div>
        <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
          From raw figures to a decision in three moves
        </h2>
      </div>

      <ol className={`grid grid-cols-1 lg:grid-cols-3 gap-6 list-none`}>
        {steps.map((step) => (
          <li
            key={step.num}
            className={`${darkMode ? 'bg-[#111111] border-zinc-800' : 'bg-[#F5F5F5] border-zinc-200/60'} border rounded-[2.5rem] p-8 sm:p-10 flex flex-col gap-5`}
          >
            <span className={`font-mono text-xs tracking-[0.25em] ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`} aria-hidden="true">
              {step.num}
            </span>
            <h3 className={`text-lg font-semibold tracking-tight ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{step.title}</h3>
            <p className={`text-xs sm:text-sm font-light leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-500'}`}>{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
