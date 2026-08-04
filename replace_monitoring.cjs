const fs = require('fs');
const path = 'src/pages/services/ManagedITPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add imports
content = content.replace(
  "import { ArrowLeft, ArrowUpRight} from 'lucide-react';",
  "import { ArrowLeft, ArrowUpRight, Plus, X } from 'lucide-react';\nimport { useState } from 'react';"
);

// 2. Add Accordion state to the component
content = content.replace(
  "export function ManagedITPage() {\n  return (",
  "export function ManagedITPage() {\n  const [expandedId, setExpandedId] = useState<string | null>('infrastructure');\n\n  const capabilities = [\n    {\n      id: 'infrastructure',\n      title: 'Infrastructure Management & Optimization',\n      description: 'We build, manage, and proactively optimize your IT foundation (servers, networking, backups, and cloud resources), so your business stays uninterrupted, secure, and ready for what\\'s next.\\nOur Infrastructure Services provide more than just day-to-day management—we help you control costs through strategic lifecycle planning, mitigate risks before they impact operations, and implement changes seamlessly.',\n      tags: ['Technical Alignment Engineer/Analyst', '24/7 incident management', 'Monitoring and alerting', 'Patch management', 'Server backup', 'Firewall management']\n    },\n    {\n      id: 'service-desk',\n      title: 'Service Desk',\n      description: 'Fast, reliable helpdesk and remote IT support. We connect directly to your devices to troubleshoot and resolve issues quickly, minimizing disruption to your team.',\n      tags: ['24/7 Availability', 'Remote Troubleshooting', 'Device Setup & Support', 'Fast Response Times']\n    },\n    {\n      id: 'workplace-services',\n      title: 'Workplace Services',\n      description: 'We manage the tools your business uses every day, ensuring your team has secure and seamless access to their workstations, software, and communication platforms.',\n      tags: ['Microsoft 365', 'Google Workspace', 'Endpoint security', 'Software deployment', 'Mobile device management']\n    },\n    {\n      id: 'cybersecurity',\n      title: 'Cybersecurity',\n      description: 'Implementing robust security measures to protect sensitive data from emerging threats. We monitor your network continuously to detect, isolate, and respond to threats before they escalate.',\n      tags: ['Threat Detection', 'Vulnerability assessments', 'Security Audits', 'Zero-Trust Architecture', 'Employee Training']\n    }\n  ];\n\n  return ("
);

// 3. Replace the Monitoring Packages section
const oldSectionRegex = /\{\/\* What's Included \*\/\}[\s\S]*?<\/div>\n      <\/section>/;

const newSection = `{/* What's Included */}
      <section className="py-24 bg-white text-[#1a1a1a] border-t border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-[#1e293b] text-slate-500">Managed IT Capabilities</h2>
          </div>
          
          <div className="space-y-4">
            {capabilities.map((item) => (
              <div 
                key={item.id} 
                className={\`bg-[#f8f9fa] rounded-2xl overflow-hidden transition-all duration-300 \${expandedId === item.id ? 'shadow-sm' : ''}\`}
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <h3 className="text-2xl font-light text-[#4a4a4a]">{item.title}</h3>
                  <div className={\`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 \${expandedId === item.id ? 'bg-[#2b3d5b] text-white' : 'bg-[#e5e7eb] text-[#6b7280]'}\`}>
                    {expandedId === item.id ? <X size={16} /> : <Plus size={16} strokeWidth={2} />}
                  </div>
                </button>
                
                <div 
                  className={\`overflow-hidden transition-all duration-500 ease-in-out \${expandedId === item.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}\`}
                >
                  <div className="px-8 pb-8 pt-2">
                    <div className="text-sm text-[#4a4a4a] leading-relaxed mb-8 whitespace-pre-line max-w-3xl">
                      {item.description}
                    </div>
                    
                    <h4 className="text-xs text-slate-400 mb-4 tracking-wider">What's included</h4>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="bg-white border text-slate-600 text-xs px-4 py-2 rounded-full shadow-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-[#f0f4f8] rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-medium text-[#1e293b] mb-3">Looking for day-to-day helpdesk support?</h3>
            <p className="text-slate-600 mb-6">If you need immediate technical help for your team alongside proactive monitoring, we offer that too.</p>
            <Link to="/services/it-outsourcing" className="inline-flex items-center font-medium text-[#2b3d5b] hover:text-[#47638c] transition-colors">
              Explore our IT Support services <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>`;

content = content.replace(oldSectionRegex, newSection);
fs.writeFileSync(path, content);
