import React from 'react';
import { Home, Gift, Trophy, LogIn } from 'lucide-react';

const NavItem = ({ icon: Icon, label }) => (
  <a
    href="#"
    className="inline-flex items-center gap-2 text-slate-200/90 hover:text-white transition-colors px-3 py-2 rounded-md"
  >
    <Icon className="h-4 w-4" />
    <span className="text-sm font-medium">{label}</span>
  </a>
);

const Navbar = () => {
  return (
    <div className="sticky top-6 z-40 flex justify-center px-4">
      <div className="flex w-full max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] px-4 sm:px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 ring-1 ring-white/30" />
          <span className="hidden sm:block text-sm font-semibold tracking-wide text-white/90">Fortunate.GG</span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <NavItem icon={Home} label="Home" />
          <NavItem icon={Gift} label="Rewards" />
          <NavItem icon={Trophy} label="Rakeback" />
          <NavItem icon={Trophy} label="Leaderboards" />
        </nav>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white px-3 sm:px-4 py-2 text-sm font-semibold shadow-lg shadow-blue-900/40 ring-1 ring-white/20 hover:from-sky-400 hover:to-blue-500 transition-colors">
            <LogIn className="h-4 w-4" />
            <span className="hidden sm:inline">Login with Discord</span>
            <span className="sm:hidden">Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
