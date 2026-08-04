const fs = require('fs');
const path = 'src/components/Features.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/Book a table/g, 'Emergency IT Support');
content = content.replace(/View menu/g, 'Network Installation');

fs.writeFileSync(path, content);
