import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, BarChart2 } from 'lucide-react';

export function GuidePage() {
  const { id } = useParams();

  // Basic mock data based on the guide ID (in a real app, this would come from a CMS or API)
  const guideTitles: Record<string, string> = {
    'why-your-business-wi-fi-is-slow': 'Why Your Business Wi-Fi Is Slow (And How to Fix It)',
    'how-to-prepare-your-business-for-windows-11': 'How to Prepare Your Business for Windows 11',
    'the-hidden-costs-of-cheap-it-equipment': 'The Hidden Costs of Cheap IT Equipment',
    'a-business-owners-guide-to-microsoft-365': 'A Business Owner\'s Guide to Microsoft 365',
    'how-to-spot-a-phishing-email': 'How to Spot a Phishing Email in 30 Seconds',
    'the-ultimate-office-it-setup-checklist': 'The Ultimate Office IT Setup Checklist'
  };

  const title = id && guideTitles[id] ? guideTitles[id] : 'Introduction: The Changing Cybersecurity Landscape';

  return (
    <div className="bg-[#F4F6FB] min-h-screen text-gray-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/guides" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#2b3d5b] transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Guides
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 lg:pr-8">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-900 mb-8 tracking-tight">
              {title}
            </h1>
            
            <div className="prose prose-lg text-gray-600 max-w-none">
              {id === 'why-your-business-wi-fi-is-slow' ? (
                <>
                  <p className="mb-6">
                    In today's workplace, reliable Wi-Fi is no longer a luxury—it's essential. Whether your team is making video calls, accessing cloud applications, processing payments, or serving customers, slow wireless performance can quickly impact productivity and customer satisfaction.
                  </p>
                  <p className="mb-8">
                    Many businesses assume poor internet speeds are the problem, but in reality, the issue often lies within the Wi-Fi network itself. Here's why your business Wi-Fi might be underperforming and what you can do to improve it.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">1. Your Wi-Fi Equipment Is Outdated</h2>
                  <p className="mb-4">
                    Technology evolves rapidly. If your wireless access points or router are more than five years old, they're likely struggling to support today's number of connected devices and bandwidth requirements.
                  </p>
                  <p className="mb-4">Modern Wi-Fi standards such as Wi-Fi 6 and Wi-Fi 6E offer:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Faster connection speeds</li>
                    <li>Better performance in busy environments</li>
                    <li>Lower latency</li>
                    <li>Improved support for dozens of connected devices</li>
                  </ul>
                  <p className="mb-8">
                    <strong className="text-gray-900 font-semibold">Solution:</strong> Upgrade ageing networking equipment to modern business-grade wireless access points designed for commercial environments.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">2. Too Many Devices Connected</h2>
                  <p className="mb-4">
                    Every smartphone, laptop, printer, tablet, CCTV camera, smart TV, and IoT device competes for wireless bandwidth. Even if these devices aren't actively being used, they can still consume network resources.
                  </p>
                  <p className="mb-4">
                    As businesses grow, it's common for networks that once supported 10 users to suddenly support 50 or more.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 font-semibold">Solution:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Review how many devices are connected.</li>
                    <li>Separate guest Wi-Fi from your business network.</li>
                    <li>Use multiple wireless access points instead of relying on a single router.</li>
                  </ul>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">3. Poor Access Point Placement</h2>
                  <p className="mb-4">
                    Many businesses install a Wi-Fi router in a cupboard, under a desk, or in a corner of the building. Unfortunately, Wi-Fi signals don't travel well through thick walls, metal shelving, machinery, or multiple floors.
                  </p>
                  <p className="mb-4">
                    Dead zones and weak signal areas are often caused by poor placement rather than slow internet.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 font-semibold">Solution:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Position access points centrally.</li>
                    <li>Mount them high where possible.</li>
                    <li>Perform a professional wireless site survey to identify coverage gaps.</li>
                  </ul>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">4. Wireless Interference</h2>
                  <p className="mb-4">
                    Your Wi-Fi isn't the only wireless signal in the building.
                  </p>
                  <p className="mb-4">Common sources of interference include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Neighbouring businesses</li>
                    <li>Bluetooth devices</li>
                    <li>Microwave ovens</li>
                    <li>Wireless phones</li>
                    <li>Security systems</li>
                    <li>Industrial equipment</li>
                  </ul>
                  <p className="mb-4">
                    These signals can overlap with your wireless channels, reducing performance.
                  </p>
                  <p className="mb-8">
                    <strong className="text-gray-900 font-semibold">Solution:</strong> Configure your wireless network to use the least congested channels and take advantage of both the 2.4 GHz and 5 GHz bands. In larger offices, professional Wi-Fi planning can significantly improve performance.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">5. Everyone Is Sharing the Same Network</h2>
                  <p className="mb-4">
                    Many businesses allow staff, guests, visitors, and company devices to use the same Wi-Fi network.
                  </p>
                  <p className="mb-4">
                    This creates unnecessary congestion and increases security risks.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 font-semibold">Solution:</strong> Create separate wireless networks (SSIDs) for:
                  </p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Employees</li>
                    <li>Guests</li>
                    <li>Smart devices</li>
                    <li>Voice systems</li>
                    <li>Business-critical equipment</li>
                  </ul>
                  <p className="mb-8">Segmenting your network improves both speed and security.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">6. Your Internet Connection Isn't the Problem</h2>
                  <p className="mb-4">
                    Businesses often upgrade from 100 Mbps to 500 Mbps broadband expecting instant improvements.
                  </p>
                  <p className="mb-4">
                    However, if the internal wireless network is poorly designed, faster broadband won't solve the issue.
                  </p>
                  <p className="mb-4">
                    Think of it like replacing the engine in a car with flat tyres it still won't perform properly.
                  </p>
                  <p className="mb-8">
                    <strong className="text-gray-900 font-semibold">Solution:</strong> Before upgrading your internet package, assess your internal network to identify bottlenecks.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">7. No Ongoing Network Monitoring</h2>
                  <p className="mb-4">
                    Many businesses only discover Wi-Fi problems when employees begin complaining.
                  </p>
                  <p className="mb-4">
                    Without proactive monitoring, issues such as overloaded access points, failing hardware, or unusual traffic can go unnoticed.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 font-semibold">Solution:</strong> Implement network monitoring to:
                  </p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Detect faults early</li>
                    <li>Monitor device health</li>
                    <li>Track bandwidth usage</li>
                    <li>Receive alerts before users experience outages</li>
                  </ul>
                  <p className="mb-8">Proactive monitoring reduces downtime and keeps your business running smoothly.</p>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Can Help</h1>
                  <p className="mb-4">
                    At Solkn, we provide professional network monitoring and managed IT services to ensure your business Wi-Fi performs reliably every day.
                  </p>
                  <p className="mb-4">Our services include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Wireless network health checks</li>
                    <li>Professional Wi-Fi design</li>
                    <li>Business-grade access point installations</li>
                    <li>Network monitoring and alerting</li>
                    <li>Guest Wi-Fi configuration</li>
                    <li>Ongoing maintenance and optimisation</li>
                  </ul>
                  <p className="mb-8">
                    Whether you operate a small office, retail store, warehouse, or multi-site business, we can help build a fast, secure, and reliable wireless network that grows with your business.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Final Thoughts</h2>
                  <p className="mb-4">
                    Slow Wi-Fi doesn't just frustrate employees—it costs businesses time, productivity, and money. Fortunately, most wireless issues can be resolved without replacing your entire infrastructure.
                  </p>
                  <p className="mb-4">
                    If your team regularly experiences dropped connections, buffering video calls, or slow cloud applications, it may be time to review your network rather than simply upgrading your broadband.
                  </p>
                  <p className="mb-8">
                    A well-designed Wi-Fi network is an investment that pays dividends through improved productivity, happier employees, and a better experience for your customers.
                  </p>
                </>
              ) : id === 'how-to-prepare-your-business-for-windows-11' ? (
                <>
                  <p className="mb-6">
                    With Windows 10 reaching its end of support, businesses across the UK need to start planning their transition to Windows 11. Delaying the upgrade could expose your organisation to security risks, software compatibility issues, and reduced productivity.
                  </p>
                  <p className="mb-8">
                    The good news is that moving to Windows 11 doesn't have to be complicated. With the right planning, your business can upgrade smoothly while minimising disruption to day-to-day operations.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Why Upgrade to Windows 11?</h2>
                  <p className="mb-4">
                    Windows 11 has been designed with modern businesses in mind. It offers stronger security, better performance, improved productivity features, and enhanced support for hybrid working.
                  </p>
                  <p className="mb-4">Key benefits include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Enhanced built-in security with TPM 2.0 and Secure Boot</li>
                    <li>Faster performance and improved resource management</li>
                    <li>Better support for Microsoft Teams and remote collaboration</li>
                    <li>Improved multitasking with Snap Layouts and virtual desktops</li>
                    <li>Continued compatibility with modern business applications</li>
                    <li>Ongoing security updates and feature improvements</li>
                  </ul>
                  <p className="mb-8">
                    Businesses that remain on unsupported operating systems become increasingly vulnerable to cyber threats and compliance issues.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Check Whether Your Devices Are Compatible</h2>
                  <p className="mb-4">
                    Not every Windows 10 PC can be upgraded to Windows 11. Microsoft has introduced stricter hardware requirements to improve performance and security.
                  </p>
                  <p className="mb-4">
                    Before upgrading, check whether your devices meet the minimum requirements, including:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>A compatible 64-bit processor</li>
                    <li>At least 4 GB RAM (8 GB or more recommended for business use)</li>
                    <li>64 GB or more of storage</li>
                    <li>TPM 2.0 enabled</li>
                    <li>Secure Boot capability</li>
                    <li>UEFI firmware</li>
                  </ul>
                  <p className="mb-4">
                    Many computers purchased before 2018 may not support Windows 11 without hardware replacement.
                  </p>
                  <p className="mb-8">
                    <strong className="text-gray-900 font-semibold">Tip:</strong> Create an inventory of all company laptops and desktops to identify which devices can be upgraded and which should be replaced.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Back Up Your Business Data</h2>
                  <p className="mb-4">
                    Before making any major operating system upgrade, ensure your important business data is backed up.
                  </p>
                  <p className="mb-4">This includes:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Documents and spreadsheets</li>
                    <li>Customer records</li>
                    <li>Accounting software</li>
                    <li>Emails</li>
                    <li>Shared folders</li>
                    <li>Application settings</li>
                  </ul>
                  <p className="mb-8">
                    Having a verified backup means you can quickly recover if anything unexpected occurs during the upgrade process.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Check Software Compatibility</h2>
                  <p className="mb-4">
                    Most modern applications work perfectly on Windows 11, but older or industry-specific software may require updates.
                  </p>
                  <p className="mb-4">Before deployment:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Contact software vendors if you're unsure about compatibility.</li>
                    <li>Test critical business applications.</li>
                    <li>Check printer, scanner and specialist hardware drivers.</li>
                    <li>Ensure antivirus and security software support Windows 11.</li>
                  </ul>
                  <p className="mb-8">Testing before deployment helps avoid unexpected downtime.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Review Your Cyber Security</h2>
                  <p className="mb-4">
                    An operating system upgrade is an excellent opportunity to strengthen your overall security.
                  </p>
                  <p className="mb-4">Consider reviewing:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Antivirus protection</li>
                    <li>Multi-factor authentication (MFA)</li>
                    <li>Firewall policies</li>
                    <li>Device encryption</li>
                    <li>User permissions</li>
                    <li>Password policies</li>
                  </ul>
                  <p className="mb-8">
                    Windows 11 includes several security enhancements, but they work best as part of a wider cyber security strategy.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Plan the Upgrade</h2>
                  <p className="mb-4">Avoid upgrading every computer at once.</p>
                  <p className="mb-4">Instead:</p>
                  <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li>Test Windows 11 on a small number of devices.</li>
                    <li>Gather employee feedback.</li>
                    <li>Resolve any compatibility issues.</li>
                    <li>Schedule upgrades outside business hours.</li>
                    <li>Roll out the upgrade in phases.</li>
                  </ol>
                  <p className="mb-8">
                    A staged deployment reduces disruption and makes any issues easier to manage.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Replace Ageing Hardware</h2>
                  <p className="mb-4">
                    If some of your computers aren't compatible with Windows 11, replacing them may be more cost-effective than trying to extend their lifespan.
                  </p>
                  <p className="mb-4">Modern business PCs offer:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Faster boot times</li>
                    <li>Better performance</li>
                    <li>Improved energy efficiency</li>
                    <li>Longer manufacturer support</li>
                    <li>Enhanced security features</li>
                  </ul>
                  <p className="mb-8">
                    Although replacing hardware requires an upfront investment, it often reduces maintenance costs and improves employee productivity over time.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Train Your Employees</h2>
                  <p className="mb-4">
                    Windows 11 introduces a refreshed interface and several productivity improvements. While the changes are straightforward, providing employees with a brief introduction can help them adapt more quickly.
                  </p>
                  <p className="mb-4">Topics to cover include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>The redesigned Start menu</li>
                    <li>Snap Layouts for multitasking</li>
                    <li>Updated File Explorer</li>
                    <li>Quick Settings</li>
                    <li>Microsoft Teams integration</li>
                    <li>Security best practices</li>
                  </ul>
                  <p className="mb-8">
                    Even a short training session can reduce support requests after deployment.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Don't Leave It Until the Last Minute</h2>
                  <p className="mb-4">
                    Waiting until Windows 10 is no longer supported can create unnecessary pressure, particularly if multiple devices need replacing or key business software requires testing.
                  </p>
                  <p className="mb-4">Planning ahead gives your business time to:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Budget for hardware upgrades</li>
                    <li>Test applications thoroughly</li>
                    <li>Train employees</li>
                    <li>Schedule upgrades around business operations</li>
                    <li>Reduce the risk of unexpected downtime</li>
                  </ul>
                  <p className="mb-8">
                    The earlier you begin preparing, the smoother the transition will be.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Can Help</h1>
                  <p className="mb-4">
                    At Solkn, we help businesses upgrade to Windows 11 with minimal disruption.
                  </p>
                  <p className="mb-4">Our Windows upgrade services include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Device compatibility assessments</li>
                    <li>Hardware recommendations and replacement</li>
                    <li>Secure data backup and migration</li>
                    <li>Windows 11 deployment</li>
                    <li>Application compatibility testing</li>
                    <li>Security configuration</li>
                    <li>Ongoing managed IT support</li>
                  </ul>
                  <p className="mb-8">
                    Whether you have five computers or hundreds, we'll ensure your transition is secure, efficient and tailored to your business.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Final Thoughts</h2>
                  <p className="mb-4">
                    Upgrading to Windows 11 is more than installing a new operating system—it's an opportunity to improve security, modernise your IT infrastructure and increase productivity.
                  </p>
                  <p className="mb-4">
                    By checking compatibility, backing up data, testing applications and planning your rollout, your business can make the move with confidence.
                  </p>
                  <p className="mb-8">
                    If you're unsure where to start, a professional IT assessment can help you identify the best approach and ensure your business is ready for the future.
                  </p>
                </>
              ) : id === 'the-hidden-costs-of-cheap-it-equipment' ? (
                <>
                  <p className="mb-6">
                    When it's time to replace laptops, desktops, networking equipment, or office hardware, it's natural to look for the lowest price. After all, saving money on IT equipment sounds like good business.
                  </p>
                  <p className="mb-6">
                    However, choosing the cheapest option often ends up costing far more in the long run. Frequent failures, reduced productivity, security vulnerabilities, and higher maintenance costs can quickly outweigh any initial savings.
                  </p>
                  <p className="mb-8">
                    Investing in reliable business-grade equipment isn't about buying the most expensive products—it's about choosing technology that delivers long-term value and supports your business as it grows.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">1. More Downtime Means Less Productivity</h2>
                  <p className="mb-4">
                    Consumer-grade hardware is often designed for occasional home use rather than the demands of a busy workplace.
                  </p>
                  <p className="mb-4">
                    When a laptop crashes during an important meeting or a network switch fails during working hours, employees can't do their jobs. Every minute of downtime affects productivity, customer service, and revenue.
                  </p>
                  <p className="mb-4">
                    Business-grade equipment is built for reliability, with higher-quality components designed to operate continuously in demanding environments.
                  </p>
                  <p className="mb-8">
                    <strong className="text-gray-900 font-semibold">Solution:</strong> Invest in hardware that's designed for business use and backed by professional warranties.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">2. Cheap Hardware Usually Has a Shorter Lifespan</h2>
                  <p className="mb-4">
                    A low-cost PC or router may appear to save money initially, but cheaper components often wear out faster.
                  </p>
                  <p className="mb-4">
                    You may find yourself replacing the same equipment every three or four years, while higher-quality business hardware continues performing reliably for much longer.
                  </p>
                  <p className="mb-4">
                    When you factor in replacement costs, installation, configuration, and lost productivity, the "cheap" option often becomes the expensive one.
                  </p>
                  <p className="mb-8">
                    <strong className="text-gray-900 font-semibold">Solution:</strong> Consider the total cost of ownership rather than just the purchase price.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">3. Poor Performance Slows Everyone Down</h2>
                  <p className="mb-4">
                    Older processors, limited memory, slow storage, and basic networking hardware can create daily frustrations for your team.
                  </p>
                  <p className="mb-4">Employees may experience:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Slow application loading</li>
                    <li>Freezing or crashing software</li>
                    <li>Delayed file transfers</li>
                    <li>Poor video conferencing quality</li>
                    <li>Long boot times</li>
                  </ul>
                  <p className="mb-4">
                    While each delay may only last a few minutes, those lost minutes add up across your workforce every day.
                  </p>
                  <p className="mb-8">
                    <strong className="text-gray-900 font-semibold">Solution:</strong> Choose hardware that comfortably meets both your current and future business requirements.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">4. Increased Security Risks</h2>
                  <p className="mb-4">
                    Lower-cost equipment often lacks advanced security features that help protect business data.
                  </p>
                  <p className="mb-4">For example, business-grade devices may include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>TPM security chips</li>
                    <li>Hardware encryption</li>
                    <li>Secure Boot support</li>
                    <li>Enterprise management tools</li>
                    <li>Longer security update support</li>
                  </ul>
                  <p className="mb-4">
                    Without these protections, your organisation may be more vulnerable to cyber threats and data breaches.
                  </p>
                  <p className="mb-8">
                    <strong className="text-gray-900 font-semibold">Solution:</strong> Prioritise security features when purchasing business devices, not just specifications.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">5. Limited Warranty and Support</h2>
                  <p className="mb-4">
                    Many consumer products include only a basic return-to-base warranty, meaning you'll need to send the device away for repair.
                  </p>
                  <p className="mb-4">
                    That could leave an employee without a computer for days or even weeks.
                  </p>
                  <p className="mb-4">Business hardware often includes:</p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Next business day on-site support</li>
                    <li>Longer warranty periods</li>
                    <li>Priority technical assistance</li>
                    <li>Replacement hardware options</li>
                  </ul>
                  <p className="mb-8">This reduces downtime and keeps your team working.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">6. Hidden Maintenance Costs</h2>
                  <p className="mb-4">
                    Lower-quality equipment tends to require more repairs, troubleshooting, and replacements.
                  </p>
                  <p className="mb-4">
                    Over time, your IT provider may spend significantly more time fixing recurring issues than maintaining a reliable environment.
                  </p>
                  <p className="mb-4">
                    Those support costs can quickly exceed the money saved when purchasing cheaper hardware.
                  </p>
                  <p className="mb-8">
                    <strong className="text-gray-900 font-semibold">Solution:</strong> Reliable equipment reduces ongoing maintenance costs and allows your IT provider to focus on improving your systems rather than constantly repairing them.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">7. Networking Equipment Matters Too</h2>
                  <p className="mb-4">
                    Many businesses focus on computers while overlooking their network infrastructure.
                  </p>
                  <p className="mb-4">Using inexpensive routers, switches, or wireless access points can result in:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Slow Wi-Fi</li>
                    <li>Dropped connections</li>
                    <li>Poor coverage</li>
                    <li>Network bottlenecks</li>
                    <li>Frequent outages</li>
                  </ul>
                  <p className="mb-8">
                    Reliable networking equipment keeps employees connected and supports cloud applications, VoIP phones, and hybrid working without interruption.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">8. Compatibility and Scalability Issues</h2>
                  <p className="mb-4">
                    Cheap equipment may meet your needs today but struggle as your business grows.
                  </p>
                  <p className="mb-4">
                    Adding more employees, cloud applications, security cameras, or connected devices can overwhelm entry-level hardware.
                  </p>
                  <p className="mb-4">
                    Replacing equipment earlier than planned often costs more than investing in scalable solutions from the beginning.
                  </p>
                  <p className="mb-8">
                    <strong className="text-gray-900 font-semibold">Solution:</strong> Buy with future growth in mind, not just today's requirements.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How to Buy IT Equipment the Smart Way</h1>
                  <p className="mb-4">Before purchasing new hardware, ask yourself:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Will it still meet our needs in three to five years?</li>
                    <li>Is it designed for business use?</li>
                    <li>Does it include adequate security features?</li>
                    <li>Is the warranty suitable for our business?</li>
                    <li>Can it be upgraded or expanded later?</li>
                    <li>Will it integrate with our existing systems?</li>
                  </ul>
                  <p className="mb-8">
                    Thinking beyond the price tag helps ensure you're making a long-term investment rather than a short-term compromise.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Can Help</h1>
                  <p className="mb-4">
                    At Solkn, we help businesses choose the right IT equipment based on performance, reliability, security, and long-term value—not simply the lowest price.
                  </p>
                  <p className="mb-4">Our services include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Business hardware recommendations</li>
                    <li>Laptop and desktop procurement</li>
                    <li>Network equipment installation</li>
                    <li>Wi-Fi design and optimisation</li>
                    <li>Device deployment and configuration</li>
                    <li>Managed IT support</li>
                    <li>Ongoing network monitoring</li>
                  </ul>
                  <p className="mb-8">
                    We work with businesses of all sizes to ensure every technology investment delivers lasting value and supports future growth.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Final Thoughts</h2>
                  <p className="mb-4">
                    Buying the cheapest IT equipment may reduce your upfront costs, but it can lead to more downtime, higher maintenance expenses, security risks, and reduced productivity.
                  </p>
                  <p className="mb-4">
                    The real value of business technology lies in its reliability, performance, and ability to keep your team working efficiently every day.
                  </p>
                  <p className="mb-4">
                    When evaluating your next IT purchase, don't just ask, "What's the cheapest option?" Ask, "Which solution will provide the best value over the next five years?"
                  </p>
                  <p className="mb-8">
                    Making informed decisions today can save your business thousands of pounds in avoidable costs tomorrow.
                  </p>
                </>
              ) : id === 'a-business-owners-guide-to-microsoft-365' ? (
                <>
                  <p className="mb-6">
                    Many business owners think of Microsoft 365 as simply a way to access Outlook, Word, Excel, and PowerPoint. While these familiar applications are an important part of the platform, Microsoft 365 offers far more than office software.
                  </p>
                  <p className="mb-6">
                    From secure cloud storage and team collaboration to advanced cybersecurity and device management, Microsoft 365 is a complete business productivity platform designed to help organisations work smarter, stay protected, and grow efficiently.
                  </p>
                  <p className="mb-8">
                    If you're considering Microsoft 365 for your business—or want to make better use of your existing subscription—this guide explains what it offers and why it's become an essential tool for businesses of all sizes.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">What Is Microsoft 365?</h2>
                  <p className="mb-4">
                    Microsoft 365 is a cloud-based subscription service that combines productivity applications, business email, collaboration tools, cloud storage, and security features into one platform.
                  </p>
                  <p className="mb-4">Depending on your subscription, Microsoft 365 can include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Outlook for professional email</li>
                    <li>Word, Excel, PowerPoint and OneNote</li>
                    <li>Microsoft Teams for meetings and collaboration</li>
                    <li>OneDrive for secure cloud file storage</li>
                    <li>SharePoint for document management</li>
                    <li>Exchange Online for business email hosting</li>
                    <li>Microsoft Defender security features</li>
                    <li>Device and user management tools</li>
                  </ul>
                  <p className="mb-8">
                    Instead of purchasing software every few years, businesses receive continuous updates, new features, and the latest security improvements.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Work From Anywhere</h2>
                  <p className="mb-4">Modern businesses are no longer tied to the office.</p>
                  <p className="mb-4">
                    Whether your employees work from home, travel regularly, or operate across multiple locations, Microsoft 365 allows them to securely access their files, emails, and applications from virtually any device with an internet connection.
                  </p>
                  <p className="mb-4">This flexibility helps businesses:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Improve productivity</li>
                    <li>Support hybrid working</li>
                    <li>Reduce downtime</li>
                    <li>Enable collaboration between remote teams</li>
                  </ul>
                  <p className="mb-8">
                    Employees can begin work on one device and continue seamlessly on another without losing progress.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Professional Business Email</h2>
                  <p className="mb-4">
                    A professional email address using your company domain creates a more credible image than a free personal email account.
                  </p>
                  <p className="mb-4">With Microsoft 365, businesses benefit from:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Reliable business email hosting</li>
                    <li>Shared calendars</li>
                    <li>Large mailbox storage</li>
                    <li>Spam and malware protection</li>
                    <li>Email synchronisation across all devices</li>
                  </ul>
                  <p className="mb-8">
                    Having a professional email solution also improves communication between employees and customers.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Secure Cloud Storage</h2>
                  <p className="mb-4">OneDrive gives each employee secure cloud storage for their work files.</p>
                  <p className="mb-4">Benefits include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Automatic file synchronisation</li>
                    <li>Access from any authorised device</li>
                    <li>Built-in version history</li>
                    <li>Secure file sharing</li>
                    <li>Protection against device failure</li>
                  </ul>
                  <p className="mb-8">
                    If a laptop is lost or damaged, important business files remain safely stored in the cloud.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Better Team Collaboration</h2>
                  <p className="mb-4">Microsoft Teams has become much more than a video conferencing application.</p>
                  <p className="mb-4">It provides one central location for:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Instant messaging</li>
                    <li>Video meetings</li>
                    <li>File sharing</li>
                    <li>Team collaboration</li>
                    <li>Project discussions</li>
                    <li>Screen sharing</li>
                  </ul>
                  <p className="mb-8">
                    Rather than switching between multiple applications, employees can communicate and collaborate within a single platform.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Stronger Security</h2>
                  <p className="mb-4">Cybersecurity is one of the biggest challenges facing businesses today.</p>
                  <p className="mb-4">
                    Microsoft 365 includes several built-in security features that help protect users and business data.
                  </p>
                  <p className="mb-4">Depending on your licence, these may include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Multi-factor authentication (MFA)</li>
                    <li>Email phishing protection</li>
                    <li>Malware filtering</li>
                    <li>Device encryption</li>
                    <li>Conditional access policies</li>
                    <li>Identity protection</li>
                    <li>Advanced threat detection</li>
                  </ul>
                  <p className="mb-8">
                    These features significantly reduce the risk of cyber attacks when configured correctly.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Automatic Software Updates</h2>
                  <p className="mb-4">Outdated software is one of the most common causes of security vulnerabilities.</p>
                  <p className="mb-4">Microsoft 365 automatically delivers:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Security patches</li>
                    <li>Feature updates</li>
                    <li>Performance improvements</li>
                    <li>Bug fixes</li>
                  </ul>
                  <p className="mb-8">
                    This ensures employees always have access to the latest versions without purchasing new software.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Simplified File Sharing</h2>
                  <p className="mb-4">
                    Instead of emailing multiple versions of the same document, Microsoft 365 allows teams to work together in real time.
                  </p>
                  <p className="mb-4">Employees can:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Edit documents simultaneously</li>
                    <li>Track changes</li>
                    <li>Restore previous versions</li>
                    <li>Control who has access</li>
                    <li>Share files securely with customers</li>
                  </ul>
                  <p className="mb-8">This reduces confusion and improves productivity across the business.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Easier IT Management</h2>
                  <p className="mb-4">
                    For businesses with multiple employees and devices, Microsoft 365 provides centralised administration.
                  </p>
                  <p className="mb-4">IT administrators can:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Create new user accounts</li>
                    <li>Reset passwords</li>
                    <li>Manage licences</li>
                    <li>Apply security policies</li>
                    <li>Control device access</li>
                    <li>Remove access when employees leave</li>
                  </ul>
                  <p className="mb-8">Central management saves time while improving security and compliance.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Choosing the Right Microsoft 365 Plan</h2>
                  <p className="mb-4">Microsoft offers a range of plans designed for different business needs.</p>
                  <p className="mb-4">
                    Smaller businesses may only require professional email and Office applications, while growing organisations often benefit from plans that include advanced security, device management, and compliance features.
                  </p>
                  <p className="mb-4">Selecting the right licence depends on factors such as:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Number of employees</li>
                    <li>Remote working requirements</li>
                    <li>Security needs</li>
                    <li>Compliance obligations</li>
                    <li>Storage requirements</li>
                    <li>Budget</li>
                  </ul>
                  <p className="mb-8">
                    Choosing the correct plan from the outset can save money while ensuring your business has the features it needs.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Can Help</h1>
                  <p className="mb-4">
                    At Solkn, we help businesses get the most from Microsoft 365 by ensuring it's set up securely, configured correctly, and tailored to the way your organisation works.
                  </p>
                  <p className="mb-4">Our Microsoft 365 services include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Microsoft 365 setup and migration</li>
                    <li>Business email migration</li>
                    <li>OneDrive and SharePoint configuration</li>
                    <li>Microsoft Teams deployment</li>
                    <li>Multi-factor authentication (MFA) implementation</li>
                    <li>User account and licence management</li>
                    <li>Security policy configuration</li>
                    <li>Ongoing managed IT support</li>
                  </ul>
                  <p className="mb-8">
                    Whether you're moving from another email provider or looking to improve your existing Microsoft 365 environment, we can help you maximise productivity while keeping your business secure.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Final Thoughts</h2>
                  <p className="mb-4">
                    Microsoft 365 is much more than a collection of Office applications. It's a powerful business platform that combines productivity, collaboration, cloud storage, and cybersecurity into a single solution.
                  </p>
                  <p className="mb-4">
                    When properly configured, it helps businesses work more efficiently, improve communication, strengthen security, and support flexible working—all while reducing the complexity of managing multiple systems.
                  </p>
                  <p className="mb-8">
                    If you're already paying for Microsoft 365, there's a good chance you're only using a fraction of what it's capable of. With the right setup and ongoing management, it can become one of the most valuable tools in your business.
                  </p>
                </>
              ) : id === 'how-to-spot-a-phishing-email' ? (
                <>
                  <p className="mb-6">
                    Cybercriminals don't always rely on sophisticated hacking techniques. In many cases, they simply trick someone into clicking a malicious link, downloading an infected attachment, or revealing sensitive information.
                  </p>
                  <p className="mb-6">
                    These scams, known as <strong className="text-gray-900 font-semibold">phishing emails</strong>, are one of the most common causes of data breaches and financial fraud. The good news is that most phishing attempts can be identified in under 30 seconds if you know what to look for.
                  </p>
                  <p className="mb-8">
                    This guide will help you recognise the warning signs and protect both your business and your customers.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">What Is a Phishing Email?</h2>
                  <p className="mb-4">
                    A phishing email is a fraudulent message designed to appear as though it comes from a trusted source, such as your bank, a supplier, a delivery company, or even a colleague.
                  </p>
                  <p className="mb-4">The goal is usually to persuade you to:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Click a malicious link</li>
                    <li>Open an infected attachment</li>
                    <li>Enter your login details on a fake website</li>
                    <li>Reveal sensitive business information</li>
                    <li>Transfer money to a fraudulent account</li>
                  </ul>
                  <p className="mb-8">
                    Modern phishing emails can look remarkably convincing, making awareness your first line of defence.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">1. Check the Sender's Email Address</h2>
                  <p className="mb-4">
                    The display name might say "Microsoft" or "Royal Mail", but the actual email address often tells a different story.
                  </p>
                  <p className="mb-4">For example:</p>
                  <p className="mb-4 font-semibold text-gray-900">Legitimate:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><a href="mailto:support@companyname.co.uk" className="text-[#2b3d5b] hover:underline">support@companyname.co.uk</a></li>
                  </ul>
                  <p className="mb-4 font-semibold text-gray-900">Suspicious:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><a href="mailto:company-support247@gmail.com" className="text-[#2b3d5b] hover:underline">company-support247@gmail.com</a></li>
                    <li><a href="mailto:support@company-secure.net" className="text-[#2b3d5b] hover:underline">support@company-secure.net</a></li>
                    <li><a href="mailto:microsoft.account.verify@randomdomain.com" className="text-[#2b3d5b] hover:underline">microsoft.account.verify@randomdomain.com</a></li>
                  </ul>
                  <p className="mb-8">
                    Always check the full email address rather than relying on the sender's name.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">2. Look for Urgent or Threatening Language</h2>
                  <p className="mb-4">
                    Phishing emails often try to create panic so you'll act without thinking.
                  </p>
                  <p className="mb-4">Common phrases include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>"Your account will be suspended today."</li>
                    <li>"Immediate action required."</li>
                    <li>"Your payment has failed."</li>
                    <li>"Click here to avoid losing access."</li>
                    <li>"Final warning."</li>
                  </ul>
                  <p className="mb-4">
                    Legitimate organisations rarely demand instant action through unexpected emails.
                  </p>
                  <p className="mb-8">
                    If a message creates a sense of urgency, pause and verify it before responding.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">3. Hover Over Links Before Clicking</h2>
                  <p className="mb-4">Never click a link immediately.</p>
                  <p className="mb-4">Instead, hover your mouse over it to reveal the destination.</p>
                  <p className="mb-4">For example, a button that says:</p>
                  <p className="mb-4 font-semibold text-gray-900">[www.yourbank.co.uk]</p>
                  <p className="mb-4">might actually lead to:</p>
                  <p className="mb-4 font-semibold text-gray-900">secure-login-verify-example.com</p>
                  <p className="mb-8">
                    If the web address looks unfamiliar, misspelt, or unrelated to the company, don't click it.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">4. Watch Out for Unexpected Attachments</h2>
                  <p className="mb-4">
                    Be cautious if you receive an attachment you weren't expecting, even if it appears to come from someone you know.
                  </p>
                  <p className="mb-4">Common file types used in phishing attacks include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>ZIP files</li>
                    <li>HTML files</li>
                    <li>Microsoft Office documents requesting macros</li>
                    <li>Password-protected attachments</li>
                    <li>Executable files</li>
                  </ul>
                  <p className="mb-8">
                    If you're unsure, contact the sender using a trusted phone number or email address to confirm they sent it.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">5. Poor Grammar Isn't the Only Warning Sign</h2>
                  <p className="mb-4">
                    Years ago, phishing emails were easy to spot because they contained spelling mistakes and awkward wording.
                  </p>
                  <p className="mb-4">
                    Today, many scammers use AI to produce convincing, professional-looking emails.
                  </p>
                  <p className="mb-4">Instead of focusing only on grammar, ask yourself:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Was I expecting this message?</li>
                    <li>Does the request make sense?</li>
                    <li>Is it asking me to do something unusual?</li>
                    <li>Does it match previous communications?</li>
                  </ul>
                  <p className="mb-8">Even a perfectly written email can be malicious.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">6. Be Wary of Requests for Sensitive Information</h2>
                  <p className="mb-4">
                    Reputable organisations rarely ask you to send passwords, bank details, or verification codes by email.
                  </p>
                  <p className="mb-4">
                    Treat any request for confidential information with caution, especially if it arrives unexpectedly.
                  </p>
                  <p className="mb-8">
                    If in doubt, contact the organisation directly using details from its official website—not the contact information provided in the email.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">7. Verify Payment Requests</h2>
                  <p className="mb-4">
                    One of the most expensive phishing scams involves fake invoices or requests to change bank account details.
                  </p>
                  <p className="mb-4">Before making a payment:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Confirm new bank details by phone.</li>
                    <li>Speak directly to your supplier.</li>
                    <li>Use a known contact number, not one provided in the email.</li>
                  </ul>
                  <p className="mb-8">Taking a minute to verify payment details can prevent costly fraud.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">8. If Something Feels Wrong, It Probably Is</h2>
                  <p className="mb-4">Sometimes there isn't one obvious warning sign—it just doesn't feel right.</p>
                  <p className="mb-4">Perhaps:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>The tone is unusual.</li>
                    <li>The sender wouldn't normally contact you this way.</li>
                    <li>The request seems out of character.</li>
                    <li>The timing is unexpected.</li>
                  </ul>
                  <p className="mb-8">
                    Trust your instincts. It's always better to verify a message than risk compromising your business.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">What Should You Do If You Receive a Phishing Email?</h2>
                  <p className="mb-4">If you suspect an email is fraudulent:</p>
                  <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li>Don't click any links.</li>
                    <li>Don't open attachments.</li>
                    <li>Don't reply to the sender.</li>
                    <li>Report it to your IT provider or internal IT team.</li>
                    <li>Delete the email after reporting it.</li>
                  </ol>
                  <p className="mb-8">
                    If you've already clicked a suspicious link or entered your credentials, change your password immediately and notify your IT provider as soon as possible. Acting quickly can limit the impact of an attack.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Can Help</h1>
                  <p className="mb-4">
                    At Solkn, we help businesses strengthen their cyber security by reducing the risk of phishing attacks and other online threats.
                  </p>
                  <p className="mb-4">Our cyber security services include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Email security and spam filtering</li>
                    <li>Multi-factor authentication (MFA)</li>
                    <li>Microsoft 365 security configuration</li>
                    <li>Cyber security awareness guidance</li>
                    <li>Endpoint protection</li>
                    <li>Managed IT support</li>
                    <li>Continuous network monitoring</li>
                  </ul>
                  <p className="mb-8">
                    By combining technology with user awareness, we help businesses stay protected against today's evolving cyber threats.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Final Thoughts</h2>
                  <p className="mb-4">
                    Phishing emails are becoming more sophisticated, but the basic warning signs remain the same. Spending just 30 seconds checking the sender, links, attachments, and the nature of the request can prevent serious financial loss and protect sensitive business data.
                  </p>
                  <p className="mb-8">
                    Cyber security isn't only about firewalls and antivirus software—it's also about helping people make informed decisions. With the right awareness and the right IT support, your business can significantly reduce the risk of falling victim to phishing attacks.
                  </p>
                </>
              ) : id === 'the-ultimate-office-it-setup-checklist' ? (
                <>
                  <p className="mb-6">
                    Setting up a new office is an exciting milestone, but without the right IT infrastructure, even the best workspace can suffer from slow performance, security issues, and unnecessary downtime.
                  </p>
                  <p className="mb-6">
                    Whether you're opening your first office, relocating, or expanding your business, having a well-planned IT setup ensures your team can work efficiently from day one.
                  </p>
                  <p className="mb-8">
                    Use this checklist to make sure nothing is overlooked.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">1. Reliable Business Internet Connection</h2>
                  <p className="mb-4">
                    Your internet connection is the backbone of your business. Before moving in, ensure you have a broadband service that meets your current and future needs.
                  </p>
                  <p className="mb-4">Consider:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Fibre broadband or leased line options</li>
                    <li>Download and upload speeds</li>
                    <li>Static IP requirements</li>
                    <li>Backup internet connection for resilience</li>
                    <li>Installation lead times</li>
                  </ul>
                  <p className="mb-8">
                    Remember, even the best office network can't perform well if your internet connection is unreliable.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">2. Business-Grade Network Equipment</h2>
                  <p className="mb-4">
                    Avoid relying on the router supplied by your internet provider for a busy office.
                  </p>
                  <p className="mb-4">Instead, invest in business-grade networking equipment, including:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Firewall</li>
                    <li>Managed network switch</li>
                    <li>Wireless access points</li>
                    <li>Network cabinet (if required)</li>
                    <li>Patch panels</li>
                    <li>Structured cabling</li>
                  </ul>
                  <p className="mb-8">
                    Professional networking equipment provides better security, reliability, and room for future growth.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">3. Strong Wi-Fi Coverage</h2>
                  <p className="mb-4">One wireless router is rarely enough for an entire office.</p>
                  <p className="mb-4">To ensure reliable connectivity:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Position access points centrally</li>
                    <li>Eliminate Wi-Fi dead zones</li>
                    <li>Separate guest and staff networks</li>
                    <li>Support roaming between access points</li>
                    <li>Secure wireless access with strong authentication</li>
                  </ul>
                  <p className="mb-8">
                    A wireless site survey can help identify the best locations for access points.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">4. Computers and Laptops</h2>
                  <p className="mb-4">Choose hardware that suits how your employees work.</p>
                  <p className="mb-4">When purchasing devices, consider:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Performance requirements</li>
                    <li>Storage capacity</li>
                    <li>Battery life for mobile workers</li>
                    <li>Windows 11 compatibility</li>
                    <li>Business warranties</li>
                    <li>Docking stations for hybrid working</li>
                  </ul>
                  <p className="mb-8">
                    Standardising hardware also makes support and maintenance much easier.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">5. Professional Email and Productivity Tools</h2>
                  <p className="mb-4">
                    Every business should have professional email addresses using its own domain.
                  </p>
                  <p className="mb-4">A modern productivity platform should include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Business email</li>
                    <li>Shared calendars</li>
                    <li>Cloud file storage</li>
                    <li>Video conferencing</li>
                    <li>Office applications</li>
                    <li>Team collaboration tools</li>
                  </ul>
                  <p className="mb-8">
                    This enables employees to communicate and work efficiently from anywhere.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">6. Data Backup and Recovery</h2>
                  <p className="mb-4">
                    Hardware failures, accidental deletion, and cyber attacks can happen without warning.
                  </p>
                  <p className="mb-4">Protect your business with:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Automatic cloud backups</li>
                    <li>Local backups where appropriate</li>
                    <li>Version history</li>
                    <li>Disaster recovery planning</li>
                    <li>Regular backup testing</li>
                  </ul>
                  <p className="mb-8">
                    A backup is only useful if it can be restored successfully.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">7. Cyber Security</h2>
                  <p className="mb-4">
                    Security should be built into your office from the beginning rather than added later.
                  </p>
                  <p className="mb-4">Essential measures include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Multi-factor authentication (MFA)</li>
                    <li>Endpoint protection</li>
                    <li>Business firewall</li>
                    <li>Email security</li>
                    <li>Device encryption</li>
                    <li>Strong password policies</li>
                    <li>Regular software updates</li>
                  </ul>
                  <p className="mb-8">
                    A layered approach provides the best protection against modern cyber threats.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">8. Printers and Shared Devices</h2>
                  <p className="mb-4">
                    Although many businesses are becoming paperless, shared office equipment still plays an important role.
                  </p>
                  <p className="mb-4">Plan for:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Network printers</li>
                    <li>Document scanners</li>
                    <li>Secure printing</li>
                    <li>Shared folders</li>
                    <li>Print management</li>
                  </ul>
                  <p className="mb-8">
                    Place devices where they are easily accessible without creating unnecessary congestion.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">9. Network Cabling</h2>
                  <p className="mb-4">
                    Reliable wired connections remain essential for many business systems.
                  </p>
                  <p className="mb-4">Install structured cabling for:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Computers</li>
                    <li>VoIP phones</li>
                    <li>Wireless access points</li>
                    <li>Security cameras</li>
                    <li>Printers</li>
                    <li>Meeting rooms</li>
                  </ul>
                  <p className="mb-8">
                    Well-labelled cabling makes future maintenance and expansion much simpler.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">10. Device Management</h2>
                  <p className="mb-4">
                    As your business grows, manually configuring every device becomes inefficient.
                  </p>
                  <p className="mb-4">Centralised management allows you to:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Deploy new computers quickly</li>
                    <li>Apply security policies</li>
                    <li>Install software remotely</li>
                    <li>Monitor device health</li>
                    <li>Manage user accounts</li>
                    <li>Remove access when employees leave</li>
                  </ul>
                  <p className="mb-8">
                    This saves time while improving consistency and security.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">11. Meeting Room Technology</h2>
                  <p className="mb-4">
                    Modern meeting spaces often require more than just a table and chairs.
                  </p>
                  <p className="mb-4">Consider installing:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Video conferencing equipment</li>
                    <li>Large presentation displays</li>
                    <li>Wireless screen sharing</li>
                    <li>Quality microphones and speakers</li>
                    <li>Reliable wired and wireless connectivity</li>
                  </ul>
                  <p className="mb-8">
                    Well-equipped meeting rooms improve communication with clients and remote employees.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">12. Ongoing Network Monitoring</h2>
                  <p className="mb-4">
                    Many businesses only discover IT problems after they disrupt operations.
                  </p>
                  <p className="mb-4">Proactive monitoring helps identify:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Hardware failures</li>
                    <li>Internet outages</li>
                    <li>Storage issues</li>
                    <li>Security alerts</li>
                    <li>High network usage</li>
                    <li>Device performance problems</li>
                  </ul>
                  <p className="mb-8">
                    Monitoring allows potential issues to be resolved before they affect your business.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">13. Plan for Future Growth</h2>
                  <p className="mb-4">
                    Your office may have ten employees today, but what about next year?
                  </p>
                  <p className="mb-4">When designing your IT infrastructure, allow room for:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Additional workstations</li>
                    <li>Extra wireless access points</li>
                    <li>More meeting rooms</li>
                    <li>New servers or cloud services</li>
                    <li>Security systems</li>
                    <li>Future business expansion</li>
                  </ul>
                  <p className="mb-8">
                    Scalable infrastructure reduces costly upgrades later.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Office IT Setup Checklist</h2>
                  <p className="mb-4">Use this quick checklist before opening your office:</p>
                  <ul className="list-none pl-0 mb-8 space-y-2">
                    <li>✔ Business internet installed and tested</li>
                    <li>✔ Firewall and network equipment configured</li>
                    <li>✔ Strong Wi-Fi coverage throughout the office</li>
                    <li>✔ Computers and laptops deployed</li>
                    <li>✔ Professional business email configured</li>
                    <li>✔ Microsoft 365 or equivalent productivity platform ready</li>
                    <li>✔ Data backup solution implemented</li>
                    <li>✔ Cyber security protections enabled</li>
                    <li>✔ Network printers installed</li>
                    <li>✔ Structured cabling completed</li>
                    <li>✔ Device management configured</li>
                    <li>✔ Meeting room technology installed</li>
                    <li>✔ Network monitoring enabled</li>
                    <li>✔ Future expansion considered</li>
                  </ul>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Can Help</h1>
                  <p className="mb-4">
                    At Solkn, we design, install, and manage complete office IT solutions for businesses of all sizes.
                  </p>
                  <p className="mb-4">Our services include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Office IT setup and relocation</li>
                    <li>Business Wi-Fi design and installation</li>
                    <li>Network cabling and infrastructure</li>
                    <li>Firewall and network configuration</li>
                    <li>Microsoft 365 setup and migration</li>
                    <li>Device deployment and management</li>
                    <li>Cyber security implementation</li>
                    <li>Backup and disaster recovery</li>
                    <li>Ongoing managed IT support and network monitoring</li>
                  </ul>
                  <p className="mb-8">
                    Whether you're moving into a new office or upgrading your existing workspace, we'll ensure your technology is secure, reliable, and ready to support your business from day one.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Final Thoughts</h2>
                  <p className="mb-4">
                    A successful office isn't just about desks, chairs, and meeting rooms—it's about creating an IT environment that enables your team to work efficiently, securely, and without interruption.
                  </p>
                  <p className="mb-4">
                    By planning your infrastructure carefully and investing in the right technology from the outset, you'll reduce downtime, improve productivity, and create a scalable foundation that grows with your business.
                  </p>
                  <p className="mb-8">
                    A well-designed IT setup is an investment that pays dividends every single day.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-6">
                    Leading a company these days feels like stepping into a world of amazing chances and substantial hurdles. Every leader hopes to see their dream become real, but the online world also has dangers that can disrupt even the best plans. That's why a strong, all-in-one IT solution is so crucial. It's not just an idea, but a real asset that lets you grow your business without worrying about sophisticated threat actors or unexpected downtime.
                  </p>
                  
                  <p className="mb-6">
                    Picture your company as a modern-day castle. Your precious ideas, sensitive customer information, and reputation are like valuable treasures locked inside. But just like any fortress, you need robust defenses.
                  </p>

                  <p className="mb-8">
                    In today's digital world, those defenses come as innovative technology and cybersecurity expertise that work together without a hitch. This concept forms the basis of an all-in-one managed IT solution that combines three key parts: Managed Extended Detection and Response (MXDR), Managed Security Information and Event Management (SIEM), and a Managed Security Operations Center (SOC).
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">What Do These Terms Actually Mean?</h2>
                  
                  <p className="mb-8">Let's explain these in a way that makes sense without all the tech talk.</p>

                  <div className="space-y-8 mb-12">
                    <div className="flex gap-4">
                      <span className="text-gray-400 font-medium shrink-0">1.</span>
                      <div>
                        <p className="mb-4">
                          <strong className="text-gray-900 font-semibold">Managed Extended Detection and Response (MXDR):</strong> Picture MXDR as the cutting-edge alarm system for your stronghold. It keeps a watchful eye on all the entry points of your digital space—from your computer systems to cloud services and even mobile apps. MXDR uses advanced algorithms and machine learning to identify anything out of the ordinary.
                        </p>
                        <p className="text-sm">
                          Studies indicate that businesses with sophisticated threat detection tools can spot breaches up to 80% quicker than those using old-school methods. Since each minute of a breach could set you back about $17k, quick detection isn't just a nice-to-have... it's crucial.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="text-gray-400 font-medium shrink-0">2.</span>
                      <div>
                        <p>
                          <strong className="text-gray-900 font-semibold">Managed Security Information and Event Management (SIEM):</strong> Think of SIEM as your sensor network and central hub. Picture a space where all the warnings and records from your sensors come together. SIEM gathers and sorts data from every corner of your IT environment—servers, networks, cloud apps—and then searches for signs that might point to an issue. It's like having a vigilant guard who understands what "regular" looks like and raises the alarm when something appears unusual.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="text-gray-400 font-medium shrink-0">3.</span>
                      <div>
                        <p>
                          <strong className="text-gray-900 font-semibold">Managed Security Operations Center (SOC):</strong> Lastly, the SOC brings in human expertise. Even with leading technology, having skilled people keep an eye on your defenses 24/7 makes a dramatic difference. SOC experts work around the clock to manage any alerts from MXDR and SIEM. They're on hand to examine, limit, and deal with threats before they can do serious harm. With cyberattacks going up—a recent jump of over 300% since COVID-19 hit—a dedicated team proves priceless.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-4 pr-4 font-semibold text-gray-900">Component</th>
                          <th className="py-4 px-4 font-semibold text-gray-900">Analogy</th>
                          <th className="py-4 pl-4 font-semibold text-gray-900">Function</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="border-b border-gray-100">
                          <td className="py-4 pr-4 font-semibold text-gray-900">Managed Extended<br/>Detection & Response</td>
                          <td className="py-4 px-4">Security cameras & motion sensors</td>
                          <td className="py-4 pl-4">Monitors all entry points (workstations, cloud, email, etc.) for threats in real-time.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-4 pr-4 font-semibold text-gray-900">SIEM</td>
                          <td className="py-4 px-4">Central control hub</td>
                          <td className="py-4 pl-4">Collects and analyzes logs across the entire network to identify suspicious patterns.</td>
                        </tr>
                        <tr>
                          <td className="py-4 pr-4 font-semibold text-gray-900">SOC</td>
                          <td className="py-4 px-4">24/7 Security guards</td>
                          <td className="py-4 pl-4">Human experts who investigate alerts, stop attacks, and restore safety continuously.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-[#F1F3EA] rounded-2xl p-8">
              {/* Icon graphic */}
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <g transform="translate(50, 50)">
                    {Array.from({ length: 60 }).map((_, i) => (
                      <ellipse
                        key={i}
                        cx="10"
                        cy="0"
                        rx="35"
                        ry="25"
                        transform={`rotate(${i * 6})`}
                      />
                    ))}
                  </g>
                </svg>
              </div>
              
              <h2 className="text-2xl font-normal text-gray-900 mb-4 tracking-tight">Knowledge is Power</h2>
              
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                We offer informative insights on the latest technology trends on a regular basis. Check it out.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xs text-gray-600 mb-2">
                    Your Email address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="you@email.com" 
                    className="w-full px-4 py-3 rounded-full border-none focus:ring-2 focus:ring-black outline-none text-sm placeholder:text-gray-400"
                    required
                  />
                </div>
                
                <p className="text-[11px] text-gray-500 leading-relaxed mb-6">
                  We respect your privacy and will only use the information provided to contact you. You may unsubscribe from these communications at anytime.
                </p>
                
                <button 
                  type="submit" 
                  className="bg-[#111111] hover:bg-black text-white px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center"
                >
                  Sign Me Up <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>

      <div className="pb-16 pt-4">
        <section id="contact" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden rounded-[3rem] border border-gray-800 mx-4 sm:mx-6 lg:mx-8 shadow-2xl">
          {/* Background image */}
          <div
            className="absolute inset-0 z-0 opacity-70 mix-blend-screen"
            style={{
              backgroundImage: 'url("/marketingbanner.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 z-0 bg-black/50"></div>

          {/* Flare effect for the banner */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.3)_0%,transparent_70%)] blur-[80px]"></div>
            <div className="absolute top-[0%] right-[10%] w-[1px] h-[200%] bg-white/20 rotate-[45deg] blur-[2px]"></div>
            <div className="absolute top-[10%] right-[0%] w-[200%] h-[1px] bg-white/20 rotate-[45deg] blur-[2px]"></div>
            {/* Noise overlay */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full">
            <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-white tracking-tight leading-[1.05]">Need expert help applying this guide?</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Our engineers are available to review your existing setup and guide your team through implementation.</p>
            <Link to="/contact" className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-md hover:shadow-lg hover:-translate-y-1 duration-300">
              Get a free consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
