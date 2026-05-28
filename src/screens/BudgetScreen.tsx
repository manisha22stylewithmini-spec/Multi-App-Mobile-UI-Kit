import React, { useState } from 'react';
import { ArrowUpRight, Car, Zap, ShoppingCart, Music, Plus, Trash2, Calendar } from 'lucide-react';
import { DJCharacter } from '../components/illustrations/DJCharacter';

interface Subscription {
  id: string;
  name: string;
  cost: number;
  date: string;
  color: string;
}

export const BudgetScreen: React.FC<{ playAudioFeedback?: (type?: 'tap' | 'success' | 'toggle') => void }> = ({
  playAudioFeedback
}) => {
  const [balance, setBalance] = useState<number>(1240);
  const [activeCategory, setActiveCategory] = useState<string>('Music');
  
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    { id: 'spotify', name: 'Spotify', cost: 19.00, date: 'Next charge: Nov 28', color: 'bg-[#1DB954]' },
    { id: 'apple', name: 'Apple Music', cost: 15.99, date: 'Next charge: Dec 02', color: 'bg-[#FA2D48]' },
    { id: 'tidal', name: 'Tidal', cost: 16.99, date: 'Next charge: Dec 05', color: 'bg-[#000000]' },
  ]);

  const categories = [
    { id: 'Transport', label: 'Transport', icon: Car, bg: 'bg-blue-50 text-blue-600' },
    { id: 'Electricity', label: 'Electricity', icon: Zap, bg: 'bg-amber-50 text-amber-600' },
    { id: 'Groceries', label: 'Groceries', icon: ShoppingCart, bg: 'bg-green-50 text-green-600' },
    { id: 'Music', label: 'Music', icon: Music, bg: 'bg-purple-50 text-purple-600' },
  ];

  const handleDeleteSubscription = (id: string, cost: number) => {
    if (playAudioFeedback) playAudioFeedback('toggle');
    setSubscriptions(prev => prev.filter(sub => sub.id !== id));
    // Re-credit the budgeted amount to show interactivity
    setBalance(prev => prev + cost);
  };

  const handleAddCustomSubscription = () => {
    if (playAudioFeedback) playAudioFeedback('success');
    const newSub: Subscription = {
      id: `custom-${Date.now()}`,
      name: 'SoundCloud Pro',
      cost: 12.50,
      date: 'Next charge: Dec 10',
      color: 'bg-[#FF5500]'
    };
    setSubscriptions(prev => [...prev, newSub]);
    setBalance(prev => prev - 12.50);
  };

  return (
    <div className="flex flex-col space-y-4 p-4 animate-fade-in select-none">
      
      {/* Top purple banner: large bubbly 'ohayo' text with 3D DJ character illustration */}
      <div 
        onClick={() => playAudioFeedback && playAudioFeedback('success')}
        className="bg-gradient-to-r from-[#7B5EA7] via-[#9333ea] to-[#a855f7] rounded-3xl p-4 text-white shadow-sm flex items-center justify-between relative overflow-hidden cursor-pointer group"
        title="Tap to trigger DJ sound simulation!"
      >
        {/* Soft background audio-pulse lines */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)]" />

        <div className="relative z-10 space-y-0.5">
          <span className="text-[9px] font-extrabold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-full inline-block">
            Morning Vibe
          </span>
          {/* Large Bubbly 'ohayo' text */}
          <h2 className="text-3xl font-black font-heading tracking-tight drop-shadow-sm pt-1">
            ohayo!
          </h2>
          <p className="text-[10px] text-purple-100 max-w-[120px]">
            Keep your rhythm & budgets fully in sync
          </p>
        </div>

        {/* 3D DJ Character Illustration */}
        <div className="relative z-10 -mr-2">
          <DJCharacter className="w-24 h-24 group-hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Balance card: 'Balance $1,240' with arrow icon */}
      <div className="bg-white rounded-3xl p-4 shadow-xs border border-gray-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider">
            Total Available Balance
          </span>
          <div className="flex items-baseline space-x-1.5 mt-0.5">
            <span className="text-2xl font-bold font-heading text-slate-900 tracking-tight">
              ${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className="text-[10px] text-green-600 font-bold bg-green-50 px-1.5 py-0.2 rounded">
              +Active
            </span>
          </div>
        </div>

        <button 
          onClick={() => {
            if (playAudioFeedback) playAudioFeedback('tap');
            setBalance(prev => prev + 100);
          }}
          className="w-10 h-10 rounded-2xl bg-purple-50 hover:bg-purple-100 flex items-center justify-center text-[#7B5EA7] transition-colors active:scale-95"
          title="Top up balance"
        >
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>

      {/* 4 category icons: Transport, Electricity, Groceries, Music */}
      <div>
        <h4 className="text-xs font-bold font-heading text-gray-400 uppercase tracking-wider mb-2 px-1">
          Budget Categories
        </h4>

        <div className="grid grid-cols-4 gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (playAudioFeedback) playAudioFeedback('tap');
                  setActiveCategory(cat.id);
                }}
                className={`flex flex-col items-center p-2.5 rounded-2xl transition-all ${
                  isSelected 
                    ? 'bg-slate-900 text-white shadow-xs scale-105' 
                    : 'bg-white hover:bg-gray-50 text-slate-800 border border-gray-100'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1 ${isSelected ? 'bg-white/20 text-white' : cat.bg}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-bold ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section: 'Music Streaming' */}
      <div className="bg-white rounded-3xl p-4 shadow-xs border border-gray-100 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold font-heading text-slate-900">
              {activeCategory} Subscriptions
            </h4>
            <span className="text-[9px] text-gray-400 block">
              {subscriptions.length} active plans scheduled
            </span>
          </div>

          <button
            onClick={handleAddCustomSubscription}
            className="px-2.5 py-1 bg-purple-50 hover:bg-purple-100 text-[#7B5EA7] rounded-lg text-[10px] font-bold transition-all flex items-center space-x-1"
            title="Simulate Adding New Subscription"
          >
            <Plus className="w-3 h-3" />
            <span>Add</span>
          </button>
        </div>

        {/* 3 subscription rows: Spotify $19/mo, Apple Music $15.99/mo, Tidal $16.99/mo */}
        {subscriptions.length === 0 ? (
          <div className="py-6 text-center text-gray-400 text-xs">
            No active subscriptions in this category.
          </div>
        ) : (
          <div className="space-y-2">
            {subscriptions.map((sub) => (
              <div 
                key={sub.id} 
                className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl hover:bg-purple-50/30 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  {/* Subscription Logo */}
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-2xs ${sub.color}`}>
                    {sub.name.charAt(0)}
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{sub.name}</h5>
                    <div className="flex items-center space-x-1 text-gray-400 mt-0.5">
                      <Calendar className="w-2.5 h-2.5" />
                      <span className="text-[9px]">{sub.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold font-mono text-slate-900">
                    ${sub.cost.toFixed(2)}
                    <span className="text-[9px] text-gray-400 font-sans font-normal">/mo</span>
                  </span>

                  {/* Immediate micro-delete hook */}
                  <button
                    onClick={() => handleDeleteSubscription(sub.id, sub.cost)}
                    className="p-1.5 rounded-lg bg-white text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                    title="Cancel subscription"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Bottom promotional banner: 'Ticket War!' with purple background and DJ character */}
      <div 
        onClick={() => playAudioFeedback && playAudioFeedback('success')}
        className="bg-gradient-to-r from-[#1A1A2E] to-[#2A2A3E] rounded-2xl p-3 text-white flex items-center justify-between border border-purple-900/40 shadow-xs cursor-pointer group"
      >
        <div className="space-y-0.5">
          <span className="text-[8px] bg-[#FF4D8F] text-white font-extrabold px-1.5 py-0.2 rounded uppercase tracking-wider">
            EXCLUSIVE
          </span>
          <h4 className="text-xs font-bold font-heading text-purple-200">
            Ticket War! 🎟️
          </h4>
          <p className="text-[9px] text-gray-400 max-w-[160px]">
            Get VIP entry to the Virtual Rave with your streaming history.
          </p>
        </div>

        {/* Reusing a sleek mini representation */}
        <div className="w-10 h-10 rounded-full bg-purple-900/60 flex items-center justify-center shrink-0 border border-purple-500/30 group-hover:rotate-12 transition-transform">
          <span className="text-lg">🎧</span>
        </div>
      </div>

    </div>
  );
};
