
import React from 'react';

export const AboutPage: React.FC = () => {
  const galleryPlaceholders = Array(8).fill(null);

  return (
    <div className="pt-32 pb-20 px-6 lg:px-20 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* About Description Card */}
        <section className="card-glass p-8 md:p-12 lg:p-16 rounded-[40px] border-yellow-500/10 shadow-2xl">
          <h2 className="font-cinzel text-5xl md:text-6xl font-black gold-text tracking-[0.15em] mb-4">
            JUNO EDITION III
          </h2>
          <p className="text-[10px] md:text-[12px] tracking-[0.4em] text-white/90 font-black uppercase mb-12">
            Technotsav - Brilliance Meet Innovation
          </p>
          
          <div className="space-y-8 text-white/80 leading-relaxed text-sm md:text-base font-bold uppercase tracking-[0.15em] text-justify">
            <p>
              JUNO Association is the student council of School of IT. The JUNO association has placed a record number of achievements that includes both academics and cultural activities. JUNO is an inter-collegiate symposium event hosted by 
              <span className="text-yellow-500 ml-1">
                The Departments of BCA, B.Sc. Computer Science, B.Sc. Visual Communication, B.Sc. Information Technology, B.Sc. Data Analytics, B.Sc. Computer Science With AI, MCA & M.Sc. Computer Science With AI
              </span>. 
              JUNO has grown into one of the most vibrant student-driven events. Its first edition made a remarkable debut in 2024 with an impressive turnout of over 
              <span className="text-yellow-500 mx-1">1,000+</span> 
              walk-ins, setting a strong foundation for the years to come. Building on that momentum, the second edition surpassed expectations with more than 
              <span className="text-yellow-500 mx-1">1,300+</span> 
              participants in 2025, solidifying its reputation as a dynamic and highly anticipated annual gathering for students from various institutions.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="space-y-16">
          <h2 className="text-center font-cinzel text-5xl md:text-6xl font-black text-white tracking-[0.2em] uppercase">
            Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryPlaceholders.map((_, idx) => (
              <div 
                key={idx} 
                className="aspect-[4/5] bg-[#D1D5DB]/90 rounded-sm overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-yellow-500/20"
              >
                {/* Image placeholder - in production would be real gallery photos */}
                <div className="w-full h-full flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-black/10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                   </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
