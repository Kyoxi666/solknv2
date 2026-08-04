const fs = require('fs');
const path = 'src/pages/services/AIBusinessSolutionsPage.tsx';
let content = fs.readFileSync(path, 'utf8');

const faqRegex = /\{\/\* FAQ Section \*\/\}\s*<section className="py-24 bg-white text-\[#1a1a1a\]">[\s\S]*?<\/section>/;

const newFaq = `{/* FAQ Section */}
      <section className="relative py-24 md:py-32 bg-[#090e17] text-white overflow-hidden">
        {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Main wave streak - slate blue */}
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#2b3d5b] rounded-[100%]"
            style={{
              top: '65%',
              left: '60%',
              transform: 'translate(-50%, -50%) rotate(33deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          {/* Brighter core of the wave */}
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#47638c] rounded-[100%]"
            style={{
              top: '70%',
              left: '55%',
              transform: 'translate(-50%, -50%) rotate(-72deg)',
              filter: 'blur(50px)',
              opacity: 0.7
            }}
          ></div>
          {/* Bottom right dark curve encroaching */}
          <div 
            className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-[#05080f] rounded-full"
            style={{
              top: '80%',
              left: '40%',
              filter: 'blur(50px)',
              opacity: 1
            }}
          ></div>
          {/* Top left dark area pushing down */}
          <div 
            className="absolute w-[100vw] md:w-[80vw] h-[80vw] bg-[#05080f] rounded-full"
            style={{
              top: '-40%',
              left: '-10%',
              filter: 'blur(60px)',
              opacity: 1
            }}
          ></div>
          {/* Noise overlay */}
          <div 
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
          ></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-5xl font-light tracking-tighter mb-12 text-center">
             Frequently Asked Questions
           </h2>
           <div className="space-y-8">
             <div className="border-b border-white/10 pb-8">
               <h3 className="text-xl font-medium mb-3 text-white/90">What if my business isn't tech-savvy?</h3>
               <p className="text-white/60 font-light leading-relaxed">You don't need any technical knowledge. We handle setup, integration, and training — you just tell us how your business runs.</p>
             </div>
             <div className="border-b border-white/10 pb-8">
               <h3 className="text-xl font-medium mb-3 text-white/90">How long does it take to set up?</h3>
               <p className="text-white/60 font-light leading-relaxed">Most chatbots and automations are live within a week or two, depending on complexity.</p>
             </div>
             <div className="border-b border-white/10 pb-8">
               <h3 className="text-xl font-medium mb-3 text-white/90">Can it help with more than just customer questions?</h3>
               <p className="text-white/60 font-light leading-relaxed">Yes — beyond answering customers, we can automate repetitive admin like spreadsheets, data entry, and reporting, saving you hours each week.</p>
             </div>
             <div className="pb-8">
               <h3 className="text-xl font-medium mb-3 text-white/90">Will it work for my type of business?</h3>
               <p className="text-white/60 font-light leading-relaxed">Yes. Whether you run a shop, a clinic, a trades business, or a restaurant, we tailor the AI to your services, hours, and customer questions.</p>
             </div>
           </div>
        </div>
      </section>`;

content = content.replace(faqRegex, newFaq);
fs.writeFileSync(path, content);
