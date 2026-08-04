import { Link } from 'react-router-dom';
import React from 'react';

const Vector1 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="60" cy="40" r="25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="40" cy="60" r="25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const Vector2 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" stroke="currentColor" strokeWidth="1.5" />
    <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" stroke="currentColor" strokeWidth="1.5" />
    <rect x="42" y="42" width="16" height="16" transform="rotate(45 50 50)" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
  </svg>
);

const Vector3 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

const Vector4 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="50" cy="50" rx="40" ry="20" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="20" stroke="currentColor" strokeWidth="1.5" transform="rotate(-30 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="20" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 50 50)" />
  </svg>
);

const Vector5 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="30" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="70" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="50" cy="30" r="20" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="50" cy="70" r="20" stroke="currentColor" strokeWidth="1.5" />
    <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

const Vector6 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" stroke="currentColor" strokeWidth="1.5" />
    <polygon points="50,25 75,40 75,60 50,75 25,60 25,40" stroke="currentColor" strokeWidth="1.5" />
    <polygon points="50,35 65,45 65,55 50,65 35,55 35,45" stroke="currentColor" strokeWidth="1.5" />
    <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <line x1="15" y1="35" x2="85" y2="65" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <line x1="15" y1="65" x2="85" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
  </svg>
);

export function Services() {
    const services = [
    {
      icon: <Vector5 />,
      title: "Network Infrastructure",
      description: "Professional installation and configuration of routers, switches, firewalls, Wi-Fi systems, structured cabling, and secure business networks for restaurants, retail stores, offices, and commercial premises.",
      link: "/services/network-infrastructure"
    },
    {
      icon: <Vector6 />,
      title: "Network Monitoring",
      description: "Real-time monitoring of your network infrastructure to proactively identify, alert, and resolve issues before they impact your business.",
      link: "/services/network-monitoring"
    },
    {
      icon: <Vector1 />,
      title: "Managed IT Support",
      description: "Comprehensive infrastructure management, proactive monitoring, and 24/7 technical support to keep your business running smoothly.",
      link: "/services/managed-it"
    },
    {
      icon: <Vector2 />,
      title: "IT Outsourcing",
      description: "Flexible outsourced IT departments, dedicated engineers, remote helpdesk, on-site support, and project delivery for businesses that need expert IT without the cost of an in-house team.",
      link: "/services/it-outsourcing"
    },
    {
      icon: <Vector4 />,
      title: "AI Business Solutions",
      description: "Leverage artificial intelligence to automate customer interactions, streamline operations, and accelerate business growth through intelligent automation and AI-driven marketing.",
      link: "/services/ai-solutions"
    },
    {
      icon: <Vector3 />,
      title: "Web Development & Hosting",
      description: "High-performance, secure, and scalable websites hosted on enterprise-grade infrastructure with guaranteed uptime.",
      link: "/services/web-development"
    }
  ];

    return (
    <section id="services" className="py-24 relative overflow-hidden bg-white border-y border-gray-200">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching the image layout */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-0 border-b border-gray-200 pb-12 gap-8">
          <div>
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-6">Our Services</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900">For those who aspire</h2>
          </div>
          <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold text-xs hover:bg-gray-800 transition-colors uppercase tracking-[0.15em] shrink-0 rounded-full">
            View all services
          </Link>
        </div>

        {/* Grid matching the image layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {services.map((service, idx) => (
            <div key={idx} className="relative p-8 md:p-10 border-b border-r border-gray-200 h-[320px] flex flex-col group hover:bg-gray-50 transition-colors">
              <div className="text-[10px] font-bold tracking-widest text-gray-500 mb-6">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3 pr-8 leading-snug">{service.title}</h3>
              <p className="text-sm text-gray-500 font-light pr-12 leading-relaxed flex-grow">{service.description}</p>
              
              <Link to={service.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-900 mt-6 hover:text-[#1e293b] transition-colors">
                Learn more <span className="ml-2 font-normal transition-transform group-hover:translate-x-1">→</span>
              </Link>
              
              <div className="absolute bottom-10 right-10 text-[#0A1A18] transform group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(service.icon, { className: "w-20 h-20 stroke-[1px]" })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
