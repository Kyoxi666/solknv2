const fs = require('fs');
const glob = require('fs').readdirSync;
const path = require('path');

const dir = 'src/pages/services';
const files = glob(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<\/div>\s*\{\/\* Soft cloudy highlights \*\/\}/g, 
    '<div className="absolute inset-0 pointer-events-none overflow-hidden">\n          {/* Main background color */}\n          <div className="absolute inset-0 bg-[#0a0f1a]"></div>\n          \n          {/* Soft cloudy highlights */}');
  fs.writeFileSync(file, content);
}
