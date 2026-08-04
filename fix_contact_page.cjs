const fs = require('fs');

let content = fs.readFileSync('src/pages/ContactPage.tsx', 'utf8');

// Replace dark background wrapper with white
content = content.replace(/className="bg-\[#05050a\] min-h-screen text-white relative"/g, 'className="bg-white min-h-screen text-gray-900 relative"');

// Remove dark blurry background elements
content = content.replace(/<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-\[#0a0f1a\]">[\s\S]*?<\/div>\s*<\/div>\s*<div className="relative w-full/, '<div className="relative w-full');

// Change Get in Touch text
content = content.replace(/text-white tracking-tight drop-shadow-lg/g, 'text-gray-900 tracking-tight');
content = content.replace(/text-white\/70/g, 'text-gray-600');
content = content.replace(/text-white\/90/g, 'text-gray-800');
content = content.replace(/text-white\/80/g, 'text-gray-800');
content = content.replace(/text-white\/60/g, 'text-gray-500');
content = content.replace(/text-white\/40/g, 'text-gray-400');
content = content.replace(/text-white/g, 'text-gray-900'); // the catch-all
content = content.replace(/text-gray-900\/70/g, 'text-gray-600');
content = content.replace(/text-gray-900\/90/g, 'text-gray-800');
content = content.replace(/text-gray-900\/80/g, 'text-gray-800');
content = content.replace(/text-gray-900\/60/g, 'text-gray-500');
content = content.replace(/text-gray-900\/40/g, 'text-gray-400');


// Card background
content = content.replace(/bg-white\/5 backdrop-blur-md shadow-2xl border border-white\/10/g, 'bg-white shadow-xl border border-gray-200');
content = content.replace(/bg-white\/5 border border-white\/10/g, 'bg-gray-50 border border-gray-200');

// Input fields
content = content.replace(/border-white\/10 focus:ring-\[#2b3d5b\] focus:border-transparent bg-\[#0a0c10\]/g, 'border-gray-200 focus:ring-[#2b3d5b] focus:border-[#2b3d5b] bg-white');

// Checkbox
content = content.replace(/bg-\[#0a0c10\] border-white\/20/g, 'bg-white border-gray-300');

// Buttons
content = content.replace(/bg-white\/10 backdrop-blur-md border border-white\/20 text-gray-900/g, 'bg-white border border-gray-200 text-gray-900');
content = content.replace(/bg-white text-black px-8 py-3.5/g, 'bg-black text-white px-8 py-3.5 hover:text-white'); // keep button black with white text
content = content.replace(/hover:bg-white\/20/g, 'hover:bg-gray-50');

fs.writeFileSync('src/pages/ContactPage.tsx', content);
