import React from 'react';

export const BlobCharacters: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-44 flex items-center justify-center overflow-hidden ${className}`}>
      {/* Dynamic colorful blobs in the background */}
      <div className="absolute w-36 h-36 bg-[#FF4D8F]/10 rounded-full blur-xl -top-6 left-10 animate-pulse" />
      <div className="absolute w-36 h-36 bg-[#FFD700]/15 rounded-full blur-xl -bottom-6 right-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Sparkle Stars */}
        <g className="animate-spin" style={{ animationDuration: '12s' }}>
          <path d="M 40 30 L 43 42 L 55 45 L 43 48 L 40 60 L 37 48 L 25 45 L 37 42 Z" fill="#FFD700" />
        </g>
        <g className="animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}>
          <path d="M 250 20 L 251.5 27 L 258 28.5 L 251.5 30 L 250 37 L 248.5 30 L 242 28.5 L 248.5 27 Z" fill="#FF4D8F" />
        </g>
        <path d="M 220 120 L 222 126 L 228 128 L 222 130 L 220 136 L 218 130 L 212 128 L 218 126 Z" fill="#7B5EA7" className="animate-pulse" />
        <circle cx="80" cy="130" r="4" fill="#FF6B35" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="150" cy="20" r="3" fill="#2196F3" />

        {/* Black Blob Character */}
        <g className="animate-float-slow">
          {/* Main 3D Soft Black Blob body */}
          <path d="M 60 90 C 40 70 50 30 85 35 C 120 40 135 65 125 100 C 115 135 75 140 60 110 Z" fill="url(#black-blob-grad)" />
          
          {/* 3D Highlight */}
          <path d="M 65 80 C 55 65 65 45 85 45 C 105 45 110 60 105 75" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.15" />

          {/* Kawaii Face */}
          <g transform="translate(75, 65)">
            {/* Eyes */}
            <circle cx="0" cy="0" r="4.5" fill="#FFFFFF" />
            <circle cx="1.5" cy="-1" r="1.5" fill="#1A1A2E" />

            <circle cx="22" cy="0" r="4.5" fill="#FFFFFF" />
            <circle cx="23.5" cy="-1" r="1.5" fill="#1A1A2E" />

            {/* Cheeks */}
            <ellipse cx="-5" cy="6" rx="4" ry="2" fill="#FF4D8F" opacity="0.8" />
            <ellipse cx="27" cy="6" rx="4" ry="2" fill="#FF4D8F" opacity="0.8" />

            {/* Cute open smiling mouth */}
            <path d="M 7 4 C 7 10 15 10 15 4 Z" fill="#FF4D8F" />
            <path d="M 7 4 Q 11 6 15 4" stroke="#FFFFFF" strokeWidth="1.5" />
          </g>

          {/* Cute Little Hand waving */}
          <path d="M 45 75 C 30 65 35 55 45 65" stroke="#1A1A2E" strokeWidth="8" strokeLinecap="round" />
        </g>

        {/* Yellow Flower / Sun Character */}
        <g className="animate-float-fast" style={{ animationDelay: '0.5s' }}>
          {/* Flower Petals */}
          <g fill="#FF6B35" transform="translate(180, 85)">
            <circle cx="0" cy="-35" r="12" />
            <circle cx="25" cy="-25" r="12" />
            <circle cx="35" cy="0" r="12" />
            <circle cx="25" cy="25" r="12" />
            <circle cx="0" cy="35" r="12" />
            <circle cx="-25" cy="25" r="12" />
            <circle cx="-35" cy="0" r="12" />
            <circle cx="-25" cy="-25" r="12" />
          </g>

          {/* Main Yellow Center */}
          <circle cx="180" cy="85" r="28" fill="url(#yellow-sun-grad)" />
          <circle cx="180" cy="83" r="28" fill="#FFD700" />

          {/* High-light arc */}
          <path d="M 160 75 A 20 20 0 0 1 195 65" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.4" />

          {/* Kawaii Face */}
          <g transform="translate(170, 78)">
            {/* Happy Wink Eyes */}
            <path d="M 0 3 Q 3 -2 6 3" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 14 3 Q 17 -2 20 3" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Cheeks */}
            <circle cx="-2" cy="8" r="3" fill="#FF4D8F" opacity="0.7" />
            <circle cx="22" cy="8" r="3" fill="#FF4D8F" opacity="0.7" />

            {/* Cute tiny cat mouth */}
            <path d="M 7 6 Q 8.5 9 10 6 Q 11.5 9 13 6" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        </g>

        <defs>
          <linearGradient id="black-blob-grad" x1="40" y1="30" x2="135" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2A2A3E" />
            <stop offset="1" stopColor="#0D0D19" />
          </linearGradient>
          <linearGradient id="yellow-sun-grad" x1="152" y1="57" x2="208" y2="113" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFB800" />
            <stop offset="1" stopColor="#FFD700" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
