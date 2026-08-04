import { ArrowRight, Utensils, Store, Building2, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TargetAudience() {
  const industries = [
    {
      id: "001",
      icon: <Utensils className="w-16 h-16" strokeWidth={0.75} />,
      title: "Restaurants",
      description: "POS networks, secure guest Wi-Fi, and back-office IT built for the fast-paced hospitality environment."
    },
    {
      id: "002",
      icon: <Store className="w-16 h-16" strokeWidth={0.75} />,
      title: "Retail Shops",
      description: "Inventory systems support, checkout connectivity, and reliable networks to keep your store running seamlessly."
    },
    {
      id: "003",
      icon: <Building2 className="w-16 h-16" strokeWidth={0.75} />,
      title: "Corporate Offices",
      description: "Secure infrastructure, remote work solutions, and robust data protection for modern professional teams."
    },
    {
      id: "004",
      icon: <Coffee className="w-16 h-16" strokeWidth={0.75} />,
      title: "Local Businesses",
      description: "Affordable, scalable tech support tailored specifically to the needs of community-focused businesses."
    }
  ];

  return (
    <section className="hidden md:block py-32 bg-white font-sans text-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32 pt-8">
          <h2 className="text-5xl md:text-[5rem] font-medium tracking-tighter text-gray-900 max-w-3xl leading-[1.05]">
            Support that delivers uncommonly good results.
          </h2>
          <div className="max-w-sm mt-4 lg:mt-6">
            <p className="text-gray-700 text-lg font-light mb-8 leading-relaxed">
              We don't just fix computers, we partner with you to achieve measurable business outcomes.
            </p>
            <Link to="/services" className="inline-flex items-center px-6 py-2.5 bg-white border border-gray-200 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors shadow-sm">
              Our Services 
              <span className="ml-3 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
        
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4 px-2">
          / INDUSTRIES
        </div>
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-300/80">
          {industries.map((industry, idx) => (
            <div 
              key={industry.id} 
              className={`flex flex-col pt-10 pb-8 px-6 lg:px-10 
                ${idx !== 0 ? 'lg:border-l border-gray-300/80' : ''} 
                ${idx > 0 && idx % 2 !== 0 ? 'md:border-l border-gray-300/80' : ''}`}
            >
              <div className="text-[11px] font-bold text-gray-900 mb-16">
                {industry.id}
              </div>
              <div className="mb-14 text-gray-900">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">{industry.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
