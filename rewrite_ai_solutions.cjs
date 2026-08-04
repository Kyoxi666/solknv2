const fs = require('fs');
const path = 'src/pages/services/AIBusinessSolutionsPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Hero section
content = content.replace(
  'Intelligent conversational agents that handle customer inquiries, route calls, and provide support 400%. Act as your front-line support effortlessly.',
  'Intelligent AI chatbots that answer customer questions instantly, automate WhatsApp and SMS marketing, and handle repetitive admin tasks — so your business runs smoother, day and night.'
);

// Add "Who it's for" line
const targetSubtitle = 'Intelligent AI chatbots that answer customer questions instantly, automate WhatsApp and SMS marketing, and handle repetitive admin tasks — so your business runs smoother, day and night.</p>';
content = content.replace(targetSubtitle, targetSubtitle + '\n              <p className="mt-4 text-xs md:text-sm text-[#47638c] font-medium tracking-wide uppercase">Restaurants, retail shops, and small offices</p>');

// 2. Solutions section
const oldSolutionsRegex = /<div className="space-y-0">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
const newSolutions = `<div className="space-y-0">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (01) AI Chatbots
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Answers your customers instantly.</h3>
                <p className="text-black/60 leading-relaxed text-sm mb-4">
                  AI-powered chatbots for your website that answer common questions — opening hours, bookings, pricing — any time, day or night.
                </p>
                <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-4 inline-block">
                  <p className="text-sm text-slate-600 italic">"Ask our AI if we're open — it'll tell you the hours, take a booking, or answer a menu question, instantly."</p>
                </div>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70 mt-2">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Website Chatbot</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Instant Answers</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Booking & FAQ Handling</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Always-On Availability</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (02) WhatsApp & SMS Marketing
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Reach customers where they already are.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  Automated WhatsApp and SMS campaigns that send offers, reminders, and updates — without you lifting a finger.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> WhatsApp Automation</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> SMS Campaigns</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Appointment Reminders</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Customer Re-engagement</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (03) Workflow & Spreadsheet Automation
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Less admin, more time back.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  We automate repetitive tasks — spreadsheets, data entry, reporting — so your team spends less time on admin and more on customers.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Spreadsheet Automation</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Data Entry Reduction</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Automated Reporting</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Task Scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>`;
content = content.replace(oldSolutionsRegex, newSolutions);


// 3. Mission statement section
content = content.replace(
  'We build agents that ignite satisfaction by reimagining automated support.',
  'We build AI tools that answer customers, automate your marketing, and take repetitive tasks off your plate.'
);
content = content.replace(
  'Intelligent Automation',
  'AI for Small Business'
);

// 4. Feature grid
content = content.replace('Automate <span className="italic font-light">conversations</span> <span className="italic font-light">seamlessly</span>', 'AI that works <span className="italic font-light">while</span> <span className="italic font-light">you don\'t have to</span>');
content = content.replace('Own the support space where your customers are asking — our AI strategies help you respond instantly and convert conversations into real business impact.', 'From answering customer questions to automating your marketing and admin, our AI tools save you time and never miss an enquiry.');

content = content.replace('Resolve queries faster on web, mobile, and social channels', 'Answer customer questions instantly, any time of day');
content = content.replace('Secure 400% coverage without relying on human shifts', 'Cover evenings and weekends without hiring extra staff');
content = content.replace('Improve brand authority and customer trustworthiness', 'Send WhatsApp and SMS updates that keep customers coming back');
content = content.replace('Increase conversions from targeted conversational intent', 'Turn website visitors into bookings and enquiries');
content = content.replace('Long-term support ROI that compounds over time', 'Cut hours spent on spreadsheets and repetitive admin');

// 5. Stats section
content = content.replace(
  "For years, we've worked alongside growing companies to rediscover their support essence. Through AI, empathy, and technology, we craft conversational experiences that connect and drive real satisfaction.",
  "We help small businesses answer customers faster, market smarter, and cut down on repetitive admin — using simple, reliable AI tools."
);
content = content.replace(
  "Every interaction is a fusion of context, speed and accuracy.",
  "Every message answered, every task automated, without the manual work."
);
content = content.replace('400%', '50+');
content = content.replace('ROI', 'Businesses Served');
content = content.replace('10,000h', '40h');
content = content.replace('Time Saved', 'Hours Saved per Month');
content = content.replace('&lt;1s', '24/7');
content = content.replace('Error Reduction', 'Chatbot Availability');
content = content.replace('40%', 'Fewer');
content = content.replace('Cost Reduction', 'Missed Enquiries');

// 6. Timeline ("How We Work")
content = content.replace(
  "From first mapping to autonomous support, here's how we automate your conversations.",
  "From first chat to full automation, here's how we set your business up."
);
content = content.replace('Audit & Strategy Call', 'Discovery Call');
content = content.replace(
  'We start with a deep dive into your customer support tickets and common queries to identify the highest-impact automation points.',
  'We learn about your business, your customers\' most common questions, and where you\'re losing time to admin.'
);
content = content.replace('Custom Persona', 'Build & Customize');
content = content.replace(
  'Based on your brand voice, we craft a tailored conversational flow and knowledge base for the AI.',
  'We set up your chatbot, WhatsApp/SMS flows, and automations to match your brand and how your business runs.'
);
content = content.replace('Implementation', 'Launch');
content = content.replace(
  'Our team sets everything up — integrating the chatbot with your website and CRM — for a seamless launch.',
  'We connect everything to your website, WhatsApp, and existing tools — live and working within days.'
);
content = content.replace('Scale & Optimize', 'Support & Improve');
content = content.replace(
  'We continuously analyze chat transcripts and improve the AI\'s responses to maximize resolution rates.',
  'We keep an eye on performance and fine-tune responses and automations as your business grows.'
);
content = content.replace('Book a free audit', 'Book a free consultation');


// Add FAQ section before How We Work
const faqSection = `
      {/* FAQ Section */}
      <section className="py-24 bg-white text-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-[#1e293b]">Common Questions</h2>
            <p className="text-slate-600 text-lg">Thinking about AI for your business? Here's what you need to know.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-[#FAF9F6] p-8 rounded-[2rem] border border-black/5">
              <h3 className="text-xl font-medium mb-2 text-[#1e293b]">Will it sound robotic?</h3>
              <p className="text-slate-600">Not at all. We train the AI on your brand voice so it sounds just like you—friendly, professional, and helpful.</p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-[2rem] border border-black/5">
              <h3 className="text-xl font-medium mb-2 text-[#1e293b]">Can it be turned off or handed to a human?</h3>
              <p className="text-slate-600">Yes. The chatbot can seamlessly hand over complex queries to you or your staff, or you can turn it off entirely during business hours if you prefer.</p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-[2rem] border border-black/5">
              <h3 className="text-xl font-medium mb-2 text-[#1e293b]">Does it work with WhatsApp Business?</h3>
              <p className="text-slate-600">Yes, it integrates smoothly with WhatsApp Business, allowing you to automate replies, send offers, and manage bookings right where your customers already message you.</p>
            </div>
          </div>
        </div>
      </section>
`;

content = content.replace(
  '{/* 5.5 New Section: How We Work Timeline */}',
  faqSection + '\n      {/* 5.5 New Section: How We Work Timeline */}'
);

// 7. Final section CTA (replace "2025 Initiatives" section)
const ctaSection = `      <section id="contact" className="py-24 bg-[#0a0f1a] text-white relative overflow-hidden rounded-[3rem] shadow-2xl mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0f1a]"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#1e293b]/60 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[0%] w-[60%] h-[60%] bg-[#2b3d5b]/40 rounded-full blur-[140px] mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">Ready to see what AI can do?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">See what AI can take off your plate — book a free consultation today.</p>
          <Link to="/contact" className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300">
            Book your free consultation
          </Link>
        </div>
      </section>
    </div>
  );
}`;

const finalSectionRegex = /\{\/\*\s*6\.\s*New\s*Section\s*4:\s*Colored\s*Awards\/Bottom\s*\*\/\}.*?<\/div>\s*\);\s*\}/s;
content = content.replace(finalSectionRegex, ctaSection);

fs.writeFileSync(path, content);
