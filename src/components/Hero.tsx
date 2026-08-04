import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const faceBase = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  border: '1px solid rgba(255,255,255,0.1)',
  backfaceVisibility: 'hidden',
};

// Gradients pulled from the reference graphic's palette
const gradDark = 'linear-gradient(135deg, #0A0A0A 0%, #1E408A 55%, #2563EB 100%)';
const gradMid = 'linear-gradient(135deg, #1E408A 0%, #2563EB 55%, #EFF4FF 100%)';
const gradLight = 'linear-gradient(135deg, #6090FA 0%, #FFFFFF 100%)';

const Cube = ({ size, rotateY, scale, className }) => {
  const half = size / 2;
  const faceStyle = {
    ...faceBase,
    width: size,
    height: size,
    marginLeft: -half,
    marginTop: -half,
  };

  return (
    <motion.div
      className={`hidden md:flex absolute items-center justify-center z-[2] ${className}`}
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, scale: 1.15, filter: 'blur(12px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
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

export function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Foreground text: scales down, blurs, and fades on scroll
  const fgScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const fgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const fgBlur = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const fgFilter = useTransform(fgBlur, (v) => `blur(${v}px)`);

  // The box itself: continuously rotates and grows slightly as you scroll
  const cubeRotateY = useTransform(scrollYProgress, [0, 1], [0, 540]);
  const cubeScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  // Reverse rotation for the secondary top cube
  const cubeRotateYReverse = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen bg-[#090e17] overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Background gradient wash */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#090e17]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 65% 35%, rgba(37,99,235,0.35) 0%, rgba(9,14,23,0) 55%), radial-gradient(circle at 20% 80%, rgba(30,64,138,0.25) 0%, rgba(9,14,23,0) 60%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090e17] via-[#090e17]/50 to-transparent z-[1]" />
      </div>

      {/* Top Right Cube (Smaller) */}
      <Cube
        size={180}
        rotateY={cubeRotateYReverse}
        scale={cubeScale}
        className="top-[10%] right-[10%] opacity-60"
      />

      {/* Bottom Right Cube (Enlarged) */}
      <Cube
        size={320}
        rotateY={cubeRotateY}
        scale={cubeScale}
        className="bottom-[-5%] right-[-5%]"
      />

      {/* Center Left Cube (Small, Top) */}
      <Cube
        size={140}
        rotateY={cubeRotateY}
        scale={cubeScale}
        className="top-[25%] left-[5%] opacity-70"
      />

      {/* Bottom Left Cube (2x Size) */}
      <Cube
        size={640}
        rotateY={cubeRotateYReverse}
        scale={cubeScale}
        className="bottom-[-15%] left-[-15%] opacity-50"
      />

      {/* Foreground text content */}
      <motion.div
        style={{ scale: fgScale, opacity: fgOpacity, filter: fgFilter }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 md:pt-0 -mt-[80px]"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="block uppercase tracking-[0.12em] text-white/60 mb-4 md:mb-6"
          style={{ fontSize: 'clamp(0.55rem, 0.5rem + 0.2vw, 0.725rem)' }}
        >
          SOLKN IT Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="font-bold text-white tracking-tighter leading-[1.15] md:leading-[1.1] max-w-4xl mx-auto drop-shadow-lg"
          style={{ fontSize: 'clamp(2.05rem, 1.3rem + 3vw, 3.8rem)' }}
        >
          Reliable networks and <br className="hidden sm:block" />
          <span>IT support for small businesses.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 md:mt-6 text-white/80 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md px-2 sm:px-0"
          style={{ fontSize: 'clamp(0.75rem, 0.7rem + 0.3vw, 1.05rem)' }}
        >
          From network installation to ongoing IT management, we keep small businesses
          connected, secure, and running smoothly — with AI and web tools when you need them too.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full max-w-sm mx-auto sm:max-w-none"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center shadow-lg"
          >
            Book a Call
          </Link>
          <Link
            to="/tools/it-support-calculator"
            className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center shadow-lg"
          >
            IT Cost Calculator
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}