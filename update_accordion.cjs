const fs = require('fs');
const path = 'src/components/ServiceAccordion.tsx';
let content = fs.readFileSync(path, 'utf8');

const newServices = `
  const services = [
    {
      title: "IT Outsourcing",
      content: "Flexible outsourced IT departments, dedicated engineers, remote helpdesk, on-site support, and project delivery for businesses that need expert IT without the cost of an in-house team.",
      link: "/services/it-outsourcing"
    },
    {
      title: "Managed IT",
      content: "Comprehensive infrastructure management, proactive monitoring, and 24/7 technical support to keep your business running smoothly.",
      link: "/services/managed-it"
    },
    {
      title: "Network Infrastructure",
      content: "Professional installation and configuration of routers, switches, firewalls, Wi-Fi systems, structured cabling, and secure business networks for restaurants, retail stores, offices, and commercial premises.",
      link: "/services/network-infrastructure"
    },
    {
      title: "Network Monitoring",
      content: "Real-time monitoring of your network infrastructure to proactively identify, alert, and resolve issues before they impact your business.",
      link: "/services/network-monitoring"
    },
    {
      title: "Web Development",
      content: "High-performance, secure, and scalable websites hosted on enterprise-grade infrastructure with guaranteed uptime.",
      link: "/services/web-development"
    },
    {
      title: "AI Business Solutions",
      content: "Leverage artificial intelligence to automate customer interactions, streamline operations, and accelerate business growth through intelligent automation and AI-driven marketing.",
      link: "/services/ai-business-solutions"
    }
  ];
`;

content = content.replace(/const services = \[[\s\S]*?\];/, newServices.trim());
content = content.replace('useState<number | null>(3)', 'useState<number | null>(0)');

fs.writeFileSync(path, content);
