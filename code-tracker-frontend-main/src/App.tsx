import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CompareProfiles from './pages/CompareProfiles';
import UserInput from './pages/UserInput';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router>
          <div className="min-h-screen bg-[url('/sl_031420_28950_10.jpg')] bg-cover bg-center bg-fixed flex flex-col">
            <Navbar />
            <div className="flex-1 container mx-auto px-4 py-8 bg-black/40 rounded-lg border border-blue-400/30">
              <Routes>
                <Route path="/" element={<UserInput />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/compare" element={<CompareProfiles />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
