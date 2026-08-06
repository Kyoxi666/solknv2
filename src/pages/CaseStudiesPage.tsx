import { CaseStudiesBanner } from '../components/CaseStudiesBanner';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "AI-Powered Booking Assistant for a Decoration Rental Business",
      category: "Event Rentals",
      date: "Nov 15, 2026",
      description: "Helping Customers Find and Reserve Event Decorations Instantly with AI.",
      link: "/case-studies/ai-powered-booking-assistant",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Improving Business Connectivity with Managed Network Monitoring",
      category: "Infrastructure",
      date: "Oct 28, 2026",
      description: "Preventing downtime through proactive IT monitoring for a growing business.",
      link: "/case-studies/improving-business-connectivity",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Scaling E-Commerce Infrastructure for High Volume",
      category: "E-Commerce",
      date: "Sep 10, 2026",
      description: "How we migrated a high-growth online retailer to a scalable cloud infrastructure, ensuring 99.99% uptime during peak holiday shopping seasons.",
      link: "/case-studies/scaling-e-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="bg-[#f0f3f5] min-h-screen">
      <CaseStudiesBanner />
      
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-900 mb-12">Our Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <Link key={idx} to={study.link} className="group block w-full outline-none">
              <div className="flex flex-col gap-3 h-full">
                <div className="relative w-full aspect-[16/10] bg-white rounded-[24px] overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#0b0e0f]/75 backdrop-blur-sm rounded-xl px-4 py-1.5">
                    <span className="text-[#f6f8f9] text-sm font-medium">{study.category}</span>
                  </div>
                </div>
                
                <div className="bg-[#f2f6f7] rounded-[24px] p-6 sm:p-8 flex flex-col h-full transition-colors duration-300 group-hover:bg-[#e8ecef]">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-[#425357] text-sm leading-relaxed mb-8 flex-grow">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between text-[#425357] text-sm font-medium tracking-wide uppercase">
                    <div className="flex items-center">
                      Read full case study <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </div>
                    <span className="text-xs text-gray-400 font-light normal-case">{study.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
