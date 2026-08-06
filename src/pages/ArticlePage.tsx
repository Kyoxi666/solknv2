import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

export function ArticlePage() {
  const { id } = useParams();

  const articles = {
    'why-every-small-business-needs-a-backup-strategy': {
      title: "Why Every Small Business Needs a Backup Strategy Before It's Too Late",
      category: 'IT Strategy',
      date: 'Oct 24, 2026',
    },
    'why-food-businesses-need-reliable-it': {
      title: "Why Food Businesses Need Reliable IT More Than Ever",
      category: 'Food & Beverage',
      date: 'Oct 18, 2026',
    },
    '10-digital-marketing-mistakes': {
      title: "10 Digital Marketing Mistakes That Could Be Costing Your Business Customers",
      category: 'Marketing',
      date: 'Oct 12, 2026',
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="pt-40 pb-20 min-h-screen text-center">
        <h1 className="text-3xl font-semibold mb-4">Article not found</h1>
        <Link to="/articles" className="text-[#2b3d5b] hover:underline">
          Return to Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F6FB] min-h-screen">
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/articles" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-semibold text-[#2b3d5b] uppercase tracking-wider bg-[#F0F4F8] px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight tracking-tight">
                {article.title}
              </h1>
            </div>

            <div className="prose prose-lg prose-gray max-w-none prose-headings:font-medium prose-a:text-[#2b3d5b] hover:prose-a:text-[#1e293b]">
              {id === 'why-food-businesses-need-reliable-it' ? (
                <>
                  <p className="mb-6">
                    The food and beverage industry has traditionally been driven by personal touch, culinary skill, and atmosphere. But in today's fast-paced environment, the most critical ingredient for a successful restaurant or food business isn't just what's on the menu—it's the IT infrastructure running behind the scenes.
                  </p>
                  <p className="mb-8">
                    From independent cafes to large restaurant chains, relying on outdated technology or ignoring IT completely can lead to lost revenue, frustrated customers, and operational chaos. Here's why reliable IT is more crucial than ever for food businesses.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Digital POS Revolution</h2>
                  <p className="mb-4">
                    The point-of-sale (POS) system is the beating heart of any modern food business. It's no longer just a cash register; it's a comprehensive management tool.
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong className="text-gray-900 font-semibold">Order Accuracy:</strong> Digital systems transmit orders directly to kitchen display screens (KDS), eliminating misread handwritten tickets.</li>
                    <li><strong className="text-gray-900 font-semibold">Inventory Management:</strong> Modern POS systems track ingredient usage in real-time, automatically updating inventory and alerting staff when supplies run low.</li>
                    <li><strong className="text-gray-900 font-semibold">Table Management:</strong> Waitstaff can manage seating, course timing, and bill splitting directly from handheld tablets.</li>
                  </ul>
                  <p className="mb-8">
                    If your POS system goes down because of a network failure, your ability to take orders, process payments, and serve customers grinds to an immediate halt.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Seamless Online Ordering and Delivery</h2>
                  <p className="mb-4">
                    The pandemic permanently altered consumer behavior. Customers now expect to be able to order food online for pickup or delivery seamlessly.
                  </p>
                  <p className="mb-8">
                    Reliable IT ensures your website, custom app, or third-party delivery integrations (like UberEats, Deliveroo, or DoorDash) sync perfectly with your in-house POS. When these systems fail to communicate, restaurants face missed orders, angry delivery drivers, and disappointed customers. A robust network prevents these integration bottlenecks.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Customer Wi-Fi as a Business Driver</h2>
                  <p className="mb-4">
                    Offering free Wi-Fi is no longer a luxury; it's an expectation. But poorly managed guest Wi-Fi can be a massive vulnerability.
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong className="text-gray-900 font-semibold">Network Security:</strong> Your guest Wi-Fi must be strictly separated from your business network. If they share the same network, a customer's infected device could compromise your POS or back-office computers.</li>
                    <li><strong className="text-gray-900 font-semibold">Marketing Opportunities:</strong> A properly configured captive portal allows you to collect email addresses or social media follows in exchange for Wi-Fi access, building your marketing database.</li>
                    <li><strong className="text-gray-900 font-semibold">Bandwidth Control:</strong> IT solutions can limit the bandwidth guest users consume, ensuring your critical business systems always have the speed they need to function.</li>
                  </ul>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Data Security and Compliance</h2>
                  <p className="mb-4">
                    Restaurants process hundreds or thousands of credit card transactions daily, making them prime targets for cybercriminals.
                  </p>
                  <p className="mb-8">
                    PCI-DSS (Payment Card Industry Data Security Standard) compliance is mandatory. Reliable IT ensures your network uses up-to-date firewalls, encryption, and secure routing to protect customer financial data. A single data breach can destroy a restaurant's reputation and result in crippling fines.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Protecting the Back Office</h2>
                  <p className="mb-4">
                    While the dining room gets all the attention, the back office is where the business is truly managed.
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong className="text-gray-900 font-semibold">Employee Scheduling:</strong> Cloud-based scheduling software ensures adequate staffing and tracks labor costs.</li>
                    <li><strong className="text-gray-900 font-semibold">Financial Data:</strong> Payroll, accounting, and daily sales reports require secure, backed-up storage.</li>
                    <li><strong className="text-gray-900 font-semibold">Vendor Management:</strong> Ordering supplies and managing invoices relies heavily on stable email and internet access.</li>
                  </ul>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Supports Food Businesses</h1>
                  <p className="mb-4">
                    At Solkn, we understand that when you're managing a busy kitchen and a full dining room, you don't have time to troubleshoot internet outages or POS glitches.
                  </p>
                  <p className="mb-4">We provide comprehensive IT solutions for the food industry, including:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong className="text-gray-900 font-semibold">Network Design & Support:</strong> Building rock-solid, segregated networks for POS, back-office, and guest Wi-Fi.</li>
                    <li><strong className="text-gray-900 font-semibold">Cybersecurity:</strong> Ensuring PCI compliance and protecting against malware and ransomware.</li>
                    <li><strong className="text-gray-900 font-semibold">Data Backup:</strong> Protecting your vital financial and operational data in the cloud.</li>
                    <li><strong className="text-gray-900 font-semibold">24/7 Monitoring:</strong> We spot network issues before they bring down your lunch rush.</li>
                  </ul>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Final Thoughts</h2>
                  <p className="mb-8">
                    Great food brings customers in, but reliable technology ensures they have a seamless experience from the moment they order to the moment they pay. Investing in proper IT infrastructure isn't just an operational expense—it's a critical component of modern hospitality.
                  </p>
                </>
              ) : id === 'why-every-small-business-needs-a-backup-strategy' ? (
                <>
                  <p className="mb-6">
                    Imagine arriving at your office on a Monday morning, grabbing a coffee, and sitting down at your desk. You open your laptop to start the week, only to find that every file, customer record, and financial document is gone.
                  </p>
                  <p className="mb-6">
                    No spreadsheets. No invoices. No client databases.
                  </p>
                  <p className="mb-8">
                    For many businesses, this isn't a hypothetical nightmare—it's a reality caused by cyber attacks, hardware failures, or simple human error. Without a reliable backup strategy, a single incident can bring your operations to a standstill.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Why Data Loss Happens</h2>
                  <p className="mb-4">
                    Many business owners assume their data is safe simply because it's stored on a new server or in cloud platforms like Microsoft 365. But data loss can occur in several ways:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong className="text-gray-900 font-semibold">Ransomware:</strong> Hackers encrypt your files and demand payment for the key.</li>
                    <li><strong className="text-gray-900 font-semibold">Hardware Failure:</strong> Hard drives crash, laptops are stolen, and servers break down.</li>
                    <li><strong className="text-gray-900 font-semibold">Human Error:</strong> An employee accidentally deletes a crucial folder or overwrites a file.</li>
                    <li><strong className="text-gray-900 font-semibold">Malicious Deletion:</strong> A disgruntled employee intentionally removes important data before leaving.</li>
                  </ul>
                  <p className="mb-8">
                    Regardless of the cause, the outcome is the same: if you don't have a backup, that data is likely gone forever.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The True Cost of Data Loss</h2>
                  <p className="mb-4">
                    The financial impact of losing data goes far beyond the cost of IT support to try and recover it.
                  </p>
                  <p className="mb-4">Consider the knock-on effects:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong className="text-gray-900 font-semibold">Downtime:</strong> If your team can't access their files, they can't work. How much does a day of lost productivity cost your business?</li>
                    <li><strong className="text-gray-900 font-semibold">Lost Sales:</strong> You can't process orders, send quotes, or respond to customer enquiries.</li>
                    <li><strong className="text-gray-900 font-semibold">Reputation Damage:</strong> Telling clients you've lost their data damages trust and can lead to lost contracts.</li>
                    <li><strong className="text-gray-900 font-semibold">Regulatory Fines:</strong> If the lost data includes personal information, you could face penalties under GDPR.</li>
                  </ul>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">What Makes a Good Backup Strategy?</h2>
                  <p className="mb-4">
                    A USB drive plugged into a server once a week is not a backup strategy. To truly protect your business, you need a robust, automated approach.
                  </p>
                  <p className="mb-4">A reliable strategy should include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong className="text-gray-900 font-semibold">Automation:</strong> Backups should happen automatically, without relying on someone remembering to click a button.</li>
                    <li><strong className="text-gray-900 font-semibold">Offsite Storage:</strong> If your office is damaged by fire or flood, your local backups will be destroyed too. Always keep a copy of your data offsite, usually in a secure cloud environment.</li>
                    <li><strong className="text-gray-900 font-semibold">Version History:</strong> If a file is infected with ransomware on Monday, but you don't notice until Wednesday, a Tuesday backup is useless. You need to be able to roll back to earlier versions.</li>
                    <li><strong className="text-gray-900 font-semibold">Microsoft 365 Backups:</strong> Microsoft provides the infrastructure for 365, but they do not backup your data. You are responsible for backing up your own emails, SharePoint files, and OneDrive data.</li>
                  </ul>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The 3-2-1 Rule</h2>
                  <p className="mb-4">
                    IT professionals widely consider the "3-2-1 Rule" as the gold standard for data backup:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Keep <strong className="text-gray-900 font-semibold">3</strong> copies of your data (the original and two backups).</li>
                    <li>Use <strong className="text-gray-900 font-semibold">2</strong> different storage types (e.g., a local server and a cloud repository).</li>
                    <li>Keep <strong className="text-gray-900 font-semibold">1</strong> copy offsite.</li>
                  </ul>
                  <p className="mb-8">Following this rule ensures that a single disaster cannot wipe out all your data.</p>
                  
                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Testing: The Missing Step</h2>
                  <p className="mb-4">
                    A backup is only as good as its ability to be restored. Many businesses believe they have a working backup, only to discover the files are corrupted when they actually need them.
                  </p>
                  <p className="mb-8">
                    Your backup strategy must include regular, documented testing to ensure data can be recovered quickly and completely.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Can Help</h1>
                  <p className="mb-4">
                    At Solkn, we take the stress out of data protection by managing the entire process for you.
                  </p>
                  <p className="mb-4">Our managed backup services include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Automated daily backups for servers, PCs, and laptops</li>
                    <li>Comprehensive Microsoft 365 and Google Workspace backups</li>
                    <li>Secure, encrypted cloud storage</li>
                    <li>Fast disaster recovery solutions</li>
                    <li>Regular backup testing and verification</li>
                    <li>Continuous monitoring by our IT team</li>
                  </ul>
                  <p className="mb-8">
                    We ensure your data is always safe, secure, and ready to be restored the moment you need it.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Final Thoughts</h2>
                  <p className="mb-4">
                    Data is the most valuable asset your business owns. Losing it can be catastrophic, but it is also entirely preventable.
                  </p>
                  <p className="mb-8">
                    Don't wait until you've lost important files to think about how you'll get them back. By implementing a strong backup strategy today, you can ensure your business remains resilient against whatever challenges come your way.
                  </p>
                </>
              ) : id === '10-digital-marketing-mistakes' ? (
                <>
                  <p className="mb-6">
                    In today's digital-first world, having an online presence is no longer optional—it's essential for survival. However, many businesses pour thousands of dollars into digital marketing campaigns only to see minimal return on investment.
                  </p>
                  <p className="mb-8">
                    If your website isn't generating leads, or your social media feels like shouting into a void, you might be making one of these common digital marketing mistakes. Here are 10 errors that could be costing you customers, and how to fix them.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">1. Not Knowing Your Target Audience</h2>
                  <p className="mb-6">
                    <strong>The Mistake:</strong> Marketing to "everyone" in the hopes of casting a wider net.
                    <br />
                    <strong>The Fix:</strong> Create detailed buyer personas. Understand their pain points, where they spend their time online, and what language resonates with them. When you speak to everyone, you appeal to no one.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">2. Ignoring Mobile Users</h2>
                  <p className="mb-6">
                    <strong>The Mistake:</strong> Having a website that looks great on a desktop but is impossible to navigate on a smartphone.
                    <br />
                    <strong>The Fix:</strong> Over 50% of all web traffic comes from mobile devices. Ensure your website uses a responsive design, has fast load times on mobile networks, and features easily clickable buttons.
                  </p>
                  
                  <h2 className="text-xl font-medium text-gray-900 mb-6">3. Neglecting SEO (Search Engine Optimization)</h2>
                  <p className="mb-6">
                    <strong>The Mistake:</strong> Building a beautiful website but failing to optimize it for Google search.
                    <br />
                    <strong>The Fix:</strong> Conduct basic keyword research for your industry. Ensure your page titles, meta descriptions, and headers include relevant keywords. Consistently publish high-quality content that answers the questions your potential customers are searching for.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">4. Inconsistent Branding Across Channels</h2>
                  <p className="mb-6">
                    <strong>The Mistake:</strong> Your website uses one logo and color scheme, your Facebook page uses another, and your emails look completely different.
                    <br />
                    <strong>The Fix:</strong> Create a brand style guide that outlines your exact colors, fonts, logo usage, and tone of voice. Ensure this is strictly followed across every single digital touchpoint to build trust and recognition.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">5. Focusing on Vanity Metrics</h2>
                  <p className="mb-6">
                    <strong>The Mistake:</strong> Celebrating a high number of social media followers or website views without tracking conversions.
                    <br />
                    <strong>The Fix:</strong> 10,000 followers mean nothing if none of them buy your product. Focus on metrics that impact your bottom line: conversion rates, cost per acquisition (CPA), and customer lifetime value (CLV).
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">6. Abandoning Social Media Profiles</h2>
                  <p className="mb-6">
                    <strong>The Mistake:</strong> Setting up accounts on Facebook, Instagram, LinkedIn, and TikTok, then only posting once every three months.
                    <br />
                    <strong>The Fix:</strong> It is better to be highly active on one or two platforms than dormant on five. Choose the platforms where your target audience spends their time and commit to a consistent posting schedule.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">7. Forgetting the Call to Action (CTA)</h2>
                  <p className="mb-6">
                    <strong>The Mistake:</strong> Writing a great blog post or creating a beautiful ad, but leaving the user wondering what to do next.
                    <br />
                    <strong>The Fix:</strong> Every single piece of marketing material must have a clear CTA. Tell the user exactly what you want them to do: "Buy Now," "Sign Up for Our Newsletter," "Contact Us for a Quote."
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">8. Ignoring Email Marketing</h2>
                  <p className="mb-6">
                    <strong>The Mistake:</strong> Relying solely on social media algorithms to reach your audience and ignoring email collection.
                    <br />
                    <strong>The Fix:</strong> You don't own your social media followers; the platform does. You do own your email list. Offer a valuable resource (like an ebook or discount code) in exchange for email addresses, and nurture those leads with regular, valuable content.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">9. Not Utilizing Remarketing</h2>
                  <p className="mb-6">
                    <strong>The Mistake:</strong> Letting website visitors leave without ever trying to re-engage them.
                    <br />
                    <strong>The Fix:</strong> Most people won't buy on their first visit to your site. Set up remarketing campaigns on Google and Facebook to show targeted ads to people who have previously visited your site, reminding them of what they viewed.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">10. Operating Without a Defined Strategy</h2>
                  <p className="mb-6">
                    <strong>The Mistake:</strong> Throwing money at random ads, writing occasional blog posts, and hoping something works.
                    <br />
                    <strong>The Fix:</strong> Digital marketing requires a documented strategy. Define your goals, set a budget, choose your channels, and establish how you will measure success before you spend a single dollar.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Can Elevate Your Marketing</h1>
                  <p className="mb-4">
                    Digital marketing is complex and constantly evolving. If you don't have the time or expertise to manage it in-house, Solkn can help.
                  </p>
                  <p className="mb-4">Our digital marketing experts provide:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Comprehensive SEO audits and optimization</li>
                    <li>Targeted PPC (Pay-Per-Click) ad campaigns</li>
                    <li>Conversion-focused website design</li>
                    <li>Strategic content marketing and email automation</li>
                  </ul>
                  <p className="mb-8">
                    Stop wasting money on marketing that doesn't work. Contact us today to develop a strategy that actually drives growth.
                  </p>
                </>
              ) : (
                <div className="py-12 text-center text-gray-500">
                  Article content is being written...
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
            <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-white tracking-tight leading-[1.05]">Want to discuss this topic for your business?</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Our specialists are ready to help you implement best practices in IT security and strategy.</p>
            <Link to="/contact" className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center shadow-md hover:shadow-lg hover:-translate-y-1 duration-300">
              Get a free consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
