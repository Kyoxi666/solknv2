const fs = require('fs');
const glob = require('fs').readdirSync;
const path = require('path');

const dir = 'src/pages/services';
const files = glob(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Remove the bogus block we inserted
  content = content.replace(/<div className="absolute inset-0 pointer-events-none overflow-hidden">\s*\{\/\* Main background color \*\/\}\s*<div className="absolute inset-0 bg-\[#0a0f1a\]"><\/div>\s*\{\/\* Soft cloudy highlights \*\/\}\s*<div className="absolute top-\[-20%\] right-\[-10%\] w-\[70%\] h-\[70%\] bg-\[#1e293b\]\/60 rounded-full blur-\[120px\] mix-blend-screen"><\/div>\s*<div className="absolute bottom-\[-10%\] left-\[0%\] w-\[60%\] h-\[60%\] bg-\[#2b3d5b\]\/40 rounded-full blur-\[140px\] mix-blend-screen"><\/div>\s*<div className="absolute top-\[30%\] left-\[20%\] w-\[50%\] h-\[50%\] bg-\[#162032\]\/70 rounded-full blur-\[100px\] mix-blend-screen"><\/div>\s*<\/div>/g, '</div>');

  fs.writeFileSync(file, content);
}
