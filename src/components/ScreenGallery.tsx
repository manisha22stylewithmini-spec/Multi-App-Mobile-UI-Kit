import React from 'react';
import { GlobalUIState, SCREENS_LIST, ScreenData } from '../types';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ScreenGalleryProps {
  state: GlobalUIState;
  setState: React.Dispatch<React.SetStateAction<GlobalUIState>>;
  renderScreenContent: (screenId: number) => React.ReactNode;
  playAudioFeedback: (type?: 'tap' | 'success') => void;
}

export const ScreenGallery: React.FC<ScreenGalleryProps> = ({
  state,
  setState,
  renderScreenContent,
  playAudioFeedback
}) => {

  const filteredScreens = SCREENS_LIST.filter(screen => {
    const matchesCategory = state.selectedCategory === 'all' || screen.app_type === state.selectedCategory;
    const matchesSearch = screen.screen_name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          screen.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLaunchSimulator = (id: number) => {
    playAudioFeedback('success');
    setState(prev => ({
      ...prev,
      activeScreenId: id,
      viewMode: 'single'
    }));
  };

  if (state.viewMode === 'flow') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-bold font-heading text-slate-900">
            Multi-App Interaction Architecture
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Trace the functional flow connecting diverse application verticals inside our playful kit.
          </p>
        </div>

        <div className="relative">
          {/* Flow Connection Path */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B35] via-[#7B5EA7] to-[#2196F3] hidden xl:block opacity-20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {filteredScreens.map((screen: ScreenData, idx: number) => (
              <div key={screen.id} className="flex flex-col">
                
                {/* Step indicator */}
                <div className="flex items-center space-x-2 mb-3">
                  <div 
                    className="w-6 h-6 rounded-full text-white font-bold text-xs flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: screen.color_accent }}
                  >
                    {idx + 1}
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {screen.app_type}
                  </span>
                  {idx < filteredScreens.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 ml-auto hidden md:block" />
                  )}
                </div>

                {/* Device Micro Shell */}
                <div className="bg-white rounded-[32px] p-2.5 shadow-sm border border-gray-100 hover:shadow-md transition-all group flex-1 flex flex-col">
                  {/* Top Bar */}
                  <div className="w-full bg-gray-50 rounded-t-2xl py-1.5 px-3 flex items-center justify-between border-b border-gray-100 text-[9px] text-gray-400">
                    <span className="font-bold truncate">{screen.screen_name}</span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: screen.color_accent }} />
                  </div>

                  {/* Render Actual Screen Content scaled beautifully */}
                  <div className="relative w-full aspect-[9/18] bg-[#F0F2F8] rounded-b-2xl overflow-y-auto overflow-x-hidden no-scrollbar text-[11px] select-none flex-1">
                    <div className="origin-top scale-[0.80] w-[125%] h-[125%] pointer-events-auto">
                      {renderScreenContent(screen.id)}
                    </div>
                  </div>

                  {/* Launch trigger */}
                  <button
                    onClick={() => handleLaunchSimulator(screen.id)}
                    className="w-full mt-2 py-2 bg-gray-50 hover:bg-slate-900 hover:text-white text-slate-800 rounded-xl text-xs font-semibold transition-all flex items-center justify-center space-x-1"
                  >
                    <span>Focus Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Gallery Overview Mode
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-base font-bold font-heading text-slate-900">
            Interactive Screen Gallery
          </h2>
          <p className="text-xs text-gray-500">
            Browse fully functional layouts inside responsive desktop card wrappers.
          </p>
        </div>

        <span className="text-xs text-gray-400 font-medium">
          Showing {filteredScreens.length} of {SCREENS_LIST.length} Screens
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredScreens.map((screen: ScreenData) => (
          <div 
            key={screen.id} 
            className="bg-white rounded-[32px] p-5 shadow-xs border border-gray-100 hover:shadow-sm transition-all flex flex-col"
          >
            {/* Header info */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span 
                    className="w-2.5 h-2.5 rounded-full" 
                    style={{ backgroundColor: screen.color_accent }} 
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    {screen.app_type}
                  </span>
                </div>
                <h3 className="text-sm font-bold font-heading text-slate-900 mt-0.5">
                  {screen.screen_name}
                </h3>
              </div>

              <button
                onClick={() => handleLaunchSimulator(screen.id)}
                className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-slate-900 transition-all text-xs flex items-center space-x-1"
                title="Launch in Device Simulator"
              >
                <span>Simulate</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Screen Content Wrapper */}
            <div className="relative w-full h-[440px] bg-[#F0F2F8] rounded-2xl overflow-y-auto overflow-x-hidden no-scrollbar border border-gray-100/60 flex-1">
              {renderScreenContent(screen.id)}
            </div>

            {/* Footer metadata */}
            <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500">
              <span className="truncate max-w-[220px] text-[11px]">
                {screen.description}
              </span>
              <span className="font-mono text-[10px] bg-gray-50 px-2 py-0.5 rounded font-bold">
                Screen 0{screen.id}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
