
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0
  });

  useEffect(() => {
    // Target date: change this to the actual event date
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        sec: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen w-full relative flex items-center pt-20 px-6 lg:px-20 overflow-hidden select-none">
      {/* Background flare effects */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
        
        {/* Left Side: Large Logo and Event Title */}
        <div className="flex flex-col items-center lg:items-start space-y-4 animate-fade-in">
          <div className="w-full h-full md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] relative float-animation">
            <img 
              src="./assets/JUNOHeroLogo.png" 
              className="w-[900px] h-auto object-contain" 
              alt="JUNO Peacock Logo" 
            />
            <h1 className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-black gold-text tracking-[0.15em] leading-tight">
              JUNO EDITION III
            </h1>
            <p className="text-xs md:text-sm lg:text-base tracking-[0.4em] text-white/80 font-bold uppercase mt-2">
              Technotsav - Brilliance Meet Innovation
            </p>
            {/* Crown addition simulation via absolute positioning if needed, 
                but high brightness peacock already provides a very similar look */}
          </div>  
        </div>

        {/* Right Side: Timer, Registration Buttons, and Rule Book */}
        <div className="flex flex-col items-center lg:items-end justify-center lg:h-full space-y-16 lg:space-y-24">
          
          {/* Countdown Timer */}
          <div className="flex space-x-6 md:space-x-10 lg:space-x-12">
            <TimerUnit value={timeLeft.days} label="DAYS" />
            <TimerUnit value={timeLeft.hours} label="HOURS" />
            <TimerUnit value={timeLeft.min} label="MIN" />
            <TimerUnit value={timeLeft.sec} label="SEC" />
          </div>

          {/* Registration Buttons */}
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 w-full lg:justify-end">
            <button className="gold-btn px-10 py-5 rounded-2xl text-[12px] md:text-sm font-black tracking-[0.2em] border-white/20 hover:border-yellow-500 transition-all duration-500 min-w-[240px]">
              Day 1 Registration
            </button>
            <button className="gold-btn px-10 py-5 rounded-2xl text-[12px] md:text-sm font-black tracking-[0.2em] border-white/20 hover:border-yellow-500 transition-all duration-500 min-w-[240px]">
              Day 2 Registration
            </button>
          </div>

          {/* Rule Book Link */}
          <div className="lg:pr-4">
            <a 
              href="#" 
              className="group relative inline-block text-white/60 text-[12px] md:text-sm tracking-[0.4em] uppercase font-black transition-colors duration-300 hover:text-yellow-500"
            >
              JUNO RUEL BOOK
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-500/50 scale-x-100 group-hover:bg-yellow-500 transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical line at bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-20 lg:translate-x-0 hidden lg:flex flex-col items-center opacity-30">
        <div className="w-px h-24 bg-gradient-to-t from-yellow-500 to-transparent"></div>
      </div>
    </section>
  );
};

const TimerUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center group">
    <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-500 font-cinzel transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-[10px] md:text-[12px] tracking-[0.3em] text-white/60 font-black mt-2 uppercase">{label}</span>
  </div>
);
