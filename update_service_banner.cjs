const fs = require('fs');
const path = 'src/components/ServiceBanner.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the container classes
content = content.replace(
  'className="relative w-full bg-[#050510] h-[350px] md:h-[450px] flex items-center overflow-hidden"',
  'className="relative w-full bg-[#090e17] h-[350px] md:h-[450px] flex items-center overflow-hidden"'
);

// Replace the background glow elements
const oldGlowRegex = /\{\/\* Background glow base \*\/\}[\s\S]*?z-0"><\/div>/;
const newGlow = `{/* Background glow effects matching the dark blue misty image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1526] to-[#070b14]"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(40,65,105,0.4)_0%,transparent_60%)] blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(35,55,95,0.5)_0%,transparent_60%)] blur-[90px] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(50,80,120,0.25)_0%,transparent_50%)] blur-[60px] pointer-events-none z-0"></div>`;

content = content.replace(oldGlowRegex, newGlow);

fs.writeFileSync(path, content);
