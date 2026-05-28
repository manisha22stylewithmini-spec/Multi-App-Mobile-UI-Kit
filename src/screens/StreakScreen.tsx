import React, { useState } from 'react';
import { Share2, Flame, Trophy, ArrowRight } from 'lucide-react';
import { ComicBubble } from '../components/illustrations/ComicBubble';
import { Avatar } from '../components/illustrations/Avatars';

export const StreakScreen: React.FC<{ playAudioFeedback?: (type?: 'tap' | 'success' | 'toggle') => void }> = ({
  playAudioFeedback
}) => {
  const [streaksToGo, setStreaksToGo] = useState<number>(5);
  const [shared, setShared] = useState<boolean>(false);

  const handleShare = () => {
    if (playAudioFeedback) playAudioFeedback('success');
    setShared(true);
    setTimeout(() => setShared(false), 3000);
  };

  const handleAdvanceStreak = () => {
    if (playAudioFeedback) playAudioFeedback('tap');
    setStreaksToGo(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="flex flex-col justify-between p-4 animate-fade-in select-none bg-[#FFFDE7] min-h-full space-y-4">
      
      {/* Top Banner Indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-amber-100 shadow-2xs">
          <Flame className="w-4 h-4 text-[#FF6B35] fill-current animate-bounce" style={{ animationDuration: '1.5s' }} />
          <span className="text-xs font-bold font-heading text-slate-800">
            7 Days Active!
          </span>
        </div>

        <div className="flex items-center space-x-1 bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full text-[10px] font-bold">
          <Trophy className="w-3 h-3" />
          <span>STREAK PRO</span>
        </div>
      </div>

      {/* Comic-speech-bubble illustration with Japanese text */}
      {/* 3D cartoon cloud character with colorful blobs around it */}
      <div className="py-2">
        <ComicBubble />
      </div>

      {/* Bold text: 'Congratulations!' */}
      {/* Subtext: 'You have successfully completed your streak! Continue the game to reach diamond level!' */}
      <div className="text-center px-3 space-y-2">
        <h2 className="text-2xl font-bold font-heading text-slate-900 tracking-tight">
          Congratulations!
        </h2>
        <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
          You have successfully completed your streak! Continue the game to reach diamond level!
        </p>
      </div>

      {/* Interactive Diamond Level Meter */}
      <div className="bg-white rounded-2xl p-3 shadow-xs border border-amber-100/60">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="font-bold text-slate-800">Diamond Progress</span>
          <span className="font-mono font-bold text-[#FF6B35]">
            {streaksToGo === 0 ? '💎 UNLOCKED!' : `${5 - streaksToGo}/5`}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#FFB800] to-[#FF6B35] transition-all duration-500 rounded-full"
            style={{ width: `${((5 - streaksToGo) / 5) * 100}%` }}
          />
        </div>

        {streaksToGo > 0 ? (
          <button
            onClick={handleAdvanceStreak}
            className="w-full mt-2 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg text-[10px] font-bold transition-colors flex items-center justify-center space-x-1"
          >
            <span>Simulate next day streak</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </button>
        ) : (
          <div className="mt-2 text-center text-[10px] font-bold text-green-600 bg-green-50 py-1 rounded-lg">
            ✨ You are now a Diamond Tier member!
          </div>
        )}
      </div>

      {/* Orange CTA button: 'Share with friends' */}
      <div>
        <button
          onClick={handleShare}
          className="w-full py-3.5 bg-[#FF6B35] hover:bg-[#e05929] text-white rounded-full font-bold font-heading text-xs shadow-md transition-all active:scale-95 flex items-center justify-center space-x-2"
        >
          <Share2 className="w-4 h-4" />
          <span>Share with friends</span>
        </button>

        {shared && (
          <div className="text-center text-xs text-green-700 mt-2 font-medium animate-fade-in">
            🚀 Shared to your social feeds! (+20 XP)
          </div>
        )}
      </div>

      {/* Bottom banner: '10+ friends are already Diamond 💎 — 5 streaks to go' */}
      <div className="bg-white/60 backdrop-blur-xs rounded-2xl p-3 border border-amber-200/40 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-2">
          {/* Avatar overlaps */}
          <div className="flex -space-x-2 shrink-0">
            <Avatar type="cool-guy" className="w-6 h-6 ring-2 ring-[#FFFDE7]" />
            <Avatar type="pink-hair" className="w-6 h-6 ring-2 ring-[#FFFDE7]" />
            <Avatar type="yellow-girl" className="w-6 h-6 ring-2 ring-[#FFFDE7]" />
          </div>

          <div className="min-w-0">
            <span className="font-bold text-slate-900 text-[11px] block truncate">
              10+ friends are already Diamond 💎
            </span>
            <span className="text-[10px] text-gray-500 block">
              {streaksToGo} streaks to go
            </span>
          </div>
        </div>

        <span className="text-xs font-bold text-[#FFB800] shrink-0 ml-1">
          Join →
        </span>
      </div>

    </div>
  );
};
