const fs = require('fs');
const path = 'src/components/Features.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the Web Design & Hosting and Development Lifecycle sections with a condensed one
const startIdx = content.indexOf('{/* Web Design & Hosting (Section 4) */}');
if (startIdx !== -1) {
  const replacement = `{/* Condensed Web Dev/Hosting Callout */}
      <section className="py-24 bg-white text-gray-900 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#090e17] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden relative">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(40,80,140,0.8)_0%,transparent_70%)] blur-[40px] pointer-events-none"></div>
            
            <div className="md:w-2/3 relative z-10 mb-8 md:mb-0">
              <div className="text-sm font-semibold text-sky-400 tracking-wider uppercase mb-3">Beyond IT Support</div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Web Design, Hosting & App Development
              </h2>
              <p className="text-white/70 text-lg font-light leading-relaxed max-w-2xl">
                Need a new website or a custom internal application? Alongside our core IT and networking services, our in-house development team builds and hosts modern, scalable web solutions that work seamlessly with your infrastructure.
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-start md:justify-end relative z-10 w-full">
              <Link to="/services/web-development" className="inline-flex items-center px-8 py-4 bg-white text-[#090e17] rounded-full font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg">
                Explore Web Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}`;
  
  content = content.substring(0, startIdx) + replacement;
}

// Ensure the buttons in the Chat UI suggestions match the user's intent. Wait I already updated them, but the input still has the old hardcoded buttons below it?
// Let's check if the hardcoded buttons are there.
// Ah, the previous script updated them successfully because the tags matched.
fs.writeFileSync(path, content);
