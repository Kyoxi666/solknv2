import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Features() {
  

  return (
    <>
      {/* Automation Intro Section */}
      <section className="bg-white text-gray-900 border-b border-gray-100">
        <div className="w-full">
          <div className="bg-[#090e17] py-24 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(40,80,140,0.4)_0%,transparent_70%)] blur-[60px] pointer-events-none"></div>
            <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="md:w-2/3 mb-8 md:mb-0 pr-0 md:pr-12">
                <div className="text-sm font-semibold text-white/60 tracking-wider uppercase mb-3">AI & Automation</div>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                  Work smarter, not harder.
                </h2>
                <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                  From reducing manual data entry to creating intelligent customer support experiences, our custom automation solutions streamline your operations so you can focus on growth.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-start md:justify-end relative z-10 w-full">
                <Link to="/services/ai-solutions" className="inline-flex items-center px-8 py-4 bg-white text-[#090e17] rounded-full font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg">
                  Automation Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom AI Chatbot Section (Section 3) - Dark */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#FFF5F8] via-[#F8FAFF] to-[#F5F3FF] text-gray-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF0F5]/50 via-transparent to-[#E6E6FA]/50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-5/12"
            >
              <div className="text-sm font-semibold text-[#2b3d5b] tracking-wider uppercase mb-3">Intelligent Automation</div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
                Custom AI<br />
                Chatbot trained<br />
                on your data
              </h2>
              <p className="text-lg text-gray-500 font-light mb-10">
                Deploy an intelligent assistant that understands your business inside out. From handling FAQs to booking appointments, our AI works 24/7 to serve your customers.
              </p>
              
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 shadow-sm text-gray-900 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors">
                Try SOLKN Chatbot <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            
            {/* Right Chat UI */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-7/12"
            >
              <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative">
                {/* Mac Dots */}
                <div className="flex gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                
                {/* Chat Messages */}
                <div className="space-y-6 mb-8 font-light text-sm">
                  {/* Bot Message 1 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-start"
                  >
                    <div className="bg-[#FFF5F8] border border-white/60 text-gray-800 px-6 py-3.5 rounded-2xl rounded-tl-sm max-w-[80%] shadow-sm">
                      Hi there, ask me anything!
                    </div>
                  </motion.div>
                  
                  {/* User Message */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex justify-end pl-8"
                  >
                    <div className="bg-white border border-white/60 text-gray-800 px-6 py-3.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                      Hi, do you have the Gold Crystal Centrepiece available for Saturday, 14th September?
                    </div>
                  </motion.div>
                  
                  {/* Bot Message 2 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex justify-start"
                  >
                    <div className="bg-[#FFF5F8] border border-white/60 text-gray-800 leading-relaxed px-6 py-4 rounded-2xl rounded-tl-sm max-w-[95%] shadow-sm">
                      Yes! The Gold Crystal Centrepiece is currently available for Saturday, 14th September. How many would you like to reserve?
                    </div>
                  </motion.div>
                </div>
                
                {/* Suggestions */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <button className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-gray-900 shadow-md transition-colors">
                    Book this item
                  </button>
                  <button className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-gray-900 shadow-md transition-colors">
                    View similar items
                  </button>
                </div>
                
                {/* Input */}
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask a question" 
                    className="w-full bg-white border border-gray-100 shadow-sm text-gray-900 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-gray-300 transition-colors"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

                  {/* Condensed Web Dev/Hosting Callout */}
      <section className="bg-white text-gray-900 border-t border-gray-100">
        <div className="w-full">
          <div className="bg-[#090e17] py-24 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center text-white overflow-hidden relative">
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(40,80,140,0.4)_0%,transparent_70%)] blur-[60px] pointer-events-none"></div>
            
            <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="md:w-2/3 mb-8 md:mb-0 pr-0 md:pr-12">
                <div className="text-sm font-semibold text-white/60 tracking-wider uppercase mb-3">Beyond IT Support</div>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                  Web Design, Hosting & App Development
                </h2>
                <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                  Need a new website or a custom internal application? Alongside our core IT and networking services, our in-house development team builds and hosts modern, scalable web solutions that work seamlessly with your infrastructure.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-start md:justify-end relative z-10 w-full">
                <Link to="/services/web-development" className="inline-flex items-center px-8 py-4 bg-white text-[#090e17] rounded-full font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg">
                  Explore Web Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}