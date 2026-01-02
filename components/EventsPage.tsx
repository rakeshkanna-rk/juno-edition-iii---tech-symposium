import React, { useState } from "react";

const day1Events = [
  {
    name: "Photography",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Short Film",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Poster Making",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Paper Presentation",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Movie Quiz",
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Debugging",
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Meme Creation",
    img: "https://images.unsplash.com/photo-1541535881962-3bb380b08458?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Cooking",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=500&auto=format&fit=crop",
  },
];

const day2Events = [
  {
    name: "Box Cricket",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Tech Bingo",
    img: "https://images.unsplash.com/photo-1596778402284-8398c7b09521?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "IPL Auction",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Ramp Walk",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Dance",
    img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Tech Quiz",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Tech Connection",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Treasure Hunt",
    img: "https://images.unsplash.com/photo-1519074063912-ad2a0522ed24?q=80&w=500&auto=format&fit=crop",
  },
];

export const EventsPage: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const events = activeDay === 1 ? day1Events : day2Events;

  return (
    <div className="pt-32 pb-20 px-6 lg:px-20 animate-fade-in min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-white/40 text-xs tracking-[0.5em] font-bold uppercase mb-4">
            Events
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-10">
            Showcase{" "}
            <span className="font-serif italic text-pink-500 lowercase">
              Events
            </span>
          </h1>

          {/* Day Toggles */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <button
              onClick={() => setActiveDay(1)}
              className={`flex items-center space-x-3 px-8 py-4 rounded-full border transition-all duration-300 ${
                activeDay === 1
                  ? "border-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  : "border-white/10 bg-white/5 hover:border-white/30"
              }`}
            >
              <span className="text-2xl">🎨</span>
              <span
                className={`text-lg font-bold tracking-wide ${
                  activeDay === 1 ? "text-white" : "text-white/60"
                }`}
              >
                Day 1
              </span>
            </button>

            <button
              onClick={() => setActiveDay(2)}
              className={`flex items-center space-x-3 px-8 py-4 rounded-full border transition-all duration-300 ${
                activeDay === 2
                  ? "border-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  : "border-white/10 bg-white/5 hover:border-white/30"
              }`}
            >
              <span className="text-2xl">💻</span>
              <span
                className={`text-lg font-bold tracking-wide ${
                  activeDay === 2 ? "text-white" : "text-white/60"
                }`}
              >
                Day 2
              </span>
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full lg:px-10">
          {events.map((event, idx) => (
            <div
              key={`${activeDay}-${idx}`}
              className="card-glass p-6 rounded-[32px] border-white/5 group hover:border-cyan-400/30 transition-all duration-500 animate-fade-in"
            >
              <div className="aspect-video w-full bg-black/40 rounded-2xl overflow-hidden mb-8 relative">
                <img
                  src={event.img}
                  alt={event.name}
                  className="w-full h-full object-cover filter brightness-75 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-hanora text-3xl md:text-4xl font-black text-white tracking-widest uppercase drop-shadow-lg">
                    {event.name}
                  </h3>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-[10px] tracking-[0.4em] text-cyan-400 font-black uppercase">
                  Edition III
                </span>
                <button className="text-white/40 hover:text-cyan-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
