import { ArrowLeft, ArrowUpRight, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ManagedITPage() {
  const [expandedId, setExpandedId] = useState<string | null>('infrastructure');

  const capabilities = [
    {
      id: 'infrastructure',
      title: 'Infrastructure Management & Optimization',
      description: 'We build, manage, and proactively optimize your IT foundation (servers, networking, backups, and cloud resources), so your business stays uninterrupted, secure, and ready for what\'s next.\nOur Infrastructure Services provide more than just day-to-day management—we help you control costs through strategic lifecycle planning, mitigate risks before they impact operations, and implement changes seamlessly.',
      tags: ['Technical Alignment Engineer/Analyst', '24/7 incident management', 'Monitoring and alerting', 'Patch management', 'Server backup', 'Firewall management']
    },
    {
      id: 'service-desk',
      title: 'Service Desk',
      description: 'Fast, reliable helpdesk and remote IT support. We connect directly to your devices to troubleshoot and resolve issues quickly, minimizing disruption to your team.',
      tags: ['24/7 Availability', 'Remote Troubleshooting', 'Device Setup & Support', 'Fast Response Times']
    },
    {
      id: 'workplace-services',
      title: 'Workplace Services',
      description: 'We manage the tools your business uses every day, ensuring your team has secure and seamless access to their workstations, software, and communication platforms.',
      tags: ['Microsoft 365', 'Google Workspace', 'Endpoint security', 'Software deployment', 'Mobile device management']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Implementing robust security measures to protect sensitive data from emerging threats. We monitor your network continuously to detect, isolate, and respond to threats before they escalate.',
      tags: ['Threat Detection', 'Vulnerability assessments', 'Security Audits', 'Zero-Trust Architecture', 'Employee Training']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans selection:bg-slate-600/30">
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
      <section className="relative bg-[#090e17] text-white pt-32 pb-20 overflow-hidden">
                {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#090e17]">
          {/* Main wave streak - slate blue */}
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#2b3d5b] rounded-[100%]"
            style={{
              top: '54%',
              left: '52%',
              transform: 'translate(-50%, -50%) rotate(-10deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          {/* Brighter core of the wave */}
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#47638c] rounded-[100%]"
            style={{
              top: '59%',
              left: '47%',
              transform: 'translate(-50%, -50%) rotate(-35deg)',
              filter: 'blur(50px)',
              opacity: 0.7
            }}
          ></div>
          {/* Bottom right dark curve encroaching */}
          <div 
            className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-[#05080f] rounded-full"
            style={{
              top: '70%',
              left: '30%',
              filter: 'blur(50px)',
              opacity: 1
            }}
          ></div>
          
          {/* Top left dark area pushing down */}
          <div 
            className="absolute w-[100vw] md:w-[80vw] h-[80vw] bg-[#05080f] rounded-full"
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
              FROM INFRASTRUCTURE TO SCALE 
            </div>
            <div className="max-w-md">
              <p className="text-white/80 leading-relaxed text-xs md:text-sm tracking-wide uppercase mb-8">
                24/7 monitoring, cybersecurity, and cloud management for small businesses — we keep your systems running so you don't have to worry about them.
              </p>
              <Link to="/contact" className="inline-flex items-center text-white hover:text-sky-300 transition-colors text-xs md:text-sm tracking-widest uppercase font-medium">
                Get a Free Consultation <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-light leading-[0.9] tracking-tighter uppercase">
            IT That <br/>
            Runs Itself 
          </h1>
        </div>

        {/* Marquee */}
        <div className="relative z-10 mt-24 md:mt-32 whitespace-nowrap overflow-hidden flex">
          <div className="animate-marquee flex gap-8 items-center text-5xl md:text-9xl text-white/20 font-serif uppercase tracking-tighter">
            <span>MANAGED IT • SUPPORT • INFRASTRUCTURE  MANAGED IT • SUPPORT • INFRASTRUCTURE  MANAGED IT • SUPPORT • INFRASTRUCTURE </span>
            <span>MANAGED IT • SUPPORT • INFRASTRUCTURE  MANAGED IT • SUPPORT • INFRASTRUCTURE  MANAGED IT • SUPPORT • INFRASTRUCTURE </span>
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
                (01) 24/7 Monitoring
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Prevent downtime before it happens.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  We watch your systems around the clock and fix issues before they cause downtime.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> System Health Tracking</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Proactive Alert Management</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Performance Optimization</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Hardware Lifecycle Management</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (02) Cybersecurity
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Protect your most valuable assets.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  Implementing robust security measures to protect sensitive data from emerging threats.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Threat Detection</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Firewall Management</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Data Encryption</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Security Audits</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (03) Cloud Solutions
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Seamless transition to the cloud.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  Seamless transition and management of cloud-based resources for ultimate scalability and flexibility.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Cloud Migration</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Microsoft 365 & Google Workspace</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Scalability Planning</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Cloud Cost Optimization</li>
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
              top: '56%',
              left: '54%',
              transform: 'translate(-50%, -50%) rotate(4deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#47638c] rounded-[100%]"
            style={{
              top: '61%',
              left: '49%',
              transform: 'translate(-50%, -50%) rotate(-53deg)',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-end justify-between">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] max-w-3xl">
            We keep your systems monitored, secure, and running — so downtime doesn't cost you customers or time.
          </h2>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
           <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-widest uppercase bg-white/5 backdrop-blur-sm">
             Resilient Systems
           </span>
        </div>
      </section>

      {/* 4. New Section 2: White Feature Section */}
      <section className="py-24 md:py-32 bg-white text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-[#1e293b] leading-tight">
              Secure <span className="italic font-light">your</span> <span className="italic font-light">infrastructure</span> comprehensively
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto">
              From daily monitoring to cybersecurity and cloud management, we keep your business running without interruption.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {/* Top Row (3 items) */}
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F5F8FF] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                Reduce downtime across servers, networks, and endpoints
              </p>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F5F8FF] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                Keep customer and business data protected with proper security, not quick fixes
              </p>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F5F8FF] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                Peace of mind knowing your systems are being watched
              </p>
            </div>
            

            {/* Bottom Row (2 items centered) */}
            <div className="w-full flex flex-col md:flex-row justify-center gap-6 mt-2">
              
              <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F5F8FF] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                  Less time firefighting IT issues, more time running your business
                </p>
              </div>
              
              <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F5F8FF] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                  One team looking after your systems, month after month
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
              top: '76%',
              left: '84%',
              transform: 'translate(-50%, -50%) rotate(84deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#47638c] rounded-[100%]"
            style={{
              top: '81%',
              left: '79%',
              transform: 'translate(-50%, -50%) rotate(-113deg)',
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
            We work alongside small businesses to proactively manage their IT. Through consistent monitoring and security, we craft infrastructure that protects your data and keeps you online.
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col justify-between min-h-[300px]">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light max-w-2xl leading-tight">
              Every deployment is a fusion of security, scalability and performance.
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/20">
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">99.9%</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Uptime</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">24/7</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Monitoring</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">Proactive</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Threat Detection</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">5x</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Faster Recovery</div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      
      {/* What's Included */}
      <section className="py-24 bg-white text-[#1a1a1a] border-t border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-[#1e293b] text-slate-500">Managed IT Capabilities</h2>
          </div>
          
          <div className="space-y-4">
            {capabilities.map((item) => (
              <div 
                key={item.id} 
                className={`bg-[#f8f9fa] rounded-2xl overflow-hidden transition-all duration-300 ${expandedId === item.id ? 'shadow-sm' : ''}`}
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <h3 className="text-2xl font-light text-[#4a4a4a]">{item.title}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${expandedId === item.id ? 'bg-[#2b3d5b] text-white' : 'bg-[#e5e7eb] text-[#6b7280]'}`}>
                    {expandedId === item.id ? <X size={16} /> : <Plus size={16} strokeWidth={2} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === item.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-8 pb-8 pt-2">
                    <div className="text-sm text-[#4a4a4a] leading-relaxed mb-8 whitespace-pre-line max-w-3xl">
                      {item.description}
                    </div>
                    
                    <h4 className="text-xs text-slate-400 mb-4 tracking-wider">What's included</h4>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="bg-white border text-slate-600 text-xs px-4 py-2 rounded-full shadow-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-[#f0f4f8] rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-medium text-[#1e293b] mb-3">Looking for day-to-day helpdesk support?</h3>
            <p className="text-slate-600 mb-6">If you need immediate technical help for your team alongside proactive monitoring, we offer that too.</p>
            <Link to="/services/it-outsourcing" className="inline-flex items-center font-medium text-[#2b3d5b] hover:text-[#47638c] transition-colors">
              Explore our IT Support services <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
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
              From first assessment to full-scale stability, here's how we secure your operations.
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
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Audit & Strategy Call</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We start with a deep dive into your current IT infrastructure and security posture to identify immediate risks and long-term opportunities.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Custom Roadmap</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     Based on your operational needs, we craft a tailored IT management and security plan to drive measurable stability.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Implementation</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We set up monitoring, backups, and security tools in the background, with minimal disruption to your day-to-day.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Scale & Optimize</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We continuously analyze network performance and security events to maximize uptime and support your growth.
                   </p>
                 </div>
                 
               </div>
            </div>
            
          </div>
          
          <div className="mt-24 text-center">
            <Link to="/contact" className={`inline-flex items-center px-8 py-4 rounded-full ${"bg-[#1e293b]"} text-white font-medium hover:opacity-90 transition-opacity`}>
              Book a free audit
              <div className="ml-4 bg-white text-black rounded-full p-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>
          </div>

        </div>
      </section>
      
            <section id="contact" className="py-24 bg-white text-gray-900 relative overflow-hidden rounded-[3rem] border border-gray-100 mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">Want IT that just works?</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Let us handle the monitoring and security so you can focus on your business.</p>
          <Link to="/contact" className="bg-black text-white hover:bg-gray-800 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-md hover:shadow-lg hover:-translate-y-1 duration-300">
            Get a free consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
