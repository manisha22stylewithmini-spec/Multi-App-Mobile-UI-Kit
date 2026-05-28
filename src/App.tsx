import React, { useState, useEffect, useRef } from 'react';
import { GlobalUIState, SCREENS_LIST } from './types';
import { Header } from './components/Header';
import { ScreenNavigator } from './components/ScreenNavigator';
import { DeviceFrame } from './components/DeviceFrame';
import { ScreenGallery } from './components/ScreenGallery';

// Individual Screen Modules
import { LanguageScreen } from './screens/LanguageScreen';
import { CryptoWalletScreen } from './screens/CryptoWalletScreen';
import { P2PPaymentScreen } from './screens/P2PPaymentScreen';
import { SocialInviteScreen } from './screens/SocialInviteScreen';
import { StreakScreen } from './screens/StreakScreen';
import { HealthScreen } from './screens/HealthScreen';
import { BudgetScreen } from './screens/BudgetScreen';
import { PremiumPaywallScreen } from './screens/PremiumPaywallScreen';

// Bottom Global Tab Navigation Icons
import { Home, Compass, Bell, User, Settings, Menu, X, ArrowRight, Grid3X3, MousePointerClick, Palette, PlayCircle } from 'lucide-react';

export const App: React.FC = () => {
  const [state, setState] = useState<GlobalUIState>({
    activeScreenId: 1,
    viewMode: 'single',
    selectedCategory: 'all',
    searchQuery: '',
    deviceColor: 'titanium',
    soundEnabled: true,
    theme: 'light'
  });

  const [activeBottomTab, setActiveBottomTab] = useState<string>('home');
  const [mobileNavigatorOpen, setMobileNavigatorOpen] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize Web Audio context on demand
  useEffect(() => {
    const initAudio = () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
    };
    window.addEventListener('click', initAudio, { once: true });
    return () => {
      window.removeEventListener('click', initAudio);
    };
  }, []);

  // Close mobile navigator when screen changes on mobile
  useEffect(() => {
    setMobileNavigatorOpen(false);
  }, [state.activeScreenId]);

  // Synthesizes custom soft playful sound effects locally without any external audio asset files
  const playAudioFeedback = (type: 'tap' | 'success' | 'toggle' = 'tap') => {
    if (!state.soundEnabled) return;

    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      if (type === 'tap') {
        // Soft Marimba Pop
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.08);

      } else if (type === 'toggle') {
        // Dual-Pitch Switch
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.setValueAtTime(659.25, now + 0.04);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.1);

      } else if (type === 'success') {
        // Playful 3-tone Chime
        const freqs = [523.25, 659.25, 783.99];
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);

          gain.gain.setValueAtTime(0.12, now + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.06 + 0.15);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 0.15);
        });
      }
    } catch (e) {
      console.warn("Audio feedback context not accessible", e);
    }
  };

  const currentScreen = SCREENS_LIST.find(s => s.id === state.activeScreenId) || SCREENS_LIST[0];
  const activeIndex = SCREENS_LIST.findIndex(s => s.id === state.activeScreenId);
  const nextScreen = SCREENS_LIST[(activeIndex + 1) % SCREENS_LIST.length];

  const showNextScreen = () => {
    playAudioFeedback('tap');
    setState(prev => ({ ...prev, activeScreenId: nextScreen.id }));
  };

  // Helper to render pure active screens
  const renderScreenContent = (screenId: number) => {
    switch (screenId) {
      case 1:
        return <LanguageScreen playAudioFeedback={playAudioFeedback} />;
      case 2:
        return <CryptoWalletScreen playAudioFeedback={playAudioFeedback} />;
      case 3:
        return <P2PPaymentScreen playAudioFeedback={playAudioFeedback} />;
      case 4:
        return <SocialInviteScreen playAudioFeedback={playAudioFeedback} />;
      case 5:
        return <StreakScreen playAudioFeedback={playAudioFeedback} />;
      case 6:
        return <HealthScreen playAudioFeedback={playAudioFeedback} />;
      case 7:
        return <BudgetScreen playAudioFeedback={playAudioFeedback} />;
      case 8:
        return <PremiumPaywallScreen playAudioFeedback={playAudioFeedback} />;
      default:
        return <LanguageScreen playAudioFeedback={playAudioFeedback} />;
    }
  };

  // Global Components: Bottom tab bar with 4-5 rounded icons, active state filled orange/pink
  const renderBottomTabBar = () => {
    const tabs = [
      { id: 'home', icon: Home, label: 'Home' },
      { id: 'compass', icon: Compass, label: 'Explore' },
      { id: 'bell', icon: Bell, label: 'Alerts' },
      { id: 'user', icon: User, label: 'Profile' },
      { id: 'settings', icon: Settings, label: '' },
    ];

    return (
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 px-2 sm:px-4 py-2 flex items-center justify-around z-40 select-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeBottomTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playAudioFeedback('tap');
                setActiveBottomTab(tab.id);
              }}
              className="flex flex-col items-center justify-center py-1 px-2 sm:px-2.5 transition-all group min-w-0"
            >
              <div 
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-2xl flex items-center justify-center transition-all ${
                  isActive 
                    ? 'bg-gradient-to-tr from-[#FF6B35] to-[#FF4D8F] text-white shadow-xs scale-110' 
                    : 'text-gray-400 group-hover:text-slate-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'fill-current' : ''}`} />
              </div>
              {tab.label && (
                <span className={`text-[8px] sm:text-[8px] font-bold mt-0.5 truncate max-w-[48px] ${isActive ? 'text-slate-900' : 'text-gray-400'}`}>
                  {tab.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      state.theme === 'dark' ? 'bg-[#0F172A] text-white' : 'bg-[#F0F2F8] text-[#1A1A2E]'
    }`}>
      
      {/* Primary Top Header */}
      <Header 
        state={state} 
        setState={setState} 
        playAudioFeedback={playAudioFeedback} 
      />

      {/* Mobile Navigator Toggle - Only visible on mobile when in single view */}
      {state.viewMode === 'single' && (
        <div className="lg:hidden sticky top-[73px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2 min-w-0 flex-1">
            <span className="text-xs font-bold text-slate-700 truncate">
              Screen {state.activeScreenId}: {currentScreen.screen_name}
            </span>
          </div>
          <button
            onClick={() => {
              playAudioFeedback('toggle');
              setMobileNavigatorOpen(!mobileNavigatorOpen);
            }}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold shadow-xs active:scale-95"
          >
            {mobileNavigatorOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            <span>{mobileNavigatorOpen ? 'Close' : 'Screens'}</span>
          </button>
        </div>
      )}

      {/* Main Container Core */}
      <main className="relative overflow-hidden">
        
        {state.viewMode === 'single' ? (
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
            <section className="mb-5 sm:mb-8 rounded-[28px] border border-white/80 bg-white/75 backdrop-blur-xl shadow-[0_24px_80px_-55px_rgba(15,23,42,0.65)] overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[1.4fr_0.9fr]">
                <div className="p-5 sm:p-6 lg:p-7">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-bold text-white">
                      <PlayCircle className="w-3.5 h-3.5 text-[#FFD166]" />
                      Live simulator
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-gray-500 border border-gray-100">
                      Screen {state.activeScreenId} of {SCREENS_LIST.length}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 leading-tight">
                    {currentScreen.screen_name}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-gray-600 leading-relaxed">
                    {currentScreen.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <button
                      onClick={showNextScreen}
                      className="inline-flex items-center gap-2 rounded-2xl bg-[#FF6B35] px-4 py-2.5 text-xs font-bold text-white shadow-[0_14px_30px_-18px_rgba(255,107,53,0.95)] transition-all hover:bg-[#e85f2f] active:scale-95"
                    >
                      Next screen
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        playAudioFeedback('tap');
                        setState(prev => ({ ...prev, viewMode: 'gallery' }));
                      }}
                      className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-xs font-bold text-slate-800 border border-gray-100 transition-all hover:border-gray-200 hover:bg-gray-50 active:scale-95"
                    >
                      <Grid3X3 className="w-4 h-4 text-[#7B5EA7]" />
                      Browse all
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 lg:grid-cols-1 border-t lg:border-t-0 lg:border-l border-gray-100 bg-slate-50/70">
                  {[
                    { icon: MousePointerClick, label: 'Interactive', value: 'Tap-ready' },
                    { icon: Palette, label: 'Accent', value: currentScreen.color_accent },
                    { icon: Grid3X3, label: 'Category', value: currentScreen.app_type },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="p-4 sm:p-5 border-r last:border-r-0 lg:border-r-0 lg:border-b lg:last:border-b-0 border-gray-100">
                        <div className="w-9 h-9 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-2">
                          <Icon className="w-4 h-4 text-slate-700" />
                        </div>
                        <span className="block text-[10px] uppercase tracking-wider font-bold text-gray-400">
                          {item.label}
                        </span>
                        <span className="block mt-0.5 text-xs sm:text-sm font-bold text-slate-900 capitalize truncate">
                          {item.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-6 lg:gap-8 xl:gap-16">
              
              {/* Left Side: Dynamic Screen Selector and Specification Details */}
              {/* Mobile: Collapsible overlay, Desktop: Always visible sidebar */}
              <div className={`w-full xl:w-auto flex justify-center ${
                mobileNavigatorOpen ? 'block' : 'hidden lg:flex'
              } ${mobileNavigatorOpen ? 'fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:relative lg:bg-transparent lg:backdrop-blur-0 p-4 lg:p-0 overflow-y-auto' : ''}`}>
                <div className={`${mobileNavigatorOpen ? 'w-full max-w-sm mx-auto mt-16 lg:mt-0 bg-white rounded-3xl shadow-xl lg:shadow-none p-4 lg:p-0 lg:bg-transparent lg:rounded-none' : 'w-full'}`}>
                  {mobileNavigatorOpen && (
                    <div className="lg:hidden flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                      <h3 className="text-sm font-bold font-heading text-slate-900">Select Screen</h3>
                      <button
                        onClick={() => setMobileNavigatorOpen(false)}
                        className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  <ScreenNavigator 
                    state={state} 
                    setState={setState} 
                    playAudioFeedback={playAudioFeedback} 
                  />
                </div>
              </div>

              {/* Right Side: Ultimate Interactive Device Shell Showcase */}
              <div className="w-full xl:w-auto flex justify-center">
                <div className="relative w-full max-w-[390px] sm:max-w-none flex flex-col items-center">
                  <DeviceFrame
                    state={state}
                    screenName={currentScreen.screen_name}
                    appType={currentScreen.app_type}
                    accentColor={currentScreen.color_accent}
                  >
                    {renderScreenContent(state.activeScreenId)}
                    
                    {/* Render global bottom navigation inside device if application fits it */}
                    {[1, 2, 6, 7].includes(state.activeScreenId) && renderBottomTabBar()}
                  </DeviceFrame>

                  <div className="mt-3 w-full max-w-sm px-2">
                    <div className="rounded-2xl bg-white/80 border border-white px-4 py-3 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.75)]">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 block uppercase tracking-wider">
                            Interactive Live Shell
                          </span>
                          <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed mt-0.5">
                            Tap inside the phone to test real states and micro-interactions.
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-white">
                          375×812
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* Multi-screen Gallery and Narrative Interaction Flow Viewports */
          <ScreenGallery
            state={state}
            setState={setState}
            renderScreenContent={renderScreenContent}
            playAudioFeedback={playAudioFeedback}
          />
        )}

      </main>

      {/* Footer Branding Showcase */}
      <footer className="border-t border-gray-100/60 mt-8 sm:mt-12 py-6 sm:py-8 text-center text-xs text-gray-400 px-4">
        <div className="max-w-7xl mx-auto space-y-2">
          <p className="font-bold font-heading text-slate-800 text-xs sm:text-sm">
            Multi-App Mobile UI Kit • High-Fidelity Interactive Preview
          </p>
          <p className="max-w-md mx-auto text-[10px] sm:text-[11px] leading-relaxed px-4">
            Crafted with soft rounded corners, bubbly typography, CSS-powered 3D cartoon stickers, and fully responsive multi-vertical layouts.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-[11px]">
            <span>Mobile • Tablet • Desktop</span>
            <span className="hidden sm:inline">•</span>
            <span>8 Distinct Screens</span>
            <span className="hidden sm:inline">•</span>
            <span>100% Client Interactive</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
