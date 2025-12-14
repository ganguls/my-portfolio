import { useState, useEffect } from 'react';
import { Menu, X } from './Icons';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/30 shadow-lg shadow-blue-500/10' : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-xl text-blue-400 z-10 matrix-text font-mono">
            {'<Gangul.S/>'} 
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-blue-300 hover:text-blue-400 transition-colors font-mono border border-blue-500/30 px-3 py-2 lg:px-4 hover:border-blue-400 hover:bg-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 min-h-[44px] flex items-center"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-blue-400 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
          <nav
            id="mobile-menu"
          className={`md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-blue-500/30 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4 pointer-events-none'
          }`}
          aria-hidden={!isMobileMenuOpen}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
              className="block px-4 py-4 text-blue-300 hover:bg-blue-500/10 active:bg-blue-500/20 transition-colors font-mono min-h-[44px] flex items-center touch-manipulation"
              aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            ))}
          </nav>
      </div>
    </header>
  );
}
