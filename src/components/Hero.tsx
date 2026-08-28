import React from 'react';
import { ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1917] text-[#FAF7F2]"
    >
      {/* Background Cinematic Imagery with warm darkened gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2400&q=90"
          alt="EMBER Fine Dining Tasting Experience"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out filter brightness-[0.75] contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layered refined vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1715] via-[#1C1917]/75 to-[#1C1917]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#1C1917]/30 to-[#1A1715]/85" />
      </div>

      {/* Decorative vertical typographic mark */}
      <div 
        aria-hidden="true" 
        className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 z-10 pointer-events-none select-none opacity-25"
      >
        <div className="vertical-rl font-sans text-xs tracking-[0.6em] text-[#FAF7F2] border-r border-[#FAF7F2]/20 pr-4 uppercase">
          SEASONAL INGREDIENTS · LIVE FIRE · TASTING COUNTER
        </div>
      </div>

      <div 
        aria-hidden="true" 
        className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-10 pointer-events-none select-none opacity-25"
      >
        <div className="vertical-rl font-sans text-xs tracking-[0.5em] text-[#FAF7F2] border-l border-[#FAF7F2]/20 pl-4 uppercase">
          CURATED PROGRESSION · LIMITED SEATING
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 pb-16 flex flex-col items-center justify-center">
        
        {/* Editorial format acknowledgment */}
        <div 
          id="hero-badge" 
          className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#FAF7F2]/20 bg-[#FAF7F2]/5 backdrop-blur-sm mb-8 text-[11px] uppercase tracking-[0.25em] text-[#FAF7F2]/80"
        >
          <Sparkles className="w-3 h-3 text-[#C4A47C]" />
          <span>Curated Multi-Course Tasting Menu</span>
        </div>

        {/* Typographic Origin Seal */}
        <div className="mb-4">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C4A47C] font-sans font-medium px-3 py-1 border border-[#C4A47C]/40 bg-[#C4A47C]/5">
            Seasonal Chef's Table
          </span>
        </div>

        {/* Restaurant Name */}
        <h1 
          id="hero-title" 
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.18em] uppercase text-[#FAF7F2] mb-6 leading-none"
        >
          {RESTAURANT_INFO.name}
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#E8E2D8] font-light tracking-wide max-w-2xl mx-auto mb-4">
          {RESTAURANT_INFO.tagline}
        </p>

        {/* Minimal Subtitle */}
        <p className="text-xs sm:text-sm text-[#D8D0C5] font-sans tracking-[0.22em] uppercase max-w-xl mx-auto mb-10 text-center leading-relaxed">
          {RESTAURANT_INFO.subTagline}
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a
            href="#visit"
            id="hero-primary-cta"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#7A2E2E] text-[#FAF7F2] hover:bg-[#632222] text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-[0_4px_24px_rgba(122,46,46,0.35)]"
          >
            Inquire for Reservations
          </a>
          <a
            href="#philosophy"
            id="hero-secondary-cta"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#FAF7F2]/30 text-[#FAF7F2] hover:bg-[#FAF7F2]/10 text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300"
          >
            Explore Philosophy
          </a>
        </div>

        {/* Atmosphere Tag */}
        <div className="mt-12 flex items-center gap-2 text-xs text-[#FAF7F2]/60 tracking-[0.2em] uppercase">
          <MapPin className="w-3.5 h-3.5 text-[#C4A47C]" />
          <span>Limited Seating · By Advance Reservation</span>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#philosophy"
        aria-label="Scroll to philosophy section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#FAF7F2]/50 hover:text-[#FAF7F2] transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
};


