const fs = require('fs');
let content = fs.readFileSync('src/pages/ArticlePage.tsx', 'utf8');

content = content.replace(`    'the-importance-of-network-monitoring-tools': {
      title: "The Importance of Network Monitoring Tools like IP Fabric and AlgoSec",
      category: 'Infrastructure',
      date: 'Oct 12, 2026',
    }`, `    '10-digital-marketing-mistakes': {
      title: "10 Digital Marketing Mistakes That Could Be Costing Your Business Customers",
      category: 'Marketing',
      date: 'Oct 12, 2026',
    }`);

content = content.replace(`              ) : (
                <div className="py-12 text-center text-gray-500">
                  Article content is being written...
                </div>`, `              ) : id === '10-digital-marketing-mistakes' ? (
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
                </div>`);

fs.writeFileSync('src/pages/ArticlePage.tsx', content);
