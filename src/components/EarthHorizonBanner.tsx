import React from 'react';

export function EarthHorizonBanner({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full bg-black relative overflow-hidden ${className}`}>
      {/* Deep blue atmospheric glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[200px] rounded-[100%] bg-[radial-gradient(ellipse_at_bottom,rgba(20,100,255,0.4)_0%,transparent_70%)] blur-[30px] translate-y-1/2 z-0"></div>
      
      {/* Cyan bright glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[100px] rounded-[100%] bg-[radial-gradient(ellipse_at_bottom,rgba(0,220,255,0.8)_0%,transparent_60%)] blur-[15px] translate-y-1/2 z-0"></div>
      
      {/* Thin bright orange/gold horizon edge */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[10px] rounded-[100%] bg-[radial-gradient(ellipse_at_bottom,rgba(255,150,0,1)_0%,rgba(255,100,0,0.8)_40%,transparent_80%)] blur-[4px] translate-y-1/2 z-0"></div>
      
      {/* Core white/yellow highlight at the center of the horizon */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[4px] rounded-[100%] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.9)_0%,transparent_70%)] blur-[2px] translate-y-1/2 z-0"></div>

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
