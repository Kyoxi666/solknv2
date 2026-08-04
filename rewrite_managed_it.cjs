const fs = require('fs');
const path = 'src/pages/services/ManagedITPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// Hero section
content = content.replace(
  'We provide comprehensive infrastructure management, proactive monitoring, and 24/7 technical support to keep your business running smoothly.',
  '24/7 monitoring, cybersecurity, and cloud management for small businesses — we keep your systems running so you don\'t have to worry about them.'
);
content = content.replace('Everything <br/>\n            You Need To Scale!', 'IT That <br/>\n            Runs Itself');

// Solutions Section
content = content.replace(
  'Round-the-clock surveillance of your systems to prevent downtime. We identify and resolve potential issues before they can impact your business operations.',
  'We watch your systems around the clock and fix issues before they cause downtime.'
);
content = content.replace(
  'Implementing robust security measures to protect sensitive data from emerging threats and ensure compliance.',
  'Implementing robust security measures to protect sensitive data from emerging threats.'
);
content = content.replace('> AWS/Azure Management', '> Microsoft 365 & Google Workspace');

// Mission statement
content = content.replace(
  'We create infrastructures that ignite growth by reimagining reliability.',
  `We keep your systems monitored, secure, and running — so downtime doesn't cost you customers or time.`
);

// Feature grid
content = content.replace(
  'Own the operational stability space where your team is working — our IT strategies help you scale securely and convert uptime into real business impact.',
  'From daily monitoring to cybersecurity and cloud management, we keep your business running without interruption.'
);
content = content.replace(
  'Secure critical data without relying on patchwork solutions',
  'Keep customer and business data protected with proper security, not quick fixes'
);
content = content.replace(
  'Improve system authority and network trustworthiness',
  'Peace of mind knowing your systems are being watched'
);
content = content.replace(
  'Increase productivity from targeted infrastructure intent',
  'Less time firefighting IT issues, more time running your business'
);
content = content.replace(
  'Long-term stability that compounds over time',
  'One team looking after your systems, month after month'
);

// Stats section
content = content.replace(
  "For over 19 years, we've worked alongside startups and leading companies to rediscover their operational essence. Through proactive management and technology, we craft infrastructure that connects, protects, and drives real impact.",
  "We work alongside small businesses to proactively manage their IT. Through consistent monitoring and security, we craft infrastructure that protects your data and keeps you online."
);
content = content.replace('0</div>', 'Proactive</div>');
content = content.replace('Breaches</div>', 'Threat Detection</div>');

// Timeline
content = content.replace(
  'Our team sets everything up — from proactive monitoring tools to network hardening — for a seamless transition.',
  'We set up monitoring, backups, and security tools in the background, with minimal disruption to your day-to-day.'
);

// Add "What's Included" and link to IT Outsourcing
const whatsIncludedSection = `
      {/* What's Included */}
      <section className="py-24 bg-white text-[#1a1a1a] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-[#1e293b]">Monitoring Packages</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Choose the level of proactive management your business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F6] p-10 rounded-3xl border border-black/5 flex flex-col">
              <h3 className="text-2xl font-medium text-[#1e293b] mb-2">Essentials</h3>
              <p className="text-sm text-slate-500 mb-6">Basic monitoring & protection</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-sm text-slate-700"><span className="text-[#2b3d5b]">✓</span> 24/7 System Monitoring</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><span className="text-[#2b3d5b]">✓</span> Core Security Updates</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><span className="text-[#2b3d5b]">✓</span> Basic Cloud Backups</li>
              </ul>
            </div>
            <div className="bg-[#090e17] text-white p-10 rounded-3xl border border-black/5 flex flex-col relative transform md:-translate-y-4 shadow-xl">
              <div className="absolute top-0 right-0 bg-[#47638c] text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">Recommended</div>
              <h3 className="text-2xl font-medium mb-2">Standard</h3>
              <p className="text-white/60 text-sm mb-6">Complete proactive management</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-sm text-white/90"><span className="text-sky-400">✓</span> Everything in Essentials</li>
                <li className="flex items-center gap-3 text-sm text-white/90"><span className="text-sky-400">✓</span> Advanced Threat Detection</li>
                <li className="flex items-center gap-3 text-sm text-white/90"><span className="text-sky-400">✓</span> Microsoft 365 / Google Workspace Management</li>
                <li className="flex items-center gap-3 text-sm text-white/90"><span className="text-sky-400">✓</span> Daily Verified Backups</li>
              </ul>
            </div>
            <div className="bg-[#FAF9F6] p-10 rounded-3xl border border-black/5 flex flex-col">
              <h3 className="text-2xl font-medium text-[#1e293b] mb-2">Premium</h3>
              <p className="text-sm text-slate-500 mb-6">Enterprise-grade security</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-sm text-slate-700"><span className="text-[#2b3d5b]">✓</span> Everything in Standard</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><span className="text-[#2b3d5b]">✓</span> Zero-Trust Architecture</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><span className="text-[#2b3d5b]">✓</span> Compliance Reporting</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><span className="text-[#2b3d5b]">✓</span> Priority Response SLA</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center bg-[#f0f4f8] rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-medium text-[#1e293b] mb-3">Looking for day-to-day helpdesk support?</h3>
            <p className="text-slate-600 mb-6">If you need immediate technical help for your team alongside proactive monitoring, we offer that too.</p>
            <Link to="/services/it-outsourcing" className="inline-flex items-center font-medium text-[#2b3d5b] hover:text-[#47638c] transition-colors">
              Explore our IT Support services <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
`;

content = content.replace('{/* 5.5 New Section: How We Work Timeline */}', whatsIncludedSection + '\n      {/* 5.5 New Section: How We Work Timeline */}');

// Final Section
const ctaSection = `      <section id="contact" className="py-24 bg-[#0a0f1a] text-white relative overflow-hidden rounded-[3rem] shadow-2xl mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0f1a]"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#1e293b]/60 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[0%] w-[60%] h-[60%] bg-[#2b3d5b]/40 rounded-full blur-[140px] mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">Want IT that just works?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Let us handle the monitoring and security so you can focus on your business.</p>
          <Link to="/contact" className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300">
            Get a free consultation
          </Link>
        </div>
      </section>
    </div>
  );
}`;

const finalSectionRegex = /\{\/\*\s*6\.\s*New\s*Section\s*4:\s*Colored\s*Awards\/Bottom\s*\*\/\}.*?<\/div>\s*\);\s*\}/s;
content = content.replace(finalSectionRegex, ctaSection);

fs.writeFileSync(path, content);
