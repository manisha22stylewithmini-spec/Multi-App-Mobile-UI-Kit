import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { KawaiiCloud } from '../components/illustrations/KawaiiCloud';
import { Avatar } from '../components/illustrations/Avatars';

export const P2PPaymentScreen: React.FC<{ playAudioFeedback?: (type?: 'tap' | 'success' | 'toggle') => void }> = ({
  playAudioFeedback
}) => {
  const [actionType, setActionType] = useState<'send' | 'request'>('send');
  const [amount, setAmount] = useState<number>(250);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSendAgain = () => {
    if (playAudioFeedback) playAudioFeedback('success');
    setToastMessage(`⚡ Successfully ${actionType === 'send' ? 'sent' : 'requested'} $${amount} to Alzea!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const cycleAmount = () => {
    if (playAudioFeedback) playAudioFeedback('tap');
    const amounts = [250, 500, 1000, 50];
    const nextIdx = (amounts.indexOf(amount) + 1) % amounts.length;
    setAmount(amounts[nextIdx]);
  };

  return (
    <div className="flex flex-col space-y-5 p-4 animate-fade-in select-none bg-[#E0F2FE]/40 min-h-full">
      
      {/* Top close button (X) on right */}
      <div className="flex justify-end">
        <button 
          onClick={() => {
            if (playAudioFeedback) playAudioFeedback('tap');
            setToastMessage('Payment details dismissed.');
            setTimeout(() => setToastMessage(null), 2000);
          }}
          className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-slate-700 shadow-xs transition-all active:scale-95"
          title="Close View"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* 3D floating illustration: colorful balloons, cloud with sun character on sky blue background */}
      <KawaiiCloud className="shadow-sm border border-sky-100" />

      {/* Main Recipient Core Card */}
      <div className="bg-white rounded-[32px] p-5 shadow-xs border border-sky-50 flex flex-col items-center relative -mt-8 z-20">
        
        {/* Circular avatar of recipient (Afro hairstyle character) */}
        <div className="absolute -top-7">
          <Avatar type="afro" className="w-14 h-14 ring-4 ring-white shadow-sm" />
        </div>

        {/* Name: 'Alzea Arafat' bold centered */}
        <div className="mt-6 text-center">
          <h2 className="text-base font-bold font-heading text-slate-900">
            Alzea Arafat
          </h2>
          <span className="text-[10px] text-gray-400 block mt-0.5">
            Verified Peer Connection
          </span>
        </div>

        {/* Send | Request button row (outlined pill buttons) */}
        <div className="flex space-x-2 w-full mt-4">
          <button
            onClick={() => {
              if (playAudioFeedback) playAudioFeedback('toggle');
              setActionType('send');
            }}
            className={`flex-1 py-2 px-3 rounded-full text-xs font-bold border-1.5 transition-all flex items-center justify-center space-x-1 ${
              actionType === 'send'
                ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                : 'border-gray-200 text-gray-600 hover:border-slate-900'
            }`}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Send</span>
          </button>

          <button
            onClick={() => {
              if (playAudioFeedback) playAudioFeedback('toggle');
              setActionType('request');
            }}
            className={`flex-1 py-2 px-3 rounded-full text-xs font-bold border-1.5 transition-all flex items-center justify-center space-x-1 ${
              actionType === 'request'
                ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                : 'border-gray-200 text-gray-600 hover:border-slate-900'
            }`}
          >
            <ArrowDownLeft className="w-3.5 h-3.5" />
            <span>Request</span>
          </button>
        </div>

        {/* Amount display: '$ 250' in orange bold */}
        <div className="my-5 text-center">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold">
            {actionType === 'send' ? 'Amount to Send' : 'Amount Requested'}
          </span>
          <button 
            onClick={cycleAmount}
            className="text-3xl font-bold font-heading text-[#FF6B35] tracking-tight mt-0.5 hover:scale-105 transition-transform active:scale-95 block focus:outline-none"
            title="Tap to cycle amount"
          >
            $ {amount}
          </button>
          <span className="text-[8px] text-gray-400 block mt-0.5">
            Tap amount to simulate changes
          </span>
        </div>

        {/* Status row: 'Received ✓' green badge, date 'Nov 25, 08:00' */}
        <div className="w-full bg-gray-50 rounded-2xl p-3 flex items-center justify-between">
          <div className="flex items-center space-x-1.5 bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold">Received</span>
          </div>
          <span className="text-[11px] font-medium text-gray-500">
            Nov 25, 08:00
          </span>
        </div>

      </div>

      {/* Recipient row: 'Alzea Arafat, +62 81 3398 90678' */}
      <div className="bg-white rounded-2xl p-3.5 shadow-xs border border-sky-50 flex items-center justify-between">
        <div>
          <span className="text-[9px] text-gray-400 uppercase tracking-wider block font-bold">
            Transfer Destination
          </span>
          <span className="text-xs font-bold text-slate-800 block mt-0.5">
            Alzea Arafat
          </span>
          <span className="text-[10px] font-mono text-gray-500 block">
            +62 81 3398 90678
          </span>
        </div>
        
        <div className="w-7 h-7 rounded-full bg-sky-50 flex items-center justify-center text-[#FF6B35] font-bold text-xs">
          ID
        </div>
      </div>

      {/* Mutual friends: '15 friends in payment history' with 3 avatar circles */}
      <div className="bg-white rounded-2xl p-3.5 shadow-xs border border-sky-50 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-slate-800 block">
            15 friends
          </span>
          <span className="text-[10px] text-gray-400 block">
            in payment history
          </span>
        </div>

        {/* Stacked avatar circles */}
        <div className="flex -space-x-2">
          <Avatar type="pink-hair" className="w-7 h-7 ring-2 ring-white" />
          <Avatar type="green-guy" className="w-7 h-7 ring-2 ring-white" />
          <Avatar type="yellow-girl" className="w-7 h-7 ring-2 ring-white" />
          <div className="w-7 h-7 rounded-full bg-gray-100 ring-2 ring-white flex items-center justify-center text-[8px] font-bold text-gray-600">
            +12
          </div>
        </div>
      </div>

      {/* Payment via Stripe, email shown, 'Encrypted' badge */}
      <div className="flex items-center justify-between px-2 pt-1">
        <div className="flex items-center space-x-1.5">
          <ShieldCheck className="w-4 h-4 text-slate-400" />
          <div>
            <span className="text-[9px] text-gray-400 block">Secured by Stripe</span>
            <span className="text-[9px] text-gray-500 font-mono">alzea@arafat.id</span>
          </div>
        </div>

        <span className="text-[9px] bg-purple-50 text-purple-700 font-bold px-2 py-0.5 rounded-full border border-purple-100">
          Encrypted
        </span>
      </div>

      {/* Bottom CTA: gradient pink-orange button 'Send again' */}
      <div className="pt-2">
        <button
          onClick={handleSendAgain}
          className="w-full py-3.5 bg-gradient-to-r from-[#FF4D8F] to-[#FF6B35] hover:opacity-95 text-white rounded-full font-bold font-heading text-xs shadow-md transition-all active:scale-95 tracking-wide"
        >
          {actionType === 'send' ? 'Send again' : 'Request again'}
        </button>
      </div>

      {/* Live Feedback Toast */}
      {toastMessage && (
        <div className="absolute bottom-4 left-4 right-4 bg-slate-900 text-white text-xs p-3 rounded-xl text-center shadow-lg animate-fade-in z-50 font-medium">
          {toastMessage}
        </div>
      )}

    </div>
  );
};
