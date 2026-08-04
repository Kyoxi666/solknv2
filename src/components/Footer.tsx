import { Logo } from './Logo';
import { Sparkle, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/">
              <Logo className="text-white mb-6" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Intelligent IT services and AI automation solutions empowering growing businesses to scale efficiently.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#2b3d5b] transition-all"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#2b3d5b] transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#2b3d5b] transition-all"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/managed-it" className="text-white/60 hover:text-white text-sm transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services/it-outsourcing" className="text-white/60 hover:text-white text-sm transition-colors">IT Outsourcing</Link></li>
              <li><Link to="/services/web-development" className="text-white/60 hover:text-white text-sm transition-colors">Web Development & Hosting</Link></li>
              <li><Link to="/services/ai-solutions" className="text-white/60 hover:text-white text-sm transition-colors">AI Business Solutions</Link></li>
              <li><Link to="/services/network-infrastructure" className="text-white/60 hover:text-white text-sm transition-colors">Network Infrastructure</Link></li>
              <li><Link to="/services/network-monitoring" className="text-white/60 hover:text-white text-sm transition-colors">Network Monitoring</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/case-studies" className="text-white/60 hover:text-white text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/articles" className="text-white/60 hover:text-white text-sm transition-colors">Articles</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Offices</h4>
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <Sparkle className="w-4 h-4 mt-0.5 shrink-0 text-white" />
                  <span>Harrow, London<br/>United Kingdom</span>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <Sparkle className="w-4 h-4 mt-0.5 shrink-0 text-white" />
                  <span>Kapadvanj, Gujarat<br/>India</span>
                </div>
              </div>
              <div>
                <a href="mailto:hello@solkn.com" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>hello@solkn.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs">
            © {new Date().getFullYear()} SOLKN. All rights reserved.
          </div>
          <div className="flex gap-6 text-white/40 text-xs font-medium">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
