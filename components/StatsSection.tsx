
import React from 'react';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-cinzel text-5xl md:text-7xl font-black gold-text tracking-[0.3em] mb-24 uppercase">Events</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-auto mb-24">
          <StatItem value="2" label="DAYS" />
          <StatItem value="16" label="EVENTS" />
          <StatItem value="₹100K+" label="PRIZES" />
          <StatItem value="20+" label="STALLS" />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
           <button className="w-full md:w-auto px-20 py-5 rounded-md border-2 gold-border gold-text font-cinzel text-xl tracking-[0.25em] font-black uppercase hover:bg-yellow-500/5 transition-all duration-300">
             Rulebook
           </button>
           <button className="w-full md:w-auto px-20 py-5 rounded-md primary-btn font-cinzel text-xl tracking-[0.25em] font-black uppercase shadow-2xl">
             Register Now
           </button>
        </div>
      </div>
    </section>
  );
};

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col group p-8 rounded-2xl transition-all duration-500 hover:bg-white/[0.02]">
    <span className="text-6xl md:text-8xl font-cinzel font-black text-yellow-500 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_30px_rgba(234,179,8,0.4)]">
      {value}
    </span>
    <span className="text-xs md:text-sm tracking-[0.4em] font-black text-white/60 mt-4 uppercase transition-colors group-hover:text-white/90">
      {label}
    </span>
  </div>
);
