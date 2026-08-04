const fs = require('fs');
let code = fs.readFileSync('src/components/SocialProof.tsx', 'utf8');
code = code.replace(
  '      </section>      <section className="py-24 bg-white">',
  '      </section>\n      <Portfolio />\n      <section className="py-24 bg-white">'
);
code = code.replace(
  '      </section>\n      <section className="py-24 bg-white">',
  '      </section>\n      <Portfolio />\n      <section className="py-24 bg-white">'
);
fs.writeFileSync('src/components/SocialProof.tsx', code);
