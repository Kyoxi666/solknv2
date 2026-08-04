const fs = require('fs');
const targetPath = 'src/pages/services/NetworkInfrastructurePage.tsx';
let content = fs.readFileSync(targetPath, 'utf8');

// 1. Update Section 6 (Technology We Install)
const section6Regex = /\{\/\* Technology We Install Section \*\/\}\s*<section className="py-24 md:py-32 bg-\[#FAF9F6\] text-\[#1a1a1a\]">[\s\S]*?(?=\{\/\* 5\.5 New Section: How We Work Timeline \*\/\})/m;

const updatedSection6 = `{/* Technology We Install Section */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-[#1e293b]">Technology We Install</h2>
            <p className="text-slate-600 text-lg md:text-xl font-light">We partner with industry-leading brands to provide reliable equipment.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-white rounded-[2rem] p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="text-slate-500">
                <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto mb-6">
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
              <h3 className="text-lg font-medium mb-3 text-slate-800">Core Networking</h3>
              <p className="text-slate-600 font-medium mb-4 text-sm">Ubiquiti UniFi, TP-Link Omada, Cisco Business</p>
              <p className="text-sm text-slate-500 font-light">Great value networking for shops and small offices</p>
            </div>

            <div className="w-full md:w-[calc(33.333%-1rem)] bg-white rounded-[2rem] p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="text-slate-500">
                <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto mb-6">
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
              <h3 className="text-lg font-medium mb-3 text-slate-800">Business Firewalls</h3>
              <p className="text-slate-600 font-medium mb-4 text-sm">Fortinet, DrayTek, Zyxel</p>
              <p className="text-sm text-slate-500 font-light">Reliable security suited to your business size</p>
            </div>

            <div className="w-full md:w-[calc(33.333%-1rem)] bg-white rounded-[2rem] p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="text-slate-500">
                <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto mb-6">
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
              <h3 className="text-lg font-medium mb-3 text-slate-800">Enterprise Networking</h3>
              <p className="text-slate-600 font-medium mb-4 text-sm">Cisco Meraki, HPE Aruba</p>
              <p className="text-sm text-slate-500 font-light">For businesses ready to scale or manage multiple sites</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Industries / Who We Work With Section */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-20 text-white shadow-2xl">
            {/* Background imitating the attached dark, blurry blue/grey image */}
            <div className="absolute inset-0 bg-[#0a0f1a] overflow-hidden">
              <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-slate-600/30 blur-[120px]"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/40 blur-[100px]"></div>
              <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-slate-400/10 blur-[80px]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Who We Work With</h2>
                <p className="text-white/70 text-lg md:text-xl font-light">We provide tailored network solutions for businesses of all types.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Restaurants */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Restaurants & Cafés</h3>
                  <p className="text-white/60 text-sm font-light">Reliable POS connectivity and seamless guest Wi-Fi for your diners.</p>
                </div>
                
                {/* Retail Shops */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Retail Shops</h3>
                  <p className="text-white/60 text-sm font-light">Secure transactions, inventory management, and smooth floor operations.</p>
                </div>

                {/* Small Offices */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Small Offices</h3>
                  <p className="text-white/60 text-sm font-light">Fast, secure networks for staff productivity and seamless video calls.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
`;

content = content.replace(section6Regex, updatedSection6 + '\n      {/* 5.5 New Section: How We Work Timeline */}');
fs.writeFileSync(targetPath, content);
console.log("Updated section 6 and added Who We Work With section.");
