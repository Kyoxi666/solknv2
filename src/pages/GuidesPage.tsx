import { GuidesBanner } from '../components/GuidesBanner';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GuidesPage() {
  const guides = [
    {
      title: 'Why Your Business Wi-Fi Is Slow (And How to Fix It).',
      description: 'Discover common causes of slow business Wi-Fi networks and actionable steps to improve speed and reliability.',
      category: 'Networking',
      readTime: '8 min read',
      link: '/guides/why-your-business-wi-fi-is-slow',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'How to Prepare Your Business for Windows 11.',
      description: 'A comprehensive guide on evaluating your current systems and migrating smoothly to Windows 11.',
      category: 'Infrastructure',
      readTime: '10 min read',
      link: '/guides/how-to-prepare-your-business-for-windows-11',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'The Hidden Costs of Cheap IT Equipment.',
      description: 'Why investing in enterprise-grade IT equipment saves your business money, time, and headaches in the long run.',
      category: 'Hardware',
      readTime: '7 min read',
      link: '/guides/the-hidden-costs-of-cheap-it-equipment',
      image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: "A Business Owner's Guide to Microsoft 365.",
      description: 'Maximize productivity and collaboration across your organization with this essential guide to Microsoft 365.',
      category: 'Software',
      readTime: '12 min read',
      link: '/guides/a-business-owners-guide-to-microsoft-365',
      image: 'https://images.unsplash.com/photo-1587614295999-6c1c13675117?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'How to Spot a Phishing Email in 30 Seconds.',
      description: 'Train your team to identify phishing attempts quickly and protect your sensitive business data from attackers.',
      category: 'Cybersecurity',
      readTime: '5 min read',
      link: '/guides/how-to-spot-a-phishing-email',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'The Ultimate Office IT Setup Checklist.',
      description: 'Everything you need to consider when setting up IT infrastructure for a new office space or remote team.',
      category: 'IT Strategy',
      readTime: '15 min read',
      link: '/guides/the-ultimate-office-it-setup-checklist',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="bg-[#f0f3f5] min-h-screen">
      <GuidesBanner />
      
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900">
            Managed IT & Cyber Security Knowledge Base
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, idx) => (
            <Link key={idx} to={guide.link} className="group block w-full outline-none">
              <div className="flex flex-col gap-3 h-full">
                <div className="relative w-full aspect-[16/10] bg-white rounded-[24px] overflow-hidden">
                  <img 
                    src={guide.image} 
                    alt={guide.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#0b0e0f]/75 backdrop-blur-sm rounded-xl px-4 py-1.5">
                    <span className="text-[#f6f8f9] text-sm font-medium">{guide.category}</span>
                  </div>
                </div>
                
                <div className="bg-[#f2f6f7] rounded-[24px] p-6 sm:p-8 flex flex-col h-full transition-colors duration-300 group-hover:bg-[#e8ecef]">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-900 mb-3">{guide.title}</h3>
                  <p className="text-[#425357] text-sm leading-relaxed mb-8 flex-grow">
                    {guide.description}
                  </p>
                  <div className="flex items-center text-[#425357] text-sm font-medium tracking-wide uppercase">
                    Read full guide <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
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
