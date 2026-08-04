const fs = require('fs');

const content = `import { ChevronRight, MessageSquare, Headset, Receipt, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-gray-900 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Side */}
          <div className="lg:w-5/12 flex flex-col">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-900 tracking-tight">Get in touch</h1>
            <p className="text-xl font-light text-gray-600 mb-12 leading-relaxed">
              Contact us via the form below. Whether you need network management, secure cloud hosting, or custom application development, our team is here to help.
            </p>
            
            <div className="relative overflow-hidden rounded-[2rem] p-8 md:p-10 text-white bg-[#0a0f1a] shadow-2xl mt-auto">
              {/* Dark misty blue gradient background */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-slate-600/30 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/40 blur-[100px]"></div>
                <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-slate-400/10 blur-[80px]"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-4">Let's connect you with the right team</h3>
                <p className="text-white/70 font-light mb-8 leading-relaxed text-sm">
                  Please select one of the option below so that we can connect you with the team best suited to your enquiry.
                </p>
                
                <div className="space-y-3">
                  {[
                    { icon: <MessageSquare className="w-5 h-5 text-sky-400" />, title: "Sales" },
                    { icon: <Headset className="w-5 h-5 text-sky-400" />, title: "Support" },
                    { icon: <Receipt className="w-5 h-5 text-sky-400" />, title: "Billing & invoices" },
                    { icon: <Users className="w-5 h-5 text-sky-400" />, title: "Channel Partners" }
                  ].map((item, idx) => (
                    <button key={idx} className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left group">
                      <div className="w-10 h-10 rounded-lg bg-black/50 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/20 transition-colors">
                        {item.icon}
                      </div>
                      <span className="font-medium text-white/90 group-hover:text-white transition-colors">{item.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="lg:w-7/12">
            <div className="bg-white shadow-xl border border-gray-200 p-8 md:p-12 rounded-[2rem] relative overflow-hidden h-full">
              
              <div className="mb-10 p-6 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-4 text-center">
                <p className="text-gray-800">
                  Are you an <strong className="font-semibold text-gray-900">SOLKN Client</strong> looking for support?
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/client-portal" className="bg-white border border-gray-200 text-gray-900 px-6 py-2.5 rounded-full font-medium hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300">
                    Client Support Center
                  </Link>
                  <a href="mailto:support@solkn.com" className="bg-white border border-gray-200 text-gray-900 px-6 py-2.5 rounded-full font-medium hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300">
                    Email Support Ticket
                  </a>
                </div>
              </div>
              
              <form className="space-y-6 relative z-10">
                <div>
                  <label className="block text-sm mb-2 text-gray-800 font-medium">How Can We Help You?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors appearance-none">
                    <option value="">Please Select</option>
                    <option value="Managed IT Support">Managed IT Support</option>
                    <option value="IT Outsourcing">IT Outsourcing</option>
                    <option value="Web Development & Hosting">Web Development & Hosting</option>
                    <option value="AI Business Solutions">AI Business Solutions</option>
                    <option value="Network Infrastructure">Network Infrastructure</option>
                    <option value="Network Monitoring">Network Monitoring</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-gray-800 font-medium">First Name <span className="text-red-400">*</span></label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-800 font-medium">Last Name <span className="text-red-400">*</span></label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors" />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2 text-gray-800 font-medium">Company Name <span className="text-red-400">*</span></label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-800 font-medium">Business Email <span className="text-red-400">*</span></label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors" />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2 text-gray-800 font-medium">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-800 font-medium">Business Location (State/Region) <span className="text-red-400">*</span></label>
                    <input type="text" placeholder="E.g., England, Wales" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 placeholder:text-gray-600 shadow-inner transition-colors" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-gray-800 font-medium">Please Provide Additional Details:</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 shadow-inner transition-colors"></textarea>
                </div>
                
                <div className="space-y-4 pt-4 text-sm text-gray-500">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-[#2b3d5b] bg-white border-gray-300 rounded focus:ring-[#2b3d5b] focus:ring-offset-gray-900" />
                    <span className="leading-relaxed">
                      I consent to receive text messages about <strong className="font-semibold text-gray-800">services, account notifications, and any relevant information</strong> from <strong className="font-semibold text-gray-800">SOLKN</strong> at the phone number I provided. I acknowledge that my consent is not a condition of purchase. <em className="text-gray-400">Msg & data rates may apply. Msg frequency varies.</em> Reply HELP for assistance or STOP to opt out of receiving messages.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-[#2b3d5b] bg-white border-gray-300 rounded focus:ring-[#2b3d5b] focus:ring-offset-gray-900" />
                    <span>I agree to receive emails and/or phone calls from SOLKN.</span>
                  </label>
                  <div className="pt-2">
                    <a href="#" className="underline text-gray-400 hover:text-sky-300 transition-colors">Privacy Policy</a>
                  </div>
                </div>
                
                <div className="pt-6">
                  <button type="button" className="bg-black text-white px-8 py-3.5 hover:text-white rounded-full font-medium flex items-center justify-center w-full md:w-auto hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300">
                    Send Contact Request <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/pages/ContactPage.tsx', content);
