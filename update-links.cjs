const fs = require('fs');

const appPath = 'src/App.tsx';
let app = fs.readFileSync(appPath, 'utf8');
app = app.replace(/AIBookingPage/g, 'NetworkInfrastructurePage');
app = app.replace(/\/services\/ai-booking/g, '/services/network-infrastructure');
fs.writeFileSync(appPath, app);

const headerPath = 'src/components/Header.tsx';
let header = fs.readFileSync(headerPath, 'utf8');
header = header.replace(/AI Appointment Booking/g, 'Network Infrastructure');
header = header.replace(/\/services\/ai-booking/g, '/services/network-infrastructure');
fs.writeFileSync(headerPath, header);

const footerPath = 'src/components/Footer.tsx';
let footer = fs.readFileSync(footerPath, 'utf8');
footer = footer.replace(/AI Appointment Booking/g, 'Network Infrastructure');
footer = footer.replace(/\/services\/ai-booking/g, '/services/network-infrastructure');
fs.writeFileSync(footerPath, footer);

const servicesPath = 'src/components/Services.tsx';
let services = fs.readFileSync(servicesPath, 'utf8');
services = services.replace(/AI Appointment Booking/g, 'Network Infrastructure');
services = services.replace(/\/services\/ai-booking/g, '/services/network-infrastructure');
// Also change the text for Network Infrastructure in the Services component
services = services.replace(/Automate your scheduling with intelligent booking systems that sync with your calendar and reduce no-shows./g, 'Enterprise-grade network architecture designed for maximum reliability, speed, and security.');
fs.writeFileSync(servicesPath, services);
