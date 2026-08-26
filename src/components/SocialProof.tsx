import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Portfolio } from './Portfolio';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote:
      "SOLKN completely overhauled our restaurant's network. The new POS system integration and guest Wi-Fi are flawless — we haven't had a single connectivity drop since.",
    author: 'Sarah Jenkins',
    role: 'Restaurant owner',
    highlight: 'Zero downtime since handover.',
    initials: 'SJ',
    color: 'bg-blue-600',
  },
  {
    quote:
      "We don't have an in-house IT person, but with SOLKN we don't need one. Their helpdesk is always available and they proactively fix issues before we even notice them.",
    author: 'Mark Davies',
    role: 'Operations manager',
    highlight: 'A true IT partner.',
    initials: 'MD',
    color: 'bg-emerald-600',
  },
  {
    quote:
      "When we moved to our new office, they handled all the cabling, Wi-Fi, and server setup in a single weekend. It was the most straightforward office transition we've ever had.",
    author: 'David Chen',
    role: 'Managing director',
    highlight: 'Smooth from day one.',
    initials: 'DC',
    color: 'bg-violet-600',
  },
];

const faqs = [
  {
    q: 'What is included in your managed IT support?',
    a: 'Our managed IT support covers 24/7 network monitoring, proactive maintenance, helpdesk support for your team, cybersecurity management, and regular strategic IT reviews.',
  },
  {
    q: 'Do you support businesses without an in-house IT person?',
    a: "Yes — that's our specialty. We act as your complete outsourced IT department. You get the expertise of a full IT team without the cost of hiring internally.",
  },
  {
    q: 'How does the AI virtual receptionist work?',
    a: 'Our AI receptionist uses advanced natural language processing to answer calls, understand customer inquiries, book appointments directly into your calendar, and send follow-up messages automatically.',
  },
  {
    q: 'Can you integrate with our existing software?',
    a: 'Yes. Our automation solutions and IT tools are designed to integrate with most major CRMs, POS systems, ERPs, and calendar platforms (Google Workspace, Microsoft 365, and more).',
  },
  {
    q: 'What is your pricing structure?',
    a: 'We offer transparent, fixed-fee monthly subscriptions for managed IT services — no surprise bills. Network installations are quoted individually based on your specific site requirements.',
  },
];

export function SocialProof() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Testimonials — 3-card grid layout */}
      <section className="py-24 md:py-32 bg-surface-light text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Trust headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-16 md:mb-20"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Trusted by businesses across London
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-none">
              <span className="text-gray-300">200+</span>{' '}
              <span className="text-gray-900">businesses.</span>
            </h2>
          </motion.div>

          {/* 3-card testimonial grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.32, 0.72, 0, 1] }}
                className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col justify-between gap-8 hover:bg-gray-50 transition-colors duration-300"
              >
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-5">
                    {t.highlight}
                  </p>
                  <blockquote className="text-gray-800 text-base md:text-lg font-light leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Portfolio */}
      <Portfolio />

      {/* FAQ */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900">
              Your questions, answered.
            </h2>
          </motion.div>

          <div className="space-y-0">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100">
                <button
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-base md:text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors pr-8">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    openFaq === idx ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed pr-8">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — revised copy */}
      <div className="bg-surface-light pb-16 pt-4">
        <section
          id="contact"
          className="py-24 text-white relative overflow-hidden rounded-[3rem] border border-gray-800 mx-4 sm:mx-6 lg:mx-8 shadow-2xl"
          style={{ background: '#0a0a0a' }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 z-0 opacity-70 mix-blend-screen"
            style={{
              backgroundImage: 'url("/marketingbanner.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 z-0 bg-black/50"></div>

          {/* Flare effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.3)_0%,transparent_70%)] blur-[80px]"></div>
            <div className="absolute top-[0%] right-[10%] w-[1px] h-[200%] bg-white/20 rotate-[45deg] blur-[2px]"></div>
            <div className="absolute top-[10%] right-[0%] w-[200%] h-[1px] bg-white/20 rotate-[45deg] blur-[2px]"></div>
            {/* Noise overlay */}
            <div
              className="absolute inset-0 opacity-20 mix-blend-overlay"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
            ></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full">
            <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-white tracking-tight leading-[1.05]">
              Let's build your IT foundation.
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Book a free consultation and discover how managed IT and AI automation can help your business run better, faster, and more securely.
            </p>
            <Link
              to="/contact"
              className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-md hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              Schedule a consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
