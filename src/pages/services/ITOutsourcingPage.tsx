import { ArrowLeft, ArrowUpRight} from 'lucide-react';
import { Link } from 'react-router-dom';

export function ITOutsourcingPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-slate-600/30">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
      
      {/* 1. Dark Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
                {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          {/* Main wave streak - dark charcoal */}
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#1a1d21] rounded-[100%]"
            style={{
              top: '51%',
              left: '48%',
              transform: 'translate(-50%, -50%) rotate(-15deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          {/* Brighter core of the wave - deep slate black */}
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#2a2e35] rounded-[100%]"
            style={{
              top: '56%',
              left: '43%',
              transform: 'translate(-50%, -50%) rotate(-30deg)',
              filter: 'blur(50px)',
              opacity: 0.7
            }}
          ></div>
          {/* Bottom right dark curve encroaching */}
          <div 
            className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-black rounded-full"
            style={{
              top: '70%',
              left: '30%',
              filter: 'blur(50px)',
              opacity: 1
            }}
          ></div>
          
          {/* Top left dark area pushing down */}
          <div 
            className="absolute w-[100vw] md:w-[80vw] h-[80vw] bg-black rounded-full"
            style={{
              top: '-50%',
              left: '-20%',
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/60 hover:text-white font-medium mb-16 transition-colors text-sm tracking-widest uppercase">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
            <div className="text-xs md:text-sm tracking-widest uppercase text-white/60">
              ALWAYS ON, ALWAYS AVAILABLE 
            </div>
            <div className="max-w-md">
              <p className="text-white/80 leading-relaxed text-xs md:text-sm tracking-wide uppercase mb-8">
                24/7 helpdesk and remote IT support for small businesses — real people who fix problems fast, whenever they happen.
              </p>
              <Link to="/contact" className="inline-flex items-center text-white hover:text-sky-300 transition-colors text-xs md:text-sm tracking-widest uppercase font-medium">
                Get a Free Consultation <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-light leading-[0.9] tracking-tighter uppercase">
            Support <br/>
            That Never Stops 
          </h1>
        </div>

        {/* Marquee */}
        <div className="relative z-10 mt-24 md:mt-32 whitespace-nowrap overflow-hidden flex">
          <div className="animate-marquee flex gap-8 items-center text-5xl md:text-9xl text-white/20 font-serif uppercase tracking-tighter">
            <span>IT OUTSOURCING • DEDICATED TEAMS • HELPDESK  IT OUTSOURCING • DEDICATED TEAMS • HELPDESK  IT OUTSOURCING • DEDICATED TEAMS • HELPDESK </span>
            <span>IT OUTSOURCING • DEDICATED TEAMS • HELPDESK  IT OUTSOURCING • DEDICATED TEAMS • HELPDESK  IT OUTSOURCING • DEDICATED TEAMS • HELPDESK </span>
          </div>
        </div>
      </section>

      {/* 2. Solutions Section (White) */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter uppercase mb-16 md:mb-24">
            Our <br/>
             Solutions
          </h2>

          <div className="space-y-0">
            
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
      </section>
      
      {/* 3. New Section 1: Colored Mission Statement */}
      <section className="py-24 md:py-32 bg-[#090e17] text-white relative overflow-hidden rounded-t-[3rem] md:rounded-[3rem] md:mx-6">
        {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#2b3d5b] rounded-[100%]"
            style={{
              top: '54%',
              left: '51%',
              transform: 'translate(-50%, -50%) rotate(-4deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#47638c] rounded-[100%]"
            style={{
              top: '59%',
              left: '46%',
              transform: 'translate(-50%, -50%) rotate(-47deg)',
              filter: 'blur(50px)',
              opacity: 0.7
            }}
          ></div>
          <div 
            className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-[#05080f] rounded-full"
            style={{
              top: '80%',
              left: '95%',
              filter: 'blur(50px)',
              opacity: 1
            }}
          ></div>
          <div 
            className="absolute w-[100vw] md:w-[80vw] h-[80vw] bg-[#05080f] rounded-full"
            style={{
              top: '-40%',
              left: '-10%',
              filter: 'blur(60px)',
              opacity: 1
            }}
          ></div>
          <div 
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-end justify-between">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] max-w-3xl">
            We act as your IT department — so your team gets fast, reliable support without hiring in-house.
          </h2>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
           <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-widest uppercase bg-white/5 backdrop-blur-sm">
             Reliable IT Support
           </span>
        </div>
      </section>

      {/* 4. New Section 2: White Feature Section */}
      <section className="py-24 md:py-32 bg-white text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-[#1e293b] leading-tight">
              IT support that's actually <span className="italic font-light">there</span> when you need it
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto">
              From daily helpdesk queries to ongoing system management, our team keeps your business running without the downtime.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {/* Top Row (3 items) */}
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#FFF5F7] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="text-[#2b3d5b]">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto mb-6">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#grad1)" />
    <path d="M10,50 Q50,10 90,50 Q50,90 10,50" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5"/>
    <path d="M50,10 Q90,50 50,90 Q10,50 50,10" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5"/>
  </svg>
              </div>
              <p className="text-base font-medium text-slate-800">
                Get support fast, whenever an issue comes up
              </p>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#FFF5F7] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="text-[#2b3d5b]">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto mb-6">
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <circle cx="45" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <circle cx="55" cy="50" r="31" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    <circle cx="65" cy="50" r="34" fill="url(#grad2)" />
  </svg>
              </div>
              <p className="text-base font-medium text-slate-800">
                Fix problems remotely, without waiting for an on-site visit
              </p>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#FFF5F7] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="text-[#2b3d5b]">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto mb-6">
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <path d="M50,10 Q60,40 90,50 Q60,60 50,90 Q40,60 10,50 Q40,40 50,10 Z" fill="url(#grad3)" />
    <circle cx="50" cy="50" r="10" fill="#fff" opacity="0.3" />
  </svg>
              </div>
              <p className="text-base font-medium text-slate-800">
                One point of contact for all your IT needs
              </p>
            </div>
            

            {/* Bottom Row (2 items centered) */}
            <div className="w-full flex flex-col md:flex-row justify-center gap-6 mt-2">
              
              <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#FFF5F7] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
                <div className="text-[#2b3d5b]">
                  <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto mb-6">
    <defs>
      <linearGradient id="grad4" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.9" />
      </linearGradient>
    </defs>
    <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <polygon points="50,25 72,38 72,62 50,75 28,62 28,38" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    <polygon points="50,40 59,46 59,54 50,60 41,54 41,46" fill="url(#grad4)" />
  </svg>
                </div>
                <p className="text-base font-medium text-slate-800">
                  Catch issues early with proactive monitoring
                </p>
              </div>
              
              <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#FFF5F7] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
                <div className="text-[#2b3d5b]">
                  <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto mb-6">
    <defs>
      <linearGradient id="grad5" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <path d="M50,15 A35,35 0 1,1 15,50" fill="none" stroke="url(#grad5)" strokeWidth="15" strokeLinecap="round" />
    <path d="M30,30 A28,28 0 0,0 50,85" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
    <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.8" />
  </svg>
                </div>
                <p className="text-base font-medium text-slate-800">
                  Predictable support costs, no surprise IT bills
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. New Section 3: Text & Stats on Colored Full-Width */}
      <section className="py-24 md:py-32 bg-[#090e17] text-white relative overflow-hidden rounded-t-[3rem] md:rounded-[3rem] md:mx-6">
        {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#2b3d5b] rounded-[100%]"
            style={{
              top: '74%',
              left: '81%',
              transform: 'translate(-50%, -50%) rotate(76deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#47638c] rounded-[100%]"
            style={{
              top: '79%',
              left: '76%',
              transform: 'translate(-50%, -50%) rotate(-107deg)',
              filter: 'blur(50px)',
              opacity: 0.7
            }}
          ></div>
          <div 
            className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-[#05080f] rounded-full"
            style={{
              top: '80%',
              left: '40%',
              filter: 'blur(50px)',
              opacity: 1
            }}
          ></div>
          <div 
            className="absolute w-[100vw] md:w-[80vw] h-[80vw] bg-[#05080f] rounded-full"
            style={{
              top: '-40%',
              left: '-10%',
              filter: 'blur(60px)',
              opacity: 1
            }}
          ></div>
          <div 
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
          <h2 className="text-2xl md:text-4xl font-light text-white/80 max-w-4xl leading-tight">
            We support small businesses with fast, reliable IT help — so your team can focus on running the business, not fixing computers.
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col justify-between min-h-[300px]">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light max-w-2xl leading-tight">
              Every ticket handled quickly, by people who know what they're doing.
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/20">
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">{"< 15m"}</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Avg Response Time</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">99.9%</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Uptime</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">40%</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Remote Resolution</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">24/7</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Support</div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      
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
      <section className="relative py-24 md:py-32 bg-black text-white overflow-hidden border-t border-neutral-900">
        {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Main wave streak - dark charcoal */}
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#1a1d21] rounded-[100%]"
            style={{
              top: '65%',
              left: '60%',
              transform: 'translate(-50%, -50%) rotate(33deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          {/* Brighter core of the wave - deep slate black */}
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#2a2e35] rounded-[100%]"
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
            className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-black rounded-full"
            style={{
              top: '80%',
              left: '40%',
              filter: 'blur(50px)',
              opacity: 1
            }}
          ></div>
          {/* Top left dark area pushing down */}
          <div 
            className="absolute w-[100vw] md:w-[80vw] h-[80vw] bg-black rounded-full"
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

      {/* 5.5 New Section: How We Work Timeline */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className={`text-4xl md:text-6xl font-medium tracking-tight mb-6 ${"text-[#1e293b]"}`}>
              How <span className="italic font-light">we</span> work
            </h2>
            <p className={`text-xl md:text-2xl font-light ${"text-[#1e293b]"}`}>
              From first call to ongoing support, here's how we look after your IT.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-16 relative max-w-5xl mx-auto">
            
            {/* Left Graphics Area (Hidden on mobile) */}
            <div className={`hidden md:flex flex-col w-1/3 justify-around items-center ${"text-[#1e293b]"}`}>
               <div className="w-64 h-64 rounded-full bg-black/5 flex items-center justify-center relative overflow-hidden">
                 <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                   <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                   <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
                   <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                   <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.5" />
                   {Array.from({length: 36}).map((_, i) => (
                       <line key={i} x1="50" y1="50" x2="50" y2="15" transform={`rotate(${i*10} 50 50)`} stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
                   ))}
                 </svg>
               </div>
               <div className="w-64 h-64 rounded-full bg-black/5 flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                     {Array.from({length: 48}).map((_, i) => (
                       <line key={i} x1="50" y1="50" x2="50" y2="10" transform={`rotate(${i*7.5} 50 50)`} stroke="currentColor" strokeWidth="0.3" opacity={i%2===0? 1:0.3} />
                     ))}
                     <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.8" />
                  </svg>
               </div>
            </div>

            {/* Right Timeline Area */}
            <div className="w-full md:w-2/3 relative py-8">
               {/* Vertical Line */}
               <div className={`absolute left-[11px] top-10 bottom-10 w-[2px] ${"bg-[#1e293b]"} opacity-30`}></div>
               
               <div className="space-y-16">
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>IT Assessment</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We review your current setup, systems, and pain points to understand what support you actually need.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Support Plan</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We put together a support plan and pricing that fits your business, with no unnecessary extras.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Onboarding</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We set up remote access, helpdesk channels, and monitoring so support is ready to go from day one.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Ongoing Support</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     Your team gets access to helpdesk and remote support whenever needed, with regular check-ins to keep things running smoothly.
                   </p>
                 </div>
                 
               </div>
            </div>
            
          </div>
          
          <div className="mt-24 text-center">
            <Link to="/contact" className={`inline-flex items-center px-8 py-4 rounded-full ${"bg-[#1e293b]"} text-white font-medium hover:opacity-90 transition-opacity`}>
              Get a free consultation
              <div className="ml-4 bg-white text-black rounded-full p-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>
          </div>

        </div>
      </section>
      
      <div className="bg-white pb-16 pt-4">
        <section id="contact" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden rounded-[3rem] border border-gray-800 mx-4 sm:mx-6 lg:mx-8 shadow-2xl">
          {/* Background image */}
          <div
            className="absolute inset-0 z-0 opacity-70 mix-blend-screen"
            style={{
              backgroundImage: 'url("/marketingbanner.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 z-0 bg-black/50"></div>

          {/* Flare effect for the banner */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.3)_0%,transparent_70%)] blur-[80px]"></div>
            <div className="absolute top-[0%] right-[10%] w-[1px] h-[200%] bg-white/20 rotate-[45deg] blur-[2px]"></div>
            <div className="absolute top-[10%] right-[0%] w-[200%] h-[1px] bg-white/20 rotate-[45deg] blur-[2px]"></div>
            {/* Noise overlay */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full">
            <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-white tracking-tight leading-[1.05]">Tired of IT problems slowing you down?</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Get reliable support and put an end to downtime. Book a free consultation today.</p>
            <Link to="/contact" className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-md hover:shadow-lg hover:-translate-y-1 duration-300">
              Get a free consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
