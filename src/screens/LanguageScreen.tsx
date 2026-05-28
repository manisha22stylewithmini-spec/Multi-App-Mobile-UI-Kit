import React, { useState } from 'react';
import { Camera, Map, MessageCircle, Edit3, FileText, Bot, Layers, BookOpen, CheckCircle2, Play, Award } from 'lucide-react';
import { Avatar } from '../components/illustrations/Avatars';

interface LessonItem {
  id: string;
  flag: string;
  name: string;
  subtitle: string;
  initProgress: number;
  hasStartBtn?: boolean;
}

export const LanguageScreen: React.FC<{ playAudioFeedback?: (type?: 'tap' | 'success') => void }> = ({
  playAudioFeedback
}) => {
  const [activeTab, setActiveTab] = useState<'popular' | 'rising'>('popular');
  const [selectedSubject, setSelectedSubject] = useState<string | null>('chat');
  const [lessonStarted, setLessonStarted] = useState<boolean>(false);
  const [lessonProgress, setLessonProgress] = useState<{ [key: string]: number }>({
    Japanese: 75,
    English: 40,
    Indonesian: 15,
    Arabic: 0
  });

  const subjects = [
    { id: 'camera', label: 'Camera', icon: Camera, bg: 'bg-[#FF6B35]/15', color: 'text-[#FF6B35]' },
    { id: 'map', label: 'Map', icon: Map, bg: 'bg-[#2196F3]/15', color: 'text-[#2196F3]' },
    { id: 'chat', label: 'Chat', icon: MessageCircle, bg: 'bg-[#FF4D8F]/15', color: 'text-[#FF4D8F]' },
    { id: 'edit', label: 'Edit', icon: Edit3, bg: 'bg-[#7B5EA7]/15', color: 'text-[#7B5EA7]' },
    { id: 'notes', label: 'Notes', icon: FileText, bg: 'bg-[#FFD700]/20', color: 'text-[#D97706]' },
    { id: 'robot', label: 'Robot', icon: Bot, bg: 'bg-[#4CAF50]/15', color: 'text-[#4CAF50]' },
    { id: 'layers', label: 'Layers', icon: Layers, bg: 'bg-[#FF6B35]/15', color: 'text-[#FF6B35]' },
    { id: 'book', label: 'Book', icon: BookOpen, bg: 'bg-[#2196F3]/15', color: 'text-[#2196F3]' },
  ];

  const popularLessons: LessonItem[] = [
    { id: 'Japanese', flag: '🇯🇵', name: 'Japanese', subtitle: 'Basic Hiragana & Greetings', initProgress: 75 },
    { id: 'English', flag: '🇺🇸', name: 'English', subtitle: 'Workplace conversation', initProgress: 40 },
    { id: 'Indonesian', flag: '🇮🇩', name: 'Indonesian', subtitle: 'Daily survival phrases', initProgress: 15 },
    { id: 'Arabic', flag: '🇸🇦', name: 'Arabic', subtitle: 'Alphabet & sounds', initProgress: 0, hasStartBtn: true },
  ];

  const risingLessons: LessonItem[] = [
    { id: 'Korean', flag: '🇰🇷', name: 'Korean', subtitle: 'K-Drama vocabulary', initProgress: 85 },
    { id: 'Spanish', flag: '🇪🇸', name: 'Spanish', subtitle: 'Tapas & Travel basics', initProgress: 50 },
    { id: 'French', flag: '🇫🇷', name: 'French', subtitle: 'Cafe & Romance essentials', initProgress: 20 },
  ];

  const currentLessons: LessonItem[] = activeTab === 'popular' ? popularLessons : risingLessons;

  const handleStartArabic = () => {
    if (playAudioFeedback) playAudioFeedback('success');
    setLessonStarted(true);
    // Simulate interactive progress boost
    setLessonProgress(prev => ({ ...prev, Arabic: 25 }));
  };

  const handleIncrementProgress = (id: string) => {
    if (playAudioFeedback) playAudioFeedback('tap');
    setLessonProgress(prev => ({
      ...prev,
      [id]: Math.min((prev[id] || 0) + 15, 100)
    }));
  };

  return (
    <div className="flex flex-col space-y-5 p-4 animate-fade-in select-none">
      
      {/* Top greeting banner with avatar and username */}
      <div className="flex items-center justify-between bg-white rounded-3xl p-4 shadow-xs border border-gray-100">
        <div className="flex items-center space-x-3">
          <Avatar type="pink-hair" className="w-11 h-11 ring-2 ring-[#FF6B35]/20" />
          <div>
            <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider">
              Welcome back!
            </span>
            <h2 className="text-sm font-bold font-heading text-slate-900">
              Minji Kim ✨
            </h2>
          </div>
        </div>
        <div className="flex items-center space-x-1 bg-[#FF6B35]/10 px-2.5 py-1 rounded-full">
          <Award className="w-3.5 h-3.5 text-[#FF6B35]" />
          <span className="text-xs font-bold text-[#FF6B35]">12 Days</span>
        </div>
      </div>

      {/* Lesson header: 'Lesson 1 - Introduce yourself' with checkbox icon */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF4D8F] rounded-3xl p-4 text-white shadow-sm relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute right-[-20px] top-[-20px] w-24 h-24 bg-white/10 rounded-full blur-lg" />
        
        <div className="flex items-center justify-between relative z-10">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-full">
              CURRENT GOAL
            </span>
            <h3 className="text-base font-bold font-heading mt-1.5 leading-snug">
              Lesson 1 - Introduce yourself
            </h3>
          </div>
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
          </div>
        </div>

        {/* Subtle decorative internal progress */}
        <div className="mt-3 bg-black/10 h-1.5 rounded-full overflow-hidden">
          <div className="bg-white h-full w-[35%] rounded-full" />
        </div>
      </div>

      {/* Grid of 8 subject icons in rounded colorful squares */}
      <div>
        <h4 className="text-xs font-bold font-heading text-gray-400 uppercase tracking-wider mb-2.5 px-1">
          Explore Subjects
        </h4>
        <div className="grid grid-cols-4 gap-2.5">
          {subjects.map((subj) => {
            const Icon = subj.icon;
            const isSelected = selectedSubject === subj.id;
            return (
              <button
                key={subj.id}
                onClick={() => {
                  if (playAudioFeedback) playAudioFeedback('tap');
                  setSelectedSubject(subj.id);
                }}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all group ${
                  isSelected 
                    ? 'bg-white shadow-sm ring-2 ring-[#FF6B35] scale-105' 
                    : 'bg-white/60 hover:bg-white shadow-2xs'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${subj.bg} ${subj.color} mb-1.5 transition-transform group-hover:scale-110`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-medium tracking-tight ${isSelected ? 'text-slate-900 font-bold' : 'text-gray-500'}`}>
                  {subj.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Toggle tabs: 'Most popular' | 'Rising stars' */}
      <div className="bg-white p-1 rounded-2xl flex items-center shadow-xs border border-gray-100">
        <button
          onClick={() => {
            if (playAudioFeedback) playAudioFeedback('tap');
            setActiveTab('popular');
          }}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'popular'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-gray-500 hover:text-slate-900'
          }`}
        >
          Most popular
        </button>
        <button
          onClick={() => {
            if (playAudioFeedback) playAudioFeedback('tap');
            setActiveTab('rising');
          }}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'rising'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-gray-500 hover:text-slate-900'
          }`}
        >
          Rising stars
        </button>
      </div>

      {/* List of language lessons */}
      <div className="space-y-2.5">
        {currentLessons.map((lesson) => {
          const currentProg = lessonProgress[lesson.id] !== undefined ? lessonProgress[lesson.id] : lesson.initProgress;
          
          return (
            <div
              key={lesson.id}
              onClick={() => handleIncrementProgress(lesson.id)}
              className="flex items-center justify-between bg-white rounded-2xl p-3.5 shadow-xs border border-gray-100 hover:border-[#FF6B35]/30 transition-all cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                {/* Flag Icon */}
                <span className="text-2xl block shrink-0 bg-gray-50 w-10 h-10 rounded-xl flex items-center justify-center shadow-2xs">
                  {lesson.flag}
                </span>
                
                <div>
                  <h5 className="text-xs font-bold font-heading text-slate-900 group-hover:text-[#FF6B35] transition-colors">
                    {lesson.name}
                  </h5>
                  <p className="text-[10px] text-gray-500">
                    {lesson.subtitle}
                  </p>
                </div>
              </div>

              {/* Action or Progress Indicator */}
              {lesson.hasStartBtn && !lessonStarted ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStartArabic();
                  }}
                  className="bg-[#FF6B35] hover:bg-[#e05929] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xs transition-all flex items-center space-x-1 active:scale-95 shrink-0"
                >
                  <span>Start</span>
                  <Play className="w-2.5 h-2.5 fill-current" />
                </button>
              ) : (
                <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                  {/* Thin circular progress ring (stroke-width 3px) */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-100"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#FF6B35] transition-all duration-500"
                      strokeWidth="3"
                      strokeDasharray={`${currentProg}, 100`}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-[9px] font-bold font-mono text-slate-800">
                    {currentProg}%
                  </span>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Bottom context notice */}
      {lessonStarted && (
        <div className="bg-green-50 text-green-700 text-xs p-3 rounded-2xl border border-green-200 text-center animate-fade-in font-medium">
          🎉 Arabic lesson active! Tap any row to simulate active quiz progress.
        </div>
      )}

    </div>
  );
};
