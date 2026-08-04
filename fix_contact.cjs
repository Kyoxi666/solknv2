const fs = require('fs');
const path = require('path');

const dir = 'src/pages/services';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<section id="contact"[\s\S]*?<\/section>/, (match) => {
    const titleMatch = match.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    const pMatch = match.match(/<p[^>]*>([\s\S]*?)<\/p>/);
    const linkMatch = match.match(/<Link[^>]*>([\s\S]*?)<\/Link>/);
    
    if (titleMatch && pMatch && linkMatch) {
      return `<section id="contact" className="py-24 bg-white text-gray-900 relative overflow-hidden rounded-[3rem] border border-gray-100 mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">${titleMatch[1].trim()}</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">${pMatch[1].trim()}</p>
          <Link to="/contact" className="bg-black text-white hover:bg-gray-800 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-md hover:shadow-lg hover:-translate-y-1 duration-300">
            ${linkMatch[1].trim()}
          </Link>
        </div>
      </section>`;
    }
    return match;
  });
  fs.writeFileSync(file, content);
}
