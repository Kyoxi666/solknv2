import React from 'react';

export function GuidesBanner() {
  return (
    <div className="w-full h-[400px] md:h-[500px] bg-[#000000] relative overflow-hidden flex items-center justify-center">
      {/* Background gradients for the blurred wave effect */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        {/* Top left dark area is just the background color */}
        
        {/* Main wave streak - cyan/light blue */}
        <div 
          className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#0088cc] rounded-[100%]"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-25deg)',
            filter: 'blur(60px)',
            opacity: 0.7
          }}
        ></div>

        {/* Brighter core of the wave */}
        <div 
          className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#33bbff] rounded-[100%]"
          style={{
            top: '55%',
            left: '45%',
            transform: 'translate(-50%, -50%) rotate(-20deg)',
            filter: 'blur(40px)',
            opacity: 0.9
          }}
        ></div>

        {/* Bottom right dark/black curve encroaching */}
        <div 
          className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-[#000000] rounded-full"
          style={{
            top: '70%',
            left: '30%',
            filter: 'blur(40px)',
            opacity: 1
          }}
        ></div>
        
        {/* Top left dark area pushing down */}
        <div 
          className="absolute w-[100vw] md:w-[80vw] h-[80vw] bg-[#000000] rounded-full"
          style={{
            top: '-50%',
            left: '-20%',
            filter: 'blur(50px)',
            opacity: 1
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-normal text-white mb-6 tracking-tight drop-shadow-lg">Guides</h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto font-light drop-shadow">
          In-depth resources and guides to help you navigate the complex world of IT.
        </p>
      </div>
    </div>
  );
}
