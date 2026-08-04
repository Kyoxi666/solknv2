const fs = require('fs');
const targetPath = 'src/pages/services/NetworkInfrastructurePage.tsx';
let content = fs.readFileSync(targetPath, 'utf8');

const regex = /\{\/\* Technology We Install Section \*\/\}\s*<section className="py-24 bg-\[#090e17\] text-white">[\s\S]*?(?=\{\/\* 5\.5 New Section: How We Work Timeline \*\/\})/m;

const newSection = `{/* Technology We Install Section */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-[#1e293b]">Technology We Install</h2>
            <p className="text-slate-600 text-lg md:text-xl font-light">We partner with industry-leading brands to provide reliable equipment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            <div className="w-full bg-white rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="text-[#2b3d5b]">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto mb-6">
                  <defs>
                    <linearGradient id="techGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="40" fill="url(#techGrad1)" />
                  <path d="M10,50 Q50,10 90,50 Q50,90 10,50" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5"/>
                  <path d="M50,10 Q90,50 50,90 Q10,50 50,10" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-slate-800">Core Networking</h3>
              <p className="text-slate-600 font-medium mb-4">Ubiquiti UniFi, TP-Link Omada, Cisco Business</p>
              <p className="text-sm text-slate-500">Great value networking for shops and small offices</p>
            </div>

            <div className="w-full bg-white rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="text-[#2b3d5b]">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto mb-6">
                  <defs>
                    <linearGradient id="techGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <circle cx="35" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                  <circle cx="45" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                  <circle cx="55" cy="50" r="31" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
                  <circle cx="65" cy="50" r="34" fill="url(#techGrad2)" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-slate-800">Business Firewalls</h3>
              <p className="text-slate-600 font-medium mb-4">Fortinet, DrayTek, Zyxel</p>
              <p className="text-sm text-slate-500">Reliable security suited to your business size</p>
            </div>

            <div className="w-full bg-white rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="text-[#2b3d5b]">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto mb-6">
                  <defs>
                    <linearGradient id="techGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path d="M50,10 Q60,40 90,50 Q60,60 50,90 Q40,60 10,50 Q40,40 50,10 Z" fill="url(#techGrad3)" />
                  <circle cx="50" cy="50" r="10" fill="#fff" opacity="0.3" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-slate-800">Enterprise Networking</h3>
              <p className="text-slate-600 font-medium mb-4">Cisco Meraki, HPE Aruba</p>
              <p className="text-sm text-slate-500">For businesses ready to scale or manage multiple sites</p>
            </div>

          </div>
        </div>
      </section>
      `;

content = content.replace(regex, newSection);
fs.writeFileSync(targetPath, content);
console.log("Updated section.");
