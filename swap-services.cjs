const fs = require('fs');

const headerPath = 'src/components/Header.tsx';
let header = fs.readFileSync(headerPath, 'utf8');
header = header.replace(
  "{ name: 'Web Development & Hosting', path: '/services/web-development' },\n    { name: 'IT Outsourcing', path: '/services/it-outsourcing' }",
  "{ name: 'IT Outsourcing', path: '/services/it-outsourcing' },\n    { name: 'Web Development & Hosting', path: '/services/web-development' }"
);
fs.writeFileSync(headerPath, header);

const footerPath = 'src/components/Footer.tsx';
let footer = fs.readFileSync(footerPath, 'utf8');
footer = footer.replace(
  '<li><Link to="/services/web-development" className="text-white/60 hover:text-sky-300 text-sm transition-colors">Web Development & Hosting</Link></li>\n              <li><Link to="/services/it-outsourcing" className="text-white/60 hover:text-sky-300 text-sm transition-colors">IT Outsourcing</Link></li>',
  '<li><Link to="/services/it-outsourcing" className="text-white/60 hover:text-sky-300 text-sm transition-colors">IT Outsourcing</Link></li>\n              <li><Link to="/services/web-development" className="text-white/60 hover:text-sky-300 text-sm transition-colors">Web Development & Hosting</Link></li>'
);
fs.writeFileSync(footerPath, footer);

const servicesPath = 'src/components/Services.tsx';
let services = fs.readFileSync(servicesPath, 'utf8');

// The icons will stay with the positions (Vector2 -> IT Outsourcing, Vector3 -> Web Dev)
const webDevStr = `    {
      icon: <Vector2 />,
      title: "Web Development & Hosting",
      description: "High-performance, secure, and scalable websites hosted on enterprise-grade infrastructure with guaranteed uptime.",
      link: "/services/web-development"
    }`;

const itOutsourcingStr = `    {
      icon: <Vector3 />,
      title: "IT Outsourcing",
      description: "Flexible outsourced IT departments, dedicated engineers, remote helpdesk, on-site support, and project delivery for businesses that need expert IT without the cost of an in-house team.",
      link: "/services/it-outsourcing"
    }`;

const replacedWebDevStr = `    {
      icon: <Vector3 />,
      title: "Web Development & Hosting",
      description: "High-performance, secure, and scalable websites hosted on enterprise-grade infrastructure with guaranteed uptime.",
      link: "/services/web-development"
    }`;

const replacedItOutsourcingStr = `    {
      icon: <Vector2 />,
      title: "IT Outsourcing",
      description: "Flexible outsourced IT departments, dedicated engineers, remote helpdesk, on-site support, and project delivery for businesses that need expert IT without the cost of an in-house team.",
      link: "/services/it-outsourcing"
    }`;

services = services.replace(webDevStr + ',\n' + itOutsourcingStr, replacedItOutsourcingStr + ',\n' + replacedWebDevStr);
fs.writeFileSync(servicesPath, services);

