import React from 'react';

// Article teasers keep the template's finance topics. The Unsplash hotlinks
// were replaced with local CSS gradients in the same abstract style, and the
// dead click affordance (cursor-pointer with no destination) was removed.
export default function Articles({ articles, darkMode }) {
  return (
    <section id="insights" className={`py-24 mx-auto max-w-7xl px-6 lg:px-12 ${darkMode ? 'bg-[#0B0B0B]' : ''}`}>
      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className={`flex items-center gap-2 text-xs font-medium tracking-wide uppercase ${darkMode ? 'text-zinc-400' : 'text-zinc-400'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span>Blog and articles</span>
        </div>
        <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
          Latest insights and trends
        </h2>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((art, index) => (
          // Article Card
          <article key={index} className={`space-y-4 group ${darkMode ? 'border border-zinc-800 rounded-3xl p-5' : ''}`}>
            <div className={`w-full h-60 rounded-2xl relative overflow-hidden bg-gradient-to-br ${art.art}`}>
              <div className="absolute inset-0 bg-black/5" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded ${darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-600'}`}>{art.tag}</span>
              <h4 className={`text-base font-semibold leading-snug ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{art.title}</h4>
              <p className={`text-xs font-light leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-400'}`}>{art.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
