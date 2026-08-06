import { ToolsBanner } from '../components/ToolsBanner';
import { ArrowRight, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ToolsPage() {
  const tools = [
    {
      title: "IT Support Cost Calculator",
      category: "Pricing Tools",
      date: "Aug 01, 2026",
      description: "Quickly estimate your monthly managed IT support costs based on your infrastructure and device count.",
      link: "/tools/it-support-calculator",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="bg-[#f0f3f5] min-h-screen">
      <ToolsBanner />
      
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-900 mb-12">Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <Link key={idx} to={tool.link} className="group block w-full outline-none">
              <div className="flex flex-col gap-3 h-full">
                <div className="relative w-full aspect-[16/10] bg-white rounded-[24px] overflow-hidden">
                  <img 
                    src={tool.image} 
                    alt={tool.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#0b0e0f]/75 backdrop-blur-sm rounded-xl px-4 py-1.5">
                    <span className="text-[#f6f8f9] text-sm font-medium">{tool.category}</span>
                  </div>
                </div>
                
                <div className="bg-[#e8ecef] rounded-[24px] p-6 sm:p-8 flex flex-col h-full transition-colors duration-300 group-hover:bg-[#d8dfe4]">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-[#425357] text-sm leading-relaxed mb-8 flex-grow">
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between text-[#425357] text-sm font-medium tracking-wide uppercase">
                    <div className="flex items-center">
                      Use tool <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </div>
                    <span className="text-xs text-gray-400 font-light normal-case">{tool.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="pb-16 pt-4">
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
            <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-white tracking-tight leading-[1.05]">Need a custom tool or calculator for your business?</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">We develop bespoke web apps, ROI calculators, and internal automation tools.</p>
            <Link to="/contact" className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-md hover:shadow-lg hover:-translate-y-1 duration-300">
              Talk to an expert
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
