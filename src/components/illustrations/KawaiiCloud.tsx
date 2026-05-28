import React from 'react';

export const KawaiiCloud: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-48 flex items-center justify-center overflow-hidden rounded-3xl ${className}`}>
      {/* Background with sky blue and soft animated glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7dd3fc] to-[#bae6fd] opacity-90" />
      
      {/* Floating background decorative balloons */}
      <svg className="absolute w-full h-full inset-0 pointer-events-none" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pink Balloon */}
        <g className="animate-float-slow">
          <path d="M70 120C70 100 85 85 105 85C125 85 140 100 140 120C140 145 105 170 105 170C105 170 70 145 70 120Z" fill="url(#pink-grad)" />
          <path d="M105 170L103 195" stroke="#ffffff" strokeWidth="2" strokeDasharray="2 2" />
          <ellipse cx="95" cy="105" rx="8" ry="12" fill="#ffffff" fillOpacity="0.4" transform="rotate(-30 95 105)" />
        </g>
        
        {/* Yellow Balloon */}
        <g className="animate-float-fast" style={{ animationDelay: '1s' }}>
          <path d="M300 90C300 75 312 63 327 63C342 63 354 75 354 90C354 110 327 130 327 130C327 130 300 110 300 90Z" fill="url(#yellow-grad)" />
          <path d="M327 130L325 165" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2 2" />
          <ellipse cx="317" cy="78" rx="6" ry="9" fill="#ffffff" fillOpacity="0.5" transform="rotate(-25 317 78)" />
        </g>

        {/* Purple Balloon */}
        <g className="animate-float-slow" style={{ animationDelay: '2s' }}>
          <path d="M40 50C40 38 50 28 62 28C74 28 84 38 84 50C84 66 62 82 62 82C62 82 40 66 40 50Z" fill="url(#purple-grad)" />
          <path d="M62 82L60 110" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="2 2" />
        </g>

        {/* Sparkling Stars */}
        <path d="M200 30L203 40L213 43L203 46L200 56L197 46L187 43L197 40Z" fill="#FFF" className="animate-pulse" />
        <path d="M130 150L131.5 155L136.5 156.5L131.5 158L130 163L128.5 158L123.5 156.5L128.5 155Z" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <path d="M280 140L281.5 145L286.5 146.5L281.5 148L280 153L278.5 148L273.5 146.5L278.5 145Z" fill="#FFF" className="animate-pulse" style={{ animationDelay: '1.2s' }} />

        <defs>
          <linearGradient id="pink-grad" x1="70" y1="85" x2="140" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4D8F" />
            <stop offset="1" stopColor="#FF6B35" />
          </linearGradient>
          <linearGradient id="yellow-grad" x1="300" y1="63" x2="354" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD700" />
            <stop offset="1" stopColor="#FF6B35" />
          </linearGradient>
          <linearGradient id="purple-grad" x1="40" y1="28" x2="84" y2="82" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#FF4D8F" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main 3D Kawaii Sun Character */}
      <div className="absolute top-4 right-16 w-24 h-24 animate-float-slow" style={{ animationDelay: '0.3s' }}>
        <div className="absolute inset-0 bg-[#FFD700] rounded-full shadow-[0_0_30px_rgba(255,215,0,0.8)] border-4 border-[#FFB800] flex items-center justify-center">
          {/* Sun rays */}
          <div className="absolute -top-3 w-3 h-3 bg-[#FFD700] rounded-full animate-ping" />
          <div className="absolute -bottom-3 w-3 h-3 bg-[#FFD700] rounded-full animate-ping" />
          <div className="absolute -left-3 w-3 h-3 bg-[#FFD700] rounded-full animate-ping" />
          <div className="absolute -right-3 w-3 h-3 bg-[#FFD700] rounded-full animate-ping" />
          
          {/* Kawaii Face */}
          <div className="flex flex-col items-center mt-1">
            <div className="flex space-x-3">
              <div className="w-2 h-2.5 bg-[#1A1A2E] rounded-full animate-bounce" />
              <div className="w-2 h-2.5 bg-[#1A1A2E] rounded-full animate-bounce" />
            </div>
            {/* Cute Smile */}
            <svg className="w-4 h-3 mt-1" viewBox="0 0 20 12" fill="none">
              <path d="M2 2C2 2 6 10 10 10C14 10 18 2 18 2" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round" />
            </svg>
            {/* Blushing cheeks */}
            <div className="flex justify-between w-10 px-0.5 -mt-2.5">
              <div className="w-2 h-1.5 bg-[#FF4D8F] rounded-full opacity-70" />
              <div className="w-2 h-1.5 bg-[#FF4D8F] rounded-full opacity-70" />
            </div>
          </div>
        </div>
      </div>

      {/* Main 3D Kawaii Cloud Character */}
      <div className="relative z-10 animate-float-fast">
        {/* Soft custom shadow beneath the cloud */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/10 rounded-full blur-md" />
        
        {/* 3D Cloud vector construct */}
        <div className="relative flex items-center justify-center">
          <svg className="w-56 h-32 drop-shadow-[0_12px_20px_rgba(0,0,0,0.15)]" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Back rim lighting */}
            <path d="M 50 100 A 30 30 0 0 1 50 40 A 40 40 0 0 1 120 20 A 35 35 0 0 1 180 50 A 30 30 0 0 1 180 110 Z" fill="#F8FAFC" />
            {/* Main cloud body */}
            <path d="M 55 95 A 28 28 0 0 1 55 43 A 38 38 0 0 1 120 25 A 33 33 0 0 1 175 53 A 28 28 0 0 1 175 105 Z" fill="#FFFFFF" />
            
            {/* Volumetric inner shades for 3D effect */}
            <path d="M 65 90 A 20 20 0 0 1 65 55 A 30 30 0 0 1 115 35 A 25 25 0 0 1 160 60 A 20 20 0 0 1 160 95 Z" fill="#F1F5F9" fillOpacity="0.6" />

            {/* Kawaii Face */}
            <g transform="translate(95, 55)">
              {/* Left Eye */}
              <circle cx="0" cy="10" r="3.5" fill="#1A1A2E" />
              <circle cx="-1" cy="8.5" r="1.2" fill="#FFFFFF" />
              
              {/* Right Eye */}
              <circle cx="24" cy="10" r="3.5" fill="#1A1A2E" />
              <circle cx="23" cy="8.5" r="1.2" fill="#FFFFFF" />

              {/* Cheeks */}
              <ellipse cx="-6" cy="14" rx="4" ry="2.5" fill="#FF4D8F" fillOpacity="0.6" />
              <ellipse cx="30" cy="14" rx="4" ry="2.5" fill="#FF4D8F" fillOpacity="0.6" />

              {/* Cute W-mouth */}
              <path d="M 6 13 Q 9 17 12 13 Q 15 17 18 13" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
