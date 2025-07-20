import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BarChart2 } from 'lucide-react';

const TrackMyCodeLogo = () => (
  <div className="relative w-12 h-12 group">
    {/* Multiple animated rings */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl animate-pulse opacity-20 scale-110"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 rounded-xl animate-pulse opacity-15 scale-125 delay-75"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl animate-pulse opacity-10 scale-150 delay-150"></div>
    
    {/* Main logo container with 3D effect */}
    <div className="relative w-full h-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 hover:shadow-cyan-500/50">
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {/* Matrix rain effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="text-xs text-cyan-300 font-mono animate-bounce">
            <div className="absolute top-1 left-1 animate-pulse">01</div>
            <div className="absolute top-3 right-2 animate-pulse delay-100">10</div>
            <div className="absolute bottom-2 left-2 animate-pulse delay-200">11</div>
            <div className="absolute bottom-1 right-1 animate-pulse delay-300">00</div>
            <div className="absolute top-2 left-3 animate-pulse delay-400">01</div>
            <div className="absolute bottom-3 right-3 animate-pulse delay-500">10</div>
          </div>
        </div>
        
        {/* Circuit board pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M2 8h4m12 0h4M8 2v4m0 12v4" className="text-cyan-300/20 animate-pulse" />
            <path d="M4 4h16M4 20h16" className="text-blue-300/15 animate-pulse delay-200" />
            <circle cx="6" cy="6" r="1" className="text-green-400/30 animate-ping" />
            <circle cx="18" cy="18" r="1" className="text-cyan-400/30 animate-ping delay-300" />
          </svg>
        </div>
      </div>
      
      {/* Central animated icon */}
      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
        <svg className="w-7 h-7 text-white drop-shadow-lg animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      {/* Multiple animated dots with different effects */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
      <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-500"></div>
      
      {/* Rotating border effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-border animate-spin-slow"></div>
      
      {/* Inner glow */}
      <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 animate-pulse"></div>
    </div>
    
    {/* Floating particles */}
    <div className="absolute -top-3 -left-3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
    <div className="absolute -top-2 -right-2 w-0.5 h-0.5 bg-green-400 rounded-full animate-ping delay-1500"></div>
    <div className="absolute -bottom-3 -right-3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-2000"></div>
  </div>
);

const Navbar = () => {
  return (
    <nav className="bg-black/80 shadow-2xl border-b border-blue-400/30 backdrop-blur-sm relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-purple-400/5 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110">
              <TrackMyCodeLogo />
            </div>
            <span className="text-xl font-bold text-blue-300 group-hover:text-cyan-400 transition-colors duration-300">
              TrackMyCode
            </span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/dashboard" className="flex items-center space-x-2 text-blue-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 transform group relative px-3 py-2 rounded-lg hover:bg-cyan-400/10">
              <BarChart2 className="h-5 w-5 group-hover:animate-pulse" />
              <span className="font-medium">Dashboard</span>
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link to="/compare" className="flex items-center space-x-2 text-blue-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 transform group relative px-3 py-2 rounded-lg hover:bg-cyan-400/10">
              <Users className="h-5 w-5 group-hover:animate-pulse" />
              <span className="font-medium">Compare</span>
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
