import React from 'react';

export const ComicBubble: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-52 flex items-center justify-center overflow-hidden ${className}`}>
      {/* High-energy anime-style glowing sunburst background lines */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[repeating-conic-gradient(#FFB800_0_15deg,transparent_15deg_30deg)] animate-spin" style={{ animationDuration: '40s' }} />
      </div>

      {/* Floating Colorful Blobs */}
      <div className="absolute w-12 h-12 bg-[#FF4D8F] rounded-full blur-sm top-4 left-8 animate-float-slow opacity-80" />
      <div className="absolute w-16 h-16 bg-[#2196F3] rounded-full blur-sm bottom-2 right-6 animate-float-fast opacity-70" />
      <div className="absolute w-10 h-10 bg-[#4CAF50] rounded-full blur-sm top-12 right-12 animate-float-slow opacity-80" style={{ animationDelay: '1s' }} />

      <svg className="w-full h-full max-w-[320px] relative z-10" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Comic Speech Bubble 1 (Top Left) */}
        <g className="animate-bounce" style={{ animationDuration: '2s' }}>
          {/* Jagged / Bubbly Comic Outlines */}
          <path d="M 20 40 C 20 20 100 15 140 30 C 160 38 165 55 150 70 C 140 80 120 85 100 85 L 85 100 L 80 82 C 40 80 20 65 20 40 Z" fill="#FFFFFF" stroke="#1A1A2E" strokeWidth="3" />
          {/* Bold Japanese Text: "おまえはもう死んでる" */}
          <text x="85" y="48" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="#1A1A2E" textAnchor="middle" className="tracking-tighter">
            おまえはもう死んでる
          </text>
          <text x="85" y="65" fontFamily="sans-serif" fontWeight="800" fontSize="10" fill="#FF6B35" textAnchor="middle">
            (You are already dead!)
          </text>
        </g>

        {/* Comic Speech Bubble 2 (Right) */}
        <g className="animate-bounce" style={{ animationDuration: '2.3s', animationDelay: '0.3s' }}>
          {/* Sharp spiky explosion speech bubble */}
          <path d="M 180 30 L 200 40 L 220 25 L 230 45 L 260 35 L 250 60 L 280 70 L 250 85 L 270 110 L 235 100 L 220 125 L 205 100 L 170 105 L 185 80 L 160 60 L 185 50 Z" fill="#FFD700" stroke="#1A1A2E" strokeWidth="3" />
          {/* Bold Japanese Text: "なにィー！？" */}
          <text x="220" y="72" fontFamily="sans-serif" fontWeight="900" fontSize="18" fill="#1A1A2E" textAnchor="middle" transform="rotate(-5 220 72)">
            なにィー！？
          </text>
          <text x="220" y="88" fontFamily="sans-serif" fontWeight="bold" fontSize="10" fill="#D9381E" textAnchor="middle" transform="rotate(-5 220 88)">
            NANI!?
          </text>
        </g>

        {/* 3D Cartoon Cloud Character (Bottom Center) */}
        <g className="animate-float-fast" transform="translate(90, 85)">
          {/* Cloud Base Shadow */}
          <path d="M 20 68 C 20 68 70 75 120 68" stroke="rgba(0,0,0,0.15)" strokeWidth="8" strokeLinecap="round" />
          
          {/* Glowing Outer Layer */}
          <path d="M 10 50 A 25 25 0 0 1 25 10 A 35 35 0 0 1 90 5 A 30 30 0 0 1 130 30 A 25 25 0 0 1 130 60 Z" fill="#FFFFFF" stroke="#1A1A2E" strokeWidth="3" />
          
          {/* Volumetric Pink Highlight */}
          <path d="M 20 45 A 15 15 0 0 1 35 20 A 25 25 0 0 1 80 15" stroke="#FF4D8F" strokeWidth="4" strokeLinecap="round" opacity="0.3" />

          {/* Super Excited Kawaii Face */}
          <g transform="translate(65, 28)">
            {/* Squeezed Happy Eyes (> <) */}
            <path d="M -15 0 L -8 5 L -15 10" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M 15 0 L 8 5 L 15 10" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Big Open Happy Mouth */}
            <path d="M -6 12 Q 0 24 6 12 Z" fill="#1A1A2E" />
            <path d="M -3 15 Q 0 20 3 15 Z" fill="#FF4D8F" />

            {/* Glowing Cheeks */}
            <circle cx="-22" cy="12" r="5" fill="#FF6B35" opacity="0.6" />
            <circle cx="22" cy="12" r="5" fill="#FF6B35" opacity="0.6" />
          </g>

          {/* Sweat Drop / Excitement pop */}
          <path d="M 115 15 C 110 5 120 0 125 10 C 128 16 120 22 115 15 Z" fill="#2196F3" stroke="#1A1A2E" strokeWidth="1.5" />
        </g>

      </svg>
    </div>
  );
};
