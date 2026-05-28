import React from 'react';

export const StickersHero: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-48 bg-gradient-to-br from-[#FFFDE7] to-[#FFF9C4] rounded-3xl flex items-center justify-center overflow-hidden ${className}`}>
      {/* Soft warm glowing background elements */}
      <div className="absolute w-48 h-48 bg-[#FFD700]/20 rounded-full blur-2xl animate-pulse" />
      
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1A1A2E 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      <svg className="w-full h-full max-w-[320px] relative z-10" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Floating Rare Sticker 1: Holographic Star */}
        <g className="animate-float-slow">
          {/* Thick Premium White Sticker Border */}
          <path d="M 60 35 L 67 55 L 88 55 L 71 68 L 78 88 L 60 75 L 42 88 L 49 68 L 32 55 L 53 55 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="4" strokeLinejoin="round" />
          {/* Golden Fill */}
          <path d="M 60 35 L 67 55 L 88 55 L 71 68 L 78 88 L 60 75 L 42 88 L 49 68 L 32 55 L 53 55 Z" fill="url(#gold-sticker)" transform="scale(0.85) translate(10, 10)" />
          
          {/* Cute Face */}
          <circle cx="53" cy="62" r="2.5" fill="#1A1A2E" />
          <circle cx="67" cy="62" r="2.5" fill="#1A1A2E" />
          <path d="M 57 66 Q 60 69 63 66" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
          <circle cx="49" cy="65" r="2" fill="#FF4D8F" opacity="0.6" />
          <circle cx="71" cy="65" r="2" fill="#FF4D8F" opacity="0.6" />
        </g>

        {/* Floating Rare Sticker 2: Bubbly Cat Character */}
        <g className="animate-float-fast" style={{ animationDelay: '0.4s' }}>
          {/* Thick White Sticker Contour */}
          <path d="M 130 50 C 130 30 190 30 190 50 C 200 60 200 100 190 110 C 170 125 150 125 130 110 C 120 100 120 60 130 50 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="5" strokeLinejoin="round" />
          
          {/* Cat Ears */}
          <path d="M 135 55 L 140 32 L 155 46" fill="#FF4D8F" stroke="#FFFFFF" strokeWidth="3" />
          <path d="M 185 55 L 180 32 L 165 46" fill="#FF4D8F" stroke="#FFFFFF" strokeWidth="3" />

          {/* Main Pink Blob Cat Body */}
          <path d="M 133 53 C 133 35 187 35 187 53 C 195 62 195 98 187 107 C 170 120 150 120 133 107 C 125 98 125 62 133 53 Z" fill="url(#pink-cat-grad)" />

          {/* Sparkly big anime eyes */}
          <g transform="translate(145, 65)">
            {/* Left Eye */}
            <ellipse cx="6" cy="10" rx="6" ry="8" fill="#1A1A2E" />
            <circle cx="4" cy="6" r="2.5" fill="#FFFFFF" />
            <circle cx="8" cy="13" r="1" fill="#FFFFFF" />

            {/* Right Eye */}
            <ellipse cx="24" cy="10" rx="6" ry="8" fill="#1A1A2E" />
            <circle cx="22" cy="6" r="2.5" fill="#FFFFFF" />
            <circle cx="26" cy="13" r="1" fill="#FFFFFF" />

            {/* Tiny Golden Crown on Cat's Head */}
            <path d="M 10 -15 L 13 -23 L 15 -17 L 17 -23 L 20 -15 Z" fill="#FFD700" />

            {/* Kawaii Cat Mouth */}
            <path d="M 12 14 Q 13.5 17 15 14 Q 16.5 17 18 14" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="15" rx="3.5" ry="2" fill="#FFD700" opacity="0.8" />
            <ellipse cx="30" cy="15" rx="3.5" ry="2" fill="#FFD700" opacity="0.8" />
          </g>

          {/* Little sticker peel fold effect */}
          <path d="M 180 112 L 193 102 L 190 110 Z" fill="#CBD5E1" />
        </g>

        {/* Floating Rare Sticker 3: Soft 3D Bubble Heart */}
        <g className="animate-float-slow" style={{ animationDelay: '0.8s' }}>
          {/* White Border */}
          <path d="M 250 60 C 250 40 225 40 225 60 C 225 80 250 100 250 100 C 250 100 275 80 275 60 C 275 40 250 40 250 60 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="4" strokeLinejoin="round" />
          
          {/* Orange-Red Gradient Heart */}
          <path d="M 250 60 C 250 40 225 40 225 60 C 225 80 250 100 250 100 C 250 100 275 80 275 60 C 275 40 250 40 250 60 Z" fill="url(#orange-heart-grad)" transform="scale(0.85) translate(40, 11)" />
          
          {/* Glossy shine */}
          <path d="M 233 55 C 233 48 240 48 245 52" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        </g>

        {/* Decorative dynamic Sparkles */}
        <path d="M 100 20 L 102 26 L 108 28 L 102 30 L 100 36 L 98 30 L 92 28 L 98 26 Z" fill="#FF6B35" className="animate-pulse" />
        <path d="M 210 140 L 211.5 145 L 216.5 146.5 L 211.5 148 L 210 153 L 208.5 148 L 203.5 146.5 L 208.5 145 Z" fill="#FF4D8F" className="animate-pulse" style={{ animationDelay: '0.3s' }} />

        <defs>
          <linearGradient id="gold-sticker" x1="32" y1="35" x2="88" y2="88" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD700" />
            <stop offset="1" stopColor="#FF6B35" />
          </linearGradient>
          <linearGradient id="pink-cat-grad" x1="125" y1="35" x2="195" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF85B3" />
            <stop offset="1" stopColor="#FF4D8F" />
          </linearGradient>
          <linearGradient id="orange-heart-grad" x1="225" y1="40" x2="275" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6B35" />
            <stop offset="1" stopColor="#FF4D8F" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Premium subtle overlay text */}
      <div className="absolute bottom-2 right-3 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-yellow-200 text-[10px] font-bold text-amber-600 shadow-sm">
        ✨ RARE COLLECTION
      </div>
    </div>
  );
};
