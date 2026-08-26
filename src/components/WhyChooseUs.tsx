import { motion } from 'motion/react';

const CoilIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className={className}>
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <ellipse
        key={i}
        cx={40 + i * 3.5}
        cy={60 - i * 3.5}
        rx="22"
        ry="32"
        transform={`rotate(55 ${40 + i * 3.5} ${60 - i * 3.5})`}
      />
    ))}
  </svg>
);

const SphereIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className={className}>
    <circle cx="50" cy="50" r="35" />
    <ellipse cx="50" cy="50" rx="35" ry="20" />
    <ellipse cx="50" cy="50" rx="35" ry="8" />
    <line x1="15" y1="50" x2="85" y2="50" />
  </svg>
);

const RingIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className={className}>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      return (
        <circle key={angle} cx={50 + Math.cos(rad) * 18} cy={50 + Math.sin(rad) * 18} r="16" />
      );
    })}
  </svg>
);

const TorusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className={className}>
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
      <ellipse key={angle} cx={50} cy={50} rx="35" ry="10" transform={`rotate(${angle} 50 50)`} />
    ))}
  </svg>
);

const reasons = [
  {
    icon: <CoilIcon className="w-full h-full" />,
    title: 'Personal',
    description:
      "You're not a ticket number. We provide dedicated account managers and a single point of contact for all your IT needs.",
  },
  {
    icon: <SphereIcon className="w-full h-full" />,
    title: 'Fast',
    description:
      'When things go wrong, we respond quickly. Direct access to engineers who can resolve issues remotely or on-site.',
  },
  {
    icon: <RingIcon className="w-full h-full" />,
    title: 'Fair',
    description:
      "Enterprise-grade IT shouldn't break the bank. Our solutions are scaled and priced realistically for small and medium businesses.",
  },
  {
    icon: <TorusIcon className="w-full h-full" />,
    title: 'Complete',
    description:
      'From pulling cables and setting up Wi-Fi to managing your cloud and web presence — everything under one roof.',
  },
];

export function WhyChooseUs() {
  return (
    <div className="bg-surface-light pb-16 md:pb-24 pt-4">
      <section
        className="py-16 md:py-24 text-white relative overflow-hidden rounded-[3rem] border border-gray-800 mx-4 sm:mx-6 lg:mx-8 shadow-2xl"
        style={{ background: '#0a0a0a' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ambient background glow — distinct from hero */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.08) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-20 md:mb-24 relative"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-5 max-w-3xl">
              Why partner with SOLKN?
            </h2>
            <div className="w-16 h-px bg-white/15 mb-6" />
            <p className="text-white/55 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              We bridge the gap between large MSPs and small businesses — delivering
              enterprise-quality networks and IT support with a personal touch.
            </p>
          </motion.div>

          {/* Cards with stagger-offset descent */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.32, 0.72, 0, 1] }}
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:mt-10' : ''}`}
              >
                <div className="w-32 h-32 md:w-44 md:h-44 mb-6 text-zinc-400 opacity-80">
                  {reason.icon}
                </div>
                <h3 className="text-3xl md:text-5xl font-medium tracking-tighter mb-3">{reason.title}</h3>
                <p className="text-white/55 text-sm md:text-base leading-relaxed font-light">{reason.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
