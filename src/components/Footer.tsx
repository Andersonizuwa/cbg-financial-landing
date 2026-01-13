import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/WhatsApp_Image_2026-01-13_at_3.45.16_AM-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="CBG Financial Logo" className="h-20 w-auto brightness-0 invert" />
            </a>
            <p className="text-white/70 max-w-md mb-6">
              Your trusted partner for private capital advisory, grants, funding opportunities, and investment solutions. Empowering clients through structured financial pathways.
            </p>
            <div className="space-y-3">
              <a href="tel:+16462337202" className="flex items-center gap-3 text-white/70 hover:text-teal transition-colors">
                <Phone size={18} />
                +1 (646) 233-7202
              </a>
              <a href="mailto:ranaeputerbaugh@yahoo.com" className="flex items-center gap-3 text-white/70 hover:text-teal transition-colors">
                <Mail size={18} />
                ranaeputerbaugh@yahoo.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-teal transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-teal transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="text-white/70 hover:text-teal transition-colors">Why Choose Us</a></li>
              <li><a href="/contact" className="text-white/70 hover:text-teal transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-teal transition-colors">Grant Advisory</a></li>
              <li><a href="#services" className="text-white/70 hover:text-teal transition-colors">Funding Access</a></li>
              <li><a href="#services" className="text-white/70 hover:text-teal transition-colors">Investment Advisory</a></li>
              <li><a href="#services" className="text-white/70 hover:text-teal transition-colors">Capital Structuring</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="bg-white/5 rounded-xl p-6">
            <h5 className="font-semibold text-white mb-2">Disclaimer</h5>
            <p className="text-sm text-white/60 leading-relaxed">
              CBG Financial provides advisory and consulting services only. Grant access is eligibility-based and subject to third-party approval. Investment advisory services involve risk, and returns are not guaranteed. All services are relationship-based and subject to screening. This website does not constitute an offer or solicitation for investment.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2026 CBG Financial Consultants. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-teal transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-teal transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;