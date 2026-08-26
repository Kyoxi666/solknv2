import React from 'react';

export function ServiceBanner() {
  return (
    <div className="relative w-full bg-black h-[350px] md:h-[450px] flex items-center overflow-hidden">
      
      {/* Background glow effects matching the dark blue misty image */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)] blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] blur-[90px] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_50%)] blur-[60px] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10 w-full">
        <div className="w-full md:w-[70%] relative">
          <h2 className="text-xl md:text-2xl lg:text-[28px] font-light text-white leading-snug md:leading-relaxed mb-6 pr-8">
            Solkn provides comprehensive managed IT services for businesses of all sizes across the UK and Europe, empowering you to scale, adapt, and delight your customers.
          </h2>
        </div>
      </div>
    </div>
  );
}
