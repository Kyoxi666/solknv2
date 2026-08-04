const fs = require('fs');
const targetPath = 'src/pages/ClientPortalPage.tsx';
let content = fs.readFileSync(targetPath, 'utf8');

content = content.replace(
  'bg-[radial-gradient(circle_at_70%_50%,rgba(43,61,91,0.2)_0%,transparent_60%)]',
  'bg-[radial-gradient(circle_at_70%_50%,rgba(185,90,30,0.2)_0%,transparent_60%)]'
);

content = content.replace(
  'shadow-[-15px_0_80px_rgba(255,255,255,0.02),-40px_0_150px_rgba(43,61,91,0.4)]',
  'shadow-[-15px_0_80px_rgba(255,255,255,0.02),-40px_0_150px_rgba(185,90,30,0.4)]'
);

fs.writeFileSync(targetPath, content);
console.log("Updated client portal background colors.");
