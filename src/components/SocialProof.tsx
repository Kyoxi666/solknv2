import { useState } from 'react';
import { ChevronDown, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Portfolio } from './Portfolio';

export function SocialProof() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is included in your Managed IT Support?",
      a: "Our managed IT support covers 24/7 network monitoring, proactive maintenance, helpdesk support for your team, cybersecurity management, and regular strategic IT reviews."
    },
    {
      q: "Do you support businesses without an in-house IT person?",
      a: "Yes! In fact, that's our specialty. We act as your complete outsourced IT department. You get the expertise of a full IT team without the cost of hiring one internally."
    },
    {
      q: "How does the AI Virtual Receptionist work?",
      a: "Our AI receptionist uses advanced natural language processing to answer calls, understand customer inquiries, book appointments directly into your calendar, and send follow-up messages automatically."
    },
    {
      q: "Can you integrate with our existing software?",
      a: "Yes, our automation solutions and IT tools are designed to integrate seamlessly with most major CRMs, POS systems, ERPs, and calendar systems (like Google Workspace, Microsoft 365, etc.)."
    },
    {
      q: "What is your pricing structure?",
      a: "We offer transparent, fixed-fee monthly subscriptions for our Managed IT services, so you know exactly what you'll pay with no surprise bills. Network installations are quoted individually based on site requirements."
    }
  ];

  return (
    <>
      {/* Testimonials */}
      <section className="py-24 bg-white text-gray-900 rounded-[3rem] mt-[-2rem] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="flex flex-col items-center">
              <span className="text-gray-400 font-light text-2xl md:text-3xl mb-1 tracking-tight">Trusted</span>
              <span className="font-serif text-gray-500 text-5xl md:text-7xl mb-1 tracking-tight">by 200 +</span>
              <span className="font-serif text-gray-900 text-6xl md:text-8xl tracking-tight">Businesses</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '"Zero Downtime"',
                quote: "SOLKN completely overhauled our restaurant's network. The new POS system integration and guest Wi-Fi are flawless, and we haven't had a single drop in connectivity since.", 
                author: "Sarah Jenkins", 
                role: "Restaurant Owner"
              },
              { 
                title: '"True IT Partner"',
                quote: "We don't have an in-house IT guy, but with SOLKN, we don't need one. Their helpdesk is always available, and they proactively fix issues before we even notice them.", 
                author: "Mark Davies", 
                role: "Operations Manager"
              },
              { 
                title: '"Seamless Setup"',
                quote: "When we moved to our new office, they handled all the cabling, Wi-Fi installation, and server setup in a single weekend. It was the smoothest transition we've ever had.", 
                author: "David Chen", 
                role: "Managing Director"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300">
                <div>
                  <h3 className="text-2xl font-medium text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">{item.quote}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{item.author}</div>
                  <div className="text-xs text-gray-400">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900">Your questions, answered</h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-2">
                <button 
                  className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-lg font-medium text-gray-900 group-hover:text-[#1e293b] transition-colors">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#2b3d5b] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed pr-8">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 relative overflow-hidden rounded-[3rem] border border-gray-800 mx-4 sm:mx-6 lg:mx-8 mb-8 bg-[#0a0a0a] text-white">
        {/* Background Image Setup */}
        <div 
          className="absolute inset-0 z-0 opacity-80 mix-blend-screen"
          style={{ 
            backgroundImage: 'url("public/lastback.png")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 z-0 bg-black/40"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-white">Ready to transform your IT?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Book a free consultation today and discover how our managed IT and AI automation solutions can scale your business.</p>
          <Link to="/contact" className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
            Book a Call Now
          </Link>
        </div>
      </section>
    </>
  );
}
