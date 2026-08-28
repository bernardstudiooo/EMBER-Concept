import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Menu', href: '#menu' },
    { name: 'Craft', href: '#craft' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit & Hours', href: '#visit' },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F6F2EC]/95 backdrop-blur-md border-b border-[#E4DDD3]/80 py-4 shadow-[0_4px_20px_rgba(42,38,34,0.03)]'
          : 'bg-gradient-to-b from-[#1C1917]/70 via-[#1C1917]/30 to-transparent py-6 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-brand-logo"
          className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-85"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className={`text-2xl sm:text-3xl font-serif tracking-[0.22em] uppercase font-light ${
                isScrolled ? 'text-[#23201D]' : 'text-[#FAF7F2]'
              }`}>
                {RESTAURANT_INFO.name}
              </span>
            </div>
            <span className={`text-[10px] tracking-[0.25em] uppercase font-sans ${
              isScrolled ? 'text-[#6E6862]' : 'text-[#FAF7F2]/70'
            }`}>
              Fine Dining · Tasting Menu
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#7A2E2E] font-medium ${
                isScrolled ? 'text-[#3D3833]' : 'text-[#FAF7F2]/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#visit"
            id="nav-inquire-btn"
            onClick={onOpenInquiry}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 font-medium ${
              isScrolled
                ? 'bg-[#7A2E2E] text-white hover:bg-[#632222] shadow-sm'
                : 'bg-[#FAF7F2] text-[#23201D] hover:bg-white'
            }`}
          >
            <span>Reserve / Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle-button"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-sm transition-colors ${
            isScrolled ? 'text-[#23201D]' : 'text-[#FAF7F2]'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="md:hidden bg-[#F6F2EC] border-b border-[#E4DDD3] px-6 py-8 text-[#23201D] shadow-xl animate-fadeIn"
        >
          <div className="flex flex-col space-y-5">
            <div className="pb-3 border-b border-[#E4DDD3] flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-[#6E6862]">Navigation</span>
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#7A2E2E] font-medium">Chef's Tasting Menu</span>
            </div>
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif tracking-[0.08em] hover:text-[#7A2E2E] transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#8E6E59]/60 font-sans tracking-widest">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-[#E4DDD3] flex flex-col gap-3">
              <a
                href="#visit"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenInquiry) onOpenInquiry();
                }}
                className="w-full text-center py-3 bg-[#7A2E2E] text-white text-xs uppercase tracking-[0.2em] font-medium"
              >
                Reserve / WhatsApp Inquiry
              </a>
              <p className="text-[11px] text-center text-[#6E6862] tracking-wider">
                Two seatings nightly · Reservations recommended
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
