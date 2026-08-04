const fs = require('fs');
const path = 'src/components/Services.tsx';
let content = fs.readFileSync(path, 'utf8');

const newServicesArray = `  const services = [
    {
      icon: <Vector5 />,
      title: "Network Infrastructure",
      description: "Professional installation and configuration of routers, switches, firewalls, Wi-Fi systems, structured cabling, and secure business networks for restaurants, retail stores, offices, and commercial premises.",
      link: "/services/network-infrastructure"
    },
    {
      icon: <Vector6 />,
      title: "Network Monitoring",
      description: "Real-time monitoring of your network infrastructure to proactively identify, alert, and resolve issues before they impact your business.",
      link: "/services/network-monitoring"
    },
    {
      icon: <Vector1 />,
      title: "Managed IT Support",
      description: "Comprehensive infrastructure management, proactive monitoring, and 24/7 technical support to keep your business running smoothly.",
      link: "/services/managed-it"
    },
    {
      icon: <Vector2 />,
      title: "IT Outsourcing",
      description: "Flexible outsourced IT departments, dedicated engineers, remote helpdesk, on-site support, and project delivery for businesses that need expert IT without the cost of an in-house team.",
      link: "/services/it-outsourcing"
    },
    {
      icon: <Vector4 />,
      title: "AI Business Solutions",
      description: "Leverage artificial intelligence to automate customer interactions, streamline operations, and accelerate business growth through intelligent automation and AI-driven marketing.",
      link: "/services/ai-solutions"
    },
    {
      icon: <Vector3 />,
      title: "Web Development & Hosting",
      description: "High-performance, secure, and scalable websites hosted on enterprise-grade infrastructure with guaranteed uptime.",
      link: "/services/web-development"
    }
  ];`;

content = content.replace(/const services = \[[^]*?\];/, newServicesArray);
fs.writeFileSync(path, content);
