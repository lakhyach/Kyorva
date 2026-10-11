import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection({ darkMode }) {
  return (
    <section id="about" className="py-24 mx-auto max-w-7xl px-6 lg:px-12">

      
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        {/* Abstract gradient panel — local CSS art replacing the Unsplash hotlink */}
        <div role="img" aria-label="Abstract violet-to-pink gradient artwork" className="w-full h-112.5 bg-gradient-to-br from-[#863bff] via-[#c7d2fe] to-[#fecdd3]
        rounded-[2.5rem] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-black/5" />
        </div>

        <div className="space-y-6 max-w-xl">
          {/* Tag */}
          <div className={`flex items-center gap-2 text-xs font-medium tracking-wide uppercase ${darkMode ? 'text-zinc-300' : 'text-zinc-400'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span>Passion</span>
          </div>
          {/* Heading */}
          <h2 className={`text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.2] ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
            We are passionate about empowering individuals and businesses to take control of their finances
          </h2>

          {/* Description */}
          <p className={`text-sm font-light leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-400'}`}>
            We are dedicated to revolutionizing the way individuals and businesses manage their finances. Our team is committed to providing relative and intuitive solutions that empower our users to achieve financial peace.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a href="#services" className="bg-[#111111] text-white text-xs font-medium px-6 py-3.5 rounded-full hover:bg-zinc-800 transition-all inline-flex items-center gap-2">
              Our Method <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
