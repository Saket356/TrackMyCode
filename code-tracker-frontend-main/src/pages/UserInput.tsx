import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userHandleState } from '../state/atoms';
import { api } from '../services/api';

const UserInput = () => {
  const [handle, setHandle] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setUserHandle = useSetRecoilState(userHandleState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!handle.trim()) {
      setError('Please enter a Codeforces handle');
      return;
    }
    try {
      await api.getUser(handle.trim());
      await api.logVisit('SEARCH', [handle.trim()], '/dashboard');
      setUserHandle(handle.trim());
      navigate('/dashboard');
    } catch (err: any) {
      const errorMessage = err.response?.data?.comment || `User '${handle.trim()}' not found on Codeforces`;
      alert(errorMessage);
      setError('User not found');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-black/70 rounded-xl shadow-2xl border border-blue-400/30 backdrop-blur-sm relative group hover:shadow-lg transition-all duration-300">
        <div className="text-center relative z-10">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-3">
            Track Your Codeforces Journey
          </h2>
          <p className="text-sm text-blue-200 mb-6">
            Enter your Codeforces handle to unlock detailed analytics and insights
          </p>
          
          {/* Feature highlights */}
          <div className="flex justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-1 text-cyan-400 text-xs">
              <span>⚡</span>
              <span>Real-time Data</span>
            </div>
            <div className="flex items-center space-x-1 text-blue-400 text-xs">
              <span>📊</span>
              <span>Analytics</span>
            </div>
            <div className="flex items-center space-x-1 text-purple-400 text-xs">
              <span>🎯</span>
              <span>Insights</span>
            </div>
          </div>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="handle" className="sr-only">
                Codeforces Handle
              </label>
              <div className="relative group">
                <input
                  id="handle"
                  name="handle"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border-2 border-blue-400/30 placeholder-blue-300/50 text-blue-100 bg-black/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 focus:z-10 sm:text-sm transition-all duration-300 group-hover:border-cyan-400/50"
                  placeholder="Enter your Codeforces handle"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                />
                {/* Search icon */}
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transform transition-all duration-300 hover:scale-105"
            >
              {/* Button content */}
              <div className="relative flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="font-semibold">View Statistics</span>
                
                {/* Arrow */}
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInput; 
