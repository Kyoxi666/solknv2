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
            <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-white tracking-tight leading-[1.05]">Ready to transform your business IT?</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Discover how our managed IT, network security, and custom AI solutions drive growth.</p>
            <Link to="/contact" className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-md hover:shadow-lg hover:-translate-y-1 duration-300">
              Get a free consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
