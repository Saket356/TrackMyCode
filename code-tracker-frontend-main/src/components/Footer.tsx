import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-blue-400/30 py-8 mt-8 relative backdrop-blur-sm">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-purple-400/5 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0 group">
            <p className="text-blue-300 text-sm group-hover:text-cyan-300 transition-colors duration-300">
              Made with{' '}
              <span className="text-red-400 animate-pulse">❤️</span>{' '}
              by{' '}
              <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300 animate-neon-pulse">Saket Kumar</span>
            </p>
            <p className="text-blue-200 text-xs mt-1">
              © 2025 TrackMyCode. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <p className="text-blue-300 text-xs group-hover:text-cyan-300 transition-colors duration-300">Powered by</p>
              <p className="text-cyan-400 text-sm font-semibold group-hover:text-cyan-300 transition-colors duration-300 animate-pulse">Codeforces API</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <p className="text-blue-300 text-xs group-hover:text-cyan-300 transition-colors duration-300">Built with</p>
              <p className="text-cyan-400 text-sm font-semibold group-hover:text-cyan-300 transition-colors duration-300 animate-pulse">React + Node.js</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <p className="text-blue-300 text-xs group-hover:text-cyan-300 transition-colors duration-300">Theme</p>
              <p className="text-cyan-400 text-sm font-semibold group-hover:text-cyan-300 transition-colors duration-300 animate-pulse">Matrix</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-blue-400/20">
          <div className="text-center">
            <p className="text-blue-200 text-xs mb-3">
              Track your Codeforces journey with style
            </p>
            <div className="flex justify-center space-x-4 mt-3">
              <div className="flex items-center space-x-1 group hover:scale-110 transition-transform duration-300">
                <span className="text-cyan-400 text-xs animate-pulse">⚡</span>
                <span className="text-blue-300 text-xs group-hover:text-cyan-300 transition-colors duration-300">Real-time Data</span>
              </div>
              <div className="flex items-center space-x-1 group hover:scale-110 transition-transform duration-300">
                <span className="text-cyan-400 text-xs animate-pulse delay-200">📊</span>
                <span className="text-blue-300 text-xs group-hover:text-cyan-300 transition-colors duration-300">Beautiful Analytics</span>
              </div>
              <div className="flex items-center space-x-1 group hover:scale-110 transition-transform duration-300">
                <span className="text-cyan-400 text-xs animate-pulse delay-400">🎯</span>
                <span className="text-blue-300 text-xs group-hover:text-cyan-300 transition-colors duration-300">Matrix Theme</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
