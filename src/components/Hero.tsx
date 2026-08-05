import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const faceBase = {
  position: 'absolute' as const,
  left: '50%',
  top: '50%',
  border: '1px solid rgba(255,255,255,0.08)',
  backfaceVisibility: 'hidden' as const,
};

const gradDark = 'linear-gradient(135deg, #0A0A0A 0%, #1E408A 55%, #2563EB 100%)';
const gradMid  = 'linear-gradient(135deg, #1E408A 0%, #2563EB 55%, #EFF4FF 100%)';
const gradLight = 'linear-gradient(135deg, #6090FA 0%, #FFFFFF 100%)';

const Cube = ({
  size,
  rotateY,
  scale,
  className,
}: {
  size: number;
  rotateY: any;
  scale: any;
  className?: string;
}) => {
  const half = size / 2;
  const faceStyle = { ...faceBase, width: size, height: size, marginLeft: -half, marginTop: -half };

  return (
    <motion.div
      className={`hidden md:flex absolute items-center justify-center z-[2] ${className}`}
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, scale: 1.15, filter: 'blur(12px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        style={{
          width: size,
          height: size,
          position: 'relative',
          transformStyle: 'preserve-3d',
          rotateX: -20,
          rotateY,
          scale,
        }}
      >
        <div style={{ ...faceStyle, background: gradDark, transform: `translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, background: gradDark, transform: `rotateY(180deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, background: gradMid, transform: `rotateY(90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, background: gradMid, transform: `rotateY(-90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, background: gradLight, transform: `rotateX(90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, background: gradLight, transform: `rotateX(-90deg) translateZ(${half}px)` }} />
      </motion.div>
    </motion.div>
  );
};

const stats = [
  { value: '200+', label: 'Businesses served' },
  { value: '99.7%', label: 'Uptime SLA' },
  { value: '<4hr', label: 'Response time' },
  { value: '10yr+', label: 'Industry experience' },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const fgScale   = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const fgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const fgBlur    = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const fgFilter  = useTransform(fgBlur, (v) => `blur(${v}px)`);

  const cubeRotateY        = useTransform(scrollYProgress, [0, 1], [0, 540]);
  const cubeScale          = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const cubeRotateYReverse = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100dvh] bg-[#090e17] overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Background radial gradients */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#090e17]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 65% 35%, rgba(37,99,235,0.30) 0%, rgba(9,14,23,0) 55%), radial-gradient(circle at 20% 80%, rgba(30,64,138,0.20) 0%, rgba(9,14,23,0) 60%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090e17] via-[#090e17]/40 to-transparent z-[1]" />
      </div>

      {/* Architectural cubes */}
      <Cube size={180} rotateY={cubeRotateYReverse} scale={cubeScale} className="top-[10%] right-[10%] opacity-50" />
      <Cube size={320} rotateY={cubeRotateY}        scale={cubeScale} className="bottom-[-5%] right-[-5%] opacity-80" />
      <Cube size={140} rotateY={cubeRotateY}        scale={cubeScale} className="top-[25%] left-[5%] opacity-60" />
      <Cube size={640} rotateY={cubeRotateYReverse} scale={cubeScale} className="bottom-[-15%] left-[-15%] opacity-40" />

      {/* Foreground content */}
      <motion.div
        style={{ scale: fgScale, opacity: fgOpacity, filter: fgFilter }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 md:pt-0 -mt-[60px]"
      >
        {/* H1 — wider container, larger clamp, max 3 lines */}
        <motion.h1
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="font-bold text-white tracking-tighter leading-[1.1] max-w-6xl mx-auto drop-shadow-lg"
          style={{ fontSize: 'clamp(2.6rem, 2rem + 3.5vw, 5.5rem)' }}
        >
          Reliable networks and IT support{' '}
          <span className="text-white/50">for small businesses.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 md:mt-8 text-white/65 max-w-xl mx-auto font-light leading-relaxed px-2 sm:px-0"
          style={{ fontSize: 'clamp(0.85rem, 0.75rem + 0.4vw, 1.1rem)' }}
        >
          From network installation to ongoing IT management, we keep small
          businesses connected, secure, and running — with AI and web tools when
          you need them too.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm mx-auto sm:max-w-none"
        >
          {/* Primary CTA — button-in-button pattern */}
          <Link
            to="/contact"
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#090e17] pl-7 pr-2.5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/10 active:scale-[0.98]"
          >
            Book a Call
            <span className="w-8 h-8 rounded-full bg-[#090e17]/8 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/tools/it-support-calculator"
            className="w-full sm:w-auto bg-white/8 backdrop-blur-md border border-white/15 hover:bg-white/15 text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center active:scale-[0.98]"
          >
            IT Cost Calculator
          </Link>
        </motion.div>

        {/* Trust stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-white font-semibold tracking-tight" style={{ fontSize: 'clamp(1.1rem, 1rem + 0.6vw, 1.5rem)' }}>
                {s.value}
              </span>
              <span className="text-white/40 text-xs uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}