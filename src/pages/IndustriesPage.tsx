import { Link } from 'react-router-dom';
import { ArrowUpRight, Building2 } from 'lucide-react';

export function IndustriesPage() {
  const industries = [
    { name: 'Healthcare', path: '/industries/healthcare', desc: 'Secure, HIPAA-compliant IT and automation for medical practices.' },
    { name: 'Real Estate', path: '/industries/real-estate', desc: 'Property management solutions, CRM integrations, and scheduling.' },
    { name: 'Restaurants', path: '/industries/restaurants', desc: 'Online ordering, POS integrations, and automated reservations.' },
    { name: 'Education', path: '/industries/education', desc: 'E-learning platforms, campus IT support, and student portals.' },
    { name: 'Financial Services', path: '/industries/financial-services', desc: 'Highly secure networks and data management for finance firms.' },
    { name: 'Retail & E-commerce', path: '/industries/retail', desc: 'Omnichannel retail solutions and fast e-commerce platforms.' },
    { name: 'Manufacturing', path: '/industries/manufacturing', desc: 'Supply chain automation and industrial IT infrastructure.' },
    { name: 'Legal', path: '/industries/legal', desc: 'Confidential document management and practice management software.' },
    { name: 'Construction', path: '/industries/construction', desc: 'Project management tools and mobile-first field solutions.' },
    { name: 'Logistics', path: '/industries/logistics', desc: 'Fleet tracking integrations and warehouse automation.' }
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Industries We Serve</h1>
        <p className="text-xl text-gray-600 font-light">
          We provide specialized IT support, web development, and AI automation tailored to the unique challenges of your sector.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, idx) => (
          <Link key={idx} to={industry.path} className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-[#F0F4F8] rounded-2xl flex items-center justify-center mb-6 text-[#2b3d5b] group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">{industry.name}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              {industry.desc}
            </p>
            <div className="flex items-center text-[#2b3d5b] font-medium text-sm group-hover:text-[#1e293b]">
              Explore solutions <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
