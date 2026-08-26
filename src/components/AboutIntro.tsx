import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function AboutIntro() {
  return (
    <section className="relative py-20 min-h-[410px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.04)_0%,_#0A0A0A_60%)] pointer-events-none"></div>
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[25vw] font-bold text-white/[0.015] tracking-tighter leading-none whitespace-nowrap">
          SOLKN
        </span>
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-snug mb-12 w-full mx-auto"
        >
          From managed IT and network monitoring to <span className="text-white/60">AI automation, AI digital marketing, and website development & hosting,</span> we provide end-to-end technology solutions that keep your business connected, secure, and ready for growth.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-white/10 bg-white/5 rounded-full text-white/90 text-sm font-medium hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
