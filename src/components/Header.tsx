import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div>
              <span className="text-lg font-bold block">AIDVEST</span>
              <span className="text-xs text-muted-foreground hidden sm:block">FINANCIAL CONSULTANTS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="nav-link">About Us</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#grants" className="nav-link">Grants</a>
            <a href="#why-us" className="nav-link">Why Choose Us</a>
            <Link to="/consultation" className="nav-link text-primary font-semibold">Free Consultation</Link>
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
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#about" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>About Us</a>
              <a href="#services" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#grants" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Grants</a>
              <a href="#why-us" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Why Choose Us</a>
              <Link to="/consultation" className="nav-link py-2 text-primary font-semibold" onClick={() => setIsMenuOpen(false)}>Free Consultation</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
