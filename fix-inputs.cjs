const fs = require('fs');
const path = require('path');

const directory = 'src';

const replacements = [
  { regex: /focus:ring-teal-500/g, replacement: 'focus:ring-[#2b3d5b]' },
  { regex: /focus:border-teal-500/g, replacement: 'focus:border-[#2b3d5b]' },
  { regex: /border-teal-500\/30/g, replacement: 'border-[#2b3d5b]/30' },
  { regex: /to-teal-500/g, replacement: 'to-[#2b3d5b]' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(directory);
