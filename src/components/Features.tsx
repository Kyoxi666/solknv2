import { ArrowRight, ArrowUpRight, ShieldCheck, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Features() {
  return (
    <>
      {/* High-Impact AI & Infrastructure Overview Section */}
      <section className="py-20 md:py-28 bg-black text-white relative overflow-hidden border-b border-neutral-900">
        {/* Background glow effects */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.08) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold tracking-wider text-neutral-300 uppercase mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Next-Gen Business Intelligence
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] mb-6 text-white">
              Engineered for speed. <br className="hidden sm:inline" />
              Built for zero downtime.
            </h2>

            <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              We fuse proactive IT infrastructure management with custom AI automations, eliminating operational bottlenecks so your business moves faster.
            </p>
          </motion.div>

          {/* 3 Mobile-friendly Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-3xl font-medium text-white mb-1 tracking-tight">99.9%</div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">Proactive Uptime</div>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  24/7 automated network monitoring and threat isolation prevent system failures before they impact your daily operations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-6 h-6 text-sky-400" />
                </div>
                <div className="text-3xl font-medium text-white mb-1 tracking-tight">70%</div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">Task Automation</div>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  Custom AI bots and internal workflow engines automate repetitive tasks, client queries, and backend data processing.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-3xl font-medium text-white mb-1 tracking-tight">&lt; 15 min</div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">Avg. Engineer Response</div>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  Direct access to dedicated UK-based engineers without phone queues or multi-tiered support escalation delays.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Feature Section */}
      <section className="py-24 md:py-32 bg-white text-gray-900 overflow-hidden relative">
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

            {/* Right Chat UI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="w-full lg:w-7/12"
            >
              <div className="bg-white/40 backdrop-blur-2xl border border-gray-100 rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] relative">
                {/* Mac window dots */}
                <div className="flex gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>

                {/* Chat messages */}
                <div className="space-y-5 mb-8 font-light text-sm">
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-50 border border-gray-100 text-gray-800 px-5 py-3.5 rounded-2xl rounded-tl-sm max-w-[80%] shadow-sm">
                      Hi there, ask me anything about our products or services.
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
                      Do you have the Gold Crystal Centrepiece available for Saturday the 14th?
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
                      Yes! The Gold Crystal Centrepiece is available on Saturday 14th September. How many would you like to reserve?
                    </div>
                  </motion.div>
                </div>

                {/* Suggestions */}
                <div className="flex flex-wrap gap-2.5 mb-5">
                  <button className="bg-black text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-900 transition-colors shadow-sm">
                    Book this item
                  </button>
                  <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors">
                    View similar items
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

      {/* Dual capabilities callout — merged from two redundant dark banners */}
      <div className="bg-black pb-24 md:pb-32 pt-4">
        <section className="bg-black py-16 md:py-20 overflow-hidden relative rounded-3xl md:rounded-[40px] mx-4 sm:mx-6 lg:mx-8 border border-neutral-900 shadow-2xl">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle at top right, rgba(255,255,255,0.07) 0%, transparent 65%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle at bottom left, rgba(255,255,255,0.04) 0%, transparent 65%)',
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
                className="bg-black p-10 md:p-14 flex flex-col justify-between gap-10"
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
                className="bg-black p-10 md:p-14 flex flex-col justify-between gap-10"
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