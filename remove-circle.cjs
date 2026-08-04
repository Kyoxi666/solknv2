const fs = require('fs');
const path = require('path');

const dir = 'src/pages/services';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const targetStr = `          <div className="mt-8 md:mt-0 flex items-center justify-center w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>`;
          
    content = content.replace(targetStr, '');
    fs.writeFileSync(filePath, content);
  }
}
