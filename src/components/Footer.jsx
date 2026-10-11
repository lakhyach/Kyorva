import React from 'react';
import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white pt-20 pb-8 border-t border-neutral-900">
      {/* Dynamic Injection of the smooth shifting keyframe animation */}
      <style>{`
        @keyframes swissGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-swiss-fluid {
          background-image: linear-gradient(
            45deg, 
            #FF0000, 
            #FF007F, 
            #9A00FF, 
            #00DFFF, 
            #FF007F
          );
          background-size: 300% 300%;
          animation: swissGradient 12s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/50">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Luxury defined via intuitive architecture optimization frameworks with absolute precision data pipelines metrics to support internal business growth targets.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <FaXTwitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Home V1</a>
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Home V2</a>
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Home V3</a>
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Calendar</a>
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">About Us V1</a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">About Us V2</a>
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Pricing</a>
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Blogs</a>
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Blog Post</a>
            </div>
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Contact V1</a>
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Contact V2</a>
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Contact V3</a>
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Product</a>
              <a href="#" className="block text-xs text-zinc-400 hover:text-white transition-colors font-light">Categories</a>
            </div>
          </div>
        </div>

        {/* Brand Display Section with custom abstract graphic mask applied directly */}
        <div className="py-8 text-center select-none pointer-events-none">
          <h1 className="relative text-[14vw] sm:text-[16vw] logo-font font-bold tracking-tighter mb-4 leading-normal inline-block animate-swiss-fluid">
            Clayo 
            <sup className="text-2xl md:text-4xl lg:-ml-10 lg:absolute lg:right-0 lg:top-20 bg-none [-webkit-text-fill-color:initial] text-zinc-400">
              &reg;
            </sup>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-500 font-light border-t border-zinc-900 pt-6">
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <div>
            <span>© Clayo Analytics. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}