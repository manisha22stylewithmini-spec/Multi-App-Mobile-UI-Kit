import React from 'react';

export const DJCharacter: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-28 h-28 flex items-center justify-center ${className}`}>
      {/* Dynamic Sound Waves */}
      <div className="absolute inset-0 flex items-center justify-around opacity-40">
        <span className="w-1 bg-white h-4 rounded-full animate-pulse" style={{ animationDuration: '0.4s' }} />
        <span className="w-1 bg-white h-8 rounded-full animate-pulse" style={{ animationDuration: '0.6s' }} />
        <span className="w-1 bg-white h-12 rounded-full animate-pulse" style={{ animationDuration: '0.3s' }} />
        <span className="w-1 bg-white h-6 rounded-full animate-pulse" style={{ animationDuration: '0.7s' }} />
        <span className="w-1 bg-white h-10 rounded-full animate-pulse" style={{ animationDuration: '0.5s' }} />
      </div>

      <svg className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] animate-float-fast" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* DJ Cap Back */}
        <path d="M 30 50 Q 60 20 90 50 Z" fill="#FF6B35" />

        {/* Big 3D Headphones Band */}
        <path d="M 22 65 C 22 20 98 20 98 65" stroke="#1A1A2E" strokeWidth="8" strokeLinecap="round" />
        <path d="M 22 65 C 22 20 98 20 98 65" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />

        {/* DJ Character Head */}
        <circle cx="60" cy="65" r="28" fill="#FFD9B3" />
        <circle cx="60" cy="63" r="28" fill="#FFE5CC" />

        {/* Cool Sunglasses */}
        <g transform="translate(42, 53)">
          {/* Left Lens */}
          <rect x="0" y="0" width="15" height="11" rx="3" fill="#1A1A2E" />
          <path d="M 2 2 L 10 9" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          
          {/* Bridge */}
          <path d="M 15 4 L 21 4" stroke="#1A1A2E" strokeWidth="3" />
          
          {/* Right Lens */}
          <rect x="21" y="0" width="15" height="11" rx="3" fill="#1A1A2E" />
          <path d="M 23 2 L 31 9" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </g>

        {/* Cool Smile */}
        <path d="M 52 75 Q 60 82 68 75" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round" />
        
        {/* Headphone Ear Cups */}
        {/* Left Cup */}
        <rect x="12" y="48" width="14" height="30" rx="7" fill="#FF4D8F" />
        <rect x="14" y="50" width="10" height="26" rx="5" fill="#1A1A2E" />
        
        {/* Right Cup */}
        <rect x="94" y="48" width="14" height="30" rx="7" fill="#FF4D8F" />
        <rect x="96" y="50" width="10" height="26" rx="5" fill="#1A1A2E" />

        {/* DJ Cap Front Visor */}
        <path d="M 35 44 Q 60 36 85 44" stroke="#FF4D8F" strokeWidth="6" strokeLinecap="round" />

        {/* Little Floating Golden Music Note */}
        <g className="animate-bounce" style={{ animationDuration: '1s' }}>
          <path d="M 85 30 L 85 15 L 100 18 L 100 23 L 88 20 L 88 30 Z" fill="#FFD700" />
          <circle cx="82" cy="30" r="4" fill="#FFD700" />
        </g>

        {/* Little Floating Pink Music Note */}
        <g className="animate-bounce" style={{ animationDuration: '1.3s', animationDelay: '0.2s' }}>
          <path d="M 25 35 L 25 20 L 35 22 L 35 32 Z" fill="#FF4D8F" />
          <circle cx="22" cy="35" r="3.5" fill="#FF4D8F" />
        </g>
      </svg>
    </div>
  );
};
