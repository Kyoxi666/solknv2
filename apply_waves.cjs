const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'pages', 'services');
const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.tsx'));

const getWaveBackground = (index) => {
  // Slight variations in rotation and position to make each page unique
  const rotation1 = -25 + (index * 5);
  const rotation2 = -20 - (index * 5);
  const top1 = 45 + (index * 3);
  const left1 = 40 + (index * 4);
  
  return `        {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#090e17]">
          {/* Main wave streak - slate blue */}
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#2b3d5b] rounded-[100%]"
            style={{
              top: '${top1}%',
              left: '${left1}%',
              transform: 'translate(-50%, -50%) rotate(${rotation1}deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          {/* Brighter core of the wave */}
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#47638c] rounded-[100%]"
            style={{
              top: '${top1 + 5}%',
              left: '${left1 - 5}%',
              transform: 'translate(-50%, -50%) rotate(${rotation2}deg)',
              filter: 'blur(50px)',
              opacity: 0.7
            }}
          ></div>
          {/* Bottom right dark curve encroaching */}
          <div 
            className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-[#05080f] rounded-full"
            style={{
              top: '70%',
              left: '30%',
              filter: 'blur(50px)',
              opacity: 1
            }}
          ></div>
          
          {/* Top left dark area pushing down */}
          <div 
            className="absolute w-[100vw] md:w-[80vw] h-[80vw] bg-[#05080f] rounded-full"
            style={{
              top: '-50%',
              left: '-20%',
              filter: 'blur(60px)',
              opacity: 1
            }}
          ></div>

          {/* Noise overlay */}
          <div 
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
          ></div>
        </div>`;
};

files.forEach((file, idx) => {
  const filePath = path.join(servicesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace bg-[#0a0a0a] with nothing or just remove it since we cover it
  content = content.replace(/className="relative bg-\[#0a0a0a\] text-white/g, 'className="relative bg-[#090e17] text-white');

  // Replace the glow div
  const glowRegex = /\{\/\*\s*Glow\s*\*\/\}\s*<div className="absolute bottom-0 left-1\/2 -translate-x-1\/2 translate-y-1\/2 w-\[1200px\] h-\[600px\] bg-[a-z0-9-]+\/40 rounded-full blur-\[120px\] pointer-events-none"><\/div>/;
  
  content = content.replace(glowRegex, getWaveBackground(idx));

  fs.writeFileSync(filePath, content);
  console.log('Updated ' + file);
});
