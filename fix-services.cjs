const fs = require('fs');
const path = require('path');

const servicesPath = 'src/components/Services.tsx';
let services = fs.readFileSync(servicesPath, 'utf8');

services = services.replace(
  /title: "Web Development & Hosting",\s*description: "High-performance, secure, and scalable web solutions hosted on enterprise-grade infrastructure with guaranteed uptime.",\s*link: "\/services\/web-development"/,
  'title: "Web Development & Hosting",\n      description: "High-performance, secure, and scalable websites hosted on enterprise-grade infrastructure with guaranteed uptime.",\n      link: "/services/web-development"'
);

services = services.replace(
  /title: "AI-Powered Digital Marketing",\s*description: "Data-driven campaigns utilizing artificial intelligence to optimize conversions, target audiences, and maximize ROI.",\s*link: "\/services\/ai-marketing"/,
  'title: "IT Outsourcing",\n      description: "Flexible outsourced IT departments, dedicated engineers, remote helpdesk, on-site support, and project delivery for businesses that need expert IT without the cost of an in-house team.",\n      link: "/services/it-outsourcing"'
);

services = services.replace(
  /title: "AI Chatbots & Virtual Reception",\s*description: "Intelligent conversational agents that handle customer inquiries, route calls, and provide support 24\/7.",\s*link: "\/services\/ai-chatbots"/,
  'title: "AI Business Solutions",\n      description: "Leverage artificial intelligence to automate customer interactions, streamline operations, and accelerate business growth through intelligent automation and AI-driven marketing.",\n      link: "/services/ai-solutions"'
);

services = services.replace(
  /title: "Network Infrastructure",\s*description: "[^"]*",\s*link: "\/services\/network-infrastructure"/,
  'title: "Network Infrastructure",\n      description: "Professional installation and configuration of routers, switches, firewalls, Wi-Fi systems, structured cabling, and secure business networks for restaurants, retail stores, offices, and commercial premises.",\n      link: "/services/network-infrastructure"'
);

services = services.replace(
  /title: "Network Monitoring",\s*description: "[^"]*",\s*link: "\/services\/network-monitoring"/,
  'title: "Network Monitoring",\n      description: "Real-time monitoring of your network infrastructure to proactively identify, alert, and resolve issues before they impact your business.",\n      link: "/services/network-monitoring"'
);

// We want to ensure vector numbers don't conflict but that's just icon choice. Let's just swap vector components around if needed or leave them. Let's leave them.

fs.writeFileSync(servicesPath, services);

const headerPath = 'src/components/Header.tsx';
let header = fs.readFileSync(headerPath, 'utf8');

header = header.replace(/\{ name: 'AI-Powered Digital Marketing', path: '\/services\/ai-marketing' \}/, "{ name: 'IT Outsourcing', path: '/services/it-outsourcing' }");
header = header.replace(/\{ name: 'AI Chatbots & Virtual Reception', path: '\/services\/ai-chatbots' \}/, "{ name: 'AI Business Solutions', path: '/services/ai-solutions' }");

fs.writeFileSync(headerPath, header);

const footerPath = 'src/components/Footer.tsx';
let footer = fs.readFileSync(footerPath, 'utf8');

footer = footer.replace(/<Link to="\/services\/ai-marketing" className="text-white\/60 hover:text-sky-300 text-sm transition-colors">AI-Powered Digital Marketing<\/Link>/, '<Link to="/services/it-outsourcing" className="text-white/60 hover:text-sky-300 text-sm transition-colors">IT Outsourcing</Link>');
footer = footer.replace(/<Link to="\/services\/ai-chatbots" className="text-white\/60 hover:text-sky-300 text-sm transition-colors">AI Chatbots & Virtual Reception<\/Link>/, '<Link to="/services/ai-solutions" className="text-white/60 hover:text-sky-300 text-sm transition-colors">AI Business Solutions</Link>');

fs.writeFileSync(footerPath, footer);

const appPath = 'src/App.tsx';
let app = fs.readFileSync(appPath, 'utf8');

app = app.replace(/import \{ AIChatbotsPage \} from '.\/pages\/services\/AIChatbotsPage';/, "import { ITOutsourcingPage } from './pages/services/ITOutsourcingPage';\nimport { AIBusinessSolutionsPage } from './pages/services/AIBusinessSolutionsPage';");
app = app.replace(/import \{ DigitalMarketingPage \} from '.\/pages\/services\/DigitalMarketingPage';/, "");

app = app.replace(/<Route path="\/services\/ai-marketing" element=\{<DigitalMarketingPage \/>\} \/>/, '<Route path="/services/it-outsourcing" element={<ITOutsourcingPage />} />');
app = app.replace(/<Route path="\/services\/ai-chatbots" element=\{<AIChatbotsPage \/>\} \/>/, '<Route path="/services/ai-solutions" element={<AIBusinessSolutionsPage />} />');

fs.writeFileSync(appPath, app);

const servicesPagePath = 'src/pages/ServicesPage.tsx';
let servicesPage = fs.readFileSync(servicesPagePath, 'utf8');

servicesPage = servicesPage.replace(/\{ name: 'AI-Powered Digital Marketing', path: '\/services\/ai-marketing' \}/, "{ name: 'IT Outsourcing', path: '/services/it-outsourcing' }");
servicesPage = servicesPage.replace(/\{ name: 'AI Chatbots & Virtual Reception', path: '\/services\/ai-chatbots' \}/, "{ name: 'AI Business Solutions', path: '/services/ai-solutions' }");

fs.writeFileSync(servicesPagePath, servicesPage);

