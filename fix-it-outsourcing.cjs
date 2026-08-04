const fs = require('fs');
const path = 'src/pages/services/ITOutsourcingPage.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/DATA-DRIVEN/g, 'FLEXIBLE IT');
content = content.replace(/Scale with intelligent campaigns/g, 'Scale with dedicated IT teams');
content = content.replace(/We craft campaigns that connect, convert, and drive real ROI./g, 'We provide dedicated IT teams that support, secure, and drive real results.');
content = content.replace(/Every campaign is a fusion of data, creativity and precision./g, 'Every team is a fusion of expertise, reliability, and precision.');
content = content.replace(/We create campaigns that ignite growth by reimagining audience connection./g, 'We create agile IT departments that ignite growth by reimagining technical support.');
content = content.replace(/Grow <span className="italic font-light">organically<\/span> <span className="italic font-light">in<\/span> search results/g, 'Grow <span className="italic font-light">securely</span> <span className="italic font-light">with</span> our support');
content = content.replace(/Data-driven strategies that optimize your ad spend, increase brand visibility, and generate highly qualified leads across multiple platforms\./g, 'Dedicated IT engineers that manage your infrastructure, support your staff, and execute projects seamlessly.');
content = content.replace(/\(01\) Performance Ads/g, '(01) Dedicated Helpdesk');
content = content.replace(/Maximize your ad spend ROI\./g, 'Your outsourced support team.');
content = content.replace(/Google Ads & Meta Campaigns/g, 'Remote IT Support');
content = content.replace(/A\/B Testing & Optimization/g, 'On-Site Engineering');
content = content.replace(/Retargeting Strategies/g, 'Ticket Management');
content = content.replace(/Conversion Tracking/g, 'SLA Guarantees');

content = content.replace(/\(02\) SEO Strategy/g, '(02) Project Delivery');
content = content.replace(/Dominate search engine rankings\./g, 'Execute complex IT projects.');
content = content.replace(/Comprehensive on-page and off-page optimization to build sustainable organic traffic that converts over time\./g, 'End-to-end management of IT migrations, infrastructure upgrades, and technology rollouts.');
content = content.replace(/Keyword Research/g, 'Cloud Migrations');
content = content.replace(/Technical Audits/g, 'Server Upgrades');
content = content.replace(/Content Strategy/g, 'Network Deployment');
content = content.replace(/Link Building/g, 'Security Audits');

content = content.replace(/\(03\) Analytics & Data/g, '(03) Virtual CIO');
content = content.replace(/Understand every user interaction\./g, 'Strategic IT leadership.');
content = content.replace(/Advanced tracking setups and custom dashboards that provide actionable insights into your marketing performance\./g, 'Executive-level guidance to align your technology investments with your long-term business goals.');
content = content.replace(/Custom Dashboards/g, 'IT Roadmapping');
content = content.replace(/GA4 Implementation/g, 'Budget Planning');
content = content.replace(/Event Tracking/g, 'Vendor Management');
content = content.replace(/Attribution Modeling/g, 'Risk Assessment');

content = content.replace(/Average ROI/g, 'Tickets Resolved');
content = content.replace(/300%/g, '10k+');
content = content.replace(/Impressions/g, 'Uptime');
content = content.replace(/50M\+/g, '99.9%');
content = content.replace(/Lower CPA/g, 'Cost Savings');
content = content.replace(/45%/g, '40%');
content = content.replace(/Optimization/g, 'Support');

fs.writeFileSync(path, content);
