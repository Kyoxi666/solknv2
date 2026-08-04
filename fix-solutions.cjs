const fs = require('fs');
const targetPath = 'src/pages/services/NetworkInfrastructurePage.tsx';
let content = fs.readFileSync(targetPath, 'utf8');

// The block to replace:
const regex = /<div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black\/10">[\s\S]*?(?=<section className="py-24 md:py-32 bg-\[#090e17\] text-white relative overflow-hidden rounded-t-\[3rem\])/;

const newSolutions = `
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (01) Network Design & Wi-Fi
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Business Wi-Fi that covers every corner.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  We design and install reliable Wi-Fi networks built for your space — strong signal for staff, customers, and connected devices.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Business Wi-Fi</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Guest Wi-Fi</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Site Survey & Design</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Coverage Planning</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (02) Routers, Firewalls & Switches
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">The right hardware, properly installed.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  We supply and install routers, firewalls, and managed switches sized correctly for your business.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Router & Firewall Installation</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Managed Switches</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Secure Setup</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Ongoing Support</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10 border-b">
              <div className="md:col-span-3 text-xs font-semibold text-black/50 tracking-widest uppercase">
                (03) Structured Cabling
              </div>
              <div className="md:col-span-5 pr-8">
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 uppercase">Clean, reliable wiring done right.</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  Professional cabling for offices, shops, and restaurants — no messy setups, no dropped connections.
                </p>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Structured Cabling</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Cabinet & Rack Setup</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Cable Management</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#2b3d5b] mt-1.5"></div> Future-Proof Layout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
`;

content = content.replace(regex, newSolutions);

fs.writeFileSync(targetPath, content);
