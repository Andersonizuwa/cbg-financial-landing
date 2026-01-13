import { Link } from 'react-router-dom';
import logo from '@/assets/WhatsApp_Image_2026-01-13_at_3.45.16_AM-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Logo" className="h-24 w-auto" />
            </a>
            <p className="text-slate-600 max-w-md mb-6">
              Your trusted partner for forex, crypto, stocks, and investment advisory services. Empowering traders worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-600 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-600 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-slate-600 hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-600 hover:text-primary transition-colors">Forex Trading</a></li>
              <li><a href="#services" className="text-slate-600 hover:text-primary transition-colors">Crypto Trading</a></li>
              <li><a href="#services" className="text-slate-600 hover:text-primary transition-colors">Stocks & Indices</a></li>
              <li><a href="#services" className="text-slate-600 hover:text-primary transition-colors">Investment Advisory</a></li>
            </ul>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="bg-slate-100 rounded-xl p-6">
            <h5 className="font-semibold text-slate-900 mb-2">Risk Disclaimer</h5>
            <p className="text-sm text-slate-600 leading-relaxed">
              Trading foreign exchange, cryptocurrencies, and other financial instruments involves significant risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment. You should be aware of all the risks associated with trading and seek advice from an independent financial advisor if you have any doubts.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© 2026 AIDVEST Financial Consultants. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
