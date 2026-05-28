import React from 'react';
import { GlobalUIState, SCREENS_LIST, ScreenData } from '../types';
import { ArrowRight, Layers, LayoutGrid, Sparkles } from 'lucide-react';

interface ScreenNavigatorProps {
  state: GlobalUIState;
  setState: React.Dispatch<React.SetStateAction<GlobalUIState>>;
  playAudioFeedback: (type?: 'tap' | 'success' | 'toggle') => void;
}

export const ScreenNavigator: React.FC<ScreenNavigatorProps> = ({
  state,
  setState,
  playAudioFeedback
}) => {

  // Filter screens based on category and search query
  const filteredScreens = SCREENS_LIST.filter(screen => {
    const matchesCategory = state.selectedCategory === 'all' || screen.app_type === state.selectedCategory;
    const matchesSearch = screen.screen_name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          screen.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeScreen = SCREENS_LIST.find(s => s.id === state.activeScreenId) || SCREENS_LIST[0];
  const completionPercent = Math.round((state.activeScreenId / SCREENS_LIST.length) * 100);

  const deviceColors: { id: GlobalUIState['deviceColor']; label: string; bg: string }[] = [
    { id: 'titanium', label: 'Natural Titanium', bg: 'bg-[#8E8D92]' },
    { id: 'midnight', label: 'Midnight Black', bg: 'bg-[#1C1C1E]' },
    { id: 'starlight', label: 'Starlight White', bg: 'bg-[#F4F4F4]' },
    { id: 'coral', label: 'Vibrant Coral', bg: 'bg-[#FF6B35]' },
  ];

  return (
    <div className="w-full lg:w-80 shrink-0 flex flex-col space-y-5">
      <div className="bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_55%,#312e81_100%)] rounded-[28px] p-5 shadow-[0_22px_60px_-35px_rgba(15,23,42,0.9)] text-white overflow-hidden relative">
        <div className="relative">
          <span className="text-[10px] uppercase tracking-wider font-bold text-white/45">
            Preview progress
          </span>
          <div className="mt-2 flex items-end justify-between gap-3">
            <div>
              <h2 className="font-heading text-lg font-bold leading-tight">
                {activeScreen.screen_name}
              </h2>
              <p className="mt-1 text-[11px] text-white/55 capitalize">
                {activeScreen.app_type} interface
              </p>
            </div>
            <span className="text-xl font-black font-heading text-[#FFD166]">
              {completionPercent}%
            </span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${completionPercent}%`,
                background: `linear-gradient(90deg, ${activeScreen.color_accent}, #FFD166)`
              }}
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                playAudioFeedback('tap');
                setState(prev => ({ ...prev, viewMode: 'gallery' }));
              }}
              className="rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-2 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Gallery
            </button>
            <button
              onClick={() => {
                playAudioFeedback('tap');
                setState(prev => ({ ...prev, viewMode: 'flow' }));
              }}
              className="rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-2 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all"
            >
              <Layers className="w-3.5 h-3.5" />
              Flow
            </button>
          </div>
        </div>
      </div>
      
      {/* Screens Selector List */}
      <div className="bg-white rounded-[28px] p-5 shadow-xs border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-bold font-heading text-gray-400 uppercase tracking-wider">
            Screens & Apps ({filteredScreens.length})
          </h2>
          {state.selectedCategory !== 'all' && (
            <span className="text-[10px] bg-[#FF6B35]/10 text-[#FF6B35] font-bold px-2 py-0.5 rounded-full">
              {state.selectedCategory}
            </span>
          )}
        </div>

        {filteredScreens.length === 0 ? (
          <div className="py-8 text-center text-gray-400 text-xs">
            No screens found matching your criteria.
          </div>
        ) : (
          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {filteredScreens.map((screen: ScreenData) => {
              const isActive = screen.id === state.activeScreenId;
              return (
                <button
                  key={screen.id}
                  onClick={() => {
                    playAudioFeedback('tap');
                    setState(prev => ({ ...prev, activeScreenId: screen.id }));
                  }}
                  className={`w-full text-left p-3 rounded-2xl transition-all flex items-start space-x-3 group ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-[0_14px_28px_-20px_rgba(15,23,42,0.9)]'
                      : 'hover:bg-gray-50 bg-white border border-gray-100/80 text-slate-800 hover:border-gray-200'
                  }`}
                >
                  <div 
                    className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 mt-0.5"
                    style={{ 
                      backgroundColor: isActive ? screen.color_accent : `${screen.color_accent}15`,
                      color: isActive ? '#fff' : screen.color_accent
                    }}
                  >
                    0{screen.id}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold font-heading truncate block ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {screen.screen_name}
                      </span>
                    </div>
                    <span className={`text-[10px] block capitalize ${isActive ? 'text-gray-300' : 'text-gray-400'}`}>
                      {screen.app_type} App
                    </span>
                    <span className={`text-[10px] mt-1 line-clamp-2 leading-relaxed hidden sm:block ${isActive ? 'text-white/55' : 'text-gray-500'}`}>
                      {screen.description}
                    </span>
                  </div>

                  {isActive && (
                    <span className="shrink-0 text-amber-400 animate-pulse">
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                  )}
                  {!isActive && (
                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-2" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Screen Design Specifications Card */}
      <div className="bg-white rounded-[28px] p-5 shadow-xs border border-gray-100">
        <h2 className="text-xs font-bold font-heading text-gray-400 uppercase tracking-wider mb-2">
          Design Architecture
        </h2>
        
        <div className="space-y-3 mt-3 text-xs">
          <div>
            <span className="text-gray-400 block text-[10px]">CURRENT VIEW</span>
            <span className="font-bold font-heading text-slate-900 text-sm">
              {activeScreen.screen_name}
            </span>
          </div>

          <div>
            <span className="text-gray-400 block text-[10px]">AESTHETIC SPEC</span>
            <p className="text-gray-600 leading-relaxed text-[11px] mt-0.5">
              {activeScreen.description}
            </p>
          </div>

          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
            <span className="text-gray-400 text-[10px]">ACCENT COLOR</span>
            <div className="flex items-center space-x-1.5">
              <span 
                className="w-3 h-3 rounded-full shadow-xs" 
                style={{ backgroundColor: activeScreen.color_accent }} 
              />
              <span className="font-mono text-[10px] text-gray-600 font-bold">
                {activeScreen.color_accent}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Device Frame Inspector Settings */}
      <div className="bg-white rounded-[28px] p-5 shadow-xs border border-gray-100">
        <h2 className="text-xs font-bold font-heading text-gray-400 uppercase tracking-wider mb-3">
          Hardware Finish
        </h2>
        
        <div className="grid grid-cols-2 gap-2">
          {deviceColors.map((color) => (
            <button
              key={color.id}
              onClick={() => {
                playAudioFeedback('toggle');
                setState(prev => ({ ...prev, deviceColor: color.id }));
              }}
              className={`p-2 rounded-xl border text-left flex items-center space-x-2 transition-all ${
                state.deviceColor === color.id
                  ? 'border-slate-900 bg-slate-50/50 ring-1 ring-slate-900 shadow-sm'
                  : 'border-gray-100 hover:border-gray-200 bg-white'
              }`}
            >
              <span className={`w-3.5 h-3.5 rounded-full ${color.bg} shadow-xs border border-black/10 shrink-0`} />
              <span className="text-[10px] font-semibold text-gray-700 block truncate">
                {color.label.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
