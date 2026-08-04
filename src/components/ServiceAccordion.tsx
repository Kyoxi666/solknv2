import { useState } from 'react';
import { Plus, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServiceAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const services = [
    {
      title: "IT Outsourcing",
      content: "Flexible outsourced IT departments, dedicated engineers, remote helpdesk, on-site support, and project delivery for businesses that need expert IT without the cost of an in-house team.",
      link: "/services/it-outsourcing"
    },
    {
      title: "Managed IT",
      content: "Comprehensive infrastructure management, proactive monitoring, and 24/7 technical support to keep your business running smoothly.",
      link: "/services/managed-it"
    },
    {
      title: "Network Infrastructure",
      content: "Professional installation and configuration of routers, switches, firewalls, Wi-Fi systems, structured cabling, and secure business networks for restaurants, retail stores, offices, and commercial premises.",
      link: "/services/network-infrastructure"
    },
    {
      title: "Network Monitoring",
      content: "Real-time monitoring of your network infrastructure to proactively identify, alert, and resolve issues before they impact your business.",
      link: "/services/network-monitoring"
    },
    {
      title: "Web Development",
      content: "High-performance, secure, and scalable websites hosted on enterprise-grade infrastructure with guaranteed uptime.",
      link: "/services/web-development"
    },
    {
      title: "AI Business Solutions",
      content: "Leverage artificial intelligence to automate customer interactions, streamline operations, and accelerate business growth through intelligent automation and AI-driven marketing.",
      link: "/services/ai-business-solutions"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-light text-gray-500 max-w-2xl mx-auto leading-snug">
            Tailor-made services for all your<br />business needs
          </h2>
        </div>

        <div className="space-y-4">
          {services.map((service, idx) => {
            const isOpen = openIdx === idx;
            
            return (
              <div 
                key={idx} 
                className={`bg-[#F7F7F7] rounded-[24px] overflow-hidden transition-all duration-300 ${isOpen ? 'pb-8' : ''}`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left"
                >
                  <h3 className={`text-xl font-normal transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-600'}`}>
                    {service.title}
                  </h3>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#2b3d5b] text-white' : 'bg-[#EAEAEA] text-gray-500'}`}>
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <div 
                  className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pt-2">
                    <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mb-10">
                      {service.content}
                    </p>
                    
                    {service.link && (
                      <Link to={service.link} className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-black group">
                        Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
