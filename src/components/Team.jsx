import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa6';

export default function Team({ team, darkMode }) {
  return (
    <section className="py-24 mx-auto max-w-7xl px-6 lg:px-12">
      <div className="space-y-3 mb-16">
        <div className={`flex items-center gap-2 text-xs font-medium tracking-wide uppercase ${darkMode ? 'text-zinc-400' : 'text-zinc-400'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span>Our Team</span>
        </div>
        <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
          Meet the Financer team
        </h2>
        <p className={`text-xs sm:text-sm font-light max-w-xl leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-400'}`}>
          Meet the talented individuals who drive our company's success with their dedication, expertise, and passion for innovation.
        </p>
      </div>

{/* TEAM MEMBERS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {team.map((member, index) => (
          // Member Card
          <div key={index} className="group relative rounded-2xl overflow-hidden shadow-sm">
            {/* Image Area */}
            <div className="w-full h-100 bg-zinc-400/80 relative flex items-center justify-center">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            </div>
            {/* Overlay with Name, Role, and LinkedIn */} 
            <div className={`${darkMode ? 'bg-zinc-900/80 border-zinc-700 text-zinc-200' : 'bg-white/95 border-zinc-200/50 text-zinc-900'} absolute bottom-4 left-4 right-4 backdrop-blur-sm p-4 rounded-xl border flex justify-between items-center`}>
              <div>
                <h4 className="text-sm font-semibold">{member.name}</h4>
                <p className={`${darkMode ? 'text-zinc-400' : 'text-zinc-400'} text-[11px] font-light mt-0.5`}>{member.role}</p>
              </div>
              <a href="#" className={`${darkMode ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white' : 'bg-zinc-100 text-zinc-500 hover:bg-black hover:text-white'} w-7 h-7 rounded-full flex items-center justify-center transition-colors`}>
                <FaLinkedinIn size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
