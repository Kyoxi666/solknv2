const fs = require('fs');
const targetPath = 'src/pages/services/NetworkInfrastructurePage.tsx';
let content = fs.readFileSync(targetPath, 'utf8');

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

content = content.replace(
  '{/* 5.5 New Section: How We Work Timeline */}',
  techSection + '\n      {/* 5.5 New Section: How We Work Timeline */}'
);

fs.writeFileSync(targetPath, content);
