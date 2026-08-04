const fs = require('fs');
const path = 'src/components/Hero.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /One single platform to <br\/>\s*<span className="text-sky-300">automate & scale\.<\/span>/,
  'Reliable networks and <br/>\n          <span className="text-sky-300">IT support for small businesses.</span>'
);

content = content.replace(
  /Streamline your operations, reduce downtime, and grow effortlessly with SOLKN's AI-driven IT support and intelligent automation solutions\./,
  'From network installation to ongoing IT management, we keep small businesses connected, secure, and running smoothly — with AI and web tools when you need them too.'
);

fs.writeFileSync(path, content);
