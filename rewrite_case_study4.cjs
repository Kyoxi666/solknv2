const fs = require('fs');
let content = fs.readFileSync('src/pages/CaseStudyPage.tsx', 'utf8');

const replacement = `              ) : id === 'scaling-e-commerce' ? (
                <>
                  <p className="mb-6 font-medium text-lg text-teal-700">
                    Building a Fast, Reliable Infrastructure for a Growing Online Retailer
                  </p>
                  
                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Challenge</h2>
                  <p className="mb-4">
                    An online retailer specialising in home and lifestyle products was experiencing rapid growth. While increased sales were great for business, the website and supporting infrastructure were beginning to struggle during busy periods.
                  </p>
                  <p className="mb-4">
                    During seasonal promotions and product launches, the business experienced:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Slow website loading times</li>
                    <li>Customers abandoning their shopping baskets</li>
                    <li>Delayed order processing</li>
                    <li>Website outages during traffic spikes</li>
                    <li>Increased pressure on customer support</li>
                  </ul>
                  <p className="mb-8">
                    The company needed an infrastructure that could handle high volumes of visitors without compromising performance or the customer experience.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Solution</h2>
                  <p className="mb-4">
                    Solkn worked with the business to modernise its e-commerce infrastructure, creating a scalable platform capable of supporting future growth.
                  </p>
                  <p className="mb-4">
                    The solution focused on improving performance, resilience, and security while ensuring the website remained available during periods of high demand.
                  </p>
                  <p className="mb-4">
                    Key improvements included:
                  </p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>High-performance web hosting</li>
                    <li>Website performance optimisation</li>
                    <li>Cloud-based infrastructure</li>
                    <li>Database optimisation</li>
                    <li>Continuous uptime monitoring</li>
                    <li>Automated backups</li>
                    <li>Enhanced cyber security</li>
                  </ul>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">How the Solution Works</h2>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-4">1. Scalable Cloud Hosting</h3>
                  <p className="mb-4">
                    Rather than relying on a single server, the website was migrated to a scalable cloud environment capable of handling increases in traffic.
                  </p>
                  <p className="mb-8">
                    This ensured resources could be allocated efficiently during busy periods without affecting customer experience.
                  </p>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">2. Website Performance Optimisation</h3>
                  <p className="mb-4">Every second counts in e-commerce.</p>
                  <p className="mb-4">Solkn optimised the website by:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Compressing images</li>
                    <li>Improving page caching</li>
                    <li>Optimising databases</li>
                    <li>Reducing unnecessary scripts</li>
                    <li>Enhancing overall page load speed</li>
                  </ul>
                  <p className="mb-8">
                    The result was a faster browsing experience across desktop and mobile devices.
                  </p>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">3. Continuous Infrastructure Monitoring</h3>
                  <p className="mb-4">The entire platform was monitored 24/7.</p>
                  <p className="mb-4">This included:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Server health</li>
                    <li>Website availability</li>
                    <li>CPU and memory usage</li>
                    <li>Storage capacity</li>
                    <li>SSL certificate monitoring</li>
                    <li>Network connectivity</li>
                  </ul>
                  <p className="mb-8">
                    Potential issues could be identified before they affected customers.
                  </p>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">4. Strengthened Security</h3>
                  <p className="mb-4">As online sales increased, protecting customer data became even more important.</p>
                  <p className="mb-4">Additional security measures included:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Web application firewall (WAF)</li>
                    <li>DDoS protection</li>
                    <li>Multi-factor authentication for administrators</li>
                    <li>Automatic security updates</li>
                    <li>Malware monitoring</li>
                    <li>Regular vulnerability checks</li>
                  </ul>
                  <p className="mb-8">
                    These measures helped protect both the business and its customers.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Results</h2>
                  <p className="mb-6">Following the infrastructure upgrade, the retailer experienced significant improvements.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Faster Website Performance</h3>
                  <p className="mb-6">Customers could browse products, search categories, and complete purchases much more quickly.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Improved Reliability</h3>
                  <p className="mb-6">The website remained stable during promotional campaigns and periods of increased demand, reducing lost sales caused by downtime.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Better Customer Experience</h3>
                  <p className="mb-6">With faster loading pages and smoother checkout processes, customers were able to complete purchases more easily, leading to improved satisfaction and increased conversions.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Future-Ready Infrastructure</h3>
                  <p className="mb-8">The business now has an IT platform designed to grow alongside the company, supporting new products, additional customers, and future expansion without requiring a complete rebuild.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Business Benefits</h2>
                  <p className="mb-4">The project delivered several long-term benefits:</p>
                  <ul className="list-none mb-8 space-y-2 text-gray-800">
                    <li>✔ Improved website performance</li>
                    <li>✔ Reduced downtime</li>
                    <li>✔ Better customer experience</li>
                    <li>✔ Increased infrastructure reliability</li>
                    <li>✔ Enhanced cyber security</li>
                    <li>✔ Scalable hosting for future growth</li>
                    <li>✔ Greater confidence during seasonal sales and promotional campaigns</li>
                  </ul>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Can Help</h1>
                  <p className="mb-4">
                    At Solkn, we help businesses build fast, secure, and scalable digital platforms that support growth.
                  </p>
                  <p className="mb-4">Our services include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Website development and hosting</li>
                    <li>High-performance cloud hosting</li>
                    <li>Managed IT support</li>
                    <li>Network monitoring</li>
                    <li>Cyber security solutions</li>
                    <li>Website performance optimisation</li>
                    <li>Backup and disaster recovery</li>
                    <li>AI-powered customer engagement</li>
                  </ul>
                  <p className="mb-8">
                    Whether you're launching a new online store or scaling an established e-commerce business, Solkn provides the technology and expertise to keep your business performing at its best.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Final Thoughts</h2>
                  <p className="mb-4">
                    As your online business grows, your technology needs to grow with it. Investing in reliable infrastructure isn't just about preventing downtime—it's about delivering a seamless shopping experience that keeps customers coming back.
                  </p>
                  <p className="mb-4">
                    By combining scalable hosting, proactive monitoring, strong security, and ongoing optimisation, businesses can confidently handle increased traffic, improve customer satisfaction, and support long-term growth without compromising performance.
                  </p>
                </>
              ) : (
                <div className="py-12 text-center text-gray-500">`;

const startIdx = content.indexOf(`              ) : (
                <div className="py-12 text-center text-gray-500">`);
const endStr = `Case study content is being written...`;

if (startIdx !== -1) {
    const before = content.substring(0, startIdx);
    const after = content.substring(startIdx + `              ) : (
                <div className="py-12 text-center text-gray-500">`.length);
    fs.writeFileSync('src/pages/CaseStudyPage.tsx', before + replacement + after);
    console.log('Replaced successfully');
} else {
    console.log('Could not find boundaries');
}

