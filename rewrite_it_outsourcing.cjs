const fs = require('fs');
const path = 'src/pages/services/ITOutsourcingPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// Hero section
content = content.replace('FROM CLICKS TO CUSTOMERS', 'ALWAYS ON, ALWAYS AVAILABLE');
content = content.replace(
  'Data-driven campaigns utilizing artificial intelligence to optimize conversions, target audiences, and maximize ROI. Reach the right people naturally.',
  '24/7 helpdesk and remote IT support for small businesses — real people who fix problems fast, whenever they happen.'
);
content = content.replace('Campaigns <br/>\n            That Convert!', 'Support <br/>\n            That Never Stops');

// Solutions Section
const oldSolutionsRegex = /<div className="space-y-0">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
const newSolutions = `<div className="space-y-0">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (01) 24/7 Helpdesk
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Support around the clock.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  A dedicated helpdesk your team can call or message any time — day, night, or weekend — for fast, reliable IT support.
                </p>
                <div className="mt-4 bg-[#f8fafc] border border-slate-200 rounded-xl p-4 inline-block">
                  <p className="text-sm text-slate-600 font-medium">Average response time: &lt; 15 minutes</p>
                </div>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> 24/7 Availability</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Ticket Tracking</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Fast Response Times</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Phone, Email, & Chat</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (02) Remote IT Support
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Fixed fast, without the wait.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  Most issues resolved remotely — no need to wait around for an on-site visit. We connect in, diagnose, and fix problems quickly.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Remote Troubleshooting</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Software & System Fixes</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Device Setup & Support</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Secure Remote Access</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (03) Ongoing IT Management
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">One team looking after it all.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  We manage updates, monitoring, and maintenance in the background, so small issues get caught before they become big ones.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> System Monitoring</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Software Updates</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Device Management</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Proactive Maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>`;
content = content.replace(oldSolutionsRegex, newSolutions);

// 3. Mission Statement
content = content.replace(
  'We create agile IT departments that ignite growth by reimagining technical support.',
  'We act as your IT department — so your team gets fast, reliable support without hiring in-house.'
);
content = content.replace('Data-Driven Marketing', 'Reliable IT Support');

// 4. Feature grid
content = content.replace('Grow <span className="italic font-light">securely</span> <span className="italic font-light">with</span> our support', "IT support that's actually <span className=\"italic font-light\">there</span> when you need it");
content = content.replace(
  'Own the organic search space where your customers are looking — our SEO strategies help you rank higher and convert that visibility into real business impact.',
  'From daily helpdesk queries to ongoing system management, our team keeps your business running without the downtime.'
);
content = content.replace('Rank higher on Google, Bing, and other search engines', 'Get support fast, whenever an issue comes up');
content = content.replace('Secure top positions without relying on paid ads', 'Fix problems remotely, without waiting for an on-site visit');
content = content.replace('Improve website authority and trustworthiness', 'One point of contact for all your IT needs');
content = content.replace('Increase conversions from targeted search intent', 'Catch issues early with proactive monitoring');
content = content.replace('Long-term ROI that compounds over time', 'Predictable support costs, no surprise IT bills');

// 5. Stats
content = content.replace(
  "For over 19 years, we've worked alongside startups and leading companies to rediscover their market essence. Through data, creativity, and strategy, we craft campaigns that connect, convert, and drive real ROI.",
  "We support small businesses with fast, reliable IT help — so your team can focus on running the business, not fixing computers."
);
content = content.replace(
  'Every team is a fusion of expertise, reliability, and precision.',
  "Every ticket handled quickly, by people who know what they're doing."
);
content = content.replace('10k+', '< 15m');
content = content.replace('Avg ROI', 'Avg Response Time');
content = content.replace('Cost Savings', 'Remote Resolution');
content = content.replace('40%', '95%');

// 6. Timeline ("How We Work")
content = content.replace(
  "From first call to full-scale growth, here's how we turn strategy into performance.",
  "From first call to ongoing support, here's how we look after your IT."
);
content = content.replace('Audit & Strategy Call', 'IT Assessment');
content = content.replace(
  'We start with a deep dive into your current performance and marketing goals to identify quick wins and long-term opportunities.',
  'We review your current setup, systems, and pain points to understand what support you actually need.'
);
content = content.replace('Custom Roadmap', 'Support Plan');
content = content.replace(
  'Based on your needs and budget, we craft a tailored media plan to drive measurable growth.',
  'We put together a support plan and pricing that fits your business, with no unnecessary extras.'
);
content = content.replace('Implementation', 'Onboarding');
content = content.replace(
  'Our team sets everything up — from campaign structures to tracking — for a seamless launch.',
  'We set up remote access, helpdesk channels, and monitoring so support is ready to go from day one.'
);
content = content.replace('Scale & Optimize', 'Ongoing Support');
content = content.replace(
  'We continuously analyze and improve performance to maximize results and scale what works.',
  'Your team gets access to helpdesk and remote support whenever needed, with regular check-ins to keep things running smoothly.'
);
content = content.replace('Book a free audit', 'Get a free consultation');

// Add "What We Support" section and FAQ before the timeline section
const extraSections = `
      {/* What We Support */}
      <section className="py-24 bg-white text-[#1a1a1a] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-[#1e293b]">What We Support</h2>
            <p className="text-slate-600 text-lg">We manage the tools your business uses every day.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-[#FAF9F6] p-8 rounded-3xl text-center border border-black/5">
              <h3 className="text-xl font-medium text-[#1e293b] mb-2">Windows & Mac</h3>
              <p className="text-sm text-slate-500">Desktops and laptops</p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl text-center border border-black/5">
              <h3 className="text-xl font-medium text-[#1e293b] mb-2">Microsoft 365</h3>
              <p className="text-sm text-slate-500">Email, Teams, & Office</p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl text-center border border-black/5">
              <h3 className="text-xl font-medium text-[#1e293b] mb-2">Google Workspace</h3>
              <p className="text-sm text-slate-500">Gmail, Drive, & Docs</p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl text-center border border-black/5">
              <h3 className="text-xl font-medium text-[#1e293b] mb-2">Business Software</h3>
              <p className="text-sm text-slate-500">POS, CRM, & custom apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
               <h3 className="text-xl font-medium mb-3 text-white/90">Do I need an in-house IT person too?</h3>
               <p className="text-white/60 font-light leading-relaxed">No. We can act as your complete IT department, handling everything from day-to-day helpdesk issues to long-term technology planning.</p>
             </div>
             <div className="border-b border-white/10 pb-8">
               <h3 className="text-xl font-medium mb-3 text-white/90">What if the issue can't be fixed remotely?</h3>
               <p className="text-white/60 font-light leading-relaxed">While over 95% of issues are resolved remotely, we can dispatch an engineer to your site when hands-on support is required for hardware failures or network issues.</p>
             </div>
             <div className="pb-8">
               <h3 className="text-xl font-medium mb-3 text-white/90">Is there a limit on how many tickets we can raise?</h3>
               <p className="text-white/60 font-light leading-relaxed">Our managed support plans typically include unlimited remote helpdesk support, so you never have to hesitate before asking for help.</p>
             </div>
           </div>
        </div>
      </section>
`;

content = content.replace('{/* 5.5 New Section: How We Work Timeline */}', extraSections + '\n      {/* 5.5 New Section: How We Work Timeline */}');

// 7. Final CTA Section
const ctaSection = `      <section id="contact" className="py-24 bg-[#0a0f1a] text-white relative overflow-hidden rounded-[3rem] shadow-2xl mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0f1a]"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#1e293b]/60 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[0%] w-[60%] h-[60%] bg-[#2b3d5b]/40 rounded-full blur-[140px] mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">Tired of IT problems slowing you down?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Get reliable support and put an end to downtime. Book a free consultation today.</p>
          <Link to="/contact" className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300">
            Get a free consultation
          </Link>
        </div>
      </section>
    </div>
  );
}`;

const finalSectionRegex = /\{\/\*\s*6\.\s*New\s*Section\s*4:\s*Colored\s*Awards\/Bottom\s*\*\/\}.*?<\/div>\s*\);\s*\}/s;
content = content.replace(finalSectionRegex, ctaSection);

fs.writeFileSync(path, content);
