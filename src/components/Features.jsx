import React from 'react';

export default function Features({ features = [], darkMode }) {
  return (
    <section id="services" className={`${darkMode ? 'bg-[#0B0B0B] border-zinc-800' : 'bg-[#F5F5F5] border-zinc-200/50'} py-24 border-y`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Header Block Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
            Discover what sets us apart
          </h2>
          <p className={`text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-400'}`}>
            Explore the unique features and advantages that set us apart from the competition, defining benchmarks for value and innovation.
          </p>
        </div>

        {/* Features Content Row Grid Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div key={index} className={`${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200/60'} p-8 rounded-2xl border shadow-sm flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1 duration-300`}>
                <div className={`${darkMode ? 'bg-zinc-800 text-zinc-200' : 'bg-[#F5F5F5] text-zinc-800'} w-10 h-10 rounded-full flex items-center justify-center mb-6`}>
                  {Icon && <Icon size={18} />}
                </div>
                <div>
                  <h4 className={`text-base font-semibold mb-2 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{feat.title}</h4>
                  <p className={`text-xs font-light leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-400'}`}>{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Interface Action Row Controls */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button className={`p-2 transition-colors ${darkMode ? 'text-zinc-500 hover:text-white' : 'text-zinc-400'}`}>
            <span className="sr-only">Previous feature</span>
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="flex gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-white' : 'bg-black'}`} />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
          </div>
          <button className={`p-2 transition-colors ${darkMode ? 'text-zinc-500 hover:text-white' : 'text-zinc-400'}`}>
            <span className="sr-only">Next feature</span>
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
        
      </div>
    </section>
  );
}