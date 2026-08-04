const fs = require('fs');
const path = 'src/pages/services/WebDevelopmentPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Hero
content = content.replace('Experiences <br/>\n            That Drive Action!', 'Experiences <br/>\n            That Drive Action');

// 2. Solutions Section
const oldSolutionsRegex = /<div className="space-y-0">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
const newSolutions = `<div className="space-y-0">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (01) Website Design & Development
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Websites built around your business.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  Custom-designed websites — from simple brochure sites to fully custom web apps — built to represent your brand and convert visitors.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Custom Design</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Mobile-Responsive Builds</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> API Integrations</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Ongoing Site Management</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (02) E-commerce
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Secure storefronts that convert.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  Scalable online stores engineered to maximize sales, reduce cart abandonment, and stay secure and up to date — we build it and keep managing it.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Shopify & Custom Builds</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Payment Gateways</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Inventory Syncing</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Conversion Optimization</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (03) Hosting & Global CDN
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Fast, secure hosting anywhere.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  Reliable hosting backed by Cloudflare's worldwide CDN network, keeping your site fast for visitors wherever they are, with continuous maintenance and automated backups.
                </p>
                <div className="mt-4 bg-[#f8fafc] border border-slate-200 rounded-xl p-4 inline-block">
                  <p className="text-sm text-slate-600 font-medium italic">"Your site is delivered through Cloudflare's global network, so it loads fast whether your customer is next door or on the other side of the world."</p>
                </div>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Cloudflare Global CDN</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Automated Backups</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Site Monitoring</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Security & SSL Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>`;
content = content.replace(oldSolutionsRegex, newSolutions);

// 3. Mission Statement
content = content.replace('We craft digital experiences that captivate users by reimagining interaction.', 'We design, build, and manage websites that represent your business properly — and keep them fast, secure, and online.');
content = content.replace('Digital Excellence', 'Design, Build, Host');

// 4. Feature grid
content = content.replace('Secure top Lighthouse scores without relying on heavy plugins', "Fast-loading pages worldwide, powered by Cloudflare's global network");
content = content.replace('Improve website authority and brand trustworthiness', 'A site that looks credible and professional from the first visit');
content = content.replace('Increase conversions from targeted user intent', 'Turn visitors into enquiries, bookings, or sales');
content = content.replace('Long-term digital ROI that compounds over time', 'One team handling design, hosting, and ongoing updates');

content = content.replace('Scale digitally with high-performance web solutions', 'Websites that are fast, secure, and looked after');
content = content.replace('Own the digital space where your customers are interacting — our web solutions ensure your brand is fast, reliable, and built to convert.', 'From first design to ongoing hosting and maintenance, we build and manage websites — including online stores — that work as hard as you do.');

// 5. Stats section
content = content.replace("For over 19 years, we've worked alongside growing companies to rediscover their digital essence. Through design, strategy, and technology, we craft digital experiences that connect and drive real impact.", "We design, build, and host websites — including online stores — for businesses that want a site that just works.<br/><br/>Already have a site? We can take over hosting, maintenance, and updates too.");
content = content.replace('10X', 'Global');
content = content.replace('Faster Load', 'CDN Coverage');

// 6. Timeline
content = content.replace(
  'Based on your requirements, we craft a tailored technology stack and wireframe plan to ensure scalable performance.',
  'We plan the structure, design, and features of your site around what your business needs.'
);
content = content.replace('Launch & Optimize', 'Launch & Manage');
content = content.replace(
  'We continuously monitor site analytics and performance to maximize conversions and scale what works.',
  'We launch your site on our Cloudflare-backed hosting and continue monitoring performance, security, and updates.'
);
content = content.replace('Book a free audit', 'Book a free consultation');

// 7. CTA bottom section
const ctaSection = `      <section id="contact" className="py-24 bg-[#0a0f1a] text-white relative overflow-hidden rounded-[3rem] shadow-2xl mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0f1a]"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#1e293b]/60 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[0%] w-[60%] h-[60%] bg-[#2b3d5b]/40 rounded-full blur-[140px] mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">Ready for a website that just works?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Ready for a website that's fast, secure, and properly looked after? Get a free consultation today.</p>
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
