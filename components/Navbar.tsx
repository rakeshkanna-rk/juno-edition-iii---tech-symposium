
import React from 'react';

interface NavbarProps {
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/70 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-3 cursor-pointer group">
          <div className="h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
             <img src="./assets/NavbarLogo.png" className="w-full h-full object-contain" alt="JUNO Logo" />
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-10">
          <NavLink label="HOME" href="#home" active={currentPath === '#home' || !currentPath} />
          <NavLink label="ABOUT" href="#about" active={currentPath === '#about'} />
          <NavLink label="EVENTS" href="#events" />
          <NavLink label="GALLERY" href="#about" />
          <NavLink label="CONTACT US" href="#contact" />
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden text-yellow-500 cursor-pointer">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
           </svg>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ label: string; href: string; active?: boolean }> = ({ label, href, active }) => (
  <a 
    href={href} 
    className={`nav-link text-[11px] font-bold tracking-[0.25em] transition-all duration-300 ${active ? 'text-yellow-500 active' : 'text-white/60 hover:text-white'}`}
  >
    {label}
  </a>
);
