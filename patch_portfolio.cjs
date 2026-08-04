const fs = require('fs');

let content = fs.readFileSync('src/components/Portfolio.tsx', 'utf8');

content = content.replace(
  /<section className="bg-\[#f5f5f5\].*?">/,
  '<section className="py-24 bg-white text-gray-900 font-sans border-t border-gray-200">'
);

// Replace the h2 and categories container
const oldHeaderRegex = /<h2 className="text-\[12vw\].*?PORTFOLIO\s*<\/h2>\s*<div className="flex gap-6 pl-4 sm:pl-6 lg:pl-8 mb-2 text-sm font-medium">/;
const newHeader = `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8 max-w-2xl text-gray-900">
          Portfolio
        </h2>
        <div className="flex gap-6 text-sm font-medium">`;

content = content.replace(oldHeaderRegex, newHeader);

// We need to close the max-w-7xl div after the categories buttons div.
// Currently it is:
//         </button>
//       ))}
//     </div>
//   <div className="w-full border-t border-b border-black...
content = content.replace(
  /<\/div>\s*<div className="w-full border-t border-b border-black/,
  `</div>\n      </div>\n\n      <div className="w-full border-t border-b border-gray-200`
);

// Change bg-[#f5f5f5] inside the cards to bg-white
content = content.replace(/bg-\[#f5f5f5\]/g, 'bg-white');
// Change border-black to border-gray-200
content = content.replace(/border-black/g, 'border-gray-200');

fs.writeFileSync('src/components/Portfolio.tsx', content);
