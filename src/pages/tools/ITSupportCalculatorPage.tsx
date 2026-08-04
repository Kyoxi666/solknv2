import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Tiered pricing: `first` = price of the 1st unit, `extra` = price of each
// additional unit after the first.
const PRICING = {
  computers: { first: 38, extra: 37.5 },
  laptops: { first: 38, extra: 37.5 },
  printers: { first: 19, extra: 19 },
  routers: { first: 38, extra: 37.5 },
  phones: { first: 12, extra: 11 },
  servers: { first: 300, extra: 94 },
  smartphones: { first: 12, extra: 11 },
} as const;

const SOLKN_DISCOUNT = 0.85; // Solkn offers 15% less than the calculated market subtotal

function itemCost(qty: number, first: number, extra: number) {
  if (qty <= 0) return 0;
  return first + (qty - 1) * extra;
}

export function ITSupportCalculatorPage() {
  const [computers, setComputers] = useState(61);
  const [printers, setPrinters] = useState(14);
  const [laptops, setLaptops] = useState(45);
  const [routers, setRouters] = useState(0);
  const [phones, setPhones] = useState(0);
  const [servers, setServers] = useState(0);
  const [smartphones, setSmartphones] = useState(0);

  // Web3Forms state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateSubtotal = () => {
    let subtotal = 0;
    subtotal += itemCost(computers, PRICING.computers.first, PRICING.computers.extra);
    subtotal += itemCost(laptops, PRICING.laptops.first, PRICING.laptops.extra);
    subtotal += itemCost(printers, PRICING.printers.first, PRICING.printers.extra);
    subtotal += itemCost(routers, PRICING.routers.first, PRICING.routers.extra);
    subtotal += itemCost(phones, PRICING.phones.first, PRICING.phones.extra);
    subtotal += itemCost(servers, PRICING.servers.first, PRICING.servers.extra);
    subtotal += itemCost(smartphones, PRICING.smartphones.first, PRICING.smartphones.extra);
    return subtotal;
  };

  const subtotal = calculateSubtotal();
  const solknPrice = Math.round(subtotal * SOLKN_DISCOUNT);

  const handleSliderChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(parseInt(e.target.value, 10) || 0);
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>, max: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) val = 0;
    if (val > max) val = max;
    if (val < 0) val = 0;
    setter(val);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ff904293-32e7-41d0-9276-9f8ed3e1eb9f");
    
    // Append custom calculator details so they are included in your email notification
    formData.append("Computers", computers.toString());
    formData.append("Laptops", laptops.toString());
    formData.append("Network Printers", printers.toString());
    formData.append("Routers / Firewalls", routers.toString());
    formData.append("Desk Phones", phones.toString());
    formData.append("Servers", servers.toString());
    formData.append("Smartphones", smartphones.toString());
    formData.append("Market Rate Subtotal", `£${Math.round(subtotal).toLocaleString()}`);
    formData.append("Solkn Quote Price", `£${solknPrice.toLocaleString()}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Success! Your quote has been emailed to you.");
        setName('');
        setEmail('');
      } else {
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen text-[#000000] pb-24 flex flex-col items-center relative">
      {/* Header Banner */}
      <div className="w-full pt-32 pb-32 md:pb-40 bg-[#000000] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
          <div className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#0088cc] rounded-[100%]" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-25deg)', filter: 'blur(60px)', opacity: 0.7 }}></div>
          <div className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#33bbff] rounded-[100%]" style={{ top: '55%', left: '45%', transform: 'translate(-50%, -50%) rotate(-20deg)', filter: 'blur(40px)', opacity: 0.9 }}></div>
          <div className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-[#000000] rounded-full" style={{ top: '70%', left: '30%', filter: 'blur(40px)', opacity: 1 }}></div>
          <div className="absolute w-[100vw] md:w-[80vw] h-[80vw] bg-[#000000] rounded-full" style={{ top: '-50%', left: '-20%', filter: 'blur(50px)', opacity: 1 }}></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <Link to="/tools" className="inline-flex items-center text-[#33bbff] hover:text-white transition-colors mb-6 font-medium text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#000000] mb-6 tracking-tight drop-shadow-lg">IT Support Cost Calculator</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-light drop-shadow">
            Estimate your monthly managed IT support costs instantly.
          </p>
        </div>
      </div>
      
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px] border border-[#E0E0E0]">
          
          {/* Left Panel - Get Your Quote (Dark Coloured) */}
          <div className="lg:w-[45%] relative p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-[#050812] text-[#000000] overflow-hidden order-2 lg:order-1">
            
            {/* Background Glows (Dark Misty Blue) */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center h-[60%] opacity-60 pointer-events-none mix-blend-screen">
              <div className="w-[30%] h-[120%] bg-blue-600 blur-[70px] translate-y-1/3 rounded-full"></div>
              <div className="w-[40%] h-full bg-[#0088cc] blur-[80px] translate-y-1/4 rounded-full"></div>
              <div className="w-[30%] h-[80%] bg-cyan-400 blur-[60px] translate-y-1/2 rounded-full"></div>
            </div>

            <div className="relative z-10 mb-10">
              <h3 className="text-3xl font-medium tracking-tighter mb-2">Get Your Quote</h3>
              <p className="text-blue-50/70 font-light text-sm">See your instant estimate and request a formal quote.</p>
            </div>

            <form onSubmit={onSubmit} className="relative z-10 space-y-8">
              
              {/* Pricing Display */}
              <div className="space-y-4">
                <div className="flex flex-col border border-[#E0E0E0] rounded-2xl p-5 relative overflow-hidden bg-white/5 backdrop-blur-sm">
                  <div className="absolute top-0 right-0 p-3">
                     <span className="bg-white/10 text-white/70 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Market Rate</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-3 opacity-60">
                    <span className="text-white/70 font-bold">£</span>
                    <span className="text-white/70 text-3xl font-bold tracking-tight line-through decoration-2">{Math.round(subtotal).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex flex-col border border-cyan-500/50 rounded-2xl p-5 relative overflow-hidden bg-cyan-900/20 backdrop-blur-md">
                  <div className="absolute top-0 right-0 p-3">
                     <span className="bg-cyan-500 text-[#000000] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">15% Off</span>
                  </div>
                  <div className="mb-1 mt-1">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Solkn Price</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-cyan-400 text-xl font-bold">£</span>
                    <span className="text-white text-4xl sm:text-5xl font-bold tracking-tight">{solknPrice.toLocaleString()}</span>
                    <span className="text-white/70 text-sm font-medium ml-1 opacity-80">/mo</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 my-4"></div>

              {/* Inputs */}
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-[#6B6B6B] mb-2">Your email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hi@company.com" 
                    className="w-full bg-white/5 text-[#000000] text-sm border border-white/20 rounded-xl px-4 py-3.5 focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all placeholder:text-white/30" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6B6B6B] mb-2">Your name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe" 
                    className="w-full bg-white/5 text-[#000000] text-sm border border-white/20 rounded-xl px-4 py-3.5 focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all placeholder:text-white/30" 
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2 flex flex-col items-stretch gap-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-cyan-500 text-[#000000] px-8 py-3.5 rounded-xl font-medium hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>Processing <Loader2 className="ml-2 w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Email me my quote</>
                  )}
                </button>

                {result && (
                  <p className={`text-sm font-medium text-center ${result.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
                    {result}
                  </p>
                )}
              </div>
            </form>
            
            <p className="relative z-10 text-center text-[#A3A3A3] text-xs mt-8 font-light">
              Solkn Managed services Estimates, 2026
            </p>

          </div>

          {/* Right Panel - Calculate Costs (White) */}
          <div className="lg:w-[55%] p-8 sm:p-12 lg:p-16 flex flex-col overflow-hidden bg-white text-[#000000] border-l border-[#E0E0E0] order-1 lg:order-2">
            <div className="flex flex-col h-full">
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-12 text-[#000000]">
                Calculate your<br/>IT Support Costs.
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 flex-grow">
                {/* Computers */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-[#6B6B6B]">Computers</label>
                    <input type="number" min="0" max="100" value={computers} onChange={handleInputChange(setComputers, 100)} className="w-14 text-right text-sm border-b border-[#E0E0E0] bg-transparent text-[#000000] py-0.5 focus:border-[#0088cc] outline-none transition-colors" />
                  </div>
                  <input type="range" min="0" max="100" value={computers} onChange={handleSliderChange(setComputers)} className="w-full h-1 bg-[#EFEFEF] rounded-lg appearance-none cursor-pointer accent-[#0088cc]" />
                </div>

                {/* Network Printer */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-[#6B6B6B]">Network Printer</label>
                    <input type="number" min="0" max="25" value={printers} onChange={handleInputChange(setPrinters, 25)} className="w-14 text-right text-sm border-b border-[#E0E0E0] bg-transparent text-[#000000] py-0.5 focus:border-[#0088cc] outline-none transition-colors" />
                  </div>
                  <input type="range" min="0" max="25" value={printers} onChange={handleSliderChange(setPrinters)} className="w-full h-1 bg-[#EFEFEF] rounded-lg appearance-none cursor-pointer accent-[#0088cc]" />
                </div>

                {/* Laptops */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-[#6B6B6B]">Laptops</label>
                    <input type="number" min="0" max="100" value={laptops} onChange={handleInputChange(setLaptops, 100)} className="w-14 text-right text-sm border-b border-[#E0E0E0] bg-transparent text-[#000000] py-0.5 focus:border-[#0088cc] outline-none transition-colors" />
                  </div>
                  <input type="range" min="0" max="100" value={laptops} onChange={handleSliderChange(setLaptops)} className="w-full h-1 bg-[#EFEFEF] rounded-lg appearance-none cursor-pointer accent-[#0088cc]" />
                </div>

                {/* Router / Firewall */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-[#6B6B6B]">Router / Firewall</label>
                    <input type="number" min="0" max="10" value={routers} onChange={handleInputChange(setRouters, 10)} className="w-14 text-right text-sm border-b border-[#E0E0E0] bg-transparent text-[#000000] py-0.5 focus:border-[#0088cc] outline-none transition-colors" />
                  </div>
                  <input type="range" min="0" max="10" value={routers} onChange={handleSliderChange(setRouters)} className="w-full h-1 bg-[#EFEFEF] rounded-lg appearance-none cursor-pointer accent-[#0088cc]" />
                </div>

                {/* Desk Phones */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-[#6B6B6B]">Desk Phones</label>
                    <input type="number" min="0" max="100" value={phones} onChange={handleInputChange(setPhones, 100)} className="w-14 text-right text-sm border-b border-[#E0E0E0] bg-transparent text-[#000000] py-0.5 focus:border-[#0088cc] outline-none transition-colors" />
                  </div>
                  <input type="range" min="0" max="100" value={phones} onChange={handleSliderChange(setPhones)} className="w-full h-1 bg-[#EFEFEF] rounded-lg appearance-none cursor-pointer accent-[#0088cc]" />
                </div>

                {/* Server */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-[#6B6B6B]">Server</label>
                    <input type="number" min="0" max="25" value={servers} onChange={handleInputChange(setServers, 25)} className="w-14 text-right text-sm border-b border-[#E0E0E0] bg-transparent text-[#000000] py-0.5 focus:border-[#0088cc] outline-none transition-colors" />
                  </div>
                  <input type="range" min="0" max="25" value={servers} onChange={handleSliderChange(setServers)} className="w-full h-1 bg-[#EFEFEF] rounded-lg appearance-none cursor-pointer accent-[#0088cc]" />
                </div>

                {/* Smartphone */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-[#6B6B6B]">Smartphone</label>
                    <input type="number" min="0" max="100" value={smartphones} onChange={handleInputChange(setSmartphones, 100)} className="w-14 text-right text-sm border-b border-[#E0E0E0] bg-transparent text-[#000000] py-0.5 focus:border-[#0088cc] outline-none transition-colors" />
                  </div>
                  <input type="range" min="0" max="100" value={smartphones} onChange={handleSliderChange(setSmartphones)} className="w-full h-1 bg-[#EFEFEF] rounded-lg appearance-none cursor-pointer accent-[#0088cc]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}