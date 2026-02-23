import { Link } from 'react-router-dom';
import logo from '../assets/WhatsApp_Image_2026-01-13_at_3.45.16_AM-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <a href="#" className="flex items-center gap-3 mb-6 w-auto">
                <img 
                  src={logo} 
                  alt="AIDVEST Logo" 
                  className="h-32 w-auto object-contain"
                />
              </a>
              <p className="text-secondary-foreground font-medium max-w-sm">
                Expert advisory for grants, funding opportunities, and investment solutions tailored for individuals and businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-black mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-black hover:text-primary transition-colors font-medium">About Us</a></li>
                <li><a href="#services" className="text-black hover:text-primary transition-colors font-medium">Services</a></li>
                <li><a href="#why-us" className="text-black hover:text-primary transition-colors font-medium">Why Choose Us</a></li>
                <li><Link to="/contact" className="text-black hover:text-primary transition-colors font-medium">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-black mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-primary hover:underline font-semibold transition-colors">Forex Trading</a></li>
                <li><a href="#services" className="text-primary hover:underline font-semibold transition-colors">Crypto Trading</a></li>
                <li><a href="#services" className="text-primary hover:underline font-semibold transition-colors">Stocks & Indices</a></li>
                <li><a href="#services" className="text-primary hover:underline font-semibold transition-colors">Investment Advisory</a></li>
                <li><a href="#grants" className="text-primary hover:underline font-semibold transition-colors">Grants and NGO Funding Opportunities</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Risk & Advisory Disclaimer */}
      <div className="border-t border-border bg-white">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h5 className="font-bold text-black mb-2 uppercase tracking-wide">Risk & Advisory Disclaimer</h5>
            <p className="text-sm text-black leading-relaxed font-medium">
              Aidvest Financial Consultants provides advisory, educational, and preparatory services only. We do not issue grants, provide loans, or guarantee funding, investment returns, or financial outcomes. Eligibility for grants, funding programs, or investment opportunities is determined by third-party institutions, including government bodies, nonprofits, and private organizations. All consultations are conducted on a one-on-one, eligibility-based basis and are intended for informational purposes only. Past results do not guarantee future outcomes. Clients are encouraged to conduct independent due diligence where appropriate.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-black font-semibold">
            <p>© 2026 AIDVEST Financial Consultants. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
