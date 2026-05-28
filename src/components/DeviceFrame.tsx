import React, { useState, useEffect } from 'react';
import { GlobalUIState } from '../types';
import { Wifi, Battery, Signal } from 'lucide-react';

interface DeviceFrameProps {
  children: React.ReactNode;
  state: GlobalUIState;
  screenName: string;
  appType: string;
  accentColor: string;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  children,
  state,
  screenName,
  accentColor
}) => {
  const [time, setTime] = useState<string>('9:41');
  const [islandExpanded, setIslandExpanded] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const mins = now.getMinutes();
      hours = hours % 12;
      hours = hours ? hours : 12;
      setTime(`${hours}:${mins < 10 ? '0' : ''}${mins}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  // Frame color themes matching high-end phones
  const getFrameColorStyles = () => {
    switch (state.deviceColor) {
      case 'midnight':
        return {
          outer: 'bg-[#1C1C1E] border-[#2C2C2E]',
          innerRim: 'border-black',
        };
      case 'starlight':
        return {
          outer: 'bg-[#F4F4F4] border-[#E5E5EA]',
          innerRim: 'border-[#D1D1D6]',
        };
      case 'coral':
        return {
          outer: 'bg-[#FF6B35] border-[#E05929]',
          innerRim: 'border-[#D9381E]',
        };
      case 'titanium':
      default:
        return {
          outer: 'bg-[#8E8D92] border-[#706F74]',
          innerRim: 'border-[#48484A]',
        };
    }
  };

  const frameStyles = getFrameColorStyles();

  return (
    <div className="relative flex flex-col items-center select-none py-3 sm:py-6 w-full">
      
      {/* Device Outer Chassis - Fully responsive with scale on mobile */}
      <div 
        className={`relative w-full max-w-[320px] xs:max-w-[340px] sm:max-w-[385px] h-[680px] xs:h-[720px] sm:h-[800px] rounded-[48px] sm:rounded-[55px] p-3 sm:p-3.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 ${frameStyles.outer}`}
      >
        
        {/* Hardware side buttons - hidden on very small screens to prevent overflow */}
        <div className="hidden xs:block">
          {/* Action Button */}
          <div className="absolute left-[-4px] top-[100px] sm:top-[110px] w-[3px] sm:w-[4px] h-[22px] sm:h-[26px] bg-gray-700 rounded-l-md" />
          {/* Volume Up */}
          <div className="absolute left-[-4px] top-[140px] sm:top-[155px] w-[3px] sm:w-[4px] h-[40px] sm:h-[45px] bg-gray-700 rounded-l-md" />
          {/* Volume Down */}
          <div className="absolute left-[-4px] top-[190px] sm:top-[210px] w-[3px] sm:w-[4px] h-[40px] sm:h-[45px] bg-gray-700 rounded-l-md" />
          {/* Power Button */}
          <div className="absolute right-[-4px] top-[150px] sm:top-[170px] w-[3px] sm:w-[4px] h-[55px] sm:h-[65px] bg-gray-700 rounded-r-md" />
        </div>

        {/* Inner Dark Bezel Rim */}
        <div className={`relative w-full h-full rounded-[40px] sm:rounded-[44px] bg-black border-[3px] sm:border-4 overflow-hidden flex flex-col ${frameStyles.innerRim}`}>

          {/* iOS Premium Status Bar */}
          <div className="relative z-40 flex items-center justify-between px-4 sm:px-7 pt-2.5 sm:pt-3 text-white text-xs select-none pointer-events-none">
            {/* Clock */}
            <span className="font-semibold text-[12px] sm:text-[13px] tracking-tight">{time}</span>

            {/* Dynamic Island Cutout (Clickable for immersive feel) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2 pointer-events-auto">
              <button
                onClick={() => setIslandExpanded(!islandExpanded)}
                className={`bg-black text-white rounded-full flex items-center transition-all duration-300 overflow-hidden ${
                  islandExpanded 
                    ? 'w-40 sm:w-48 h-11 sm:h-12 px-2.5 sm:px-3 py-1 justify-between shadow-lg ring-1 ring-white/20' 
                    : 'w-[95px] sm:w-[105px] h-[28px] sm:h-[30px] justify-center'
                }`}
              >
                {!islandExpanded ? (
                  <div className="flex items-center space-x-1 sm:space-x-1.5">
                    <span className="w-1 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#1A1A2E] border border-gray-800" />
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full text-[9px] sm:text-[10px] animate-fade-in">
                    <div className="flex items-center space-x-1.5 sm:space-x-2 min-w-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold text-[10px] sm:text-xs shrink-0" style={{ backgroundColor: accentColor }}>
                        ✨
                      </div>
                      <div className="flex flex-col text-left min-w-0">
                        <span className="font-bold text-gray-200 truncate max-w-[70px] sm:max-w-[80px]">{screenName}</span>
                        <span className="text-[8px] sm:text-[8px] text-green-400">Kit Interactive</span>
                      </div>
                    </div>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-ping shrink-0 ml-1" />
                  </div>
                )}
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-1 sm:space-x-1.5">
              <Signal className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-white" />
              <Wifi className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              <div className="flex items-center">
                <Battery className="w-4 h-3 sm:w-5 sm:h-4 text-white fill-current opacity-90" />
              </div>
            </div>
          </div>

          {/* Main App Content Viewport */}
          <div className="relative flex-1 w-full bg-[#F0F2F8] overflow-y-auto overflow-x-hidden no-scrollbar pt-5 sm:pt-6 pb-6 sm:pb-8">
            {children}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-gray-300 rounded-full z-40 pointer-events-none opacity-80" />

        </div>

      </div>

    </div>
  );
};