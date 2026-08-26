import { ArrowLeft, ArrowUpRight} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageSEO } from '../../components/PageSEO';
import { ServiceCapabilityRail } from '../../components/ServiceCapabilityRail';

export function NetworkInfrastructurePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-slate-600/30">
      <PageSEO
        title="Network Infrastructure Installation & Wi-Fi Cabling | SOLKN"
        description="Enterprise Wi-Fi systems, structured Cat6 cabling, switches, firewalls, and multi-site network installation for UK businesses."
        canonicalUrl="https://solkn.com/services/network-infrastructure"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Network Infrastructure',
          provider: {
            '@type': 'Organization',
            name: 'SOLKN',
            url: 'https://solkn.com',
          },
          areaServed: 'United Kingdom',
          description: 'Professional installation and management of business Wi-Fi, switches, firewalls, and cabling.',
        }}
      />
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
              top: '45%',
              left: '40%',
              transform: 'translate(-50%, -50%) rotate(-25deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          {/* Brighter core of the wave - deep slate black */}
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#2a2e35] rounded-[100%]"
            style={{
              top: '50%',
              left: '35%',
              transform: 'translate(-50%, -50%) rotate(-20deg)',
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
              FROM DESIGN TO DEPLOYMENT 
            </div>
            <div className="max-w-md">
              <p className="text-white/80 leading-relaxed text-xs md:text-sm tracking-wide uppercase mb-8">
                Reliable networks for restaurants, shops, and small offices — Wi-Fi, routers, firewalls, and cabling installed and set up properly, the first time.
              </p>
              <Link to="/contact" className="inline-flex items-center text-white hover:text-sky-300 transition-colors text-xs md:text-sm tracking-widest uppercase font-medium">
                Get a Free Consultation <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-light leading-[0.9] tracking-tighter uppercase">
            Infrastructure <br/>\n            Built to Scale 
          </h1>
        </div>

        {/* Marquee */}
        <div className="relative z-10 mt-24 md:mt-32 whitespace-nowrap overflow-hidden flex">
          <div className="animate-marquee flex gap-8 items-center text-5xl md:text-9xl text-white/20 font-serif uppercase tracking-tighter">
            <span>NETWORK INFRASTRUCTURE • ARCHITECTURE • DEPLOYMENT  NETWORK INFRASTRUCTURE • ARCHITECTURE • DEPLOYMENT  NETWORK INFRASTRUCTURE • ARCHITECTURE • DEPLOYMENT </span>
            <span>NETWORK INFRASTRUCTURE • ARCHITECTURE • DEPLOYMENT  NETWORK INFRASTRUCTURE • ARCHITECTURE • DEPLOYMENT  NETWORK INFRASTRUCTURE • ARCHITECTURE • DEPLOYMENT </span>
          </div>
        </div>
      </section>

      <ServiceCapabilityRail
        headline="A business network designed to work everywhere it needs to."
        items={[
          {
            icon: 'wifi',
            title: 'Business Wi-Fi',
            description: 'Design reliable staff and guest coverage around the shape and use of your premises.',
          },
          {
            icon: 'router',
            title: 'Routers & firewalls',
            description: 'Install correctly sized hardware with secure configuration from the start.',
          },
          {
            icon: 'infrastructure',
            title: 'Switching & segmentation',
            description: 'Connect teams, systems, and devices without putting everything on one flat network.',
          },
          {
            icon: 'cabling',
            title: 'Structured cabling',
            description: 'Build clean, dependable data cabling, cabinets, and patching for daily operations.',
          },
          {
            icon: 'security',
            title: 'Ongoing network support',
            description: 'Maintain, document, and improve the network as your sites and requirements change.',
          },
        ]}
      />
      
<section className="py-24 md:py-32 bg-black text-white relative overflow-hidden rounded-t-[3rem] md:rounded-[3rem] md:mx-6">
        {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#1a1d21] rounded-[100%]"
            style={{
              top: '50%',
              left: '45%',
              transform: 'translate(-50%, -50%) rotate(-20deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#2a2e35] rounded-[100%]"
            style={{
              top: '55%',
              left: '40%',
              transform: 'translate(-50%, -50%) rotate(-35deg)',
              filter: 'blur(50px)',
              opacity: 0.7
            }}
          ></div>
          <div 
            className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-black rounded-full"
            style={{
              top: 'Free',
              left: '40%',
              filter: 'blur(50px)',
              opacity: 1
            }}
          ></div>
          <div 
            className="absolute w-[100vw] md:w-[80vw] h-[80vw] bg-black rounded-full"
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
            We design and install networks small businesses can rely on — without the enterprise price tag or complexity.
          </h2>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
           <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-widest uppercase bg-white/5 backdrop-blur-sm">
             Built for Small Business
           </span>
        </div>
      </section>

      {/* 4. New Section 2: White Feature Section */}
      <section className="py-24 md:py-32 bg-white text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-[#1e293b] leading-tight">
              Build <span className="italic font-light">your</span> <span className="italic font-light">network</span> robustly
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto">
              Deploy scalable network infrastructure that grows with your business, ensuring uptime and eliminating bottlenecks before they form.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {/* Top Row (3 items) */}
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#FFFBEB] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                Keep your Wi-Fi and card payments online during business hours
              </p>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#FFFBEB] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                Fast, reliable Wi-Fi even when it's busy
              </p>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#FFFBEB] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                Protect customer and business data with a properly configured firewall
              </p>
            </div>
            

            {/* Bottom Row (2 items centered) */}
            <div className="w-full flex flex-col md:flex-row justify-center gap-6 mt-2">
              
              <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#FFFBEB] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                  Add new devices, staff, or a second location without starting over
                </p>
              </div>
              
              <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#FFFBEB] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                  No unnecessary hardware — just what your business actually needs
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. New Section 3: Text & Stats on Colored Full-Width */}
      <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden rounded-t-[3rem] md:rounded-[3rem] md:mx-6">
        {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#1a1d21] rounded-[100%]"
            style={{
              top: '70%',
              left: '75%',
              transform: 'translate(-50%, -50%) rotate(60deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#2a2e35] rounded-[100%]"
            style={{
              top: '75%',
              left: '70%',
              transform: 'translate(-50%, -50%) rotate(-95deg)',
              filter: 'blur(50px)',
              opacity: 0.7
            }}
          ></div>
          <div 
            className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-black rounded-full"
            style={{
              top: '100x',
              left: '40%',
              filter: 'blur(50px)',
              opacity: 1
            }}
          ></div>
          <div 
            className="absolute w-[100vw] md:w-[80vw] h-[80vw] bg-black rounded-full"
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
            We deploy industry-leading hardware and software-defined networking solutions to create resilient architectures that serve as the foundation of your digital transformation.
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col justify-between min-h-[300px]">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light max-w-2xl leading-tight">
              Simple, reliable networks — installed once, working every day.
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/20">
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">0</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Install Turnaround</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">100x</div>
                <div className="text-xs uppercase tracking-widest text-white/60">On-Site Quote</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">Local</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Engineers</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">&lt;1ms</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Businesses Installed</div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      
      {/* Technology We Install Section */}
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

      {/* 5.5 New Section: How We Work Timeline */}{/* 5.5 New Section: How We Work Timeline */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className={`text-4xl md:text-6xl font-medium tracking-tight mb-6 ${"text-[#1e293b]"}`}>
              How <span className="italic font-light">we</span> work
            </h2>
            <p className={`text-xl md:text-2xl font-light ${"text-[#1e293b]"}`}>
              From first call to finished install, here's how we get your business connected.
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
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Site Visit</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We visit your business to see the space, check existing setup, and understand what you need.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Design & Quote</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We put together a clear plan and a straightforward quote — no jargon, no surprises.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Installation</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We install and configure everything — routers, switches, Wi-Fi, and cabling — with minimal disruption to your business.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Support & Aftercare</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We're on hand after the install for support, updates, or any changes as your business grows.
                   </p>
                 </div>
                 
               </div>
            </div>
            
          </div>
          
          <div className="mt-24 text-center">
            <Link to="/contact" className={`inline-flex items-center px-8 py-4 rounded-full ${"bg-[#1e293b]"} text-white font-medium hover:opacity-90 transition-opacity`}>
              Get a free quote
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
            <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-white tracking-tight leading-[1.05]">Ready to upgrade your network?</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Get a free on-site quote — no obligation. We install packages to suit any budget.</p>
            <Link to="/contact" className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-md hover:shadow-lg hover:-translate-y-1 duration-300">
              Book your free quote
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
