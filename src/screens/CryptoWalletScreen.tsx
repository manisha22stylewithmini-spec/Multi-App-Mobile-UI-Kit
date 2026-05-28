import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Plus, RefreshCw, Send, MoreHorizontal, TrendingDown } from 'lucide-react';
import { Avatar } from '../components/illustrations/Avatars';

export const CryptoWalletScreen: React.FC<{ playAudioFeedback?: (type?: 'tap' | 'success' | 'toggle') => void }> = ({
  playAudioFeedback
}) => {
  const [activeNft, setActiveNft] = useState<number>(0);
  const [omoEnabled, setOmoEnabled] = useState<boolean>(true);
  const [chartDay, setChartDay] = useState<'mon' | 'today'>('mon');
  const [ethBalance, setEthBalance] = useState<number>(2460.44);
  const [moneyOutTab, setMoneyOutTab] = useState<'Category' | 'Merchant' | 'Friends'>('Category');

  const nftCards = [
    { id: 0, title: 'Azuki #442', gradient: 'from-[#FF6B35] to-[#FF4D8F]', avatarType: 'cool-guy' as const },
    { id: 1, title: 'Doodle #109', gradient: 'from-[#a78bfa] to-[#818cf8]', avatarType: 'pink-hair' as const },
    { id: 2, title: 'Pudgy #88', gradient: 'from-[#FFD700] to-[#FF6B35]', avatarType: 'yellow-girl' as const },
    { id: 3, title: 'CloneX #12', gradient: 'from-[#4CAF50] to-[#2196F3]', avatarType: 'purple-hair' as const },
  ];

  const recentTransfers = [
    { name: 'Alzea', amount: '$200', avatar: 'afro' as const },
    { name: 'Yafie', amount: '$1,400', avatar: 'green-guy' as const },
    { name: 'Sally', amount: '$2,200', avatar: 'pink-hair' as const },
    { name: 'Tiara', amount: '$3,500', avatar: 'yellow-girl' as const },
  ];

  const moneyOutData = {
    Category: [
      { id: 1, title: 'Xbox Game Pass', subtitle: 'Entertainment', amount: '$60', color: 'bg-green-100 text-green-700' },
      { id: 2, title: 'Uber Rides', subtitle: 'Transport', amount: '$32', color: 'bg-blue-100 text-blue-700' },
    ],
    Merchant: [
      { id: 1, title: 'Apple Inc.', subtitle: 'Hardware Store', amount: '$1,299', color: 'bg-gray-100 text-gray-700' },
      { id: 2, title: 'Starbucks', subtitle: 'Coffee Shop', amount: '$14', color: 'bg-amber-100 text-amber-700' },
    ],
    Friends: [
      { id: 1, title: 'Alzea Arafat', subtitle: 'Shared dinner', amount: '$45', color: 'bg-purple-100 text-purple-700' },
      { id: 2, title: 'Tiara Putri', subtitle: 'Concert tickets', amount: '$180', color: 'bg-pink-100 text-pink-700' },
    ]
  };

  const handleBuyEth = () => {
    if (playAudioFeedback) playAudioFeedback('success');
    setEthBalance(prev => prev + 100);
  };

  return (
    <div className="flex flex-col space-y-5 p-4 animate-fade-in select-none">
      
      {/* Header: 'Dashboard' with left/right arrow icons */}
      <div className="flex items-center justify-between">
        <button 
          onClick={() => playAudioFeedback && playAudioFeedback('tap')}
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs text-slate-800 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-xs font-bold font-heading text-slate-900 tracking-wide">
          Dashboard
        </span>
        <button 
          onClick={() => playAudioFeedback && playAudioFeedback('tap')}
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs text-slate-800 active:scale-95"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bold title: 'Collection.' with blue dot, wallet address */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center">
            <span>Collection</span>
            <span className="w-2 h-2 rounded-full bg-[#2196F3] ml-1 mb-1 self-end" />
          </h2>
          <span className="text-[10px] font-mono text-gray-400 bg-white px-2 py-0.5 rounded-md border border-gray-100 shadow-2xs mt-1 inline-block">
            0xab...0579
          </span>
        </div>

        <span className="text-[10px] font-bold text-[#FF4D8F] bg-[#FF4D8F]/10 px-2 py-1 rounded-full">
          Web3 Active
        </span>
      </div>

      {/* Horizontal scroll of 4 stacked NFT/avatar cards with pastel gradients */}
      <div className="relative">
        <div className="flex space-x-3 overflow-x-auto pb-2 pt-1 no-scrollbar">
          {nftCards.map((nft) => (
            <div
              key={nft.id}
              onClick={() => {
                if (playAudioFeedback) playAudioFeedback('tap');
                setActiveNft(nft.id);
              }}
              className={`w-36 h-40 shrink-0 rounded-3xl p-3 flex flex-col justify-between cursor-pointer transition-all ${
                activeNft === nft.id 
                  ? 'ring-4 ring-white shadow-md scale-105 z-10' 
                  : 'opacity-85 hover:opacity-100 scale-95'
              } bg-gradient-to-br ${nft.gradient}`}
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-extrabold text-white/80 bg-black/20 px-2 py-0.5 rounded-full backdrop-blur-xs">
                  RARE
                </span>
                <span className="text-white text-xs">✨</span>
              </div>

              {/* Central Avatar Illustration representing the NFT */}
              <div className="self-center my-auto">
                <Avatar type={nft.avatarType} className="w-16 h-16 shadow-inner" />
              </div>

              <div className="bg-white/20 backdrop-blur-xs rounded-xl p-1.5 text-center">
                <span className="text-white font-bold font-heading text-[11px] block truncate">
                  {nft.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-1">
          <span className="text-[9px] text-gray-400">
            Swipe to explore 4 high-fidelity assets
          </span>
        </div>
      </div>

      {/* Action row: Buy | Swap | Send | More with small icons */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: 'Buy', icon: Plus, color: 'text-[#FF6B35]' },
          { label: 'Swap', icon: RefreshCw, color: 'text-[#2196F3]' },
          { label: 'Send', icon: Send, color: 'text-[#4CAF50]' },
          { label: 'More', icon: MoreHorizontal, color: 'text-[#7B5EA7]' },
        ].map((act, i) => {
          const Icon = act.icon;
          return (
            <button
              key={i}
              onClick={() => playAudioFeedback && playAudioFeedback('tap')}
              className="bg-white py-2.5 rounded-2xl flex flex-col items-center justify-center space-y-1 shadow-2xs border border-gray-100 hover:bg-gray-50 active:scale-95 transition-all"
            >
              <div className={`w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center ${act.color}`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-bold text-slate-800">{act.label}</span>
            </button>
          );
        })}
      </div>

      {/* Ethereum price row: logo, '$ 2,460.44', '-8.30% today' in red */}
      <div className="bg-white rounded-3xl p-4 shadow-xs border border-gray-100 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            {/* Custom Ethereum Bubbly 3D Logo */}
            <div className="w-9 h-9 rounded-full bg-[#F3E8FF] flex items-center justify-center shadow-inner">
              <svg className="w-5 h-5 text-[#7B5EA7]" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 2 L16 17 L6 17 Z" fillOpacity="0.6" />
                <path d="M16 2 L26 17 L16 17 Z" />
                <path d="M16 19 L26 17 L16 27 Z" fillOpacity="0.6" />
                <path d="M16 19 L16 27 L6 17 Z" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold block uppercase">Ethereum</span>
              <span className="text-base font-bold font-heading text-slate-900 block tracking-tight">
                $ {ethBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-1 bg-red-50 text-red-600 px-2 py-1 rounded-full text-[10px] font-bold">
            <TrendingDown className="w-3 h-3" />
            <span>-8.30% today</span>
          </div>
        </div>

        {/* Small line chart with purple/blue curve */}
        <div 
          onClick={() => {
            if (playAudioFeedback) playAudioFeedback('tap');
            setChartDay(prev => prev === 'mon' ? 'today' : 'mon');
          }}
          className="relative h-16 bg-gray-50 rounded-xl overflow-hidden cursor-pointer group"
          title="Click to toggle historical range"
        >
          {/* Decorative live smooth purple/blue SVG Curve */}
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#2196F3" />
              </linearGradient>
            </defs>
            {chartDay === 'mon' ? (
              <>
                <path d="M 0 50 Q 75 10 150 40 T 300 20 L 300 60 L 0 60 Z" fill="url(#chartGrad)" />
                <path d="M 0 50 Q 75 10 150 40 T 300 20" fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="150" cy="40" r="4" fill="#7B5EA7" className="animate-ping" />
                <circle cx="150" cy="40" r="3" fill="#FFFFFF" stroke="#7B5EA7" strokeWidth="2" />
              </>
            ) : (
              <>
                <path d="M 0 30 Q 100 55 200 15 T 300 35 L 300 60 L 0 60 Z" fill="url(#chartGrad)" />
                <path d="M 0 30 Q 100 55 200 15 T 300 35" fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="200" cy="15" r="4" fill="#2196F3" className="animate-ping" />
                <circle cx="200" cy="15" r="3" fill="#FFFFFF" stroke="#2196F3" strokeWidth="2" />
              </>
            )}
          </svg>

          {/* Chart Label */}
          <div className="absolute bottom-1 left-2 text-[9px] font-bold text-gray-400 bg-white/80 px-1.5 py-0.5 rounded">
            {chartDay === 'mon' ? 'Mon, $1,200' : 'Today, Live Trajectory'}
          </div>

          <div className="absolute top-1 right-2 text-[8px] text-purple-600 font-bold">
            Tap chart to switch
          </div>
        </div>

        {/* Orange CTA button: 'Buy Ethereum' */}
        <button
          onClick={handleBuyEth}
          className="w-full py-3 bg-[#FF6B35] hover:bg-[#e05929] text-white rounded-xl font-bold text-xs shadow-xs transition-all active:scale-95"
        >
          Buy Ethereum
        </button>
      </div>

      {/* Bottom card (pink gradient): 'omo' app, card number '0811', toggle switch */}
      <div className="bg-gradient-to-r from-[#FF4D8F] to-[#FF6B35] rounded-3xl p-4 text-white shadow-sm flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-full inline-block">
            omo app
          </span>
          <div className="flex items-center space-x-2 pt-1">
            <span className="font-mono text-xs tracking-widest opacity-80">•••• ••••</span>
            <span className="font-mono font-bold text-sm tracking-wider">0811</span>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-1">
          <span className="text-[8px] uppercase tracking-wider opacity-75">Card Status</span>
          {/* Custom iOS Style Switch */}
          <button
            onClick={() => {
              if (playAudioFeedback) playAudioFeedback('toggle');
              setOmoEnabled(!omoEnabled);
            }}
            className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
              omoEnabled ? 'bg-white' : 'bg-white/30'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full transition-transform duration-200 transform shadow-xs ${
                omoEnabled ? 'translate-x-5 bg-[#FF4D8F]' : 'translate-x-0 bg-white'
              }`}
            />
          </button>
          <span className="text-[8px] font-bold">{omoEnabled ? 'Active' : 'Locked'}</span>
        </div>
      </div>

      {/* Recent transfer list: 4 circular avatars */}
      <div>
        <div className="flex items-center justify-between mb-2 px-1">
          <h4 className="text-xs font-bold font-heading text-gray-400 uppercase tracking-wider">
            Recent Transfers
          </h4>
          <span className="text-[10px] text-[#FF4D8F] font-bold">View all</span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {recentTransfers.map((tx, idx) => (
            <div key={idx} className="bg-white p-2 rounded-2xl flex flex-col items-center text-center border border-gray-100 shadow-2xs">
              <Avatar type={tx.avatar} className="w-10 h-10 mb-1" />
              <span className="text-[10px] font-bold text-slate-800 block truncate w-full">
                {tx.name}
              </span>
              <span className="text-[9px] font-mono text-gray-400 block">
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Money out section with 'Category | Merchant | Friends' tab selector */}
      <div className="bg-white rounded-3xl p-4 shadow-xs border border-gray-100 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold font-heading text-slate-900">
            Money Out
          </h4>

          {/* Tab selector */}
          <div className="flex space-x-1 bg-gray-50 p-1 rounded-lg">
            {(['Category', 'Merchant', 'Friends'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  if (playAudioFeedback) playAudioFeedback('tap');
                  setMoneyOutTab(tab);
                }}
                className={`px-2 py-0.5 rounded text-[9px] font-bold transition-all ${
                  moneyOutTab === tab
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-gray-400 hover:text-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Transaction rows */}
        <div className="space-y-2">
          {moneyOutData[moneyOutTab].map((item) => (
            <div key={item.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-2.5">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${item.color}`}>
                  {item.title.charAt(0)}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">{item.title}</h5>
                  <span className="text-[9px] text-gray-400 block">{item.subtitle}</span>
                </div>
              </div>
              <span className="text-xs font-bold font-mono text-slate-900">
                {item.amount}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
