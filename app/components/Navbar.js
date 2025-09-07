'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'PYQ', href: '/pyq' },
    { name: 'Contact Me', href: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300">
              PrepZone
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </Link>
              ))}
            </div>
            
            {/* Auth Buttons */}
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-emerald-600 hover:bg-gray-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Auth Buttons */}
          <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
            <Link
              href="/login"
              className="text-gray-700 hover:text-emerald-600 hover:bg-gray-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In  
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white block px-4 py-3 text-base font-medium rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 text-center shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
