import { ArticlesBanner } from '../components/ArticlesBanner';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ArticlesPage() {
  const articles = [
    {
      title: "Why Every Small Business Needs a Backup Strategy Before It's Too Late",
      tagText: "Strategy • Critical",
      date: "Aug 03, 2026",
      description: "Learn why data loss happens, how much it can cost your business, and the essential components of a reliable backup strategy. Don't wait until disaster strikes to secure your data.",
      link: "/articles/why-every-small-business-needs-a-backup-strategy",
      buttonText: "Analyse Strategy",
      image: "/article1.png",
    },
    {
      title: "Why Food Businesses Need Reliable IT More Than Ever",
      tagText: "Industry • High",
      date: "Jul 28, 2026",
      description: "Discover how modern IT infrastructure is critical for the success of food businesses, from digital POS systems to supply chain management. Ensure your technology scales with your business.",
      link: "/articles/why-food-businesses-need-reliable-it",
      buttonText: "Analyse Tactics",
      image: "/article2.png",
    },
    {
      title: "10 Digital Marketing Mistakes That Could Be Costing Your Business Customers",
      tagText: "Marketing • Mixed",
      date: "Jul 15, 2026",
      description: "Are you pouring money into digital marketing without seeing a return? Learn about the most common marketing mistakes businesses make and how to avoid them. Optimize your marketing spend today.",
      link: "/articles/10-digital-marketing-mistakes",
      buttonText: "Analyse Trends",
      image: "/article3.png",
    },
    {
      title: "The Rise of AI in Cybersecurity: What You Need to Know",
      tagText: "Security • High",
      date: "Jul 02, 2026",
      description: "AI-driven botnet attacks lead to the deployment of complex downloader shell scripts. Learn how to protect your infrastructure against these emerging threats.",
      link: "/articles/ai-in-cybersecurity",
      buttonText: "Analyse Vulnerabilities",
      image: "/article4.png",
    }
  ];

  return (
    <div className="bg-[#f0f3f5] min-h-screen">
      <ArticlesBanner />
      
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[#000000] mb-12 hidden">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <Link key={idx} to={article.link} className="group block w-full outline-none">
              <div className="flex flex-col gap-3 h-full">
                <div className="relative w-full aspect-[16/10] bg-white rounded-[24px] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#0b0e0f]/75 backdrop-blur-sm rounded-xl px-4 py-1.5">
                    <span className="text-[#f6f8f9] text-sm font-medium">{article.tagText}</span>
                  </div>
                </div>
                
                <div className="bg-[#f2f6f7] rounded-[24px] p-6 sm:p-8 flex flex-col h-full transition-colors duration-300 group-hover:bg-[#e8ecef]">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#000000] mb-3">{article.title}</h3>
                  <p className="text-[#425357] text-sm leading-relaxed mb-8 flex-grow">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-[#425357] text-sm font-medium tracking-wide uppercase">
                    <div className="flex items-center">
                      Read article <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </div>
                    <span className="text-xs text-[#A3A3A3] font-light normal-case">{article.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
