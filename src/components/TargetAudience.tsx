import { ArrowRight, Utensils, Store, Building2, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const industries = [
  {
    icon: <Utensils className="w-12 h-12 md:w-16 md:h-16" strokeWidth={0.75} />,
    title: 'Restaurants',
    description:
      'POS networks, secure guest Wi-Fi, and back-office IT built for the fast-paced hospitality environment.',
  },
  {
    icon: <Store className="w-12 h-12 md:w-16 md:h-16" strokeWidth={0.75} />,
    title: 'Retail shops',
    description:
      'Inventory systems support, checkout connectivity, and reliable networks to keep your store running without interruption.',
  },
  {
    icon: <Building2 className="w-12 h-12 md:w-16 md:h-16" strokeWidth={0.75} />,
    title: 'Corporate offices',
    description:
      'Secure infrastructure, remote work solutions, and robust data protection for modern professional teams.',
  },
  {
    icon: <Coffee className="w-12 h-12 md:w-16 md:h-16" strokeWidth={0.75} />,
    title: 'Local businesses',
    description:
      'Affordable, scalable tech support tailored to the specific needs of community-focused businesses.',
  },
];

export function TargetAudience() {
  return (
    <section className="py-24 md:py-32 bg-white font-sans text-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20 md:mb-28"
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
                <ArrowRight className="w-3.5 h-3.5" />
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
              className={`flex flex-col pt-8 pb-8 px-4 md:px-8 lg:px-10 border-b border-gray-200
                ${idx !== 0 ? 'lg:border-l border-gray-200' : ''}
                ${idx > 0 && idx % 2 !== 0 ? 'md:border-l border-gray-200' : ''}
              `}
            >
              <div className="mb-10 text-gray-800">
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
