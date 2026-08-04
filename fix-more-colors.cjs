const fs = require('fs');
const path = require('path');

const directory = 'src';

const replacements = [
  // Header active links (were text-[#2b3d5b] due to earlier replace, but they are on black bg)
  { regex: /isActive \? 'text-\[#2b3d5b\]' : 'text-white/g, replacement: "isActive ? 'text-sky-300' : 'text-white" },
  { regex: /isServicesOpen \? 'text-\[#2b3d5b\]' : 'text-white/g, replacement: "isServicesOpen ? 'text-sky-300' : 'text-white" },
  { regex: /isResourcesOpen \? 'text-\[#2b3d5b\]' : 'text-white/g, replacement: "isResourcesOpen ? 'text-sky-300' : 'text-white" },
  { regex: /to-\[#2a52be\]/g, replacement: "to-[#1e293b]" },
  
  // Leftover teal
  { regex: /bg-teal-50/g, replacement: 'bg-[#F0F4F8]' },
  { regex: /bg-teal-400/g, replacement: 'bg-sky-300' },
  { regex: /text-teal-400/g, replacement: 'text-sky-300' },
  { regex: /text-teal-500/g, replacement: 'text-[#2b3d5b]' },
  { regex: /text-teal-600/g, replacement: 'text-[#2b3d5b]' },
  { regex: /text-teal-700/g, replacement: 'text-[#1e293b]' },
  { regex: /bg-teal-500/g, replacement: 'bg-[#2b3d5b]' },
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
