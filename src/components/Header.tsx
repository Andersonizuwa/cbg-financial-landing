import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '@/assets/WhatsApp_Image_2026-01-13_at_3.45.16_AM-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateFavicon = () => {
      const img = new Image();
      img.src = logo;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, 64, 64);
          const scale = Math.min(64 / img.width, 64 / img.height) * 1.2;
          const w = img.width * scale;
          const h = img.height * scale;
          ctx.drawImage(img, (64 - w) / 2, (64 - h) / 2, w, h);
          const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
          (link as HTMLLinkElement).type = 'image/png';
          (link as HTMLLinkElement).rel = 'icon';
          (link as HTMLLinkElement).href = canvas.toDataURL();
          document.head.appendChild(link);
        }
      };
    };
    updateFavicon();
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+16462337202" className="flex items-center gap-2 hover:text-teal transition-colors">
              <Phone size={14} />
              +1 (646) 233-7202
            </a>
            <a href="mailto:ranaeputerbaugh@yahoo.com" className="flex items-center gap-2 hover:text-teal transition-colors">
              <Mail size={14} />
              ranaeputerbaugh@yahoo.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      } border-b border-gray-200`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img src={logo} alt="CBG Financial Logo" className="h-16 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#why-us" className="nav-link">Why Us</a>
              <a href="/contact" className="nav-link">Contacts</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
              <nav className="flex flex-col gap-4">
                <a href="#about" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#services" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#why-us" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Why Us</a>
                <a href="/contact" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Contacts</a>
              </nav>
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-sm">
                <a href="tel:+16462337202" className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} />
                  +1 (646) 233-7202
                </a>
                <a href="mailto:ranaeputerbaugh@yahoo.com" className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={14} />
                  ranaeputerbaugh@yahoo.com
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;