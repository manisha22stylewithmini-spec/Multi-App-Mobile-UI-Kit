import React, { useState } from 'react';
import { ArrowLeft, MoreHorizontal, Check, Sparkles, Zap, Search, Briefcase, Star } from 'lucide-react';
import { StickersHero } from '../components/illustrations/StickersHero';

export const PremiumPaywallScreen: React.FC<{ playAudioFeedback?: (type?: 'tap' | 'success' | 'toggle') => void }> = ({
  playAudioFeedback
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');
  const [isPro, setIsPro] = useState<boolean>(false);
  
  const [features, setFeatures] = useState<{ [key: string]: boolean }>({
    stickers: true,
    ai: true,
    search: true,
    business: false
  });

  const handleToggleFeature = (id: string) => {
    if (playAudioFeedback) playAudioFeedback('toggle');
    setFeatures(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleGoPro = () => {
    if (playAudioFeedback) playAudioFeedback('success');
    setIsPro(true);
  };

  return (
    <div className="flex flex-col space-y-4 p-4 animate-fade-in select-none bg-white rounded-[32px] min-h-full border border-gray-100">
      
      {/* Header: 'meeet.' logo centered, back arrow left, more icon right */}
      <div className="flex items-center justify-between">
        <button 
          onClick={() => playAudioFeedback && playAudioFeedback('tap')}
          className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-slate-800 transition-colors active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        
        <span className="text-sm font-black font-heading tracking-tighter text-slate-900">
          meeet.
        </span>

        <button 
          onClick={() => playAudioFeedback && playAudioFeedback('tap')}
          className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-slate-800 transition-colors active:scale-95"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Hero illustration: warm yellow background with 3D character stickers scene */}
      <div className="py-1">
        <StickersHero />
      </div>

      {/* Bold title: 'Meeet App Premium' */}
      {/* Subtitle: 'Want a cute, colorful and rare sticker for your chats? Go PRO now!' */}
      <div className="text-center px-2 space-y-1">
        <div className="inline-flex items-center space-x-1 bg-purple-50 text-[#7B5EA7] px-2.5 py-0.5 rounded-full text-[10px] font-bold">
          <Star className="w-3 h-3 fill-current" />
          <span>PRO MEMBERSHIP</span>
        </div>
        <h2 className="text-xl font-bold font-heading text-slate-900 tracking-tight">
          Meeet App Premium
        </h2>
        <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
          Want a cute, colorful and rare sticker for your chats? Go PRO now!
        </p>
      </div>

      {/* Pricing toggle */}
      <div className="space-y-2 pt-1">
        
        {/* Yearly Plan */}
        <div
          onClick={() => {
            if (playAudioFeedback) playAudioFeedback('tap');
            setSelectedPlan('yearly');
          }}
          className={`flex items-center justify-between p-3 rounded-2xl border-2 transition-all cursor-pointer ${
            selectedPlan === 'yearly'
              ? 'border-[#FF6B35] bg-[#FF6B35]/5 shadow-2xs'
              : 'border-gray-100 hover:border-gray-200 bg-white'
          }`}
        >
          <div className="flex items-center space-x-3">
            {/* Orange Radio button */}
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selectedPlan === 'yearly' ? 'border-[#FF6B35]' : 'border-gray-300'
            }`}>
              {selectedPlan === 'yearly' && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
              )}
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-slate-900">Yearly</span>
                <span className="text-[9px] bg-[#FF6B35] text-white font-extrabold px-1.5 py-0.2 rounded-full">
                  SAVE 40%
                </span>
              </div>
              <span className="text-[10px] text-gray-400 block">
                119 US$ billed annually
              </span>
            </div>
          </div>

          <span className="text-xs font-bold font-mono text-[#FF6B35]">
            9.99 US$
            <span className="text-[9px] text-gray-400 font-sans font-normal">/mo</span>
          </span>
        </div>

        {/* Monthly Plan */}
        <div
          onClick={() => {
            if (playAudioFeedback) playAudioFeedback('tap');
            setSelectedPlan('monthly');
          }}
          className={`flex items-center justify-between p-3 rounded-2xl border-2 transition-all cursor-pointer ${
            selectedPlan === 'monthly'
              ? 'border-[#FF6B35] bg-[#FF6B35]/5 shadow-2xs'
              : 'border-gray-100 hover:border-gray-200 bg-white'
          }`}
        >
          <div className="flex items-center space-x-3">
            {/* Orange Radio button */}
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selectedPlan === 'monthly' ? 'border-[#FF6B35]' : 'border-gray-300'
            }`}>
              {selectedPlan === 'monthly' && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
              )}
            </div>

            <div>
              <span className="text-xs font-bold text-slate-900 block">Monthly</span>
              <span className="text-[10px] text-gray-400 block">
                Flexible subscription
              </span>
            </div>
          </div>

          <span className="text-xs font-bold font-mono text-slate-900">
            14.9 US$
            <span className="text-[9px] text-gray-400 font-sans font-normal">/mo</span>
          </span>
        </div>

      </div>

      {/* Section: 'WHAT IS INCLUDED' */}
      <div>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2 px-1">
          What is included
        </span>

        {/* Feature list with icons + toggles */}
        <div className="space-y-2 bg-gray-50 rounded-2xl p-3">
          
          {/* Feature 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-pink-100 text-[#FF4D8F] flex items-center justify-center">
                <Sparkles className="w-3 h-3" />
              </div>
              <span className="text-xs font-medium text-slate-800">Premium stickers</span>
            </div>
            
            <button
              onClick={() => handleToggleFeature('stickers')}
              className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                features.stickers ? 'bg-[#FF6B35] text-white' : 'bg-gray-200'
              }`}
            >
              {features.stickers && <Check className="w-3 h-3" />}
            </button>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-purple-100 text-[#7B5EA7] flex items-center justify-center">
                <Zap className="w-3 h-3" />
              </div>
              <span className="text-xs font-medium text-slate-800">AI Recommendation</span>
            </div>
            
            <button
              onClick={() => handleToggleFeature('ai')}
              className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                features.ai ? 'bg-[#FF6B35] text-white' : 'bg-gray-200'
              }`}
            >
              {features.ai && <Check className="w-3 h-3" />}
            </button>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-blue-100 text-[#2196F3] flex items-center justify-center">
                <Search className="w-3 h-3" />
              </div>
              <span className="text-xs font-medium text-slate-800">Blazing fast search</span>
            </div>
            
            <button
              onClick={() => handleToggleFeature('search')}
              className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                features.search ? 'bg-[#FF6B35] text-white' : 'bg-gray-200'
              }`}
            >
              {features.search && <Check className="w-3 h-3" />}
            </button>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                <Briefcase className="w-3 h-3" />
              </div>
              <span className="text-xs font-medium text-slate-800">Business account</span>
            </div>
            
            <button
              onClick={() => handleToggleFeature('business')}
              className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                features.business ? 'bg-[#FF6B35] text-white' : 'bg-gray-200'
              }`}
            >
              {features.business && <Check className="w-3 h-3" />}
            </button>
          </div>

        </div>
      </div>

      {/* Main Bottom Pay CTA */}
      <div className="pt-2">
        <button
          onClick={handleGoPro}
          className="w-full py-3.5 bg-[#FF6B35] hover:bg-[#e05929] text-white rounded-full font-bold font-heading text-xs shadow-md transition-all active:scale-95 flex items-center justify-center space-x-1.5"
        >
          <span>{isPro ? '✨ PRO Pass Activated!' : 'Go PRO now'}</span>
        </button>
      </div>

      {/* Confirmation subtext */}
      <div className="text-center text-[9px] text-gray-400">
        Cancel anytime in your application settings. Restore Purchases.
      </div>

    </div>
  );
};
