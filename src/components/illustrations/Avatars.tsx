import React from 'react';

interface AvatarProps {
  type: 'afro' | 'pink-hair' | 'purple-hair' | 'cool-guy' | 'yellow-girl' | 'green-guy';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ type, className = "w-10 h-10" }) => {
  const renderContent = () => {
    switch (type) {
      case 'afro':
        // Recipient for P2P screen (Afro hairstyle character)
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <rect width="100" height="100" rx="50" fill="#FFD700" />
            {/* Big beautiful brown Afro */}
            <circle cx="50" cy="40" r="32" fill="#2D1406" />
            <circle cx="30" cy="45" r="18" fill="#2D1406" />
            <circle cx="70" cy="45" r="18" fill="#2D1406" />
            <circle cx="40" cy="22" r="15" fill="#2D1406" />
            <circle cx="60" cy="22" r="15" fill="#2D1406" />
            
            {/* Face */}
            <circle cx="50" cy="55" r="20" fill="#8D5B4C" />
            {/* Eyes */}
            <circle cx="43" cy="52" r="2.5" fill="#1A1A2E" />
            <circle cx="57" cy="52" r="2.5" fill="#1A1A2E" />
            {/* Smile */}
            <path d="M 45 62 Q 50 67 55 62" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" />
            {/* Stylish accessory: Golden Earrings */}
            <circle cx="28" cy="60" r="4" stroke="#FFB800" strokeWidth="2" fill="none" />
            <circle cx="72" cy="60" r="4" stroke="#FFB800" strokeWidth="2" fill="none" />
            {/* Clothing */}
            <path d="M 30 85 C 30 75 70 75 70 85 L 65 100 L 35 100 Z" fill="#FF6B35" />
          </svg>
        );

      case 'pink-hair':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <rect width="100" height="100" rx="50" fill="#E0F2FE" />
            {/* Back Hair */}
            <path d="M 25 40 Q 20 80 35 90 L 65 90 Q 80 80 75 40 Z" fill="#FF4D8F" />
            {/* Face */}
            <circle cx="50" cy="50" r="18" fill="#FFDCB8" />
            {/* Front Bangs */}
            <path d="M 32 40 Q 50 25 68 40 Q 50 30 32 40 Z" fill="#FF2A7A" />
            {/* Eyes */}
            <circle cx="44" cy="48" r="2" fill="#1A1A2E" />
            <circle cx="56" cy="48" r="2" fill="#1A1A2E" />
            {/* Cheeks */}
            <circle cx="39" cy="52" r="3" fill="#FF4D8F" opacity="0.5" />
            <circle cx="61" cy="52" r="3" fill="#FF4D8F" opacity="0.5" />
            {/* Cute Smile */}
            <path d="M 47 56 Q 50 59 53 56" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
            {/* Clothing */}
            <path d="M 32 80 C 32 70 68 70 68 80 L 68 100 L 32 100 Z" fill="#7B5EA7" />
          </svg>
        );

      case 'purple-hair':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <rect width="100" height="100" rx="50" fill="#FCE7F3" />
            {/* Face */}
            <circle cx="50" cy="52" r="18" fill="#F5C396" />
            {/* Cool Purple Hair */}
            <path d="M 28 50 Q 25 25 50 20 Q 75 25 72 50 Q 60 25 50 30 Q 40 25 28 50 Z" fill="#7B5EA7" />
            {/* Eyes */}
            <path d="M 41 48 Q 44 45 47 48" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
            <path d="M 53 48 Q 56 45 59 48" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
            {/* Smile */}
            <path d="M 46 58 h 8" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
            {/* Clothing */}
            <path d="M 32 80 C 32 70 68 70 68 80 L 68 100 L 32 100 Z" fill="#1A1A2E" />
            {/* Accessory: stylish glasses */}
            <rect x="36" y="43" width="12" height="8" rx="2" stroke="#FF6B35" strokeWidth="2" fill="none" />
            <rect x="52" y="43" width="12" height="8" rx="2" stroke="#FF6B35" strokeWidth="2" fill="none" />
            <path d="M 48 47 h 4" stroke="#FF6B35" strokeWidth="2" />
          </svg>
        );

      case 'cool-guy':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <rect width="100" height="100" rx="50" fill="#DCFCE7" />
            {/* Face */}
            <circle cx="50" cy="50" r="18" fill="#E8B486" />
            {/* Spiky Blue Hair */}
            <path d="M 30 42 L 35 22 L 45 30 L 55 18 L 65 30 L 72 25 L 70 45 Z" fill="#2196F3" />
            {/* Eyes */}
            <circle cx="44" cy="48" r="2.5" fill="#1A1A2E" />
            <circle cx="56" cy="48" r="2.5" fill="#1A1A2E" />
            {/* Smirk */}
            <path d="M 46 58 Q 50 61 56 56" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
            {/* Clothing */}
            <path d="M 30 80 C 30 72 70 72 70 80 L 70 100 L 30 100 Z" fill="#FF6B35" />
          </svg>
        );

      case 'yellow-girl':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <rect width="100" height="100" rx="50" fill="#FEF9C3" />
            {/* Ponytails */}
            <circle cx="20" cy="40" r="12" fill="#FFB800" />
            <circle cx="80" cy="40" r="12" fill="#FFB800" />
            {/* Face */}
            <circle cx="50" cy="50" r="18" fill="#FFE0C4" />
            {/* Bangs */}
            <path d="M 32 40 Q 50 28 68 40 Z" fill="#FFD700" />
            {/* Eyes */}
            <circle cx="44" cy="48" r="2.5" fill="#1A1A2E" />
            <circle cx="56" cy="48" r="2.5" fill="#1A1A2E" />
            {/* Blushes */}
            <circle cx="38" cy="52" r="2.5" fill="#FF4D8F" opacity="0.6" />
            <circle cx="62" cy="52" r="2.5" fill="#FF4D8F" opacity="0.6" />
            {/* Mouth */}
            <path d="M 47 56 C 47 60 53 60 53 56 Z" fill="#FF4D8F" />
            {/* Clothing */}
            <path d="M 33 78 C 33 68 67 68 67 78 L 67 100 L 33 100 Z" fill="#4CAF50" />
          </svg>
        );

      case 'green-guy':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <rect width="100" height="100" rx="50" fill="#F3E8FF" />
            {/* Face */}
            <circle cx="50" cy="50" r="18" fill="#DCA57C" />
            {/* Green Beanie Cap */}
            <path d="M 30 45 C 30 20 70 20 70 45 Z" fill="#4CAF50" />
            <rect x="28" y="42" width="44" height="7" rx="3" fill="#388E3C" />
            {/* Eyes */}
            <circle cx="43" cy="52" r="2" fill="#1A1A2E" />
            <circle cx="57" cy="52" r="2" fill="#1A1A2E" />
            {/* Beard/Stubble */}
            <path d="M 40 62 Q 50 68 60 62" stroke="#8D5B4C" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 2" />
            {/* Smile */}
            <path d="M 46 58 Q 50 61 54 58" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
            {/* Clothing */}
            <path d="M 30 82 C 30 72 70 72 70 82 L 70 100 L 30 100 Z" fill="#FFD700" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`relative inline-block rounded-full overflow-hidden shadow-sm shrink-0 ${className}`}>
      {renderContent()}
    </div>
  );
};
