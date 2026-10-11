import React from 'react';
import heroArt from '../assets/hero.png';

export default function Hero({ darkMode }) {
  return (
    <section id="home" className="pt-16 pb-20 text-center max-w-4xl mx-auto px-6">
      {/* Header */}
      <h1 className={`text-4xl font-semibold tracking-tight ${darkMode ? 'text-white' : 'text-zinc-900'} sm:text-6xl sm:leading-[1.15] mb-6`}>
        Discover our journey<br />and what drives us
      </h1>
      {/* Description */}
      <p className={`text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light ${darkMode ? 'text-zinc-300' : 'text-zinc-500'}`}>
        Founded by data experts, we create cutting-edge tools that empower platforms targeted for businesses of all sizes.
      </p>

      {/* Hero artwork — the project's own bundled graphic (was an Unsplash hotlink) */}

      <div className="mt-14 max-w-7xl mx-auto px-0 sm:px-6">
        <div className={`w-full h-80 sm:h-130 ${darkMode ? 'bg-zinc-900' : 'bg-[#F5F5F5]'} 
        rounded-[2.5rem] relative overflow-hidden shadow-inner flex items-center justify-center`}>

          {/* Pattern Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={darkMode ? 'white' : 'black'} strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          <img
            src={heroArt}
            alt="Clayo product concept — layered dashboard architecture in violet gradient"
            width="480"
            height="452"
            className="relative z-10 w-64 sm:w-96 lg:w-[480px] h-auto drop-shadow-3xl"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  );
}
