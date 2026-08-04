const fs = require('fs');
const targetPath = 'src/pages/ContactPage.tsx';
let content = fs.readFileSync(targetPath, 'utf8');

const regex = /<style>\{`[\s\S]*?`\}<\/style>\s*\{\/\* Dark & Grey Animated Background \*\/\}\s*<div className="fixed inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">[\s\S]*?<\/div>\s*<\/div>/m;

const newBg = `{/* Dark & Blurry Blue/Grey Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0a0f1a]">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-slate-600/30 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/40 blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-slate-400/10 blur-[80px]"></div>
      </div>`;

content = content.replace(regex, newBg);
fs.writeFileSync(targetPath, content);
console.log("Updated contact background.");
