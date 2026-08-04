import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
    { name: 'Client Portal', path: '/client-portal' }
  ];

  const resourceLinks = [
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Articles', path: '/articles' },
    { name: 'Guides', path: '/guides' },
    { name: 'Tools', path: '/tools' },
  ];

  const serviceLinks = [
    { name: 'Managed IT Support', path: '/services/managed-it' },
    { name: 'IT Outsourcing', path: '/services/it-outsourcing' },
    { name: 'Web Development & Hosting', path: '/services/web-development' },
    { name: 'AI Business Solutions', path: '/services/ai-solutions' },
    { name: 'Network Infrastructure', path: '/services/network-infrastructure' },
    { name: 'Network Monitoring', path: '/services/network-monitoring' },
    { name: 'View All Services', path: '/services' }
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-black/95 backdrop-blur-md rounded-[2rem] border border-white/10 shadow-2xl">
      <div className="px-6 sm:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Logo className="text-white" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`
              }
            >
              Home
            </NavLink>

            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${isServicesOpen ? 'text-white' : 'text-white/80 hover:text-white'}`}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-500 ease-out origin-top-center ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-4 scale-95'
                }`}
              >
                <div className="relative bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.8)] w-[800px] flex p-2">
                  
                  {/* Left Panel */}
                  <div className="w-[260px] p-6 rounded-2xl bg-gradient-to-br from-black to-[#1e293b] flex flex-col justify-between shrink-0">
                    <h3 className="text-xl font-medium text-white leading-snug">Our Comprehensive Digital Solutions</h3>
                    <Link to="/services" className="text-sm font-medium text-white/80 hover:text-white flex items-center gap-1 transition-colors mt-12 group">
                      View All Services <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right Panel (Grid) */}
                  <div className="flex-1 p-8 flex items-center">
                    <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-x-8 gap-y-6 w-full">
                      {serviceLinks.filter(l => l.name !== 'View All Services').map((link) => (
                        <NavLink
                          key={link.name}
                          to={link.path}
                          onClick={() => setIsServicesOpen(false)}
                          className={({ isActive }) => 
                            `block text-sm font-medium transition-all duration-300 ${
                              isActive ? 'text-white' : 'text-white/70 hover:text-white'
                            }`
                          }
                        >
                          {link.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button 
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${isResourcesOpen ? 'text-white' : 'text-white/80 hover:text-white'}`}
              >
                Resources <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-500 ease-out origin-top-center ${
                  isResourcesOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-4 scale-95'
                }`}
              >
                <div className="relative bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.8)] w-[400px] flex p-2">
                  
                  {/* Left Panel */}
                  <div className="w-[180px] p-6 rounded-2xl bg-gradient-to-br from-black to-[#1e293b] flex flex-col justify-between shrink-0">
                    <h3 className="text-xl font-medium text-white leading-snug">Insights & Guides</h3>
                  </div>

                  {/* Right Panel (Grid) */}
                  <div className="flex-1 p-8 flex items-center">
                    <div className="flex flex-col gap-y-4 w-full">
                      {resourceLinks.map((link) => (
                        <NavLink
                          key={link.name}
                          to={link.path}
                          onClick={() => setIsResourcesOpen(false)}
                          className={({ isActive }) => 
                            `block text-sm font-medium transition-all duration-300 ${
                              isActive ? 'text-white' : 'text-white/70 hover:text-white'
                            }`
                          }
                        >
                          {link.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {mainLinks.slice(1).map(link => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 rounded-b-3xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <NavLink 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `block px-3 py-2 text-base font-medium ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`
              }
            >
              Home
            </NavLink>
            
            <div className="py-2">
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-white/80 hover:text-white"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-6 space-y-1 border-l border-white/10 ml-4 mt-2">
                  {serviceLinks.map(link => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `block px-3 py-2 text-sm font-medium ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <div className="py-2">
              <button 
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-white/80 hover:text-white"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileResourcesOpen && (
                <div className="pl-6 space-y-1 border-l border-white/10 ml-4 mt-2">
                  {resourceLinks.map(link => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `block px-3 py-2 text-sm font-medium ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {mainLinks.slice(1).map(link => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-2 text-base font-medium ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
