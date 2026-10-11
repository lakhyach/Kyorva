import React from 'react';

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

      {/* Image Placeholder */}

      <div className="mt-14 max-w-7xl mx-auto px-0 sm:px-6">
        <div className="w-full h-80 sm:h-130 bg-[url(https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBncmFkaWVudHN8ZW58MHx8MHx8fDA%3D)] 
        rounded-[2.5rem] bg-no-repeat bg-cover relative overflow-hidden shadow-inner flex items-center justify-center">

          {/* Pattern Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
    
        </div>
      </div>
    </section>
  );
}
