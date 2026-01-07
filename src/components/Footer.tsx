const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">CBG Financial</span>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Your trusted partner for forex, crypto, stocks, and investment advisory services. Empowering traders worldwide since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-muted-foreground hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Forex Trading</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Crypto Trading</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Stocks & Indices</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Investment Advisory</a></li>
            </ul>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="bg-muted/50 rounded-xl p-6">
            <h5 className="font-semibold text-foreground mb-2">Risk Disclaimer</h5>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trading foreign exchange, cryptocurrencies, and other financial instruments involves significant risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment. You should be aware of all the risks associated with trading and seek advice from an independent financial advisor if you have any doubts.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 CBG Financial. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
