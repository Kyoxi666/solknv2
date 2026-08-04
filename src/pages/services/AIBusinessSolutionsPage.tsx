import { ArrowLeft, ArrowUpRight} from 'lucide-react';
import { Link } from 'react-router-dom';

export function AIBusinessSolutionsPage() {
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
              top: '48%',
              left: '44%',
              transform: 'translate(-50%, -50%) rotate(-20deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          {/* Brighter core of the wave */}
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#47638c] rounded-[100%]"
            style={{
              top: '53%',
              left: '39%',
              transform: 'translate(-50%, -50%) rotate(-25deg)',
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
              FROM QUERIES TO RESOLUTIONS 
            </div>
            <div className="max-w-md">
              <p className="text-white/80 leading-relaxed text-xs md:text-sm tracking-wide uppercase mb-8">
                Intelligent AI chatbots that answer customer questions instantly, automate WhatsApp and SMS marketing, and handle repetitive admin tasks — so your business runs smoother, day and night.
              </p>
              <Link to="/contact" className="inline-flex items-center text-white hover:text-sky-300 transition-colors text-xs md:text-sm tracking-widest uppercase font-medium">
                Get a Free Consultation <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-light leading-[0.9] tracking-tighter uppercase">
            Support <br/>
            That Never Sleeps! 
          </h1>
        </div>

        {/* Marquee */}
        <div className="relative z-10 mt-24 md:mt-32 whitespace-nowrap overflow-hidden flex">
          <div className="animate-marquee flex gap-8 items-center text-5xl md:text-9xl text-white/20 font-serif uppercase tracking-tighter">
            <span>AI BUSINESS SOLUTIONS • AUTOMATION • NLP  AI BUSINESS SOLUTIONS • AUTOMATION • NLP  AI BUSINESS SOLUTIONS • AUTOMATION • NLP </span>
            <span>AI BUSINESS SOLUTIONS • AUTOMATION • NLP  AI BUSINESS SOLUTIONS • AUTOMATION • NLP  AI BUSINESS SOLUTIONS • AUTOMATION • NLP </span>
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
                (01) AI Chatbots
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Answers your customers instantly.</h3>
                <p className="text-black/60 leading-relaxed text-sm mb-4">
                  AI-powered chatbots for your website that answer common questions — opening hours, availability, pricing — any time, day or night.
                </p>
                <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-4 inline-block">
                  <p className="text-sm text-slate-600 italic">"Ask our AI when we're open, what we offer, or if there's availability — it'll answer instantly, no waiting on hold."</p>
                </div>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70 mt-2">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Website Chatbot</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Instant Answers</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Booking & FAQ Handling</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Always-On Availability</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (02) WhatsApp & SMS Marketing
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Reach customers where they already are.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  Automated WhatsApp and SMS campaigns that send offers, reminders, and updates — without you lifting a finger.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> WhatsApp Automation</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> SMS Campaigns</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Appointment Reminders</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Customer Re-engagement</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (03) Workflow & Spreadsheet Automation
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Less admin, more time back.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  We automate repetitive tasks — spreadsheets, data entry, reporting — so your team spends less time on admin and more on customers.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Spreadsheet Automation</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Data Entry Reduction</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Automated Reporting</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Task Scheduling</li>
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
              top: '52%',
              left: '48%',
              transform: 'translate(-50%, -50%) rotate(-12deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#47638c] rounded-[100%]"
            style={{
              top: '57%',
              left: '43%',
              transform: 'translate(-50%, -50%) rotate(-41deg)',
              filter: 'blur(50px)',
              opacity: 0.7
            }}
          ></div>
          <div 
            className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-[#05080f] rounded-full"
            style={{
              top: '80%',
              left: 'Fewer',
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
            We build AI tools that answer customers, automate your marketing, and take repetitive tasks off your plate.
          </h2>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
           <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-widest uppercase bg-white/5 backdrop-blur-sm">
             AI for Small Business
           </span>
        </div>
      </section>

      {/* 4. New Section 2: White Feature Section */}
      <section className="py-24 md:py-32 bg-white text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-[#1e293b] leading-tight">
              AI that works <span className="italic font-light">while</span> <span className="italic font-light">you don't have to</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto">
              From answering customer questions to automating your marketing and admin, our AI tools save you time and never miss an enquiry.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {/* Top Row (3 items) */}
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F0F4F8] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                Answer customer questions instantly, any time of day
              </p>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F0F4F8] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                Cover evenings and weekends without hiring extra staff
              </p>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F0F4F8] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                Send WhatsApp and SMS updates that keep customers coming back
              </p>
            </div>
            

            {/* Bottom Row (2 items centered) */}
            <div className="w-full flex flex-col md:flex-row justify-center gap-6 mt-2">
              
              <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F0F4F8] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                  Turn website visitors into bookings and enquiries
                </p>
              </div>
              
              <div className="w-full md:w-[calc(33.333%-1rem)] bg-[#F0F4F8] rounded-3xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
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
                  Cut hours spent on spreadsheets and repetitive admin
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
              top: '72%',
              left: '78%',
              transform: 'translate(-50%, -50%) rotate(68deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#47638c] rounded-[100%]"
            style={{
              top: '77%',
              left: '73%',
              transform: 'translate(-50%, -50%) rotate(-101deg)',
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
            We help small businesses answer customers faster, market smarter, and cut down on repetitive admin — using simple, reliable AI tools.
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col justify-between min-h-[300px]">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light max-w-2xl leading-tight">
              Every message answered, every task automated, without the manual work.
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/20">
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">50+</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Businesses Served</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">40h</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Hours Saved per Month</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">24/7</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Chatbot Availability</div>
              </div>
              
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2">40%</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Missed Enquiries</div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      
      
      {/* Before / After Section */}
      <section className="py-24 md:py-32 bg-white text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#1e293b]">
              The <span className="italic font-light">difference</span> AI automation makes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="bg-[#fdf8f6] border border-red-900/10 rounded-[2rem] p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500/20"></div>
              <h3 className="text-2xl font-medium mb-8 text-red-950/80 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center text-sm font-bold text-red-900/60">✕</span>
                Before Automation
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="text-red-900/40 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e293b] mb-1">Missed Calls & Enquiries</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Losing potential customers because you can't answer the phone while working.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-red-900/40 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e293b] mb-1">Manual Replies</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Typing out the same answers to "What are your hours?" or "Do you have availability?"</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-red-900/40 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e293b] mb-1">Hours on Spreadsheets</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Spending evenings and weekends catching up on data entry, admin, and reporting.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* After */}
            <div className="bg-[#f6fbf9] border border-emerald-900/10 rounded-[2rem] p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/20"></div>
              <h3 className="text-2xl font-medium mb-8 text-emerald-950/80 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-900/10 flex items-center justify-center text-sm font-bold text-emerald-900/60">✓</span>
                After Automation
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="text-emerald-700/60 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e293b] mb-1">Instant Answers</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Customers get immediate responses, bookings, and info 24/7 without waiting.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-emerald-700/60 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e293b] mb-1">Automated Marketing</p>
                    <p className="text-sm text-slate-600 leading-relaxed">WhatsApp and SMS campaigns run themselves, driving repeat business on autopilot.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-emerald-700/60 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e293b] mb-1">Admin on Autopilot</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Data entry and reporting are automated, giving you your evenings and weekends back.</p>
                  </div>
                </li>
              </ul>
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
      </section>

      {/* 5.5 New Section: How We Work Timeline */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className={`text-4xl md:text-6xl font-medium tracking-tight mb-6 ${"text-[#1e293b]"}`}>
              How <span className="italic font-light">we</span> work
            </h2>
            <p className={`text-xl md:text-2xl font-light ${"text-[#1e293b]"}`}>
              From first chat to full automation, here's how we set your business up.
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
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Discovery Call</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We learn about your business, your customers' most common questions, and where you're losing time to admin.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Build & Customize</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We set up your chatbot, WhatsApp/SMS flows, and automations to match your brand and how your business runs.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Launch</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We connect everything to your website, WhatsApp, and existing tools — live and working within days.
                   </p>
                 </div>
                 
                 <div className="relative pl-12">
                   <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${"bg-[#1e293b]"} flex items-center justify-center border-4 border-[#FAF9F6] shadow-sm`}>
                   </div>
                   <h3 className={`${"text-[#1e293b]"} text-2xl font-medium mb-3`}>Support & Improve</h3>
                   <p className="text-[#1a1a1a]/70 text-base leading-relaxed max-w-md">
                     We keep an eye on performance and fine-tune responses and automations as your business grows.
                   </p>
                 </div>
                 
               </div>
            </div>
            
          </div>
          
          <div className="mt-24 text-center">
            <Link to="/contact" className={`inline-flex items-center px-8 py-4 rounded-full ${"bg-[#1e293b]"} text-white font-medium hover:opacity-90 transition-opacity`}>
              Book a free consultation
              <div className="ml-4 bg-white text-black rounded-full p-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>
          </div>

        </div>
      </section>
      
            <section id="contact" className="py-24 bg-white text-gray-900 relative overflow-hidden rounded-[3rem] border border-gray-100 mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">Ready to see what AI can do?</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">See what AI can take off your plate — book a free consultation today.</p>
          <Link to="/contact" className="bg-black text-white hover:bg-gray-800 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-md hover:shadow-lg hover:-translate-y-1 duration-300">
            Book your free consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
