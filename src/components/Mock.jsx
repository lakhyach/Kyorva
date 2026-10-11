import React, { useState } from 'react';
import { 
  Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, 
  Menu, Grid, Tv, Bookmark, User, Sliders, X, Layers, Image as ImageIcon
} from 'lucide-react';

export default function App() {
  // Toggle configuration engine for clean screenshots
  const [showEnginePanel, setShowEnginePanel] = useState(false);
  
  // Functional view state routing for profile tabs
  const [activeTab, setActiveTab] = useState('posts');

  // Dynamic profile metadata configuration states
  const [username, setUsername] = useState('niti.therapy');
  const [profileName, setProfileName] = useState('niti- дофамин для дома');
  const [bioText, setBioText] = useState('niti-are dopamine\nfor the home');
  const [postsCount, setPostsCount] = useState('110');
  const [followersCount, setFollowersCount] = useState('2,060');
  const [followingCount, setFollowingCount] = useState('59');
  
  // Custom display properties for the portrait mockup canvas units
  const [dimensionText, setDimensionText] = useState('1350px x 1920px dimensions posts');
  const [mockupColor, setMockupColor] = useState('bg-zinc-300');
  const [showWireframeLines, setShowWireframeLines] = useState(true);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased flex selection:bg-zinc-100">
      
      {/* ─── 1. REALISTIC INSTAGRAM DESKTOP SIDEBAR NAVIGATION ─── */}
      <aside className="hidden lg:flex flex-col justify-between w-64 h-screen sticky top-0 border-r border-zinc-200 px-3 pt-9 pb-5 shrink-0">
        <div className="space-y-7">
          {/* Logo Handle */}
          <div className="px-3 mb-2">
            <h1 className="text-xl font-bold font-serif tracking-tight italic select-none cursor-pointer">Instagram</h1>
          </div>

          {/* Navigation Links Array */}
          <nav className="space-y-1 font-sans font-medium text-sm text-zinc-900">
            <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-zinc-100 transition-colors text-left font-bold"><Home size={22} strokeWidth={2.5} /><span>Home</span></button>
            <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-zinc-100 transition-colors text-left"><Search size={22} /><span>Search</span></button>
            <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-zinc-100 transition-colors text-left"><Compass size={22} /><span>Explore</span></button>
            <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-zinc-100 transition-colors text-left"><Film size={22} /><span>Reels</span></button>
            <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-zinc-100 transition-colors text-left"><MessageCircle size={22} /><span>Messages</span></button>
            <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-zinc-100 transition-colors text-left"><Heart size={22} /><span>Notifications</span></button>
            <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-zinc-100 transition-colors text-left"><PlusSquare size={22} /><span>Create</span></button>
            <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-zinc-100 transition-colors text-left"><User size={22} /><span>Profile</span></button>
          </nav>
        </div>

        <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-zinc-100 transition-colors text-left text-sm font-medium">
          <Menu size={22} />
          <span>More</span>
        </button>
      </aside>

      {/* ─── 2. MAIN PROFILE FIELD & CANVAS AREA ─── */}
      <main className="flex-1 min-w-0 flex flex-col items-center overflow-y-auto px-4 md:px-12 lg:px-20 pt-8 pb-16">
        <div className="w-full max-w-[935px] space-y-11">
          
          {/* Main Account Info Cluster Header */}
          <header className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 pb-11 border-b border-zinc-200">
            {/* Avatar Placement Group */}
            <div className="flex justify-center md:justify-start items-start pt-1">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-[150px] md:h-[150px] rounded-full bg-[#0F299B] p-4 flex items-center justify-center text-white/90 select-none shadow-sm cursor-pointer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-1/3 h-1/3 opacity-75">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
            </div>

            {/* Profile Typography Action Board */}
            <div className="space-y-5 md:pl-10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <h2 className="text-xl font-normal text-zinc-900 tracking-tight">{username}</h2>
                <div className="flex flex-wrap gap-2">
                  <button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold text-xs py-1.5 px-4 rounded-lg transition-colors">Edit profile</button>
                  <button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold text-xs py-1.5 px-4 rounded-lg transition-colors">View archive</button>
                </div>
              </div>

              {/* Data Statistics Row Grid Counters */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-10 font-sans text-sm text-zinc-900">
                <div><strong className="font-semibold">{postsCount}</strong> posts</div>
                <button className="hover:opacity-70"><strong className="font-semibold">{followersCount}</strong> followers</button>
                <button className="hover:opacity-70"><strong className="font-semibold">{followingCount}</strong> following</button>
              </div>

              {/* Bio Description Metadata Blocks */}
              <div className="text-sm tracking-wide leading-relaxed space-y-1">
                <h1 className="font-semibold text-zinc-900">{profileName}</h1>
                <p className="text-zinc-800 font-normal whitespace-pre-line">{bioText}</p>
              </div>
            </div>
          </header>

          {/* ─── 3. ACTIVE ROUTE VIEW SELECTION TABS ─── */}
          <div className="w-full flex justify-start sm:justify-center gap-4 sm:gap-14 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-zinc-400 border-t border-transparent -mt-11 overflow-x-auto px-2">
            <button 
              onClick={() => setActiveTab('posts')}
              className={`py-3 flex items-center gap-1.5 border-t -mt-[1px] tracking-widest transition-all ${activeTab === 'posts' ? 'text-zinc-900 border-zinc-900 font-bold' : 'border-transparent opacity-50'}`}
            >
              <Grid size={12} strokeWidth={activeTab === 'posts' ? 2.5 : 1.5} />
              <span>Posts</span>
            </button>
            <button 
              onClick={() => setActiveTab('reels')}
              className={`py-3 flex items-center gap-1.5 border-t -mt-[1px] tracking-widest transition-all ${activeTab === 'reels' ? 'text-zinc-900 border-zinc-900 font-bold' : 'border-transparent opacity-50'}`}
            >
              <Tv size={12} strokeWidth={activeTab === 'reels' ? 2.5 : 1.5} />
              <span>Reels</span>
            </button>
            <button 
              onClick={() => setActiveTab('saved')}
              className={`py-3 flex items-center gap-1.5 border-t -mt-[1px] tracking-widest transition-all ${activeTab === 'saved' ? 'text-zinc-900 border-zinc-900 font-bold' : 'border-transparent opacity-50'}`}
            >
              <Bookmark size={12} strokeWidth={activeTab === 'saved' ? 2.5 : 1.5} />
              <span>Saved</span>
            </button>
            <button 
              onClick={() => setActiveTab('tagged')}
              className={`py-3 flex items-center gap-1.5 border-t -mt-[1px] tracking-widest transition-all ${activeTab === 'tagged' ? 'text-zinc-900 border-zinc-900 font-bold' : 'border-transparent opacity-50'}`}
            >
              <User size={12} strokeWidth={activeTab === 'tagged' ? 2.5 : 1.5} />
              <span>Tagged</span>
            </button>
          </div>

          {/* ─── 4. DISPLAY VIEW ROUTER ROUTING LOGIC ─── */}
          {activeTab === 'posts' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 animate-fadeIn">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className={`relative ${mockupColor} w-full aspect-[9/16] flex flex-col justify-between p-4 text-center group cursor-pointer shadow-sm overflow-hidden transition-all duration-200 border border-zinc-200/40`}
                >
                  {/* Subtle technical structural wireframe guide vectors for realistic design mockup feeling */}
                  {showWireframeLines && (
                    <div className="absolute inset-0 pointer-events-none opacity-20 border-b border-r border-dashed border-zinc-600">
                      <div className="absolute top-2 left-2 text-[8px] font-mono tracking-tight text-zinc-500">M_0{i+1}</div>
                    </div>
                  )}

                  {/* Top corner alignment mark */}
                  <div className="w-2 h-2 border-t border-l border-zinc-400 opacity-60"></div>

                  {/* Target Center Dynamic Content Banner Injection */}
                  {i === 1 && (
                    <div className="relative z-10 bg-zinc-950/95 text-[9px] md:text-[11px] font-mono font-bold text-white py-2.5 px-3 rounded-md shadow-xl max-w-[95%] mx-auto tracking-tight leading-normal border border-zinc-800">
                      {dimensionText}
                    </div>
                  )}

                  {/* Bottom design decoration placeholder lines */}
                  <div className="w-full flex justify-between items-end">
                    <div className="w-2 h-2 border-b border-l border-zinc-400 opacity-60"></div>
                    <div className="h-[2px] w-6 bg-zinc-400/40 rounded-full"></div>
                    <div className="w-2 h-2 border-b border-r border-zinc-400 opacity-60"></div>
                  </div>

                  {/* Hover Interface Mask Accent */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reels' && (
            <div className="w-full flex flex-col items-center justify-center py-20 text-center border border-dashed border-zinc-200 rounded-2xl bg-zinc-50/50 animate-fadeIn">
              <Tv size={36} className="text-zinc-300 mb-3" />
              <p className="text-sm font-medium text-zinc-500 font-mono uppercase tracking-wider">No Video Assets Linked to /reels Route</p>
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="w-full flex flex-col items-center justify-center py-20 text-center border border-dashed border-zinc-200 rounded-2xl bg-zinc-50/50 animate-fadeIn">
              <Bookmark size={36} className="text-zinc-300 mb-3" />
              <p className="text-sm font-medium text-zinc-500 font-mono uppercase tracking-wider">Collections vault is currently empty</p>
            </div>
          )}

          {activeTab === 'tagged' && (
            <div className="w-full flex flex-col items-center justify-center py-20 text-center border border-dashed border-zinc-200 rounded-2xl bg-zinc-50/50 animate-fadeIn">
              <User size={36} className="text-zinc-300 mb-3" />
              <p className="text-sm font-medium text-zinc-500 font-mono uppercase tracking-wider">Zero incoming handle mentions detected</p>
            </div>
          )}

        </div>
      </main>

      {/* ─── 5. FLOATING DESIGN FACTORY CONFIGURATION DRAWER ─── */}
      <div className="fixed bottom-4 right-4 left-4 z-50 flex flex-col items-end gap-3 font-mono sm:right-6 sm:left-auto sm:items-end">
        
        <button 
          onClick={() => setShowEnginePanel(!showEnginePanel)}
          className="bg-zinc-950 text-white p-3 rounded-full shadow-2xl border border-zinc-800 hover:border-zinc-700 transition-all flex items-center gap-2 group text-xs font-bold tracking-wider uppercase"
        >
          {showEnginePanel ? <X size={14} className="text-red-400" /> : <Sliders size={14} className="text-blue-400" />}
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-200">
            {showEnginePanel ? ' Lock Matrix' : ' Open Design Controls'}
          </span>
        </button>

        {showEnginePanel && (
          <div className="w-full max-w-[22rem] sm:w-80 bg-zinc-950 border border-zinc-800 p-5 rounded-2xl shadow-2xl text-left text-xs text-zinc-300 space-y-4 animate-fadeIn">
            <div className="pb-2 border-b border-zinc-800 flex justify-between items-center text-zinc-400">
              <span className="font-bold text-[10px] text-blue-400 uppercase tracking-widest">Mockup Engine Panel</span>
              <span>v2.1</span>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-[9px] text-zinc-500 uppercase tracking-wider mb-1">Handle Name</label>
                <input 
                  type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2 font-mono text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[9px] text-zinc-500 uppercase tracking-wider mb-1">Profile Category Header</label>
                <input 
                  type="text" value={profileName} onChange={(e) => setProfileName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2 font-mono text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[9px] text-zinc-500 uppercase tracking-wider mb-1">Center Box Metric Label</label>
                <input 
                  type="text" value={dimensionText} onChange={(e) => setDimensionText(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2 font-mono text-emerald-400 focus:outline-none"
                />
              </div>

              {/* Advanced styling modifiers to easily match various brand styles */}
              <div className="pt-2 border-t border-zinc-900 space-y-2">
                <label className="block text-[9px] text-zinc-500 uppercase tracking-wider">Canvas Base Theme</label>
                <div className="grid grid-cols-3 gap-1.5 font-sans">
                  <button onClick={() => setMockupColor('bg-zinc-300')} className={`p-1.5 text-[10px] font-medium rounded border ${mockupColor === 'bg-zinc-300' ? 'bg-zinc-800 border-zinc-500 text-white' : 'bg-zinc-900 border-zinc-800 text-zinc-400'}`}>Zinc 300</button>
                  <button onClick={() => setMockupColor('bg-[#0F299B]')} className={`p-1.5 text-[10px] font-medium rounded border ${mockupColor === 'bg-[#0F299B]' ? 'bg-zinc-800 border-zinc-500 text-white' : 'bg-zinc-900 border-zinc-800 text-zinc-400'}`}>Niti Blue</button>
                  <button onClick={() => setMockupColor('bg-zinc-100')} className={`p-1.5 text-[10px] font-medium rounded border ${mockupColor === 'bg-zinc-100' ? 'bg-zinc-800 border-zinc-500 text-white' : 'bg-zinc-900 border-zinc-800 text-zinc-400'}`}>Alabaster</button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 font-sans text-zinc-400 text-[11px]">
                <span>Show layout guide marks</span>
                <input 
                  type="checkbox" checked={showWireframeLines} onChange={(e) => setShowWireframeLines(e.target.checked)}
                  className="w-4 h-4 rounded bg-zinc-900 accent-blue-500 border-zinc-800"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                <div>
                  <label className="block text-[8px] text-zinc-500 uppercase tracking-wider mb-1">Posts</label>
                  <input type="text" value={postsCount} onChange={(e) => setPostsCount(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-1 text-center text-white" />
                </div>
                <div>
                  <label className="block text-[8px] text-zinc-500 uppercase tracking-wider mb-1">Followers</label>
                  <input type="text" value={followersCount} onChange={(e) => setFollowersCount(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-1 text-center text-white" />
                </div>
                <div>
                  <label className="block text-[8px] text-zinc-500 uppercase tracking-wider mb-1">Following</label>
                  <input type="text" value={followingCount} onChange={(e) => setFollowingCount(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-1 text-center text-white" />
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowEnginePanel(false)}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase py-2 rounded-xl transition-colors mt-2 text-[10px] tracking-wider"
            >
              Hide Control Engine for Capture
            </button>
          </div>
        )}
      </div>

    </div>
  );
}