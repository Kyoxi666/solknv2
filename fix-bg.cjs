const fs = require('fs');
const path = require('path');

const targetStr = '<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>';
const replacementStr = `<div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Main background color */}
          <div className="absolute inset-0 bg-[#0a0f1a]"></div>
          
          {/* Soft cloudy highlights */}
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#1e293b]/60 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[0%] w-[60%] h-[60%] bg-[#2b3d5b]/40 rounded-full blur-[140px] mix-blend-screen"></div>
          <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] bg-[#162032]/70 rounded-full blur-[100px] mix-blend-screen"></div>
        </div>`;

const dir = 'src/pages/services';
const files = fs.readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(filePath, content);
  }
}
