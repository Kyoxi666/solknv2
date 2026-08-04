const fs = require('fs');
let code = fs.readFileSync('src/components/SocialProof.tsx', 'utf8');

const regex = /<section className="py-24 bg-white">\s*<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">\s*<div className="text-center mb-16">\s*<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900">Your questions, answered<\/h2>/;

const replacement = `<Portfolio />\n      <section className="py-24 bg-white">\n        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">\n          <div className="text-center mb-16">\n            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900">Your questions, answered</h2>`;

code = code.replace(regex, replacement);

fs.writeFileSync('src/components/SocialProof.tsx', code);
