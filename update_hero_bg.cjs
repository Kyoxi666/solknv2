const fs = require('fs');
const path = 'src/components/Hero.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the container class bg color
content = content.replace(
  'className="relative min-h-screen flex items-center justify-center bg-[#05050a] overflow-hidden pt-20"',
  'className="relative min-h-screen flex items-center justify-center bg-[#090e17] overflow-hidden pt-20"'
);

// Replace the background elements
const bgRegex = /\{\/\* Background Section with the image style \*\/\}[\s\S]*?<\/div>\s*<\/div>/;

const newBg = `{/* Animated Misty Dark Blue Background Section */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-gradient-to-br from-[#0a0f1a] via-[#0d1526] to-[#070b14]">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(40,65,105,0.5)_0%,transparent_60%)] blur-[80px] pointer-events-none z-0"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.7, 0.5],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(35,55,95,0.6)_0%,transparent_60%)] blur-[90px] pointer-events-none z-0"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [0, 40, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(50,80,120,0.3)_0%,transparent_50%)] blur-[60px] pointer-events-none z-0"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -20, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 7 }}
          className="absolute bottom-[20%] left-[20%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(45,75,115,0.4)_0%,transparent_60%)] blur-[70px] pointer-events-none z-0"
        />
      </div>`;

content = content.replace(bgRegex, newBg);

fs.writeFileSync(path, content);
