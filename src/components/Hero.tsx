import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const faceBase = {
  position: 'absolute' as const,
  left: '50%',
  top: '50%',
  border: '1px solid rgba(0,0,0,0.06)',
  backfaceVisibility: 'hidden' as const,
};

/* Orange-based cube gradients matching the design system */
const gradDark  = 'linear-gradient(135deg, #F7F7F7 0%, #D4A574 55%, #E87722 100%)';
const gradMid   = 'linear-gradient(135deg, #D4A574 0%, #E87722 55%, #FFFFFF 100%)';
const gradLight = 'linear-gradient(135deg, #E87722 0%, #FFFFFF 100%)';

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
      className="relative min-h-[100dvh] bg-white overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Background radial gradients — subtle orange glow */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 65% 35%, rgba(232,119,34,0.08) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(212,165,116,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Architectural cubes */}
      <Cube size={180} rotateY={cubeRotateYReverse} scale={cubeScale} className="top-[10%] right-[10%] opacity-30" />
      <Cube size={320} rotateY={cubeRotateY}        scale={cubeScale} className="bottom-[-5%] right-[-5%] opacity-40" />
      <Cube size={140} rotateY={cubeRotateY}        scale={cubeScale} className="top-[25%] left-[5%] opacity-30" />
      <Cube size={640} rotateY={cubeRotateYReverse} scale={cubeScale} className="bottom-[-15%] left-[-15%] opacity-20" />

      {/* Foreground content */}
      <motion.div
        style={{ scale: fgScale, opacity: fgOpacity, filter: fgFilter }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 md:pt-0 -mt-[60px]"
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-1.5 rounded-full border border-[#E0E0E0] bg-[#F7F7F7] text-[#6B6B6B] uppercase tracking-[0.18em]"
          style={{ fontSize: 'clamp(0.5rem, 0.45rem + 0.2vw, 0.65rem)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E87722] inline-block" />
          SOLKN IT Solutions
        </motion.span>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="font-bold text-[#000000] tracking-tighter leading-[1.1] max-w-6xl mx-auto"
          style={{ fontSize: 'clamp(2.6rem, 2rem + 3.5vw, 5.5rem)' }}
        >
          Reliable networks and IT support{' '}
          <span className="text-[#A3A3A3]">for small businesses.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 md:mt-8 text-[#6B6B6B] max-w-xl mx-auto font-normal leading-relaxed px-2 sm:px-0"
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
          {/* Primary CTA — orange */}
          <Link
            to="/contact"
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#E87722] text-white pl-7 pr-2.5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#C4621A] transition-all duration-300 shadow-lg shadow-[#E87722]/10 active:scale-[0.98]"
          >
            Book a Call
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/tools/it-support-calculator"
            className="w-full sm:w-auto bg-transparent border border-[#E0E0E0] hover:bg-[#F7F7F7] text-[#000000] px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center active:scale-[0.98]"
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
              <span className="text-[#000000] font-semibold tracking-tight" style={{ fontSize: 'clamp(1.1rem, 1rem + 0.6vw, 1.5rem)' }}>
                {s.value}
              </span>
              <span className="text-[#A3A3A3] text-xs uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}