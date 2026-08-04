import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const closeAll = () => setIsOpen(false);

  const resourceLinks = [
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Articles',     path: '/articles' },
    { name: 'Guides',       path: '/guides' },
    { name: 'Tools',        path: '/tools' },
  ];

  const serviceLinks = [
    { name: 'Managed IT Support',        path: '/services/managed-it' },
    { name: 'IT Outsourcing',            path: '/services/it-outsourcing' },
    { name: 'Web Development & Hosting', path: '/services/web-development' },
    { name: 'AI Business Solutions',     path: '/services/ai-solutions' },
    { name: 'Network Infrastructure',    path: '/services/network-infrastructure' },
    { name: 'Network Monitoring',        path: '/services/network-monitoring' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/90 backdrop-blur-xl rounded-[2rem] border border-[#E0E0E0] shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <div className="px-5 sm:px-7">
        <div className="flex items-center justify-between h-[3.5rem]">

          {/* Logo */}
          <Link to="/" onClick={closeAll} className="shrink-0">
            <Logo className="text-black" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">

            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-[#000000]' : 'text-[#6B6B6B] hover:text-[#000000]'}`
              }
            >
              Home
            </NavLink>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${isServicesOpen ? 'text-[#000000]' : 'text-[#6B6B6B] hover:text-[#000000]'}`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top ${
                  isServicesOpen
                    ? 'opacity-100 visible translate-y-0 scale-100'
                    : 'opacity-0 invisible -translate-y-3 scale-95'
                }`}
              >
                <div className="relative bg-white rounded-3xl border border-[#E0E0E0] shadow-[0_4px_20px_rgba(0,0,0,0.12)] w-[780px] flex p-2">
                  {/* Left panel */}
                  <div className="w-[240px] p-7 rounded-2xl bg-[#F7F7F7] flex flex-col justify-between shrink-0">
                    <h3 className="text-lg font-medium text-[#000000] leading-snug">
                      Comprehensive digital solutions for your business.
                    </h3>
                    <Link
                      to="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-sm font-medium text-[#6B6B6B] hover:text-[#000000] flex items-center gap-1 transition-colors mt-12 group"
                    >
                      View all services
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right panel — 2-column grid */}
                  <div className="flex-1 p-7 grid grid-cols-2 gap-x-8 gap-y-4 content-center">
                    {serviceLinks.map((link) => (
                      <NavLink
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsServicesOpen(false)}
                        className={({ isActive }) =>
                          `block text-sm font-medium transition-colors duration-200 ${
                            isActive ? 'text-[#000000]' : 'text-[#6B6B6B] hover:text-[#000000]'
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

            {/* Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${isResourcesOpen ? 'text-[#000000]' : 'text-[#6B6B6B] hover:text-[#000000]'}`}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
              >
                Resources
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top ${
                  isResourcesOpen
                    ? 'opacity-100 visible translate-y-0 scale-100'
                    : 'opacity-0 invisible -translate-y-3 scale-95'
                }`}
              >
                <div className="relative bg-white rounded-3xl border border-[#E0E0E0] shadow-[0_4px_20px_rgba(0,0,0,0.12)] w-[360px] flex p-2">
                  {/* Left panel */}
                  <div className="w-[160px] p-7 rounded-2xl bg-[#F7F7F7] flex flex-col justify-between shrink-0">
                    <h3 className="text-base font-medium text-[#000000] leading-snug">
                      Insights & guides
                    </h3>
                  </div>
                  {/* Right panel */}
                  <div className="flex-1 p-7 flex items-center">
                    <div className="flex flex-col gap-4 w-full">
                      {resourceLinks.map((link) => (
                        <NavLink
                          key={link.name}
                          to={link.path}
                          onClick={() => setIsResourcesOpen(false)}
                          className={({ isActive }) =>
                            `block text-sm font-medium transition-colors duration-200 ${
                              isActive ? 'text-[#000000]' : 'text-[#6B6B6B] hover:text-[#000000]'
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

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-[#000000]' : 'text-[#6B6B6B] hover:text-[#000000]'}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#000000] p-1.5 rounded-xl hover:bg-[#F7F7F7] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
          >
            <span className="relative w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={`absolute w-5 h-px bg-[#000000] transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute w-5 h-px bg-[#000000] transition-all duration-300 ${
                  isOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute w-5 h-px bg-[#000000] transition-all duration-300 ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-[#E0E0E0] px-4 pt-3 pb-5 space-y-1">
          <NavLink
            to="/"
            onClick={closeAll}
            className={({ isActive }) =>
              `block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${isActive ? 'text-[#000000] bg-[#F7F7F7]' : 'text-[#6B6B6B] hover:text-[#000000] hover:bg-[#F7F7F7]'}`
            }
          >
            Home
          </NavLink>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[#6B6B6B] hover:text-[#000000] rounded-xl hover:bg-[#F7F7F7] transition-colors"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-5 py-1 space-y-0.5 border-l border-[#E0E0E0] ml-3 mt-1">
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={closeAll}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm transition-colors rounded-lg ${isActive ? 'text-[#000000]' : 'text-[#A3A3A3] hover:text-[#000000]'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <NavLink
                  to="/services"
                  onClick={closeAll}
                  className="block px-3 py-2 text-sm text-[#A3A3A3] hover:text-[#000000] transition-colors rounded-lg"
                >
                  View all services
                </NavLink>
              </div>
            </div>
          </div>

          {/* Mobile Resources */}
          <div>
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[#6B6B6B] hover:text-[#000000] rounded-xl hover:bg-[#F7F7F7] transition-colors"
            >
              Resources
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                mobileResourcesOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-5 py-1 space-y-0.5 border-l border-[#E0E0E0] ml-3 mt-1">
                {resourceLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={closeAll}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm transition-colors rounded-lg ${isActive ? 'text-[#000000]' : 'text-[#A3A3A3] hover:text-[#000000]'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink
            to="/contact"
            onClick={closeAll}
            className={({ isActive }) =>
              `block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${isActive ? 'text-[#000000] bg-[#F7F7F7]' : 'text-[#6B6B6B] hover:text-[#000000] hover:bg-[#F7F7F7]'}`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/client-portal"
            onClick={closeAll}
            className={({ isActive }) =>
              `block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${isActive ? 'text-[#000000] bg-[#F7F7F7]' : 'text-[#6B6B6B] hover:text-[#000000] hover:bg-[#F7F7F7]'}`
            }
          >
            Client Portal
          </NavLink>
        </div>
      </div>
    </header>
  );
}
