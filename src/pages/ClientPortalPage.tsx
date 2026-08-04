import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ClientPortalPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
  };

  return (
    <div className="relative w-full min-h-screen bg-[#080a0c] overflow-hidden flex items-center justify-center font-sans">
      
      {/* Background glow base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(185,90,30,0.2)_0%,transparent_60%)]"></div>

      {/* Large dark circle on the right simulating eclipse */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[85vw] md:h-[85vw] bg-[#050607] rounded-full translate-x-[40%] md:translate-x-[45%] shadow-[-15px_0_80px_rgba(255,255,255,0.02),-40px_0_150px_rgba(185,90,30,0.4)] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10 w-full flex">
        <div className="w-full md:w-[60%] relative flex flex-col justify-center">
          
          <div className="mb-6 relative z-20">
            <h1 className="text-3xl md:text-[40px] font-light text-white mb-2 tracking-wide">
              CLIENT PORTAL
            </h1>
            <p className="text-gray-400 text-sm tracking-widest uppercase mt-4">Secure Access</p>
          </div>

          <div className="flex items-center w-full relative mb-12 hidden md:flex h-4 mt-8">
            <div className="h-[1px] w-[140%] border-t-[1px] border-dotted border-white/40 absolute left-0 top-1/2 -translate-y-1/2"></div>
            {/* Star/Spark at the edge of the line */}
            <div className="absolute right-[-40%] top-1/2 -translate-y-1/2 z-10">
              <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.9)] relative">
                  {/* Sparkle lines */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[1px] bg-white/90"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-5 bg-white/90"></div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 relative z-20 mt-8">
            <div>
              <label className="block text-[11px] font-medium text-gray-400 mb-2 uppercase tracking-widest">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-3 py-3 border border-white/10 rounded-2xl leading-5 bg-black/40 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#2b3d5b] focus:border-[#2b3d5b] sm:text-sm transition-colors"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-400 mb-2 uppercase tracking-widest">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-3 py-3 border border-white/10 rounded-2xl leading-5 bg-black/40 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#2b3d5b] focus:border-[#2b3d5b] sm:text-sm transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#2b3d5b] focus:ring-[#2b3d5b] border-gray-700 bg-black/40 rounded border-white/10"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="#" className="font-medium text-white/70 hover:text-white transition-colors">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b3d5b] focus:ring-offset-black transition-colors mt-6"
            >
              Sign In
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
