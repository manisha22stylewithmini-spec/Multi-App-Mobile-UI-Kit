import React, { useState } from 'react';
import { MapPin, Moon, Zap, Activity, Droplet, Coffee, Footprints, Plus } from 'lucide-react';
import { Avatar } from '../components/illustrations/Avatars';

export const HealthScreen: React.FC<{ playAudioFeedback?: (type?: 'tap' | 'success' | 'toggle') => void }> = ({
  playAudioFeedback
}) => {
  const [selectedDay, setSelectedDay] = useState<string>('Mon 25');
  const [coffeeCups, setCoffeeCups] = useState<number>(2);
  const [hydration, setHydration] = useState<number>(800);
  const [steps, setSteps] = useState<number>(10230);

  const days = [
    { label: 'Sun 24', mood: '😴' },
    { label: 'Mon 25', mood: '😊' },
    { label: 'Tue 26', mood: '🚀' },
    { label: 'Wed 27', mood: '🧘' },
    { label: 'Thu 28', mood: '⚡' },
  ];

  const handleAddCoffee = () => {
    if (playAudioFeedback) playAudioFeedback('tap');
    setCoffeeCups(prev => (prev < 3 ? prev + 1 : 1));
  };

  const handleAddHydration = () => {
    if (playAudioFeedback) playAudioFeedback('success');
    setHydration(prev => (prev < 2000 ? prev + 200 : 400));
  };

  const handleAddSteps = () => {
    if (playAudioFeedback) playAudioFeedback('tap');
    setSteps(prev => prev + 500);
  };

  return (
    <div className="flex flex-col space-y-4 p-4 animate-fade-in select-none">
      
      {/* Top map thumbnail with pin location 'Ichiran, Shibuya' and distance '8.5km' */}
      <div 
        onClick={() => playAudioFeedback && playAudioFeedback('tap')}
        className="relative w-full h-32 bg-gray-100 rounded-3xl overflow-hidden shadow-xs border border-gray-200/60 cursor-pointer group"
      >
        {/* Customized inline graphic vector representing Shibuya streets */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120" fill="none">
          {/* Greenish parks */}
          <path d="M 0 0 L 100 0 L 80 120 L 0 120 Z" fill="#DCFCE7" opacity="0.6" />
          <path d="M 200 0 L 300 0 L 300 80 L 250 120 Z" fill="#DCFCE7" opacity="0.5" />
          {/* Shibuya Main Roads */}
          <path d="M 0 40 Q 150 50 300 20" stroke="#FFFFFF" strokeWidth="12" />
          <path d="M 50 0 L 120 120" stroke="#FFFFFF" strokeWidth="8" />
          <path d="M 220 0 L 180 120" stroke="#FFFFFF" strokeWidth="10" />
          {/* Secondary smaller grid lines */}
          <path d="M 0 80 L 300 70" stroke="#E2E8F0" strokeWidth="4" />
          <path d="M 120 0 L 160 120" stroke="#E2E8F0" strokeWidth="4" />
          {/* Active GPS Route trace */}
          <path d="M 50 40 Q 130 45 150 70 T 210 50" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 4" className="animate-pulse" />
        </svg>

        {/* Floating Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="bg-slate-900 text-white px-2.5 py-1 rounded-full text-[10px] font-bold font-heading shadow-md flex items-center space-x-1">
            <MapPin className="w-3 h-3 text-[#4CAF50] fill-current" />
            <span>Ichiran, Shibuya</span>
          </div>
          <div className="w-2 h-2 bg-slate-900 rotate-45 -mt-1" />
          {/* Subtle sonar pulse */}
          <div className="w-4 h-4 bg-[#4CAF50] rounded-full animate-ping absolute -bottom-1 opacity-75" />
          <div className="w-2 h-2 bg-[#4CAF50] rounded-full absolute -bottom-0" />
        </div>

        {/* Distance Badge overlay */}
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] font-bold text-slate-800 shadow-2xs">
          📍 8.5km away
        </div>

        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[9px] font-bold text-[#4CAF50]">
          Active Route
        </div>
      </div>

      {/* Weekly calendar strip: Sun-Thu, 'Mon 25' highlighted in orange */}
      {/* Mood emoji row for each day */}
      <div className="bg-white rounded-3xl p-3.5 shadow-xs border border-gray-100">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Weekly Check-in
          </span>
          <span className="text-[10px] text-[#4CAF50] font-bold">
            November
          </span>
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          {days.map((day) => {
            const isSelected = selectedDay === day.label;
            return (
              <button
                key={day.label}
                onClick={() => {
                  if (playAudioFeedback) playAudioFeedback('tap');
                  setSelectedDay(day.label);
                }}
                className={`flex flex-col items-center py-2 px-1 rounded-2xl transition-all ${
                  isSelected
                    ? 'bg-[#FF6B35] text-white shadow-xs scale-105'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                }`}
              >
                <span className="text-base block mb-0.5">{day.mood}</span>
                <span className={`text-[10px] font-bold block truncate w-full text-center ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                  {day.label.split(' ')[0]}
                </span>
                <span className={`text-[9px] block ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                  {day.label.split(' ')[1]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* '10+ friends are already Diamond' row with avatars */}
      {/* Streak progress: '5 streaks to go' */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-3 border border-green-100 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="flex -space-x-1.5 shrink-0">
            <Avatar type="yellow-girl" className="w-7 h-7 ring-2 ring-white" />
            <Avatar type="purple-hair" className="w-7 h-7 ring-2 ring-white" />
          </div>

          <div>
            <span className="text-xs font-bold text-slate-900 block">
              10+ friends are Diamond
            </span>
            <span className="text-[10px] text-green-700 block font-medium">
              5 streaks to go
            </span>
          </div>
        </div>

        <div className="w-7 h-7 rounded-full bg-[#4CAF50] text-white flex items-center justify-center text-xs font-bold shadow-2xs">
          →
        </div>
      </div>

      {/* Section: 'Daily check-in' */}
      <div>
        <div className="flex items-center justify-between mb-2.5 px-1">
          <h4 className="text-xs font-bold font-heading text-slate-900 uppercase tracking-wider">
            Daily check-in
          </h4>
          <span className="text-[9px] text-gray-400">
            Tap metrics to log live stats
          </span>
        </div>

        {/* 2x3 stat grid */}
        <div className="grid grid-cols-2 gap-3">
          
          {/* Stat 1: Sleep */}
          <div 
            onClick={() => playAudioFeedback && playAudioFeedback('tap')}
            className="bg-white p-3.5 rounded-2xl shadow-2xs border border-gray-100 hover:border-[#4CAF50]/40 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="w-7 h-7 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                <Moon className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.2 rounded">Optimal</span>
            </div>
            <span className="text-[10px] text-gray-400 block font-medium">Sleep</span>
            <span className="text-sm font-bold font-heading text-slate-900 block tracking-tight">
              9hr 5min
            </span>
          </div>

          {/* Stat 2: Energy */}
          <div 
            onClick={() => playAudioFeedback && playAudioFeedback('tap')}
            className="bg-white p-3.5 rounded-2xl shadow-2xs border border-gray-100 hover:border-[#4CAF50]/40 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="w-7 h-7 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded">Active</span>
            </div>
            <span className="text-[10px] text-gray-400 block font-medium">Energy</span>
            <span className="text-sm font-bold font-heading text-slate-900 block tracking-tight">
              1850 cal
            </span>
          </div>

          {/* Stat 3: Stress (progress bar) */}
          <div 
            onClick={() => playAudioFeedback && playAudioFeedback('tap')}
            className="bg-white p-3.5 rounded-2xl shadow-2xs border border-gray-100 hover:border-[#4CAF50]/40 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="w-7 h-7 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                <Activity className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] font-bold text-blue-600">Low</span>
            </div>
            <span className="text-[10px] text-gray-400 block font-medium">Stress</span>
            
            {/* Embedded custom stress progress bar */}
            <div className="mt-1 flex items-center space-x-1.5">
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#2196F3] rounded-full w-[25%]" />
              </div>
              <span className="text-[9px] font-mono font-bold text-slate-700">25%</span>
            </div>
          </div>

          {/* Stat 4: Hydration (800ml) */}
          <div 
            onClick={handleAddHydration}
            className="bg-white p-3.5 rounded-2xl shadow-2xs border border-gray-100 hover:border-[#4CAF50] transition-all cursor-pointer group relative overflow-hidden"
            title="Tap to drink water!"
          >
            <div className="absolute top-0 right-0 bg-blue-50 text-blue-600 p-1 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Plus className="w-2.5 h-2.5" />
            </div>

            <div className="flex items-center justify-between mb-1">
              <div className="w-7 h-7 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500">
                <Droplet className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.2 rounded">Log</span>
            </div>
            <span className="text-[10px] text-gray-400 block font-medium">Hydration</span>
            
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-bold font-heading text-slate-900 block tracking-tight">
                {hydration}ml
              </span>
              <span className="text-[8px] text-gray-400">Goal: 2L</span>
            </div>

            {/* Hydration level indicator */}
            <div className="mt-1 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-sky-400 rounded-full transition-all duration-300" 
                style={{ width: `${Math.min((hydration / 2000) * 100, 100)}%` }} 
              />
            </div>
          </div>

          {/* Stat 5: Coffee (2/3 cups) */}
          <div 
            onClick={handleAddCoffee}
            className="bg-white p-3.5 rounded-2xl shadow-2xs border border-gray-100 hover:border-[#4CAF50] transition-all cursor-pointer group relative"
            title="Tap to consume coffee!"
          >
            <div className="absolute top-0 right-0 bg-amber-50 text-amber-700 p-1 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Plus className="w-2.5 h-2.5" />
            </div>

            <div className="flex items-center justify-between mb-1">
              <div className="w-7 h-7 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                <Coffee className="w-3.5 h-3.5" />
              </div>
              {/* Visual cups representation */}
              <div className="flex space-x-0.5">
                {[1, 2, 3].map((cup) => (
                  <span 
                    key={cup} 
                    className={`w-1.5 h-3 rounded-xs ${cup <= coffeeCups ? 'bg-[#FF6B35]' : 'bg-gray-200'}`} 
                  />
                ))}
              </div>
            </div>
            <span className="text-[10px] text-gray-400 block font-medium">Coffee</span>
            <span className="text-sm font-bold font-heading text-slate-900 block tracking-tight">
              {coffeeCups}/3 cups
            </span>
          </div>

          {/* Stat 6: Steps (10,230) */}
          <div 
            onClick={handleAddSteps}
            className="bg-white p-3.5 rounded-2xl shadow-2xs border border-gray-100 hover:border-[#4CAF50] transition-all cursor-pointer group relative"
            title="Tap to walk 500 steps!"
          >
            <div className="absolute top-0 right-0 bg-green-50 text-green-600 p-1 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Plus className="w-2.5 h-2.5" />
            </div>

            <div className="flex items-center justify-between mb-1">
              <div className="w-7 h-7 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                <Footprints className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.2 rounded">Goal Met!</span>
            </div>
            <span className="text-[10px] text-gray-400 block font-medium">Steps</span>
            <span className="text-sm font-bold font-heading text-slate-900 block tracking-tight">
              {steps.toLocaleString()}
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};
