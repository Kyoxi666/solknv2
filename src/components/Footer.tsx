import { Logo } from './Logo';
import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-[#E0E0E0] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top CTA headline */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 pb-16 border-b border-white/10">
          <p className="text-3xl md:text-4xl font-medium text-white tracking-tight max-w-md">
            Ready to simplify your IT?
          </p>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#E87722] text-white rounded-full font-semibold text-sm hover:bg-[#C4621A] transition-colors duration-300 active:scale-[0.98]"
          >
            Get a free consultation
          </Link>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <Logo className="text-white" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Intelligent IT services and AI automation empowering growing businesses to scale with confidence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SOLKN on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SOLKN on X (Twitter)"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SOLKN on Facebook"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Services</h4>
            <ul className="space-y-3.5">
              <li><Link to="/services/managed-it"             className="text-white/50 hover:text-white text-sm transition-colors duration-200">Managed IT Support</Link></li>
              <li><Link to="/services/it-outsourcing"         className="text-white/50 hover:text-white text-sm transition-colors duration-200">IT Outsourcing</Link></li>
              <li><Link to="/services/web-development"        className="text-white/50 hover:text-white text-sm transition-colors duration-200">Web Development & Hosting</Link></li>
              <li><Link to="/services/ai-solutions"           className="text-white/50 hover:text-white text-sm transition-colors duration-200">AI Business Solutions</Link></li>
              <li><Link to="/services/network-infrastructure" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Network Infrastructure</Link></li>
              <li><Link to="/services/network-monitoring"     className="text-white/50 hover:text-white text-sm transition-colors duration-200">Network Monitoring</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3.5">
              <li><Link to="/case-studies" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Case Studies</Link></li>
              <li><Link to="/articles"     className="text-white/50 hover:text-white text-sm transition-colors duration-200">Articles</Link></li>
              <li><Link to="/guides"       className="text-white/50 hover:text-white text-sm transition-colors duration-200">Guides</Link></li>
              <li><Link to="/tools"        className="text-white/50 hover:text-white text-sm transition-colors duration-200">Tools</Link></li>
              <li><Link to="/contact"      className="text-white/50 hover:text-white text-sm transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Contact</h4>
            <div className="space-y-4">
              <div className="text-white/50 text-sm leading-relaxed">
                Harrow, London<br />United Kingdom
              </div>
              <div className="text-white/50 text-sm leading-relaxed">
                Kapadvanj, Gujarat<br />India
              </div>
              <a
                href="mailto:hello@solkn.com"
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>hello@solkn.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} SOLKN. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/30 text-xs">
            <Link to="/privacy-policy"   className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
