import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-white">
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <a 
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full transition-colors"
            >
              Hire Me
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#projects"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}