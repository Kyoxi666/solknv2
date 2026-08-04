import { motion } from 'motion/react';

const CoilIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className={className}>
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <ellipse key={i} cx={40 + i * 3.5} cy={60 - i * 3.5} rx="22" ry="32" transform={`rotate(55 ${40 + i * 3.5} ${60 - i * 3.5})`} />
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
      return <circle key={angle} cx={50 + Math.cos(rad) * 18} cy={50 + Math.sin(rad) * 18} r="16" />;
    })}
  </svg>
);

const TorusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className={className}>
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      return <ellipse key={angle} cx={50} cy={50} rx="35" ry="10" transform={`rotate(${angle} 50 50)`} />
    })}
  </svg>
);

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <CoilIcon className="w-full h-full" />,
      title: "personal",
      description: "You're not just a ticket number. We provide dedicated account managers and a single point of contact for all your IT needs."
    },
    {
      icon: <SphereIcon className="w-full h-full" />,
      title: "fast",
      description: "When things go wrong, we respond fast. Get direct access to engineers who can solve your problems quickly, remote or on-site."
    },
    {
      icon: <RingIcon className="w-full h-full" />,
      title: "fair",
      description: "Enterprise-grade IT shouldn't break the bank. Our solutions are scaled and priced realistically for small to medium businesses."
    },
    {
      icon: <TorusIcon className="w-full h-full" />,
      title: "complete",
      description: "From pulling cables and setting up Wi-Fi to managing your cloud and web presence, we handle everything under one roof."
    }
  ];

  return (
    <section className="hidden md:block py-32 bg-[#090e17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8 max-w-2xl">
            Why partner with SOLKN?
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            We bridge the gap between large MSPs and small businesses, delivering enterprise-quality networks and IT support with a personal touch.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="w-48 h-48 mb-6 text-[#98badb] opacity-90 mx-auto md:mx-0">
                {reason.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4">{reason.title}</h3>
              <p className="text-white/60 text-base leading-relaxed font-light">{reason.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
