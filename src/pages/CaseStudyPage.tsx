import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

export function CaseStudyPage() {
  const { id } = useParams();

  const caseStudies = {
    'ai-powered-booking-assistant': {
      title: "AI-Powered Booking Assistant for a Decoration Rental Business",
      category: 'Event Rentals',
      date: 'Nov 15, 2026',
    },
    'improving-business-connectivity': {
      title: "Improving Business Connectivity with Managed Network Monitoring",
      category: 'Infrastructure',
      date: 'Oct 28, 2026',
    },
    'scaling-e-commerce': {
      title: "Scaling E-Commerce Infrastructure for High Volume",
      category: 'E-Commerce',
      date: 'Sep 10, 2026',
    }
  };

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="pt-40 pb-20 min-h-screen text-center">
        <h1 className="text-3xl font-semibold mb-4">Case Study not found</h1>
        <Link to="/case-studies" className="text-[#2b3d5b] hover:underline">
          Return to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F6FB] min-h-screen">
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/case-studies" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-semibold text-[#2b3d5b] uppercase tracking-wider bg-[#F0F4F8] px-3 py-1 rounded-full">
                  {caseStudy.category}
                </span>
                <span className="text-sm text-gray-500">{caseStudy.date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight tracking-tight">
                {caseStudy.title}
              </h1>
            </div>

            <div className="prose prose-lg prose-gray max-w-none prose-headings:font-medium prose-a:text-[#2b3d5b] hover:prose-a:text-[#1e293b]">
                            {id === 'ai-powered-booking-assistant' ? (
                <>
                  <p className="mb-6 font-medium text-lg text-[#1e293b]">
                    Helping Customers Find and Reserve Event Decorations Instantly with AI
                  </p>
                  
                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Challenge</h2>
                  <p className="mb-4">
                    A decoration rental business was receiving frequent customer enquiries about product availability, especially for popular event items such as centrepieces, table decorations, and venue accessories.
                  </p>
                  <p className="mb-4">
                    Customers often contacted the business asking questions such as:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>"Are these centrepieces available for my wedding date?"</li>
                    <li>"Can I rent 20 table decorations for my event?"</li>
                    <li>"Do you have this item available next Saturday?"</li>
                    <li>"How much would it cost to hire these decorations?"</li>
                  </ul>
                  <p className="mb-4">
                    Managing these enquiries manually was becoming time-consuming, especially during busy periods when multiple customers were requesting availability checks at the same time.
                  </p>
                  <p className="mb-8">
                    The business needed a solution that could provide quick responses, reduce administrative workload, and improve the customer booking experience.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Solution: An AI-Powered Decoration Booking Assistant</h2>
                  <p className="mb-4">
                    Solkn developed an AI chatbot designed specifically for the decoration rental industry.
                  </p>
                  <p className="mb-4">
                    The AI assistant was integrated into the company's website, allowing customers to ask questions and receive instant responses without waiting for a member of staff.
                  </p>
                  <p className="mb-8">
                    Instead of simply answering general questions, the AI assistant was designed to understand customer requirements and help with the initial booking process.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">How the AI Booking Process Works</h2>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-4">1. Customer Starts a Conversation</h3>
                  <p className="mb-4">A customer visits the website and asks the AI assistant:</p>
                  <p className="mb-4 italic">"Can I rent your gold centrepieces for my wedding on 15th September?"</p>
                  <p className="mb-4">The AI understands the customer's request and identifies key details, including:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Product requested</li>
                    <li>Event date</li>
                    <li>Quantity required</li>
                    <li>Type of event</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">2. AI Checks Availability</h3>
                  <p className="mb-4">
                    The chatbot connects with the business booking system or inventory database to check whether the requested items are available.
                  </p>
                  <p className="mb-4">It verifies:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Whether the item is currently available</li>
                    <li>Whether enough stock exists</li>
                    <li>Whether another booking overlaps with the requested date</li>
                    <li>Whether the rental period is possible</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">3. Customer Receives an Instant Response</h3>
                  <p className="mb-4">If the item is available, the AI can respond:</p>
                  <p className="mb-4 italic">"Great news! We currently have enough gold centrepieces available for 15th September. We can reserve these for your event. Would you like to continue with a booking enquiry?"</p>
                  <p className="mb-4">If the item is unavailable:</p>
                  <p className="mb-8 italic">"Unfortunately, those centrepieces are already booked for your selected date. However, we do have similar designs available that may suit your event."</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">4. Lead Information Is Captured</h3>
                  <p className="mb-4">If the customer wants to proceed, the AI collects important information such as:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Customer name</li>
                    <li>Contact details</li>
                    <li>Event date</li>
                    <li>Venue location</li>
                    <li>Quantity required</li>
                    <li>Decoration preferences</li>
                  </ul>
                  <p className="mb-8">
                    This information is then passed to the business team, allowing staff to follow up with a qualified enquiry rather than starting from the beginning.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Benefits</h2>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Faster Customer Responses</h3>
                  <p className="mb-4">Customers no longer need to wait for business hours to receive answers.</p>
                  <p className="mb-8">The AI assistant provides support 24/7, helping customers make decisions even outside normal working hours.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">Reduced Administrative Work</h3>
                  <p className="mb-4">Previously, staff had to manually respond to every availability enquiry.</p>
                  <p className="mb-4">The AI now handles repetitive questions, allowing employees to focus on:</p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Preparing orders</li>
                    <li>Managing events</li>
                    <li>Working with customers</li>
                    <li>Growing the business</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">Improved Customer Experience</h3>
                  <p className="mb-4">Customers planning weddings, parties, and events often need quick answers.</p>
                  <p className="mb-8">Instant availability checks create a smoother booking experience and reduce the chance of customers choosing a competitor.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">More Qualified Leads</h3>
                  <p className="mb-4">Instead of receiving incomplete enquiries, the business receives structured customer information.</p>
                  <p className="mb-8">Staff can focus their time on customers who are ready to proceed.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Future Enhancements</h2>
                  <p className="mb-6">The AI assistant can continue to evolve with additional features, including:</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Automated Quotes</h3>
                  <p className="mb-4">The AI can calculate estimated rental costs based on:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Number of items required</li>
                    <li>Rental duration</li>
                    <li>Delivery location</li>
                    <li>Additional services</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Appointment Booking</h3>
                  <p className="mb-6">Customers could schedule consultations directly through the chatbot.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Image-Based Recommendations</h3>
                  <p className="mb-6">Customers could upload images of their venue or theme, allowing AI to suggest matching decoration options.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Automated Follow-Ups</h3>
                  <p className="mb-8">If a customer leaves without completing a booking, the system can send reminders or follow-up messages.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Result</h2>
                  <p className="mb-4">By implementing an AI-powered booking assistant, the decoration rental business transformed how it handles customer enquiries.</p>
                  <p className="mb-4">The solution helped the company:</p>
                  <ul className="list-none mb-6 space-y-2 text-gray-800">
                    <li>✔ Respond instantly to customer questions</li>
                    <li>✔ Reduce repetitive admin tasks</li>
                    <li>✔ Improve booking efficiency</li>
                    <li>✔ Capture more enquiries</li>
                    <li>✔ Provide a better customer experience</li>
                  </ul>
                  <p className="mb-8">
                    AI became an extension of the team, helping the business manage demand while allowing employees to focus on delivering exceptional events.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Can Help</h1>
                  <p className="mb-4">
                    At Solkn, we help businesses automate customer interactions using AI-powered solutions.
                  </p>
                  <p className="mb-4">Our AI services include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Website AI chatbots</li>
                    <li>Virtual receptionists</li>
                    <li>AI appointment booking</li>
                    <li>Automated customer enquiries</li>
                    <li>Lead qualification systems</li>
                    <li>Business workflow automation</li>
                  </ul>
                  <p className="mb-8">
                    Whether you operate a decoration business, restaurant, professional service, or growing company, we can design AI solutions that save time and improve customer experiences.
                  </p>
                </>
              ) : id === 'improving-business-connectivity' ? (
                <>
                  <p className="mb-6 font-medium text-lg text-[#1e293b]">
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
              ) : id === 'scaling-e-commerce' ? (
                <>
                  <p className="mb-6 font-medium text-lg text-[#1e293b]">
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
                <div className="py-12 text-center text-gray-500">
                  Case study content is being written...
                </div>
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
    </div>
  );
}
