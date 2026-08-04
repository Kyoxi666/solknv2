const fs = require('fs');
const path = 'src/pages/services/AIBusinessSolutionsPage.tsx';
let content = fs.readFileSync(path, 'utf8');

const beforeAfterSection = `
      {/* Before / After Section */}
      <section className="py-24 md:py-32 bg-white text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#1e293b]">
              The <span className="italic font-light">difference</span> AI makes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="bg-[#fdf8f6] border border-red-900/10 rounded-[2rem] p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500/20"></div>
              <h3 className="text-2xl font-medium mb-8 text-red-950/80 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center text-sm font-bold text-red-900/60">✕</span>
                Before AI
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="text-red-900/40 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e293b] mb-1">Missed Calls & Enquiries</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Losing potential customers because you can't answer the phone while working.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-red-900/40 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e293b] mb-1">Manual Replies</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Typing out the same answers to "What are your hours?" or "Do you have availability?"</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-red-900/40 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e293b] mb-1">Hours on Spreadsheets</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Spending evenings and weekends catching up on data entry, admin, and reporting.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* After */}
            <div className="bg-[#f6fbf9] border border-emerald-900/10 rounded-[2rem] p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/20"></div>
              <h3 className="text-2xl font-medium mb-8 text-emerald-950/80 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-900/10 flex items-center justify-center text-sm font-bold text-emerald-900/60">✓</span>
                After AI
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="text-emerald-700/60 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e293b] mb-1">Instant Answers</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Customers get immediate responses, bookings, and info 24/7 without waiting.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-emerald-700/60 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e293b] mb-1">Automated Marketing</p>
                    <p className="text-sm text-slate-600 leading-relaxed">WhatsApp and SMS campaigns run themselves, driving repeat business on autopilot.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-emerald-700/60 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e293b] mb-1">Admin on Autopilot</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Data entry and reporting are automated, giving you your evenings and weekends back.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}`;

content = content.replace('{/* FAQ Section */}', beforeAfterSection);
fs.writeFileSync(path, content);
