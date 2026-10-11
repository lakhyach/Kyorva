import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials({ testimonials, darkMode }) {
  return (
    <section className={`${darkMode ? 'bg-[#0B0B0B] border-zinc-800' : 'bg-[#F9F9F9] border-zinc-200/40'} py-24 border-y`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="space-y-2 mb-14">
          <div className={`flex items-center gap-2 text-xs font-medium tracking-wide uppercase ${darkMode ? 'text-zinc-400' : 'text-zinc-400'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span>Testimonials</span>
          </div>
        </div>

        {/* Testimonials Grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {testimonials.map((test, index) => (
            // Testimonial Card
            <div key={index} className={`${darkMode ? 'border-zinc-800' : 'border-zinc-200'} space-y-6 border-l md:border-l-0 md:border-t pt-6 md:pt-8 pl-4 md:pl-0`}>
              <p className={`text-sm font-light leading-relaxed text-justify ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>"{test.quote}"</p>
              {/* Author Info */}
              <div className="flex items-center gap-3 pt-2">
                {/* Image */}
                <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-zinc-800' : 'bg-[url(https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBncmFkaWVudHN8ZW58MHx8MHx8fDA%3D)] bg-cover'} shrink-0`} />
                {/* Name and Title */}
                <div>
                  <h5 className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{test.author}</h5>
                  <p className={`text-[10px] font-light mt-0.5 ${darkMode ? 'text-zinc-400' : 'text-zinc-400'}`}>{test.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-12 pl-1">
          <button className="w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-colors">
            <ChevronLeft size={14} />
          </button>
          <button className="w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
