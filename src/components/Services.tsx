import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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
    <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

const Vector6 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" stroke="currentColor" strokeWidth="1.5" />
    <polygon points="50,25 75,40 75,60 50,75 25,60 25,40" stroke="currentColor" strokeWidth="1.5" />
    <polygon points="50,35 65,45 65,55 50,65 35,55 35,45" stroke="currentColor" strokeWidth="1.5" />
    <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <line x1="15" y1="35" x2="85" y2="65" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <line x1="15" y1="65" x2="85" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
  </svg>
);

const services = [
  {
    icon: <Vector5 />,
    title: 'Network infrastructure',
    description:
      'Professional installation and configuration of routers, switches, firewalls, Wi-Fi systems, structured cabling, and secure business networks.',
    link: '/services/network-infrastructure',
    featured: true,
  },
  {
    icon: <Vector6 />,
    title: 'Network monitoring',
    description:
      'Real-time monitoring of your network infrastructure to proactively identify, alert, and resolve issues before they impact your business.',
    link: '/services/network-monitoring',
    featured: false,
  },
  {
    icon: <Vector1 />,
    title: 'Managed IT support',
    description:
      'Comprehensive infrastructure management, proactive monitoring, and responsive technical support to keep your business running without interruption.',
    link: '/services/managed-it',
    featured: false,
  },
  {
    icon: <Vector2 />,
    title: 'IT outsourcing',
    description:
      'Flexible outsourced IT departments, dedicated engineers, remote helpdesk, and on-site support for businesses that need expert IT without the cost of an in-house team.',
    link: '/services/it-outsourcing',
    featured: true,
  },
  {
    icon: <Vector4 />,
    title: 'AI business solutions',
    description:
      'Automate customer interactions, streamline operations, and accelerate growth through intelligent automation and AI-driven marketing tools.',
    link: '/services/ai-solutions',
    featured: false,
  },
  {
    icon: <Vector3 />,
    title: 'Web development & hosting',
    description:
      'High-performance, secure, and scalable websites hosted on enterprise-grade infrastructure with guaranteed uptime.',
    link: '/services/web-development',
    featured: false,
  },
];

export function Services() {
  return (
    <section
      id="services"
      data-theme="light"
      className="py-24 md:py-32 relative overflow-hidden border-y border-gray-200"
      style={{ background: '#f8f7f5' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-0 border-b border-gray-200 pb-10 gap-6 md:gap-12">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">Our services</p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-gray-900 leading-[1.1]">
              Everything your business needs to stay connected and secure.
            </h2>
          </div>
          <Link
            to="/services"
            className="group shrink-0 inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-medium text-sm rounded-full hover:bg-gray-900 transition-colors duration-300 active:scale-[0.98]"
          >
            View all services
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className={`relative p-8 md:p-10 border-b border-r border-gray-200 flex flex-col group transition-all duration-300 hover:-translate-y-px ${
                service.featured
                  ? 'min-h-[340px] bg-white hover:bg-gray-50'
                  : 'min-h-[300px] hover:bg-gray-50'
              }`}
            >
              {/* Left accent bar on hover */}
              <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-[#2563EB] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full" />

              {/* Featured badge */}
              {service.featured && (
                <span className="self-start mb-4 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest uppercase bg-blue-50 text-blue-600 border border-blue-100 rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-lg font-medium text-gray-900 mb-3 pr-8 leading-snug">{service.title}</h3>
              <p className="text-sm text-gray-500 font-light pr-12 leading-relaxed flex-grow">{service.description}</p>

              <Link
                to={service.link}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gray-900 mt-6 hover:text-[#2563EB] transition-colors duration-300"
              >
                Learn more
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>

              <div className="absolute bottom-8 right-8 text-gray-300 group-hover:text-gray-400 group-hover:scale-110 transition-all duration-500">
                {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'w-20 h-20 stroke-[1px]' })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
