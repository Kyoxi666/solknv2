import { Link } from 'react-router-dom';
import { Services } from '../components/Services';
import { ServiceAccordion } from '../components/ServiceAccordion';
import { ServiceBanner } from '../components/ServiceBanner';

export function ServicesPage() {
  return (
    <div className="bg-transparent min-h-screen">
      {/* Full screen landing section */}
      <div className="relative min-h-screen w-full flex flex-col bg-[#050510] overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[200%] h-[100%] bg-[radial-gradient(ellipse_at_bottom,white_0%,#2a52be_40%,transparent_70%)] opacity-80 blur-[80px] rounded-[100%] pointer-events-none"></div>
        
        {/* Concentric Circles matching the image */}
        <div className="absolute bottom-0 right-0 translate-x-[15%] translate-y-[35%] w-[800px] md:w-[1400px] aspect-square pointer-events-none opacity-40">
          <div className="absolute inset-0 rounded-full border-[1.5px] border-white/20 scale-[1]"></div>
          <div className="absolute inset-0 rounded-full border-[1.5px] border-white/20 scale-[0.75]"></div>
          <div className="absolute inset-0 rounded-full border-[1.5px] border-white/20 scale-[0.5]"></div>
          <div className="absolute inset-0 rounded-full border-[1.5px] border-white/20 scale-[0.25]"></div>
        </div>

        {/* Top Navigation Space */}
        <div className="h-24 w-full shrink-0"></div>

        {/* Bottom content */}
        <div className="pb-16 md:pb-24 px-8 md:px-16 lg:px-24 w-full relative z-10 flex flex-col flex-grow justify-end">
          <div className="max-w-2xl text-left relative z-20">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-normal text-white mb-6 leading-[1.05] tracking-tight">
              Empowering businesses<br />
              with transformative IT<br />
              solutions.
            </h1>
            <p className="text-sm md:text-sm text-white/80 font-light mb-8 leading-relaxed max-w-sm">
              We know that making IT decisions can be complicated. We're<br />
              here to help.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#1a1a1a] text-white text-xs font-medium rounded-full hover:bg-white/10 transition-colors pointer-events-auto border border-white/10 w-fit shadow-lg"
            >
              Let's talk <span className="ml-2 text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>

      <Services />
      <ServiceBanner />
      <ServiceAccordion />
    </div>
  );
}
