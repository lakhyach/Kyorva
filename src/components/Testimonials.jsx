import React from 'react';

// The template shipped three identical fabricated "John Doe / CEO" quotes.
// The layout is preserved; the column now carries the product's stated
// principles instead of invented customer voices.
export default function Testimonials({ testimonials, darkMode }) {
  return (
    <section className={`${darkMode ? 'bg-[#0B0B0B] border-zinc-800' : 'bg-[#F9F9F9] border-zinc-200/40'} py-24 border-y`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="space-y-2 mb-14">
          <div className={`flex items-center gap-2 text-xs font-medium tracking-wide uppercase ${darkMode ? 'text-zinc-400' : 'text-zinc-400'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span>Our approach</span>
          </div>
        </div>

        {/* Principle Columns */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {testimonials.map((test, index) => (
            // Principle Card
            <div key={index} className={`${darkMode ? 'border-zinc-800' : 'border-zinc-200'} space-y-6 border-l md:border-l-0 md:border-t pt-6 md:pt-8 pl-4 md:pl-0`}>
              <p className={`text-sm font-light leading-relaxed text-justify ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>"{test.quote}"</p>
              {/* Label Info */}
              <div className="flex items-center gap-3 pt-2">
                <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${darkMode ? 'bg-zinc-500' : 'bg-zinc-400'}`} aria-hidden="true" />
                <div>
                  <h5 className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{test.title}</h5>
                  <p className={`text-[10px] font-light mt-0.5 ${darkMode ? 'text-zinc-400' : 'text-zinc-400'}`}>{test.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
