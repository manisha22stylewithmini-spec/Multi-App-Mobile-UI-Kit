import React from 'react';
import { GlobalUIState, AppCategory } from '../types';
import { Smartphone, LayoutGrid, Layers, Volume2, VolumeX, Moon, Sun, Sparkles, Search, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeaderProps {
  state: GlobalUIState;
  setState: React.Dispatch<React.SetStateAction<GlobalUIState>>;
  playAudioFeedback: (type?: 'tap' | 'success' | 'toggle') => void;
}

export const Header: React.FC<HeaderProps> = ({ state, setState, playAudioFeedback }) => {
  
  const handleCategoryChange = (cat: AppCategory) => {
    playAudioFeedback('toggle');
    setState(prev => ({ ...prev, selectedCategory: cat }));
  };

  const triggerKitConfetti = () => {
    playAudioFeedback('success');
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.3 },
      colors: ['#FF6B35', '#FF4D8F', '#7B5EA7', '#FFD700', '#4CAF50', '#2196F3']
    });
  };

  const categories: { id: AppCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Screens', icon: '✦' },
    { id: 'education', label: 'Education', icon: 'Aa' },
    { id: 'finance', label: 'Finance', icon: '$' },
    { id: 'social', label: 'Social', icon: '@' },
    { id: 'gamification', label: 'Game', icon: '★' },
    { id: 'health', label: 'Health', icon: '+' },
    { id: 'subscription', label: 'Premium', icon: '◇' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-white/70 px-3 sm:px-4 lg:px-8 py-3 sm:py-4 transition-colors shadow-[0_12px_40px_-30px_rgba(15,23,42,0.45)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo and Kit Title */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-[22px] bg-gradient-to-tr from-[#FF6B35] via-[#FF4D8F] to-[#7B5EA7] flex items-center justify-center text-white shadow-[0_12px_30px_-12px_rgba(255,77,143,0.85)] animate-pulse-glow">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg lg:text-xl font-bold font-heading text-slate-900 tracking-tight">
                  Multi-App Mobile UI Kit
                </h1>
                <span className="bg-[#7B5EA7]/10 text-[#7B5EA7] text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-[#7B5EA7]/10">
                  PRO
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-tight">
                Playful modern components for mobile product ideas
              </p>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => {
                playAudioFeedback('toggle');
                setState(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }));
              }}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700"
              title="Toggle Micro-interaction Audio"
            >
              {state.soundEnabled ? <Volume2 className="w-4 h-4 text-green-600" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={triggerKitConfetti}
              className="p-2 rounded-xl bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35]/20"
              title="Celebrate Kit"
            >
              <PartyPopper className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center View Switcher */}
        <div className="flex items-center bg-slate-100/80 p-1 rounded-2xl w-full md:w-auto justify-center border border-white">
          <button
            onClick={() => {
              playAudioFeedback('tap');
              setState(prev => ({ ...prev, viewMode: 'single' }));
            }}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              state.viewMode === 'single'
                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-black/5'
                : 'text-gray-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-[#FF6B35]" />
            <span>Interactive Device</span>
          </button>

          <button
            onClick={() => {
              playAudioFeedback('tap');
              setState(prev => ({ ...prev, viewMode: 'gallery' }));
            }}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              state.viewMode === 'gallery'
                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-black/5'
                : 'text-gray-600 hover:text-slate-900'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5 text-[#FF4D8F]" />
            <span>Gallery Grid</span>
          </button>

          <button
            onClick={() => {
              playAudioFeedback('tap');
              setState(prev => ({ ...prev, viewMode: 'flow' }));
            }}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              state.viewMode === 'flow'
                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-black/5'
                : 'text-gray-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#7B5EA7]" />
            <span>User Flow</span>
          </button>
        </div>

        {/* Right Toolbar Controls */}
        <div className="hidden md:flex items-center space-x-3">
          
          {/* Search Bar */}
          <div className="relative w-48 lg:w-60">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search components..."
              value={state.searchQuery}
              onChange={(e) => setState(prev => ({ ...prev, searchQuery: e.target.value }))}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-7 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 focus:bg-white transition-all"
            />
            {state.searchQuery && (
              <button
                onClick={() => setState(prev => ({ ...prev, searchQuery: '' }))}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Audio toggle */}
          <button
            onClick={() => {
              playAudioFeedback('toggle');
              setState(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }));
            }}
            className={`p-2 rounded-xl border transition-all ${
              state.soundEnabled 
                ? 'bg-green-50 border-green-200 text-green-600' 
                : 'bg-gray-50 border-gray-200 text-gray-400 hover:text-gray-600'
            }`}
            title="Synthesized Micro-interaction Audio"
          >
            {state.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme preview switch */}
          <button
            onClick={() => {
              playAudioFeedback('toggle');
              setState(prev => ({ ...prev, theme: prev.theme === 'light' ? 'dark' : 'light' }));
            }}
            className="p-2 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 transition-all"
            title="Toggle Kit Background Presentation"
          >
            {state.theme === 'light' ? <Moon className="w-4 h-4 text-purple-600" /> : <Sun className="w-4 h-4 text-amber-500" />}
          </button>

          {/* High-Fidelity Confetti trigger */}
          <button
            onClick={triggerKitConfetti}
            className="flex items-center space-x-1.5 bg-[#FF6B35] hover:bg-[#e05929] text-white px-3 py-2 rounded-xl text-xs font-bold font-heading shadow-[0_10px_24px_-14px_rgba(255,107,53,0.9)] transition-all active:scale-95"
          >
            <span>Celebrate!</span>
            <PartyPopper className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-3 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search screens, flows, app types..."
            value={state.searchQuery}
            onChange={(e) => setState(prev => ({ ...prev, searchQuery: e.target.value }))}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-8 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 focus:bg-white transition-all"
          />
          {state.searchQuery && (
            <button
              onClick={() => setState(prev => ({ ...prev, searchQuery: '' }))}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Categories Horizontal Filter Strip */}
      <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-gray-100/70 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 ${
              state.selectedCategory === cat.id
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-100'
            }`}
          >
            <span className={`${state.selectedCategory === cat.id ? 'text-[#FFD166]' : 'text-gray-400'} text-[10px] font-black`}>
              {cat.icon}
            </span>
            {cat.label}
          </button>
        ))}
      </div>
    </header>
  );
};
