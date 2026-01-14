import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/WhatsApp_Image_2026-01-13_at_3.45.16_AM-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="AIDVEST Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="nav-link text-slate-900 hover:text-primary">About Us</a>
            <a href="#services" className="nav-link text-slate-900 hover:text-primary">Services</a>
            <a href="#grants" className="nav-link text-slate-900 hover:text-primary">Grants</a>
            <a href="#why-us" className="nav-link text-slate-900 hover:text-primary">Why Choose Us</a>
            <Link to="/consultation" className="nav-link text-primary font-bold hover:text-black transition-colors">Free Consultation</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in bg-white">
            <nav className="flex flex-col gap-4">
              <a href="#about" className="nav-link py-2 text-slate-900" onClick={() => setIsMenuOpen(false)}>About Us</a>
              <a href="#services" className="nav-link py-2 text-slate-900" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#grants" className="nav-link py-2 text-slate-900" onClick={() => setIsMenuOpen(false)}>Grants</a>
              <a href="#why-us" className="nav-link py-2 text-slate-900" onClick={() => setIsMenuOpen(false)}>Why Choose Us</a>
              <Link to="/consultation" className="nav-link py-2 text-primary font-bold" onClick={() => setIsMenuOpen(false)}>Free Consultation</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
