const fs = require('fs');

let content = fs.readFileSync('src/pages/ContactPage.tsx', 'utf8');

// The new left side
const newLeftSide = `          {/* Left Side */}
          <div className="lg:w-5/12 flex flex-col">
            <div className="relative overflow-hidden rounded-[2rem] p-8 md:p-10 text-white bg-[#0a0f1a] shadow-2xl h-full flex flex-col">
              {/* Dark misty blue gradient background */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-slate-600/30 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/40 blur-[100px]"></div>
                <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-slate-400/10 blur-[80px]"></div>
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">Let's connect you with the right team</h3>
                <p className="text-white/70 font-light mb-12 leading-relaxed text-lg">
                  Please select one of the option below so that we can connect you with the team best suited to your enquiry.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: <MessageSquare className="w-6 h-6 text-sky-400" />, title: "Sales" },
                    { icon: <Headset className="w-6 h-6 text-sky-400" />, title: "Support" },
                    { icon: <Receipt className="w-6 h-6 text-sky-400" />, title: "Billing & invoices" },
                    { icon: <Users className="w-6 h-6 text-sky-400" />, title: "Channel Partners" }
                  ].map((item, idx) => (
                    <button key={idx} className="w-full flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left group">
                      <div className="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/20 transition-colors">
                        {item.icon}
                      </div>
                      <span className="font-medium text-white/90 group-hover:text-white transition-colors text-lg">{item.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>`;

// The new right side start
const newRightSideStart = `          {/* Right Side - Form */}
          <div className="lg:w-7/12">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 tracking-tight">Get in touch</h1>
            <p className="text-lg font-light text-gray-600 mb-8 leading-relaxed">
              Contact us via the form below. Whether you need network management, secure cloud hosting, or custom application development, our team is here to help.
            </p>

            <div className="bg-white shadow-xl border border-gray-200 p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
              
              <div className="mb-10 p-6 bg-gray-50`;

// Find everything from {/* Left Side */} to <div className="mb-10 p-6 bg-gray-50
const regex = /\{\/\* Left Side \*\/\}.*?\<div className="mb-10 p-6 bg-gray-50/s;
content = content.replace(regex, `${newLeftSide}\n\n${newRightSideStart}`);

fs.writeFileSync('src/pages/ContactPage.tsx', content);
