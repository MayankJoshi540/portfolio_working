"use client"
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email) {
      // Here you can add API call to handle subscription
      setIsSubscribed(true);
      setEmail('');
      // Reset the subscription state after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'PYQ', href: '/pyq' },
    { name: 'Contact', href: '/contact' },
  ];

  const pyqLinks = [
    { name: 'CBSE Class 10', href: '/pyq' },
    { name: 'CBSE Class 12', href: '/pyq' },
    { name: 'UK Board Class 10', href: '/pyq' },
    { name: 'UK Board Class 12', href: '/pyq' },
  ];

  const resources = [
    { name: 'Study Materials', href: '/resources/study-materials' },
    { name: 'Exam Tips', href: '/resources/exam-tips' },
    { name: 'Sample Papers', href: '/resources/sample-papers' },
    { name: 'Syllabus', href: '/resources/syllabus' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                PrepZone
              </Link>
              <p className="text-slate-400 mt-3 leading-relaxed">
                Your trusted source for CBSE and Uttarakhand Board previous year question papers. 
                Helping students excel in their academic journey.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300 group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300 group"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300 group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300 group"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-emerald-400 transition-colors duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PYQ Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Previous Year Questions</h4>
            <ul className="space-y-3">
              {pyqLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-emerald-400 transition-colors duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-emerald-400 transition-colors duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <h5 className="text-white font-medium">Contact Info</h5>
              <div className="space-y-2 text-sm">
                <p className="text-slate-400 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  santosh@example.com
                </p>
                <p className="text-slate-400 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 12345 67890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-400/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Get the latest question papers, study materials, and exam notifications delivered to your inbox.
              </p>
              {isSubscribed ? (
                <p className="text-emerald-400 font-medium">Thank you for subscribing!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © {currentYear} PrepZone. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Made with love */}
            <div className="flex items-center text-slate-400 text-sm">
              Made with 
              <svg className="w-4 h-4 mx-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              for students
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
