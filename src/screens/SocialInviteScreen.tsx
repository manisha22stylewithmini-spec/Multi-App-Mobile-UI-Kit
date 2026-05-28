import React, { useState } from 'react';
import { X, Check, Copy, UserPlus, Sparkles } from 'lucide-react';
import { BlobCharacters } from '../components/illustrations/BlobCharacters';
import { Avatar } from '../components/illustrations/Avatars';

export const SocialInviteScreen: React.FC<{ playAudioFeedback?: (type?: 'tap' | 'success' | 'toggle') => void }> = ({
  playAudioFeedback
}) => {
  const [invitedCount, setInvitedCount] = useState<number>(4);
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedFriends, setSelectedFriends] = useState<{ [key: number]: boolean }>({
    0: true,
    1: false,
    2: true,
    3: false
  });
  const [customEmail, setCustomEmail] = useState<string>('');
  const [showInput, setShowInput] = useState<boolean>(false);

  const friends = [
    { id: 0, name: 'Hana', avatar: 'pink-hair' as const },
    { id: 1, name: 'Kenji', avatar: 'cool-guy' as const },
    { id: 2, name: 'Yuna', avatar: 'yellow-girl' as const },
    { id: 3, name: 'Sora', avatar: 'purple-hair' as const },
  ];

  const handleToggleFriend = (id: number) => {
    if (playAudioFeedback) playAudioFeedback('tap');
    setSelectedFriends(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleInvite = () => {
    if (playAudioFeedback) playAudioFeedback('success');
    const selectedCount = Object.values(selectedFriends).filter(Boolean).length;
    setInvitedCount(prev => prev + (selectedCount || 1));
    
    // If input is active, handle custom invite
    if (showInput && customEmail) {
      setCustomEmail('');
      setShowInput(false);
    }
  };

  const handleCopyLink = () => {
    if (playAudioFeedback) playAudioFeedback('tap');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col p-4 animate-fade-in select-none bg-white rounded-[28px] shadow-sm min-h-full space-y-4 border border-gray-100">
      
      {/* Close (X) button top right */}
      <div className="flex justify-end">
        <button 
          onClick={() => playAudioFeedback && playAudioFeedback('tap')}
          className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-all active:scale-95"
          title="Close Dialog"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* 3D illustration: black blob character + yellow flower/sun character with kawaii faces, sparkle stars */}
      <div className="py-2">
        <BlobCharacters />
      </div>

      {/* Bold heading: 'Share the vibe' */}
      {/* Subtitle: 'It's much more fun with friends. Invite them to try Minji today ✨' */}
      <div className="text-center px-2 space-y-1.5">
        <div className="inline-flex items-center space-x-1 bg-[#FFD700]/15 text-amber-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
          <Sparkles className="w-3 h-3" />
          <span>VIRAL PROGRAM</span>
        </div>
        <h2 className="text-xl font-bold font-heading text-slate-900 tracking-tight">
          Share the vibe
        </h2>
        <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
          It's much more fun with friends. Invite them to try Minji today ✨
        </p>
      </div>

      {/* Row of 4 friend avatar circles */}
      <div className="bg-gray-50 rounded-2xl p-3.5 space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Quick Selection
          </span>
          <span className="text-[10px] text-gray-500">
            {Object.values(selectedFriends).filter(Boolean).length} Selected
          </span>
        </div>

        <div className="flex items-center justify-around">
          {friends.map((friend) => {
            const isSelected = selectedFriends[friend.id];
            return (
              <button
                key={friend.id}
                onClick={() => handleToggleFriend(friend.id)}
                className={`flex flex-col items-center space-y-1 transition-all p-1.5 rounded-xl ${
                  isSelected ? 'bg-white shadow-2xs scale-105' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="relative">
                  <Avatar type={friend.avatar} className="w-11 h-11" />
                  {isSelected && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-slate-900 text-[#FFD700] rounded-full flex items-center justify-center text-[8px] font-bold ring-2 ring-white">
                      ✓
                    </div>
                  )}
                </div>
                <span className="text-[10px] font-bold text-slate-800">
                  {friend.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Optional Invite Form */}
      {showInput ? (
        <div className="flex items-center space-x-2 animate-fade-in">
          <input
            type="email"
            placeholder="friend@example.com"
            value={customEmail}
            onChange={(e) => setCustomEmail(e.target.value)}
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
            autoFocus
          />
          <button
            onClick={() => setShowInput(false)}
            className="text-xs text-gray-400 hover:text-gray-600 px-1"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            if (playAudioFeedback) playAudioFeedback('toggle');
            setShowInput(true);
          }}
          className="text-center w-full py-1 text-[11px] font-bold text-slate-700 hover:text-slate-900 flex items-center justify-center space-x-1"
        >
          <UserPlus className="w-3 h-3" />
          <span>Invite by email or phone instead</span>
        </button>
      )}

      {/* Share Link Copy Field */}
      <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl p-2.5">
        <div className="min-w-0 flex-1 pr-2">
          <span className="text-[9px] text-gray-400 block font-bold uppercase">Your unique referral link</span>
          <span className="text-xs font-mono text-slate-800 block truncate select-all">
            minji.app/invite?code=VIBE88
          </span>
        </div>

        <button
          onClick={handleCopyLink}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 shrink-0 ${
            copied 
              ? 'bg-green-100 text-green-700' 
              : 'bg-white text-slate-700 hover:bg-gray-100 shadow-2xs border border-gray-200/60'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-gray-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Black pill CTA button: '+ Invite friends' */}
      <div className="pt-1">
        <button
          onClick={handleInvite}
          className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold font-heading text-xs shadow-md transition-all active:scale-95 flex items-center justify-center space-x-1.5"
        >
          <span>+ Invite friends</span>
          {invitedCount > 4 && (
            <span className="bg-[#FFD700] text-slate-900 text-[9px] font-extrabold px-1.5 py-0.2 rounded-full">
              {invitedCount}
            </span>
          )}
        </button>
      </div>

      {/* Bottom context confirmation */}
      <div className="text-center text-[10px] text-gray-400">
        ⚡ You get 50 Minji Coins for every successful signup!
      </div>

    </div>
  );
};
