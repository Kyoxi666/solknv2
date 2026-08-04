const fs = require('fs');

const targetPath = 'src/pages/services/NetworkInfrastructurePage.tsx';
let content = fs.readFileSync(targetPath, 'utf8');

// 1. Fix literal \n in H1 and update Hero text
content = content.replace(
  'Infrastructure <br/>\n                  Built to Scale',
  'Networks That <br/> Just Work'
);

content = content.replace(
  'FROM EDGE TO CORE',
  'FROM DESIGN TO DEPLOYMENT'
);

content = content.replace(
  'Enterprise-grade network architecture designed for maximum reliability, speed, and security. We build the backbone of your digital operations.',
  'Reliable networks for restaurants, shops, and small offices — Wi-Fi, routers, firewalls, and cabling installed and set up properly, the first time.'
);

content = content.replace(
  'NETWORK INFRASTRUCTURE • ARCHITECTURE • DEPLOYMENT •',
  'WI-FI • ROUTERS • FIREWALLS • CABLING • INSTALLATION •'
);

// Add subtitle about target audience
// Find the h1 and add it after the subtitle
const targetSubtitle = 'Reliable networks for restaurants, shops, and small offices — Wi-Fi, routers, firewalls, and cabling installed and set up properly, the first time.</p>';
content = content.replace(targetSubtitle, targetSubtitle + '\n            <p className="mt-4 text-sm text-[#47638c] font-medium tracking-wide uppercase">Restaurants, retail shops, and small offices</p>');

// 2. "Our Solutions" section — replace all 3 items
content = content.replace(
  `<div className="border-t border-black/10 py-8 flex flex-col md:flex-row gap-6">
                 <div className="w-full md:w-1/4">
                    <span className="text-[#1a1a1a]/40 text-sm font-medium">(01)</span>
                 </div>
                 <div className="w-full md:w-3/4">
                    <h3 className="text-2xl font-medium text-[#1e293b] mb-2 tracking-tight">Core Routing</h3>
                    <p className="text-lg text-black/70 mb-6 font-light">
                      High-performance core routing
                    </p>
                    <p className="text-black/60 text-sm leading-relaxed max-w-2xl mb-8">
                       Enterprise routers and switches designed to handle massive throughput. We deploy robust core networks that eliminate bottlenecks, ensure rapid data delivery, and maintain stable connections across complex environments.
                    </p>
                    <ul className="space-y-3">
                       {['BGP & OSPF Configuration', 'Multi-WAN Failover', 'QoS Traffic Shaping', 'High-Availability Pairs'].map((item, i) => (
                         <li key={i} className="flex items-center text-sm text-[#1a1a1a]">
                            <span className="w-1.5 h-1.5 bg-[#1e293b] rounded-full mr-3"></span>
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>`,
  `<div className="border-t border-black/10 py-8 flex flex-col md:flex-row gap-6">
                 <div className="w-full md:w-1/4">
                    <span className="text-[#1a1a1a]/40 text-sm font-medium">(01)</span>
                 </div>
                 <div className="w-full md:w-3/4">
                    <h3 className="text-2xl font-medium text-[#1e293b] mb-2 tracking-tight">Network Design & Wi-Fi</h3>
                    <p className="text-lg text-black/70 mb-6 font-light">
                      Business Wi-Fi that covers every corner
                    </p>
                    <p className="text-black/60 text-sm leading-relaxed max-w-2xl mb-8">
                       We design and install reliable Wi-Fi networks built for your space — strong signal for staff, customers, and connected devices.
                    </p>
                    <ul className="space-y-3">
                       {['Business Wi-Fi', 'Guest Wi-Fi', 'Site Survey & Design', 'Coverage Planning'].map((item, i) => (
                         <li key={i} className="flex items-center text-sm text-[#1a1a1a]">
                            <span className="w-1.5 h-1.5 bg-[#1e293b] rounded-full mr-3"></span>
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>`
);

content = content.replace(
  `<div className="border-t border-black/10 py-8 flex flex-col md:flex-row gap-6">
                 <div className="w-full md:w-1/4">
                    <span className="text-[#1a1a1a]/40 text-sm font-medium">(02)</span>
                 </div>
                 <div className="w-full md:w-3/4">
                    <h3 className="text-2xl font-medium text-[#1e293b] mb-2 tracking-tight">Wireless Solutions</h3>
                    <p className="text-lg text-black/70 mb-6 font-light">
                      Seamless mobility everywhere
                    </p>
                    <p className="text-black/60 text-sm leading-relaxed max-w-2xl mb-8">
                       High-density Wi-Fi 6/6E deployments that provide uninterrupted coverage across corporate campuses, warehouses, and multi-floor buildings. We eliminate dead zones and interference.
                    </p>
                    <ul className="space-y-3">
                       {['Wi-Fi 6 & 6E Deployments', 'RF Site Surveys', 'Captive Portals', 'Mesh Architecture'].map((item, i) => (
                         <li key={i} className="flex items-center text-sm text-[#1a1a1a]">
                            <span className="w-1.5 h-1.5 bg-[#1e293b] rounded-full mr-3"></span>
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>`,
  `<div className="border-t border-black/10 py-8 flex flex-col md:flex-row gap-6">
                 <div className="w-full md:w-1/4">
                    <span className="text-[#1a1a1a]/40 text-sm font-medium">(02)</span>
                 </div>
                 <div className="w-full md:w-3/4">
                    <h3 className="text-2xl font-medium text-[#1e293b] mb-2 tracking-tight">Routers, Firewalls & Switches</h3>
                    <p className="text-lg text-black/70 mb-6 font-light">
                      The right hardware, properly installed
                    </p>
                    <p className="text-black/60 text-sm leading-relaxed max-w-2xl mb-8">
                       We supply and install routers, firewalls, and managed switches sized correctly for your business.
                    </p>
                    <ul className="space-y-3">
                       {['Router & Firewall Installation', 'Managed Switches', 'Secure Setup', 'Ongoing Support'].map((item, i) => (
                         <li key={i} className="flex items-center text-sm text-[#1a1a1a]">
                            <span className="w-1.5 h-1.5 bg-[#1e293b] rounded-full mr-3"></span>
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>`
);

content = content.replace(
  `<div className="border-t border-black/10 py-8 flex flex-col md:flex-row gap-6 border-b">
                 <div className="w-full md:w-1/4">
                    <span className="text-[#1a1a1a]/40 text-sm font-medium">(03)</span>
                 </div>
                 <div className="w-full md:w-3/4">
                    <h3 className="text-2xl font-medium text-[#1e293b] mb-2 tracking-tight">Edge Security</h3>
                    <p className="text-lg text-black/70 mb-6 font-light">
                      Protecting every packet
                    </p>
                    <p className="text-black/60 text-sm leading-relaxed max-w-2xl mb-8">
                       Next-generation firewalls and intrusion prevention systems deployed at the network edge. We secure your perimeter while facilitating zero-trust access for remote teams.
                    </p>
                    <ul className="space-y-3">
                       {['Next-Gen Firewalls (NGFW)', 'Intrusion Detection (IDS/IPS)', 'Site-to-Site VPNs', 'Zero Trust Network Access (ZTNA)'].map((item, i) => (
                         <li key={i} className="flex items-center text-sm text-[#1a1a1a]">
                            <span className="w-1.5 h-1.5 bg-[#1e293b] rounded-full mr-3"></span>
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>`,
  `<div className="border-t border-black/10 py-8 flex flex-col md:flex-row gap-6 border-b">
                 <div className="w-full md:w-1/4">
                    <span className="text-[#1a1a1a]/40 text-sm font-medium">(03)</span>
                 </div>
                 <div className="w-full md:w-3/4">
                    <h3 className="text-2xl font-medium text-[#1e293b] mb-2 tracking-tight">Structured Cabling</h3>
                    <p className="text-lg text-black/70 mb-6 font-light">
                      Clean, reliable wiring done right
                    </p>
                    <p className="text-black/60 text-sm leading-relaxed max-w-2xl mb-8">
                       Professional cabling for offices, shops, and restaurants — no messy setups, no dropped connections.
                    </p>
                    <ul className="space-y-3">
                       {['Structured Cabling', 'Cabinet & Rack Setup', 'Cable Management', 'Future-Proof Layout'].map((item, i) => (
                         <li key={i} className="flex items-center text-sm text-[#1a1a1a]">
                            <span className="w-1.5 h-1.5 bg-[#1e293b] rounded-full mr-3"></span>
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>`
);

// New section to add: "Technology We Install"
const techSection = `
      {/* Technology We Install Section */}
      <section className="py-24 bg-[#090e17] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Technology We Install</h2>
            <p className="text-white/60 text-lg">We partner with industry-leading brands to provide reliable equipment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <h3 className="text-2xl font-medium mb-3 text-white">Core Networking</h3>
              <p className="text-white/60 mb-6">Ubiquiti UniFi, TP-Link Omada, Cisco Business</p>
              <p className="text-sm text-white/80">Great value networking for shops and small offices</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <h3 className="text-2xl font-medium mb-3 text-white">Business Firewalls</h3>
              <p className="text-white/60 mb-6">Fortinet, DrayTek, Zyxel</p>
              <p className="text-sm text-white/80">Reliable security suited to your business size</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <h3 className="text-2xl font-medium mb-3 text-white">Enterprise Networking</h3>
              <p className="text-white/60 mb-6">Cisco Meraki, HPE Aruba</p>
              <p className="text-sm text-white/80">For businesses ready to scale or manage multiple sites</p>
            </div>
          </div>
        </div>
      </section>
`;

content = content.replace('</section>\n\n      <section className="py-24 md:py-32 bg-[#090e17] text-white relative overflow-hidden', '</section>\n\n' + techSection + '\n\n      <section className="py-24 md:py-32 bg-[#090e17] text-white relative overflow-hidden');

// Mission statement
content = content.replace(
  'We engineer the invisible foundations that keep your entire enterprise connected and secure.',
  'We design and install networks small businesses can rely on — without the enterprise price tag or complexity.'
);
content = content.replace(
  'Robust Architecture',
  'Built for Small Business'
);

// Feature grid section
content = content.replace('Build your network robustly', 'Set up your network the right way');
content = content.replace('Deploy scalable network infrastructure that grows with your business...', 'From a single router to a fully wired office, we handle installs for businesses of every size.');

content = content.replace('Achieve 99.999% uptime for mission-critical applications', 'Keep your Wi-Fi and card payments online during business hours');
content = content.replace('Eliminate network congestion with dynamic bandwidth allocation', 'Fast, reliable Wi-Fi even when it\'s busy');
content = content.replace('Secure your perimeter against modern cyber threats', 'Protect customer and business data with a properly configured firewall');
content = content.replace('Scale your operations seamlessly as team size grows', 'Add new devices, staff, or a second location without starting over');
content = content.replace('Reduce total cost of ownership with efficient design', 'No unnecessary hardware — just what your business actually needs');

// Stats section
content = content.replace(
  'We deploy industry-leading hardware and software-defined networking solutions to create resilient architectures...',
  'We install proven, business-grade equipment — configured properly and supported after the job is done.'
);
content = content.replace(
  'Every packet delivered securely, efficiently, and instantly.',
  'Simple, reliable networks — installed once, working every day.'
);
content = content.replace('0', 'Same-Week');
content = content.replace('Network Outages', 'Install Turnaround');
content = content.replace('100x', 'Free');
content = content.replace('Throughput', 'On-Site Quote');
content = content.replace('24/7', 'Local');
content = content.replace('Active Monitoring', 'Engineers');
content = content.replace('<1ms', '200+');
content = content.replace('Core Latency', 'Businesses Installed');

// Timeline ("How We Work") section
content = content.replace(
  'From initial survey to full deployment, here is how we build your network.',
  'From first call to finished install, here\'s how we get your business connected.'
);

content = content.replace('Infrastructure Audit', 'Site Visit');
content = content.replace(
  'We survey your current topology and physical locations to understand capacity constraints and structural needs.',
  'We visit your business to see the space, check existing setup, and understand what you need.'
);

content = content.replace('Architecture Design', 'Design & Quote');
content = content.replace(
  'We design a comprehensive blueprint incorporating the right hardware and software-defined pathways.',
  'We put together a clear plan and a straightforward quote — no jargon, no surprises.'
);

content = content.replace('Implementation', 'Installation');
content = content.replace(
  'Our certified engineers install and configure routers, switches, and access points for optimal performance.',
  'We install and configure everything — routers, switches, Wi-Fi, and cabling — with minimal disruption to your business.'
);

content = content.replace('Monitor & Optimize', 'Support & Aftercare');
content = content.replace(
  'We monitor traffic flows and device health, applying updates and optimizing routes to maintain peak efficiency.',
  'We\'re on hand after the install for support, updates, or any changes as your business grows.'
);

content = content.replace('Book a free audit', 'Get a free quote');

// Final section ("2025 Initiatives") -> replace with CTA block
const ctaSection = `      <section id="contact" className="py-24 bg-[#0a0f1a] text-white relative overflow-hidden rounded-[3rem] shadow-2xl mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0f1a]"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#1e293b]/60 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[0%] w-[60%] h-[60%] bg-[#2b3d5b]/40 rounded-full blur-[140px] mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">Ready to upgrade your network?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Get a free on-site quote — no obligation. We install packages to suit any budget.</p>
          <Link to="/contact" className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300">
            Book your free quote
          </Link>
        </div>
      </section>`;

// Replace from '2025 Initiatives' to the end of the file.
// We'll use a regex that matches the entire section 6.
const regex = /\{\/\*\s*6\.\s*New\s*Section\s*4:\s*Colored\s*Awards\/Bottom\s*\*\/\}.*?<\/section>/s;
content = content.replace(regex, ctaSection);

fs.writeFileSync(targetPath, content);
