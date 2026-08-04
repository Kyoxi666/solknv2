import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Portfolio } from './Portfolio';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote:
      'SOLKN completely overhauled our restaurant\'s network. The new POS system integration and guest Wi-Fi are flawless — we haven\'t had a single connectivity drop since.',
    author: 'Sarah Jenkins',
    role: 'Restaurant Owner',
    highlight: 'Zero downtime since handover.',
  },
  {
    quote:
      "We don't have an in-house IT person, but with SOLKN we don't need one. Their helpdesk is always available and they proactively fix issues before we even notice them.",
    author: 'Mark Davies',
    role: 'Operations Manager',
    highlight: 'A true IT partner.',
  },
  {
    quote:
      'When we moved to our new office, they handled all the cabling, Wi-Fi, and server setup in a single weekend. It was the most straightforward office transition we\'ve ever had.',
    author: 'David Chen',
    role: 'Managing Director',
    highlight: 'Smooth from day one.',
  },
];

const faqs = [
  {
    q: 'What is included in your Managed IT Support?',
    a: 'Our managed IT support covers 24/7 network monitoring, proactive maintenance, helpdesk support for your team, cybersecurity management, and regular strategic IT reviews.',
  },
  {
    q: 'Do you support businesses without an in-house IT person?',
    a: "Yes — that's our specialty. We act as your complete outsourced IT department. You get the expertise of a full IT team without the cost of hiring internally.",
  },
  {
    q: 'How does the AI Virtual Receptionist work?',
    a: 'Our AI receptionist uses advanced natural language processing to answer calls, understand customer inquiries, book appointments directly into your calendar, and send follow-up messages automatically.',
  },
  {
    q: 'Can you integrate with our existing software?',
    a: 'Yes. Our automation solutions and IT tools are designed to integrate with most major CRMs, POS systems, ERPs, and calendar platforms (Google Workspace, Microsoft 365, and more).',
  },
  {
    q: 'What is your pricing structure?',
    a: 'We offer transparent, fixed-fee monthly subscriptions for Managed IT services — no surprise bills. Network installations are quoted individually based on your specific site requirements.',
  },
];

export function SocialProof() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const t = testimonials[activeTestimonial];

  return (
    <>
      {/* Testimonials — single featured quote with switcher */}
      <section className="py-24 md:py-32 bg-white text-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Trust headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="text-center mb-16 md:mb-20"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#A3A3A3] mb-4">
              Trusted by businesses across London
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-none">
              <span className="text-[#E0E0E0]">200+</span>{' '}
              <span className="text-[#000000]">businesses.</span>
            </h2>
          </motion.div>

          {/* Featured testimonial */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-[#A3A3A3] text-xs font-semibold uppercase tracking-widest mb-6 text-center">
              {t.highlight}
            </p>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-[#000000] leading-relaxed text-center mb-10">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="text-center">
              <p className="text-sm font-semibold text-[#000000]">{t.author}</p>
              <p className="text-xs text-[#A3A3A3] mt-1">{t.role}</p>
            </div>
          </motion.div>

          {/* Switcher dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                aria-label={`View testimonial from ${testimonials[idx].author}`}
                className={`rounded-full transition-all duration-300 ${
                  idx === activeTestimonial
                    ? 'w-8 h-2 bg-[#E87722]'
                    : 'w-2 h-2 bg-[#E0E0E0] hover:bg-[#A3A3A3]'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Portfolio */}
      <Portfolio />

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#000000]">
              Your questions, answered.
            </h2>
          </motion.div>

          <div className="space-y-0">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#E0E0E0]">
                <button
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-base md:text-lg font-medium text-[#000000] group-hover:text-[#6B6B6B] transition-colors pr-8">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#A3A3A3] shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    openFaq === idx ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#6B6B6B] text-sm leading-relaxed pr-8">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="py-24 md:py-32 relative overflow-hidden rounded-[2.5rem] border border-[#E0E0E0] mx-4 sm:mx-6 lg:mx-8 mb-8 bg-[#F7F7F7] text-[#000000]"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#A3A3A3] mb-6">
            Get started today
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-[#000000]">
            Ready to transform your IT?
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-10 max-w-xl mx-auto font-normal leading-relaxed">
            Book a free consultation and discover how managed IT and AI automation
            can help your business run better.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-[#E87722] text-white pl-8 pr-3 py-3 rounded-full font-semibold text-sm hover:bg-[#C4621A] transition-colors shadow-lg shadow-[#E87722]/10 active:scale-[0.98]"
          >
            Book a call now
            <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-300">
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </span>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
