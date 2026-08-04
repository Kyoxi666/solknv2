const fs = require('fs');
const path = require('path');

const directory = 'src';

const replacements = [
  // Selection
  { regex: /selection:bg-(teal|amber|rose|emerald|blue|purple|cyan)-500\/30/g, replacement: 'selection:bg-slate-600/30' },
  
  // CTAs & Buttons
  { regex: /bg-(teal|amber|rose|emerald|blue|purple|cyan)-600/g, replacement: 'bg-[#1e293b]' },
  { regex: /hover:bg-(teal|amber|rose|emerald|blue|purple|cyan)-700/g, replacement: 'hover:bg-[#2b3d5b]' },
  
  // Bullets & Highlights
  { regex: /bg-(teal|amber|rose|emerald|blue|purple|cyan)-500/g, replacement: 'bg-[#2b3d5b]' },
  
  // Link Hovers
  { regex: /hover:text-(teal|amber|rose|emerald|blue|purple|cyan)-400/g, replacement: 'hover:text-sky-300' },
  { regex: /hover:text-(teal|amber|rose|emerald|blue|purple|cyan)-300/g, replacement: 'hover:text-sky-300' },
  
  // SVGs & Icons & Primary Texts
  { regex: /text-(teal|amber|rose|emerald|blue|purple|cyan)-600/g, replacement: 'text-[#2b3d5b]' },
  { regex: /text-(teal|amber|rose|emerald|blue|purple|cyan)-500/g, replacement: 'text-[#2b3d5b]' },
  { regex: /text-(teal|amber|rose|emerald|blue|purple|cyan)-400/g, replacement: 'text-[#2b3d5b]' },
  
  // Headings & Dark Texts
  { regex: /text-(teal|amber|rose|emerald|blue|purple|cyan)-900\/80/g, replacement: 'text-slate-800' },
  { regex: /text-(teal|amber|rose|emerald|blue|purple|cyan)-900\/70/g, replacement: 'text-slate-600' },
  { regex: /text-(teal|amber|rose|emerald|blue|purple|cyan)-900/g, replacement: 'text-[#1e293b]' },
  { regex: /text-(teal|amber|rose|emerald|blue|purple|cyan)-700/g, replacement: 'text-[#1e293b]' },
  
  // Cards & Backgrounds
  { regex: /bg-\[#(FFF9E5|ECFEFF|F0FDF4|EFF6FF|FFF1F2|FAF5FF)\]/gi, replacement: 'bg-[#F0F4F8]' },
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
