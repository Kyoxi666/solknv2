const fs = require('fs');
const path = 'src/components/ServiceBanner.tsx';
let content = fs.readFileSync(path, 'utf8');

const lineRegex = /<div className="flex items-center w-full relative">[\s\S]*?<\/div>\s*<\/div>/;
content = content.replace(lineRegex, '');

fs.writeFileSync(path, content);
