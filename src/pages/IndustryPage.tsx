import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, Building2, CheckCircle2 } from 'lucide-react';
import { EarthHorizonBanner } from '../components/EarthHorizonBanner';

export function IndustryPage() {
  const { id } = useParams();
  
  // parse id to readable format
  const industryName = id?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Industry';

  return (
    <div className="w-full bg-white min-h-screen">
      <EarthHorizonBanner className="pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 border border-white/20 font-medium text-sm mb-6">
              <Building2 className="w-4 h-4" />
              <span>Industry Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-normal text-white mb-6 tracking-tight leading-tight">{industryName} Solutions</h1>
            <p className="text-lg md:text-xl text-white/80 font-light mb-10 leading-relaxed max-w-2xl">
              Tailored IT, web development, and automation solutions specifically designed for the unique challenges of the {industryName} industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-gray-200 transition-colors inline-flex items-center group shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Consult with an Expert
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </EarthHorizonBanner>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why specialized IT for {industryName}?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Generic technology solutions rarely address the specific regulatory, operational, and customer-facing needs of the {industryName} sector. Our dedicated approach ensures that your infrastructure is optimized for your daily workflows.
            </p>
            <ul className="space-y-4 mb-8">
              {['Compliance and Data Security', 'Workflow Automation', 'Scalable Cloud Infrastructure', '24/7 Monitored Support'].map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#2b3d5b] mr-3 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to upgrade your {industryName} business?</h3>
            <p className="text-gray-600 mb-8">
              Book a free discovery call to learn how our targeted solutions can streamline operations and increase revenue.
            </p>
            <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors text-center">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
