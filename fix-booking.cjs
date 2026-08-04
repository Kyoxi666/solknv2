const fs = require('fs');

const path = 'src/pages/services/NetworkInfrastructurePage.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/AIBookingPage/g, 'NetworkInfrastructurePage');
content = content.replace(/FROM CHAOS TO CALENDAR/g, 'FROM EDGE TO CORE');
content = content.replace(/Automated scheduling systems that sync with your calendar, send reminders, and manage your time seamlessly\. Eliminate back-and-forth emails\./g, 'Enterprise-grade network architecture designed for maximum reliability, speed, and security. We build the backbone of your digital operations.');
content = content.replace(/Scheduling <br\/>\s*Made Effortless!/g, 'Infrastructure <br/>\\n            Built to Scale');
content = content.replace(/AI BOOKING • SCHEDULING • AUTOMATION/g, 'NETWORK INFRASTRUCTURE • ARCHITECTURE • DEPLOYMENT');
content = content.replace(/\(01\) Calendar Sync/g, '(01) Core Routing');
content = content.replace(/Seamless platform integration\./g, 'High-performance core routing.');
content = content.replace(/Real-time synchronization with Google Calendar, Outlook, and other major platforms to prevent double-booking and streamline availability\./g, 'Enterprise routers and switches designed to handle massive throughput while minimizing latency across your entire organization.');
content = content.replace(/Google\/Outlook Sync/g, 'BGP/OSPF Routing');
content = content.replace(/Real-Time Availability/g, 'Redundant Pathways');
content = content.replace(/Time Zone Intelligence/g, 'QoS Optimization');
content = content.replace(/Multi-User Scheduling/g, 'SD-WAN Integration');

content = content.replace(/\(02\) Smart Reminders/g, '(02) Wireless Solutions');
content = content.replace(/Drastically reduce no-shows\./g, 'Seamless mobility everywhere.');
content = content.replace(/Automated SMS and email notifications that keep your clients informed and dramatically reduce no-show rates\./g, 'High-density Wi-Fi 6/6E deployments ensuring perfect coverage, roaming, and capacity for modern workspaces.');
content = content.replace(/Automated SMS/g, 'Heatmap Surveys');
content = content.replace(/Email Confirmations/g, 'AP Provisioning');
content = content.replace(/Customizable Flows/g, 'Guest Portals');
content = content.replace(/Rescheduling Links/g, 'WPA3 Security');

content = content.replace(/\(03\) Pre-qualification/g, '(03) Edge Security');
content = content.replace(/Gather info before meetings\./g, 'Protecting every packet.');
content = content.replace(/Intelligent booking flows that gather essential information and process payments before the meeting even begins\./g, 'Next-generation firewalls and intrusion prevention systems deployed at the network edge to block threats in real-time.');
content = content.replace(/Custom Intake Forms/g, 'NGFW Deployment');
content = content.replace(/Payment Collection/g, 'VPN/Zero Trust');
content = content.replace(/Lead Qualification/g, 'Intrusion Prevention');
content = content.replace(/CRM Data Entry/g, 'Traffic Analysis');

content = content.replace(/We streamline processes that ignite efficiency by reimagining your schedule\./g, 'We engineer the invisible foundations that keep your entire enterprise connected and secure.');
content = content.replace(/Effortless Booking/g, 'Robust Architecture');

content = content.replace(/Fill <span className="italic font-light">your<\/span> <span className="italic font-light">calendar<\/span> automatically/g, 'Build <span className="italic font-light">your</span> <span className="italic font-light">network</span> robustly');
content = content.replace(/Own the scheduling space where your clients are booking — our automated strategies help you reduce friction and convert leads into real business impact\./g, 'Deploy scalable network infrastructure that grows with your business, ensuring uptime and eliminating bottlenecks before they form.');

content = content.replace(/Book more appointments across all your service channels/g, 'Achieve 99.999% uptime for mission-critical applications');
content = content.replace(/Secure confirmed slots without relying on manual follow-ups/g, 'Eliminate network congestion with dynamic bandwidth allocation');
content = content.replace(/Improve operational authority and client trustworthiness/g, 'Secure your perimeter against modern cyber threats');
content = content.replace(/Increase conversions from targeted booking intent/g, 'Scale your operations seamlessly as team size grows');
content = content.replace(/Long-term time savings that compound over time/g, 'Reduce total cost of ownership with efficient design');

content = content.replace(/For years, we've worked alongside professionals to rediscover their time management essence\. Through automation, we craft workflows that connect, organize, and drive real productivity\./g, 'We deploy industry-leading hardware and software-defined networking solutions to create resilient architectures that serve as the foundation of your digital transformation.');
content = content.replace(/Every booking is a fusion of convenience, timing and clarity\./g, 'Every packet delivered securely, efficiently, and instantly.');

content = content.replace(/0/g, '0',);
content = content.replace(/Double Bookings/g, 'Network Outages');
content = content.replace(/80%/g, '100x');
content = content.replace(/Fewer No-Shows/g, 'Throughput');
content = content.replace(/24\/7/g, '24/7');
content = content.replace(/Booking Agent/g, 'Active Monitoring');
content = content.replace(/10h\+/g, '<1ms');
content = content.replace(/Saved Weekly/g, 'Core Latency');

content = content.replace(/From initial sync to effortless scheduling, here's how we automate your calendar\./g, 'From initial survey to full deployment, here is how we build your network.');
content = content.replace(/Workflow Strategy Call/g, 'Infrastructure Audit');
content = content.replace(/We start with a deep dive into your current scheduling friction and appointment goals to identify quick wins\./g, 'We survey your current topology and physical locations to understand capacity constraints and structural needs.');
content = content.replace(/Custom Routing/g, 'Architecture Design');
content = content.replace(/Based on your team's availability, we craft tailored booking links and intelligent routing rules\./g, 'We design a comprehensive blueprint incorporating the right hardware and software-defined pathways.');
content = content.replace(/Our team sets everything up — from calendar sync to automated SMS reminders — for a seamless launch\./g, 'Our certified engineers install and configure routers, switches, and access points for optimal performance.');
content = content.replace(/We continuously analyze booking conversion rates and no-shows to maximize your team's scheduled time\./g, 'We monitor traffic flows and device health, applying updates and optimizing routes to maintain peak efficiency.');

fs.writeFileSync(path, content);
