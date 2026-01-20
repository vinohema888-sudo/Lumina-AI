
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">Lumina</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <a href="#" className="hover:text-indigo-600 transition">Solutions</a>
          <a href="#" className="hover:text-indigo-600 transition">How it works</a>
          <a href="#" className="hover:text-indigo-600 transition">Pricing</a>
          <a href="#" className="hover:text-indigo-600 transition">Resources</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-slate-700 font-semibold px-4 py-2 hover:text-indigo-600 transition">
            Login
          </button>
          <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
