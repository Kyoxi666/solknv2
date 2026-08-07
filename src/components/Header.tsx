import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);

  const location = useLocation();

  const closeAll = () => setIsOpen(false);

  useEffect(() => {
    const checkBackgroundContrast = () => {
      const headerX = window.innerWidth / 2;
      const headerY = 50;

      const elements = document.elementsFromPoint(headerX, headerY);
      const underlyingEl = elements.find((el) => !el.closest('header'));

      if (underlyingEl) {
        // 1. Check explicit data-theme attribute on underlying element or parents
        const themeEl = underlyingEl.closest('[data-theme]');
        if (themeEl) {
          const theme = themeEl.getAttribute('data-theme');
          if (theme === 'light') {
            setIsLightBg(true);
            return;
          }
          if (theme === 'dark') {
            setIsLightBg(false);
            return;
          }
        }

        // 2. Check computed background color
        let curr: HTMLElement | null = underlyingEl as HTMLElement;
        while (curr && curr !== document.body && curr !== document.documentElement) {
          const bg = window.getComputedStyle(curr).backgroundColor;
          if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            const match = bg.match(/\d+/g);
            if (match && match.length >= 3) {
              const r = parseInt(match[0], 10);
              const g = parseInt(match[1], 10);
              const b = parseInt(match[2], 10);
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              setIsLightBg(brightness > 160);
              return;
            }
          }
          curr = curr.parentElement;
        }
      }
      setIsLightBg(false);
    };

    checkBackgroundContrast();
    window.addEventListener('scroll', checkBackgroundContrast, { passive: true });
    window.addEventListener('resize', checkBackgroundContrast, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkBackgroundContrast);
      window.removeEventListener('resize', checkBackgroundContrast);
    };
  }, [location.pathname]);

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
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-[2rem] transition-all duration-300 backdrop-blur-xl ${
        isLightBg
          ? 'bg-black/90 text-white border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-white/95 text-black border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
      }`}
    >
      <div className="px-5 sm:px-7">
        <div className="flex items-center justify-between h-[3.5rem]">

          {/* Logo */}
          <Link to="/" onClick={closeAll} className="shrink-0">
            <Logo className={isLightBg ? 'text-white' : 'text-black'} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">

            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isLightBg
                    ? isActive ? 'text-white font-semibold' : 'text-white/65 hover:text-white'
                    : isActive ? 'text-black font-semibold' : 'text-black/70 hover:text-black'
                }`
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
                className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                  isLightBg
                    ? isServicesOpen ? 'text-white' : 'text-white/65 hover:text-white'
                    : isServicesOpen ? 'text-black' : 'text-black/70 hover:text-black'
                }`}
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
                <div className="relative bg-[#0a0a0a] rounded-3xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] w-[780px] flex p-2 text-white">
                  {/* Left panel */}
                  <div className="w-[240px] p-7 rounded-2xl bg-gradient-to-br from-[#111] to-[#1e293b] flex flex-col justify-between shrink-0">
                    <h3 className="text-lg font-medium text-white leading-snug">
                      Comprehensive digital solutions for your business.
                    </h3>
                    <Link
                      to="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-sm font-medium text-white/70 hover:text-white flex items-center gap-1 transition-colors mt-12 group"
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
                            isActive ? 'text-white' : 'text-white/60 hover:text-white'
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
                className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                  isLightBg
                    ? isResourcesOpen ? 'text-white' : 'text-white/65 hover:text-white'
                    : isResourcesOpen ? 'text-black' : 'text-black/70 hover:text-black'
                }`}
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
                <div className="relative bg-[#0a0a0a] rounded-3xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] w-[360px] flex p-2 text-white">
                  {/* Left panel */}
                  <div className="w-[160px] p-7 rounded-2xl bg-gradient-to-br from-[#111] to-[#1e293b] flex flex-col justify-between shrink-0">
                    <h3 className="text-base font-medium text-white leading-snug">
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
                              isActive ? 'text-white' : 'text-white/60 hover:text-white'
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
                `text-sm font-medium transition-colors duration-200 ${
                  isLightBg
                    ? isActive ? 'text-white font-semibold' : 'text-white/65 hover:text-white'
                    : isActive ? 'text-black font-semibold' : 'text-black/70 hover:text-black'
                }`
              }
            >
              Contact
            </NavLink>

            {/* Client Portal CTA button */}
            <Link
              to="/client-portal"
              className={`ml-2 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 active:scale-[0.98] shrink-0 ${
                isLightBg
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              Client Portal
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-1.5 rounded-xl transition-colors ${
              isLightBg ? 'text-white hover:bg-white/8' : 'text-black hover:bg-black/5'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
          >
            <span className="relative w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={`absolute w-5 h-px transition-all duration-300 ${isLightBg ? 'bg-white' : 'bg-black'} ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute w-5 h-px transition-all duration-300 ${isLightBg ? 'bg-white' : 'bg-black'} ${
                  isOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute w-5 h-px transition-all duration-300 ${isLightBg ? 'bg-white' : 'bg-black'} ${
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
        <div className={`border-t px-4 pt-3 pb-5 space-y-1 ${isLightBg ? 'border-white/8' : 'border-black/10'}`}>
          <NavLink
            to="/"
            onClick={closeAll}
            className={({ isActive }) =>
              `block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                isLightBg
                  ? isActive ? 'text-white bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'
                  : isActive ? 'text-black bg-black/5' : 'text-black/70 hover:text-black hover:bg-black/5'
              }`
            }
          >
            Home
          </NavLink>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                isLightBg ? 'text-white/70 hover:text-white hover:bg-white/5' : 'text-black/70 hover:text-black hover:bg-black/5'
              }`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className={`pl-5 py-1 space-y-0.5 border-l ml-3 mt-1 ${isLightBg ? 'border-white/8' : 'border-black/10'}`}>
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={closeAll}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm transition-colors rounded-lg ${
                        isLightBg
                          ? isActive ? 'text-white font-semibold' : 'text-white/50 hover:text-white'
                          : isActive ? 'text-black font-semibold' : 'text-black/60 hover:text-black'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <NavLink
                  to="/services"
                  onClick={closeAll}
                  className={`block px-3 py-2 text-sm transition-colors rounded-lg ${
                    isLightBg ? 'text-white/50 hover:text-white' : 'text-black/60 hover:text-black'
                  }`}
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
              className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                isLightBg ? 'text-white/70 hover:text-white hover:bg-white/5' : 'text-black/70 hover:text-black hover:bg-black/5'
              }`}
            >
              Resources
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                mobileResourcesOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className={`pl-5 py-1 space-y-0.5 border-l ml-3 mt-1 ${isLightBg ? 'border-white/8' : 'border-black/10'}`}>
                {resourceLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={closeAll}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm transition-colors rounded-lg ${
                        isLightBg
                          ? isActive ? 'text-white font-semibold' : 'text-white/50 hover:text-white'
                          : isActive ? 'text-black font-semibold' : 'text-black/60 hover:text-black'
                      }`
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
              `block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                isLightBg
                  ? isActive ? 'text-white bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'
                  : isActive ? 'text-black bg-black/5' : 'text-black/70 hover:text-black hover:bg-black/5'
              }`
            }
          >
            Contact
          </NavLink>

          {/* Mobile CTA */}
          <div className="pt-2 pb-1 px-3">
            <Link
              to="/client-portal"
              onClick={closeAll}
              className={`block w-full text-center py-3 text-sm font-semibold rounded-full transition-colors ${
                isLightBg
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              Client Portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
