import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <a href="#" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">A</span>
                </div>
                <div>
                  <span className="text-lg font-bold block">AIDVEST</span>
                  <span className="text-xs text-muted-foreground">FINANCIAL CONSULTANTS</span>
                </div>
              </a>
              <p className="text-muted-foreground max-w-sm">
                Your trusted partner for forex, crypto, stocks, and investment advisory services. Empowering traders worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
                <li><a href="#why-us" className="text-muted-foreground hover:text-primary transition-colors">Why Choose Us</a></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-primary hover:underline transition-colors">Forex Trading</a></li>
                <li><a href="#services" className="text-primary hover:underline transition-colors">Crypto Trading</a></li>
                <li><a href="#services" className="text-primary hover:underline transition-colors">Stocks & Indices</a></li>
                <li><a href="#services" className="text-primary hover:underline transition-colors">Investment Advisory</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Disclaimer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="bg-muted/30 rounded-xl p-6 border border-border">
            <h5 className="font-semibold mb-2">Risk Disclaimer</h5>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trading foreign exchange, cryptocurrencies, and other financial instruments involves significant risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment. You should be aware of all the risks associated with trading and seek advice from an independent financial advisor if you have any doubts.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
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
