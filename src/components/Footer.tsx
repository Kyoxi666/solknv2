import { Link } from 'react-router-dom';

const services = [
  ['Managed IT Support', '/services/managed-it'],
  ['IT Outsourcing', '/services/it-outsourcing'],
  ['Web Development', '/services/web-development'],
  ['AI Business Solutions', '/services/ai-solutions'],
  ['Network Infrastructure', '/services/network-infrastructure'],
  ['Network Monitoring', '/services/network-monitoring'],
];

const company = [
  ['Case Studies', '/case-studies'],
  ['Articles', '/articles'],
  ['Guides', '/guides'],
  ['Tools', '/tools'],
  ['Client Portal', '/client-portal'],
];

const footerLinkClass =
  'inline-flex min-h-8 items-center text-sm text-white/60 transition-colors duration-200 hover:text-white';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 overflow-hidden border-t border-white/10 bg-[#080b0d] text-white">
      <div className="px-5 pb-7 pt-14 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-12 lg:gap-x-8">
          <nav className="col-span-2 sm:col-span-1 lg:col-span-3" aria-labelledby="footer-services">
            <h2 id="footer-services" className="mb-4 text-sm font-semibold text-white">
              Services
            </h2>
            <ul className="space-y-1">
              {services.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className={footerLinkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-labelledby="footer-company">
            <h2 id="footer-company" className="mb-4 text-sm font-semibold text-white">
              Company
            </h2>
            <ul className="space-y-1">
              {company.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className={footerLinkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="mb-4 text-sm font-semibold text-white">Contact</h2>
            <div className="flex flex-col items-start gap-1">
              <a href="mailto:hello@solkn.com" className={footerLinkClass}>hello@solkn.com</a>
              <a href="tel:+447540319866" className={footerLinkClass}>+44 7540 319866</a>
              <p className="pt-2 text-sm leading-6 text-white/60">
                Harrow, London<br />United Kingdom
              </p>
              <p className="pt-2 text-sm leading-6 text-white/60">
                Kapadvanj, Gujarat<br />India
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-4 text-sm font-semibold text-white">Connect</h2>
            <div className="flex flex-col items-start gap-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>X</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>Facebook</a>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <h2 className="mb-4 text-sm font-semibold text-white">Start a conversation</h2>
            <Link
              to="/contact"
              className="flex min-h-11 w-full items-center justify-between rounded-xl border border-white/20 px-4 text-sm text-white/70 transition-colors duration-200 hover:border-white/40 hover:text-white"
            >
              Talk to SOLKN
            </Link>
          </div>
        </div>

        <Link
          to="/"
          aria-label="SOLKN home"
          className="mt-24 block whitespace-nowrap text-center text-[clamp(5rem,24vw,24rem)] font-bold leading-[0.72] tracking-[-0.04em] text-white sm:mt-28 lg:mt-36"
        >
          SOLKN
        </Link>

        <div className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} SOLKN. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            London · Gujarat
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="transition-colors duration-200 hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="transition-colors duration-200 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
