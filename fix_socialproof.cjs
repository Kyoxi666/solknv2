const fs = require('fs');
const path = 'src/components/SocialProof.tsx';
let content = fs.readFileSync(path, 'utf8');

// Update Companies to Businesses
content = content.replace(
  '<span className="font-serif text-gray-900 text-6xl md:text-8xl tracking-tight">Companies</span>',
  '<span className="font-serif text-gray-900 text-6xl md:text-8xl tracking-tight">Businesses</span>'
);

// Replace the testimonials array contents
const testimonialsRegex = /\[\s*\{\s*title: '"Fast & Efficient"',[\s\S]*?\]\.map/m;
const newTestimonials = `[
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
            ].map`;
content = content.replace(testimonialsRegex, newTestimonials);

// Add the new FAQ question
const faqsRegex = /const faqs = \[[\s\S]*?\];/;
const newFaqs = `const faqs = [
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
  ];`;
content = content.replace(faqsRegex, newFaqs);

fs.writeFileSync(path, content);
