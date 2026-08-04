const fs = require('fs');
let content = fs.readFileSync('src/pages/CaseStudyPage.tsx', 'utf8');

content = content.replace(`    'securing-financial-data': {
      title: "Securing Financial Data with Managed IT Services",
      category: 'Finance',
      date: 'Oct 28, 2026',
    }`, `    'improving-business-connectivity': {
      title: "Improving Business Connectivity with Managed Network Monitoring",
      category: 'Infrastructure',
      date: 'Oct 28, 2026',
    }`);

const replacement = `              ) : id === 'improving-business-connectivity' ? (
                <>
                  <p className="mb-6 font-medium text-lg text-teal-700">
                    Preventing Downtime Through Proactive IT Monitoring
                  </p>
                  
                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Challenge</h2>
                  <p className="mb-4">
                    A growing business relied heavily on its network infrastructure to support daily operations. Employees depended on reliable internet access, cloud applications, printers, and internal systems to complete their work.
                  </p>
                  <p className="mb-4">
                    However, the business began experiencing recurring issues:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Slow network performance</li>
                    <li>Intermittent connection problems</li>
                    <li>Unknown device failures</li>
                    <li>Difficulty identifying the cause of outages</li>
                  </ul>
                  <p className="mb-4">
                    The business was often reacting to problems after employees reported them, resulting in lost productivity and unnecessary disruption.
                  </p>
                  <p className="mb-8">
                    They needed a proactive approach to monitoring and maintaining their IT environment.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Solution: Managed Network Monitoring</h2>
                  <p className="mb-4">
                    Solkn implemented a network monitoring solution designed to provide continuous visibility into the company's IT infrastructure.
                  </p>
                  <p className="mb-4">
                    The system monitored critical devices and services, including:
                  </p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Firewalls</li>
                    <li>Network switches</li>
                    <li>Wireless access points</li>
                    <li>Internet connectivity</li>
                    <li>Servers</li>
                    <li>Business devices</li>
                  </ul>
                  <p className="mb-8">
                    Instead of waiting for users to report issues, potential problems could be identified and addressed earlier.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">How Network Monitoring Works</h2>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-4">1. Continuous Monitoring</h3>
                  <p className="mb-4">The monitoring platform regularly checks the health of network devices.</p>
                  <p className="mb-4">It tracks:</p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Device availability</li>
                    <li>CPU and memory usage</li>
                    <li>Network traffic</li>
                    <li>Bandwidth utilisation</li>
                    <li>Connection stability</li>
                    <li>Hardware performance</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">2. Automated Alerts</h3>
                  <p className="mb-4">If a problem occurs, alerts are generated automatically.</p>
                  <p className="mb-4">Examples include:</p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>A network device goes offline</li>
                    <li>Internet connection drops</li>
                    <li>A device becomes overloaded</li>
                    <li>Unusual network activity is detected</li>
                  </ul>
                  <p className="mb-8">This allows issues to be investigated before they significantly impact users.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">3. Proactive Maintenance</h3>
                  <p className="mb-4">Instead of only fixing problems after failure, Solkn can identify trends and recommend improvements.</p>
                  <p className="mb-4">For example:</p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Replacing ageing hardware before failure</li>
                    <li>Optimising network performance</li>
                    <li>Improving Wi-Fi coverage</li>
                    <li>Reducing unnecessary traffic</li>
                  </ul>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Benefits</h2>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Reduced Downtime</h3>
                  <p className="mb-6">Early detection allows problems to be resolved faster, reducing disruption to employees and customers.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Improved Network Performance</h3>
                  <p className="mb-6">Monitoring helps identify bottlenecks and areas where improvements can be made.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Better Security Visibility</h3>
                  <p className="mb-6">Monitoring provides greater awareness of devices connected to the network and unusual activity patterns.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Less Stress for Business Owners</h3>
                  <p className="mb-4">Business owners no longer need to wait for employees to report issues before action is taken.</p>
                  <p className="mb-8">Their IT environment is continuously monitored and supported.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Future Enhancements</h2>
                  <p className="mb-4">The monitoring solution can be expanded with:</p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Automated device patching</li>
                    <li>Cyber security monitoring</li>
                    <li>Cloud service monitoring</li>
                    <li>Performance reporting</li>
                    <li>Remote troubleshooting</li>
                    <li>Backup monitoring</li>
                  </ul>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Result</h2>
                  <p className="mb-4">By moving from reactive IT support to proactive monitoring, the business gained a more reliable and predictable technology environment.</p>
                  <p className="mb-4">The solution helped:</p>
                  <ul className="list-none mb-6 space-y-2 text-gray-800">
                    <li>✔ Reduce unexpected downtime</li>
                    <li>✔ Improve network reliability</li>
                    <li>✔ Identify issues faster</li>
                    <li>✔ Support business growth</li>
                    <li>✔ Create better visibility of IT systems</li>
                  </ul>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Can Help</h1>
                  <p className="mb-4">
                    Solkn provides managed IT services designed to keep businesses secure, connected, and productive.
                  </p>
                  <p className="mb-4">Our services include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Network monitoring</li>
                    <li>Managed IT support</li>
                    <li>Firewall management</li>
                    <li>Wi-Fi optimisation</li>
                    <li>Cyber security solutions</li>
                    <li>Microsoft 365 support</li>
                    <li>Infrastructure management</li>
                  </ul>
                  <p className="mb-8">
                    Whether you have one office or multiple locations, Solkn helps ensure your technology works reliably so you can focus on running your business.
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

