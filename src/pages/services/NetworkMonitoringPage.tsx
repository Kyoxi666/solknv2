import { ArrowLeft, ArrowUpRight} from 'lucide-react';
import { Link } from 'react-router-dom';

export function NetworkMonitoringPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#E87722]/20">
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
      <section className="relative bg-[#F7F7F7] text-[#000000] pt-32 pb-20 overflow-hidden">
                {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#F7F7F7]">
          {/* Main wave streak - slate blue */}
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#E87722] rounded-[100%]"
            style={{
              top: '57%',
              left: '56%',
              transform: 'translate(-50%, -50%) rotate(-5deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          {/* Brighter core of the wave */}
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#D4A574] rounded-[100%]"
            style={{
              top: '62%',
              left: '51%',
              transform: 'translate(-50%, -50%) rotate(-40deg)',
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
          <Link to="/" className="inline-flex items-center text-[#6B6B6B] hover:text-white font-medium mb-16 transition-colors text-sm tracking-widest uppercase">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
            <div className="text-xs md:text-sm tracking-widest uppercase text-[#6B6B6B]">
              FROM BLINDSPOTS TO VISIBILITY 
            </div>
            <div className="max-w-md">
              <p className="text-[#6B6B6B] leading-relaxed text-xs md:text-sm tracking-wide uppercase mb-8">
                Real-time visibility into your network infrastructure to preemptively identify and resolve issues before they impact operations. Complete peace of mind.
              </p>
              <Link to="/contact" className="inline-flex items-center text-[#000000] hover:text-sky-300 transition-colors text-xs md:text-sm tracking-widest uppercase font-medium">
                Get a Free Consultation <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-light leading-[0.9] tracking-tighter uppercase">
            Visibility <br/>
            Into Every Packet 
          </h1>
        </div>

        {/* Marquee */}
        <div className="relative z-10 mt-24 md:mt-32 whitespace-nowrap overflow-hidden flex">
          <div className="animate-marquee flex gap-8 items-center text-5xl md:text-9xl text-white/20 font-serif uppercase tracking-tighter">
            <span>NETWORK MONITORING • SECURITY • ANALYTICS  NETWORK MONITORING • SECURITY • ANALYTICS  NETWORK MONITORING • SECURITY • ANALYTICS </span>
            <span>NETWORK MONITORING • SECURITY • ANALYTICS  NETWORK MONITORING • SECURITY • ANALYTICS  NETWORK MONITORING • SECURITY • ANALYTICS </span>
          </div>
        </div>
      </section>

      {/* 2. Solutions Section (White) */}
      <section className="py-24 md:py-32 bg-white text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter uppercase mb-16 md:mb-24">
            Our <br/>
             Solutions
          </h2>

          <div className="space-y-0">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (01) Issue Detection
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Identify bottlenecks early.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  Identifying bottlenecks, latency issues, and hardware failures proactively across Cisco firewalls, Arista switches, and load balancers before they cause costly operational downtime.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-1.5"></div> Proactive Monitoring</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-1.5"></div> Latency Tracking</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-1.5"></div> Hardware Health</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-1.5"></div> Uptime Verification</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (02) Traffic Analysis
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Deep packet inspection.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  Comprehensive analysis using SNMP and NetFlow to understand bandwidth utilization, identify anomalies, and optimize your network flow.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-1.5"></div> Bandwidth Utilization</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-1.5"></div> Anomaly Detection</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-1.5"></div> Protocol Analysis</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-1.5"></div> Performance Mapping</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (03) Automated Alerts
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Instant critical notifications.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  Intelligent alerting systems powered by tools like LogicMonitor and SolarWinds that instantly notify the right technical teams when critical thresholds are breached.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-1.5"></div> Threshold Alerts</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-1.5"></div> Escalation Paths</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-1.5"></div> Incident Logging</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-1.5"></div> False-Positive Reduction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. New Section 1: Colored Mission Statement */}
      <section className="py-24 md:py-32 bg-[#F7F7F7] text-[#000000] relative overflow-hidden rounded-t-[3rem] md:rounded-[3rem] md:mx-6">
        {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#E87722] rounded-[100%]"
            style={{
              top: '58%',
              left: '57%',
              transform: 'translate(-50%, -50%) rotate(12deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#D4A574] rounded-[100%]"
            style={{
              top: '63%',
              left: '52%',
              transform: 'translate(-50%, -50%) rotate(-59deg)',
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
            We build observability that ignites confidence by reimagining network health.
          </h2>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
           <span className="inline-block px-4 py-1.5 rounded-full border border-[#E0E0E0] text-xs font-medium tracking-widest uppercase bg-[#EFEFEF] backdrop-blur-sm">
             Total Visibility
           </span>
        </div>
      </section>

      {/* 4. New Section 2: White Feature Section */}
      <section className="py-24 md:py-32 bg-white text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-[#000000] leading-tight">
              Complete <span className="italic font-light">network</span> <span className="italic font-light">clarity</span>
            </h2>
            <p className="text-lg md:text-xl text-[#6B6B6B] font-light max-w-2xl mx-auto">
              Move beyond basic ping tests. We deploy enterprise-grade monitoring strategies that provide deep, actionable insights into your infrastructure's performance.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {/* Top Row (3 items) */}
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F0F4F8] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="text-[#E87722]">
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
              <p className="text-base font-medium text-[#000000]">
                Pinpoint performance bottlenecks before they impact end-users
              </p>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F0F4F8] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="text-[#E87722]">
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
              <p className="text-base font-medium text-[#000000]">
                Consolidate your monitoring tools to eliminate alert fatigue
              </p>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F0F4F8] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="text-[#E87722]">
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
              <p className="text-base font-medium text-[#000000]">
                Ensure maximum uptime for mission-critical applications
              </p>
            </div>
            

            {/* Bottom Row (2 items centered) */}
            <div className="w-full flex flex-col md:flex-row justify-center gap-6 mt-2">
              
              <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F0F4F8] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
                <div className="text-[#E87722]">
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
                <p className="text-base font-medium text-[#000000]">
                  Automate compliance reporting and network health audits
                </p>
              </div>
              
              <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F0F4F8] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
                <div className="text-[#E87722]">
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
                <p className="text-base font-medium text-[#000000]">
                  Transition from reactive firefighting to proactive capacity planning
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. New Section 3: Text & Stats on Colored Full-Width */}
      <section className="py-24 md:py-32 bg-[#F7F7F7] text-[#000000] relative overflow-hidden rounded-t-[3rem] md:rounded-[3rem] md:mx-6">
        {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#E87722] rounded-[100%]"
            style={{
              top: '78%',
              left: '87%',
              transform: 'translate(-50%, -50%) rotate(92deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#D4A574] rounded-[100%]"
            style={{
              top: '83%',
              left: '82%',
              transform: 'translate(-50%, -50%) rotate(-119deg)',
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
          <h2 className="text-2xl md:text-4xl font-light text-[#6B6B6B] max-w-4xl leading-tight">
            For over a decade, we've worked alongside enterprises to rediscover their network essence. Through deep packet inspection and analytics, we craft observability that connects, protects, and drives real peace of mind.
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col justify-between min-h-[300px]">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light max-w-2xl leading-tight">
              Every alert is a fusion of precision, speed and context.
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-[#E0E0E0]">
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">100%</div>
                <div className="text-xs uppercase tracking-widest text-[#6B6B6B]">Visibility</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">&lt;50ms</div>
                <div className="text-xs uppercase tracking-widest text-[#6B6B6B]">Alert Latency</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">24/7</div>
                <div className="text-xs uppercase tracking-widest text-[#6B6B6B]">Uptime Tracking</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">99%</div>
                <div className="text-xs uppercase tracking-widest text-[#6B6B6B]">Threat Detection</div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 New Section: How We Work Timeline */}
      <section className="py-24 md:py-32 bg-white text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-[#000000]">
              How <span className="italic font-light">we</span> work
            </h2>
            <p className="text-xl md:text-2xl font-light text-[#6B6B6B]">
              From initial baseline to full-scale visibility, here's how we secure your packets.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-16 relative max-w-5xl mx-auto">
            
            {/* Left Graphics Area (Hidden on mobile) */}
            <div className="hidden md:flex flex-col w-1/3 justify-around items-center text-[#E87722]">
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
               <div className="absolute left-[11px] top-10 bottom-10 w-[2px] bg-[#E87722] opacity-30"></div>
               
               <div className="space-y-16">
                 
                 <div className="relative pl-12">
                   <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#E87722] flex items-center justify-center border-4 border-[#F7F7F7] shadow-sm">
                   </div>
                   <h3 className="text-[#000000] text-2xl font-medium mb-3">Network Strategy Call</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We start with a deep dive into your current topology and latency bottlenecks to identify immediate monitoring needs.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#E87722] flex items-center justify-center border-4 border-[#F7F7F7] shadow-sm">
                   </div>
                   <h3 className="text-[#000000] text-2xl font-medium mb-3">Custom Architecture</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     Based on your infrastructure, we craft a tailored observability and alert plan to drive measurable reliability.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#E87722] flex items-center justify-center border-4 border-[#F7F7F7] shadow-sm">
                   </div>
                   <h3 className="text-[#000000] text-2xl font-medium mb-3">Implementation</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     Our team sets everything up — from deep packet inspection agents to dashboards — for a seamless rollout.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#E87722] flex items-center justify-center border-4 border-[#F7F7F7] shadow-sm">
                   </div>
                   <h3 className="text-[#000000] text-2xl font-medium mb-3">Monitor & Optimize</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We continuously analyze traffic patterns and alert logs to maximize network uptime and scale efficiency.
                   </p>
                 </div>
                 
               </div>
            </div>
            
          </div>
          
          <div className="mt-24 text-center">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-[#E87722] text-[#000000] font-medium hover:bg-[#E87722] transition-colors">
              Book a free audit
              <div className="ml-4 bg-white text-black rounded-full p-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>
          </div>

        </div>
      </section>
      
      {/* 6. FAQ Section */}
      <section className="relative py-24 md:py-32 bg-[#F7F7F7] text-[#000000] overflow-hidden">
        {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Main wave streak - slate blue */}
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#E87722] rounded-[100%]"
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
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#D4A574] rounded-[100%]"
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
             <div className="border-b border-[#E0E0E0] pb-8">
               <h3 className="text-xl font-medium mb-3 text-white/90">How long does deployment take?</h3>
               <p className="text-[#6B6B6B] font-light leading-relaxed">Most monitoring environments can be provisioned and baseline-configured within 2 to 4 weeks, depending on the complexity and scale of your existing infrastructure.</p>
             </div>
             <div className="border-b border-[#E0E0E0] pb-8">
               <h3 className="text-xl font-medium mb-3 text-white/90">How do you handle data privacy?</h3>
               <p className="text-[#6B6B6B] font-light leading-relaxed">We strictly analyze metadata, headers, and traffic patterns (like NetFlow and SNMP) without inspecting sensitive payload data, ensuring full compliance with privacy standards.</p>
             </div>
             <div className="pb-8">
               <h3 className="text-xl font-medium mb-3 text-white/90">What is your pricing model?</h3>
               <p className="text-[#6B6B6B] font-light leading-relaxed">Our pricing is typically tiered based on the number of monitored endpoints and network devices, offered as a predictable monthly managed service fee.</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
