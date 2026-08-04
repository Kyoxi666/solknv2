const fs = require('fs');
const path = 'src/components/ServiceBanner.tsx';
let content = fs.readFileSync(path, 'utf8');

const svgRegex = /<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 drop-shadow-\[0_0_12px_rgba\(255,255,255,1\)\] relative z-10">[\s\S]*?<\/svg>/;
content = content.replace(svgRegex, '');

fs.writeFileSync(path, content);
