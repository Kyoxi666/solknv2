import { Link } from 'react-router-dom';
import { Services } from '../components/Services';
import { ServiceAccordion } from '../components/ServiceAccordion';

export function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Full screen landing section */}
      <div className="relative min-h-screen w-full flex flex-col bg-[#F7F7F7] overflow-hidden">
        {/* Subtle background accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 70% 60%, rgba(232,119,34,0.06) 0%, transparent 60%)',
          }}
        />

        {/* Top Navigation Space */}
        <div className="h-24 w-full shrink-0"></div>

        {/* Bottom content */}
        <div className="pb-16 md:pb-24 px-8 md:px-16 lg:px-24 w-full relative z-10 flex flex-col flex-grow justify-end">
          <div className="max-w-2xl text-left relative z-20">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-normal text-[#000000] mb-6 leading-[1.05] tracking-tight">
              Empowering businesses<br />
              with transformative IT<br />
              solutions.
            </h1>
            <p className="text-sm md:text-sm text-[#6B6B6B] font-normal mb-8 leading-relaxed max-w-sm">
              We know that making IT decisions can be complicated. We're<br />
              here to help.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#E87722] text-white text-xs font-medium rounded-full hover:bg-[#C4621A] transition-colors pointer-events-auto w-fit"
            >
              Let's talk <span className="ml-2 text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>

      <Services />
      <ServiceAccordion />
    </div>
  );
}
