const fs = require('fs');

let content = fs.readFileSync('src/components/SocialProof.tsx', 'utf8');

// add import
content = content.replace(
  "import { Link } from 'react-router-dom';",
  "import { Link } from 'react-router-dom';\nimport { Portfolio } from './Portfolio';"
);

// add component
content = content.replace(
  "</section>\n      <section className=\"py-24 bg-white\">",
  "</section>\n      <Portfolio />\n      <section className=\"py-24 bg-white\">"
);

fs.writeFileSync('src/components/SocialProof.tsx', content);

let homePageContent = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

homePageContent = homePageContent.replace("import { Portfolio } from '../components/Portfolio';\n", "");
homePageContent = homePageContent.replace("      <Portfolio />\n", "");

fs.writeFileSync('src/pages/HomePage.tsx', homePageContent);

