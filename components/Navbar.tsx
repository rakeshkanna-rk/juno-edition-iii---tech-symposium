import React from "react";

interface NavbarProps {
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const activeHash = currentPath || "#home";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/70 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <img
              src="https://images.vexels.com/media/users/3/135965/isolated/preview/26e3864f1d44111311b9840d04c995f9-peacock-bird-silhouette.png"
              className="w-full h-full object-contain filter brightness-200 sepia hue-rotate-[-30deg]"
              alt="JUNO Logo"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-hanora text-xl font-black tracking-[0.2em] gold-text">
              JUNO
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-10">
          <NavLink label="HOME" href="#home" active={activeHash === "#home"} />
          <NavLink
            label="ABOUT"
            href="#about"
            active={activeHash === "#about"}
          />
          <NavLink
            label="EVENTS"
            href="#events"
            active={activeHash === "#events"}
          />
          <NavLink label="GALLERY" href="#about#gallery" />
          <NavLink label="CONTACT" href="#contact" />
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden text-yellow-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 8h16M4 16h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ label: string; href: string; active?: boolean }> = ({
  label,
  href,
  active,
}) => (
  <a
    href={href}
    className={`nav-link text-[11px] font-bold tracking-[0.25em] transition-all duration-300 ${
      active ? "text-yellow-500 active" : "text-white/60 hover:text-white"
    }`}
  >
    {label}
  </a>
);
