import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Instagram, ArrowUp, MapPin, Phone, Mail, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="w-full bg-[#1C1917] text-[#FAF7F2] pt-20 pb-12 border-t border-[#2A2622]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#FAF7F2]/10">
          
          {/* Brand & Mark */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-3xl sm:text-4xl tracking-[0.22em] uppercase font-light text-white">
                  {RESTAURANT_INFO.name}
                </span>
              </div>

              <p className="font-serif italic text-base text-[#D8D0C5] max-w-sm font-light mb-4">
                {RESTAURANT_INFO.tagline}
              </p>

              <p className="text-xs text-[#FAF7F2]/60 font-sans tracking-wide leading-relaxed max-w-sm">
                An intimate fine dining room and chef's tasting table. Dedicated to seasonal ingredients, elemental fire craft, and an unhurried, multi-course culinary sequence.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#FAF7F2]/10 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#C4A47C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fine Dining Portfolio Showcase</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#FAF7F2]/50 font-sans font-medium mb-5">
              Experience
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-[0.18em] font-sans">
              <li>
                <a href="#hero" className="text-[#FAF7F2]/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#philosophy" className="text-[#FAF7F2]/80 hover:text-white transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#menu" className="text-[#FAF7F2]/80 hover:text-white transition-colors">
                  Menu Highlights
                </a>
              </li>
              <li>
                <a href="#craft" className="text-[#FAF7F2]/80 hover:text-white transition-colors">
                  Culinary Craft
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[#FAF7F2]/80 hover:text-white transition-colors">
                  Atmosphere & Gallery
                </a>
              </li>
              <li>
                <a href="#visit" className="text-[#FAF7F2]/80 hover:text-[#C4A47C] transition-colors font-medium">
                  Reservations & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Dining Room Location & Direct Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#FAF7F2]/50 font-sans font-medium mb-5">
              The Dining Room
            </h4>
            
            <div className="flex items-start gap-3 text-xs text-[#FAF7F2]/80 font-sans leading-relaxed">
              <MapPin className="w-4 h-4 text-[#C4A47C] shrink-0 mt-0.5" />
              <span>{RESTAURANT_INFO.location.address}</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#FAF7F2]/80 font-sans">
              <Phone className="w-4 h-4 text-[#C4A47C] shrink-0" />
              <a 
                href={`https://wa.me/${RESTAURANT_INFO.contact.whatsapp.replace(/\+/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp: {RESTAURANT_INFO.contact.whatsappDisplay}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#FAF7F2]/80 font-sans">
              <Mail className="w-4 h-4 text-[#C4A47C] shrink-0" />
              <span className="text-[#FAF7F2]/70 select-text cursor-default">{RESTAURANT_INFO.contact.email}</span>
            </div>

            {/* Social Display (Non-clickable) */}
            <div className="pt-4 flex items-center gap-4">
              <div
                aria-label="Instagram"
                className="p-2 bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-[#FAF7F2]/80 flex items-center gap-2 text-xs font-sans tracking-widest uppercase select-text cursor-default"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@{RESTAURANT_INFO.contact.instagram}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Tier & Studio Concept Showcase Badge */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-sans border-t border-[#FAF7F2]/10 mt-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <p className="text-[#FAF7F2]/50">
              © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All Rights Reserved.
            </p>
            <span className="hidden sm:inline text-[#FAF7F2]/20">|</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F2]/5 border border-[#FAF7F2]/15 text-[#E8E2D8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4A47C]" />
              <span className="font-medium tracking-wide">Website Concept by Bernard Studio</span>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#FAF7F2]/70 hover:text-white transition-colors uppercase tracking-[0.2em] text-[11px] cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

