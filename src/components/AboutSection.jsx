import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection({ darkMode }) {
  return (
    <section id="about" className="py-24 mx-auto max-w-7xl px-6 lg:px-12">

      
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        {/* Image Placeholder */}
        <div className="w-full h-112.5 bg-[url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJzdHJhY3QlMjBncmFkaWVudHN8ZW58MHx8MHx8fDA%3D)] 
        rounded-[2.5rem] bg-no-repeat bg-cover relative overflow-hidden flex items-center justify-center">
          
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
            <button className="bg-[#111111] text-white text-xs font-medium px-6 py-3.5 rounded-full hover:bg-zinc-800 transition-all inline-flex items-center gap-2">
              Our Method <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
