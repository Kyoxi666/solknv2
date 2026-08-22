import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

// Custom bespoke SVG line-art icons — matching the WhyChooseUs aesthetic

const RestaurantIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.9" className={className}>
    <line x1="30" y1="15" x2="30" y2="55" />
    <path d="M20 15 Q30 30 40 15" />
    <line x1="30" y1="55" x2="30" y2="88" />
    <line x1="65" y1="12" x2="65" y2="88" />
    <path d="M55 12 Q55 40 75 40 Q75 12 55 12Z" />
  </svg>
);

const RetailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.9" className={className}>
    <rect x="20" y="42" width="60" height="46" rx="2" />
    <path d="M20 42 L30 18 L70 18 L80 42" />
    <line x1="10" y1="42" x2="90" y2="42" />
    <rect x="38" y="62" width="24" height="26" rx="1" />
    <circle cx="50" cy="30" r="6" />
    <line x1="50" y1="24" x2="50" y2="12" />
  </svg>
);

const OfficeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.9" className={className}>
    <rect x="18" y="14" width="64" height="72" rx="2" />
    <line x1="18" y1="30" x2="82" y2="30" />
    <line x1="18" y1="46" x2="82" y2="46" />
    <line x1="18" y1="62" x2="82" y2="62" />
    <line x1="40" y1="14" x2="40" y2="86" />
    <line x1="62" y1="14" x2="62" y2="86" />
    <circle cx="29" cy="22" r="3" />
    <circle cx="51" cy="22" r="3" />
    <circle cx="73" cy="22" r="3" />
  </svg>
);

const LocalBizIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.9" className={className}>
    <path d="M50 15 L85 40 L85 85 L15 85 L15 40 Z" />
    <line x1="15" y1="40" x2="85" y2="40" />
    <rect x="36" y="58" width="28" height="27" rx="1" />
    <line x1="50" y1="58" x2="50" y2="85" />
    <path d="M50 15 L15 40" opacity="0.4" />
    <path d="M50 15 L85 40" opacity="0.4" />
    <circle cx="50" cy="28" r="5" />
  </svg>
);

const industries = [
  {
    icon: <RestaurantIcon className="w-12 h-12 md:w-16 md:h-16" />,
    title: 'Restaurants',
    description:
      'POS networks, secure guest Wi-Fi, and back-office IT built for the fast-paced hospitality environment.',
    num: '01',
  },
  {
    icon: <RetailIcon className="w-12 h-12 md:w-16 md:h-16" />,
    title: 'Retail shops',
    description:
      'Inventory systems support, checkout connectivity, and reliable networks to keep your store running without interruption.',
    num: '02',
  },
  {
    icon: <OfficeIcon className="w-12 h-12 md:w-16 md:h-16" />,
    title: 'Corporate offices',
    description:
      'Secure infrastructure, remote work solutions, and robust data protection for modern professional teams.',
    num: '03',
  },
  {
    icon: <LocalBizIcon className="w-12 h-12 md:w-16 md:h-16" />,
    title: 'Local businesses',
    description:
      'Affordable, scalable tech support tailored to the specific needs of community-focused businesses.',
    num: '04',
  },
];

export function TargetAudience() {
  return (
    <section
      className="py-24 md:py-32 font-sans text-gray-900"
      style={{ background: '#f8f7f5' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-tighter text-gray-900 max-w-3xl leading-[1.05]">
            Who we work with.
          </h2>
          <div className="max-w-sm lg:mt-6 shrink-0">
            <p className="text-gray-600 text-lg font-light mb-8 leading-relaxed">
              We partner with growing businesses across London and the UK to
              deliver measurable outcomes — not just IT fixes.
            </p>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-gray-200 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors shadow-sm"
            >
              Our services
              <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-200">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className={`relative flex flex-col pt-8 pb-8 px-4 md:px-8 lg:px-10 border-b border-gray-200 group overflow-hidden
                ${idx !== 0 ? 'lg:border-l border-gray-200' : ''}
                ${idx > 0 && idx % 2 !== 0 ? 'md:border-l border-gray-200' : ''}
              `}
            >
              {/* Decorative index number */}
              <span
                className="absolute top-4 right-4 text-[4rem] font-bold leading-none select-none pointer-events-none text-gray-900/[0.04] transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              >
                {industry.num}
              </span>

              {/* Bottom hover accent line */}
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#2563EB] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              <div className="mb-10 text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                {industry.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 tracking-tight">{industry.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{industry.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
