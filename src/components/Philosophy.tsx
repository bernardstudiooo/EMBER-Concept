import React from 'react';
import { PHILOSOPHY_PILLARS, RESTAURANT_INFO } from '../data/restaurantData';

export const Philosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative w-full py-28 sm:py-36 bg-[#F6F2EC] washi-pattern text-[#23201D] overflow-hidden border-b border-[#E4DDD3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#7A2E2E]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#7A2E2E] font-medium font-sans">
                Culinary Philosophy
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8E6E59] font-sans">The Vision</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#23201D] leading-tight">
              Pristine seasonality. <br />
              <span className="italic text-[#6B4E3D]">Mastery of live fire and balance.</span>
            </h2>
          </div>

          <div className="max-w-md text-sm text-[#6E6862] leading-relaxed font-sans">
            <p>
              EMBER is designed as an intimate culinary dining room. 
              Here, dining unfolds as an unhurried, multi-course narrative celebrating artisanal harvests, 
              nuanced fire craft, and an unwavering commitment to hospitality.
            </p>
          </div>
        </div>

        {/* Editorial Quote Card */}
        <div 
          id="editorial-quote-card"
          className="relative bg-[#FAF7F2] border border-[#E4DDD3] p-8 sm:p-12 mb-24 max-w-4xl mx-auto shadow-[0_4px_30px_rgba(107,78,61,0.03)]"
        >
          <div className="absolute -top-3 left-8 px-3 bg-[#FAF7F2] border-x border-[#E4DDD3] text-[10px] uppercase tracking-[0.28em] text-[#7A2E2E] font-sans">
            Critical Review
          </div>
          
          <blockquote className="font-serif italic text-lg sm:text-2xl text-[#23201D] leading-relaxed mb-6 font-light">
            "{RESTAURANT_INFO.accolade.quote}"
          </blockquote>

          <div className="flex items-center justify-between border-t border-[#E4DDD3]/70 pt-4 text-xs">
            <span className="uppercase tracking-[0.2em] text-[#23201D] font-medium font-sans">
              {RESTAURANT_INFO.accolade.source}
            </span>
            <span className="text-[#8E6E59] font-sans tracking-widest text-[11px]">
              CHEF'S TASTING EXPERIENCE
            </span>
          </div>
        </div>

        {/* Three Philosophy Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              id={`philosophy-pillar-${idx}`}
              className="relative flex flex-col group pt-4 border-t border-[#E4DDD3]"
            >
              {/* Pillar Number & Header */}
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-serif text-3xl sm:text-4xl text-[#7A2E2E] font-light">
                  0{idx + 1}
                </span>
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#8E6E59] uppercase">
                  Pillar
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#23201D] font-normal tracking-wide mb-1">
                {pillar.title}
              </h3>
              
              <span className="text-xs uppercase tracking-[0.18em] text-[#6B4E3D] font-medium mb-4">
                {pillar.subtitle}
              </span>

              <p className="text-sm text-[#6E6862] leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Counter Intimacy Note */}
        <div className="mt-20 pt-12 border-t border-[#E4DDD3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#6E6862]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#7A2E2E]" />
            <span className="tracking-[0.15em] uppercase font-sans text-[#23201D]">
              Limited Counter & Table Seating
            </span>
          </div>
          <span className="font-sans tracking-wider">
            Peak Harvest Produce · Dry-Aged Proteins · Cellar Reserve Pairings
          </span>
        </div>

      </div>
    </section>
  );
};


