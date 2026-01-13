import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/WhatsApp_Image_2026-01-13_at_3.45.16_AM-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          
          // Draw logo centered and maximized
          // Increase scale to make the logo larger inside the favicon (e.g., 1.2 for 20% larger)
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 text-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="nav-link">About Us</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#grants" className="nav-link">Grants</a>
            <a href="#why-us" className="nav-link">Why Choose Us</a>
            <a href="/consultation" className="nav-link">Free Consultation</a>
          </nav>


          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#about" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>About Us</a>
              <a href="#services" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#grants" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Grants</a>
              <a href="#why-us" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Why Choose Us</a>
              <a href="/consultation" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Free Consultation</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
