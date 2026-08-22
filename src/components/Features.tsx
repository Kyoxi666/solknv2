import { ArrowRight, ArrowUpRight, ShieldCheck, Terminal, Cpu, Clock, Activity, CheckCircle2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Features() {
  return (
    <>
      {/* High-Impact AI & Infrastructure Overview Section — Anti-Slop Bento Design */}
      <section
        className="py-20 md:py-28 text-white relative overflow-hidden border-b border-white/5 font-sans"
        style={{ background: '#080c14' }}
      >
        {/* Subtle background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.10) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono tracking-wider text-neutral-300 uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                SOLKN Managed OS
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.05] text-white">
                Proactive infrastructure meets intelligent automation.
              </h2>
            </div>
            <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed max-w-md">
              We monitor your systems around the clock and deploy custom AI agents so your business stays online, secure, and moving forward.
            </p>
          </motion.div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Bento Cell 1 (Span 7) — Live Terminal & System Health Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-7 bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:border-neutral-700 transition-all duration-300 shadow-2xl relative overflow-hidden"
              style={{
                boxShadow: '0 0 0 0 rgba(37,99,235,0)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              whileHover={{ boxShadow: '0 0 40px -10px rgba(37,99,235,0.15)' }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span>LIVE INFRASTRUCTURE PULSE</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                    99.7% Uptime Verified
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
                  Zero-downtime network guard
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6 max-w-lg">
                  Automated telemetry constantly probes your gateways, servers, and cloud endpoints to isolate bottlenecks before users ever notice a slowdown.
                </p>
              </div>

              {/* Simulated Terminal / Status Bar UI */}
              <div className="bg-black/80 border border-neutral-800 rounded-2xl p-4 font-mono text-xs text-neutral-300 space-y-2.5 shadow-inner">
                <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <span className="text-white font-medium">UK-London Primary Node</span>
                  </div>
                  <span className="text-neutral-500">Latency: 2ms</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-neutral-400">Cloud sync & backup</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Synchronised
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-neutral-400">Threat isolation engine</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Active (0 flagged)
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-neutral-400">Firewall rule sync</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Up to date
                  </span>
                </div>
              </div>

              {/* Security badge */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-2.5 py-1.5 rounded-full text-[10px] font-mono text-neutral-400">
                  <ShieldCheck className="w-3 h-3 text-blue-400" />
                  <span>SOC monitored</span>
                </div>
              </div>
            </motion.div>

            {/* Bento Cell 2 (Span 5) — Custom AI Dispatch & Ticket Triage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5 bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:border-neutral-700 transition-all duration-300 shadow-2xl relative overflow-hidden"
              whileHover={{ boxShadow: '0 0 40px -10px rgba(37,99,235,0.15)' }}
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
                  <Cpu className="w-4 h-4 text-sky-400" />
                  <span>AI WORKFLOW ENGINE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
                  70% ticket reduction
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                  Tailored AI workflows handle repetitive onboarding, password resets, and access requests automatically — with full audit trails.
                </p>
              </div>

              {/* AI Dispatch Card Snippet */}
              <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
                    <Terminal className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <span className="text-white font-medium">Auto-provisioning agent</span>
                    <p className="text-[10px] text-neutral-400 font-mono">Executed M365 & VPN onboarding in 4.1s</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <span className="text-white font-medium">Password reset resolved</span>
                    <p className="text-[10px] text-neutral-400 font-mono">User re-authenticated in under 30s</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bento Cell 3 (Span 12) — Human SLA Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-12 bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group hover:border-neutral-700 transition-all duration-300 shadow-xl"
              whileHover={{ boxShadow: '0 0 40px -10px rgba(37,99,235,0.12)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                    Dedicated UK engineers on-call
                  </h4>
                  <p className="text-sm text-neutral-400 font-light">
                    Average response under 15 minutes. Direct access to senior specialists — no phone queues or bot loops.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="group/btn shrink-0 inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors duration-300"
              >
                Speak with an engineer
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* AI Chatbot Feature Section */}
      <section
        className="py-24 md:py-32 text-gray-900 overflow-hidden relative"
        style={{ background: '#f8f7f5' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="w-full lg:w-5/12"
            >
              <p className="text-[10px] font-semibold text-gray-400 tracking-[0.2em] uppercase mb-4">
                AI & Automation
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-6">
                Custom AI chatbot trained on your data.
              </h2>
              <p className="text-lg text-gray-500 font-light mb-10 leading-relaxed">
                Deploy an intelligent assistant that understands your business
                inside out. From handling FAQs to booking appointments, our AI
                works around the clock to serve your customers.
              </p>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-900 transition-colors duration-300 active:scale-[0.98]"
              >
                Try SOLKN chatbot
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>

            {/* Right Chat UI — B2B IT-relevant conversation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="w-full lg:w-7/12"
            >
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] relative">
                {/* Mac window dots */}
                <div className="flex gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>

                {/* Chat messages — IT support context */}
                <div className="space-y-5 mb-8 font-light text-sm">
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-50 border border-gray-100 text-gray-800 px-5 py-3.5 rounded-2xl rounded-tl-sm max-w-[80%] shadow-sm">
                      Hi, I'm the SOLKN support assistant. How can I help you today?
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex justify-end pl-8"
                  >
                    <div className="bg-white border border-gray-100 text-gray-800 px-5 py-3.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                      One of my staff can't log into Microsoft 365 — they're getting a multi-factor auth error.
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-50 border border-gray-100 text-gray-800 leading-relaxed px-5 py-4 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm">
                      Got it. I've located their account and reset the MFA authenticator. They'll receive a re-enrolment link within 60 seconds. Would you like me to notify them by email?
                    </div>
                  </motion.div>
                </div>

                {/* Suggestions */}
                <div className="flex flex-wrap gap-2.5 mb-5">
                  <button className="bg-black text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-900 transition-colors shadow-sm">
                    Yes, notify them
                  </button>
                  <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors">
                    Create IT ticket
                  </button>
                </div>

                {/* Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask a question..."
                    className="w-full bg-white border border-gray-200 text-gray-900 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-gray-300 transition-colors"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Dual capabilities callout — real contrast between cards and section */}
      <div style={{ background: '#080c14' }} className="pb-24 md:pb-32">
        <section
          className="py-16 md:py-20 overflow-hidden relative rounded-3xl md:rounded-[40px] mx-4 sm:mx-6 lg:mx-8 border border-white/5 shadow-2xl"
          style={{ background: '#0d1117' }}
        >
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle at top right, rgba(255,255,255,0.06) 0%, transparent 65%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle at bottom left, rgba(37,99,235,0.05) 0%, transparent 65%)',
              filter: 'blur(60px)',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">

              {/* Card 1 — AI Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="bg-neutral-950 p-10 md:p-14 flex flex-col justify-between gap-10 group hover:bg-neutral-900/80 transition-colors duration-300"
              >
                <div>
                  <p className="text-[10px] font-semibold text-white/40 tracking-[0.2em] uppercase mb-4">
                    AI & Automation
                  </p>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                    Work smarter, not harder.
                  </h3>
                  <p className="text-white/60 text-base font-light leading-relaxed max-w-sm">
                    From reducing manual data entry to creating intelligent customer
                    support experiences, our custom automation solutions streamline
                    operations so you can focus on growth.
                  </p>
                </div>
                <Link
                  to="/services/ai-solutions"
                  className="group self-start inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-100 transition-colors duration-300 shadow-lg active:scale-[0.98]"
                >
                  Explore automation
                  <span className="w-6 h-6 rounded-full bg-black/8 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>

              {/* Card 2 — Web Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
                className="bg-neutral-950 p-10 md:p-14 flex flex-col justify-between gap-10 group hover:bg-neutral-900/80 transition-colors duration-300"
              >
                <div>
                  <p className="text-[10px] font-semibold text-white/40 tracking-[0.2em] uppercase mb-4">
                    Web & Development
                  </p>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                    Web design, hosting & app development.
                  </h3>
                  <p className="text-white/60 text-base font-light leading-relaxed max-w-sm">
                    Our in-house development team builds modern, scalable web
                    solutions that work in harmony with your IT infrastructure —
                    from landing pages to custom internal applications.
                  </p>
                </div>
                <Link
                  to="/services/web-development"
                  className="group self-start inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-100 transition-colors duration-300 shadow-lg active:scale-[0.98]"
                >
                  Explore web services
                  <span className="w-6 h-6 rounded-full bg-black/8 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}