import React from 'react';
import { ShieldCheck, Flame, Compass } from 'lucide-react';

export const ChefCraft: React.FC = () => {
  return (
    <section
      id="craft"
      className="w-full py-28 sm:py-36 bg-[#F6F2EC] text-[#23201D] border-b border-[#E4DDD3] washi-pattern"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[#7A2E2E]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#7A2E2E] font-medium font-sans">
              The Artisan
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#8E6E59] font-sans">Culinary Craft</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#23201D]">
            Craftsmanship & Fire Discipline
          </h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Chef & Craft Photography Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 border border-[#E4DDD3] bg-[#FAF7F2] p-2 shadow-[0_12px_40px_rgba(42,38,34,0.06)]">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#23201D]">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85"
                  alt="Head Chef plating seasonal tasting course"
                  className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Inset Secondary Detail Photo */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-20 w-48 aspect-square border border-[#E4DDD3] bg-[#FAF7F2] p-1.5 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=85"
                alt="Charcoal embers and flame craft"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Clean Typographic Stamp */}
            <div className="absolute top-6 -left-4 z-20 bg-[#7A2E2E] text-white px-3 py-3 font-sans text-xs uppercase tracking-[0.25em] shadow-md font-medium">
              EMBER Kitchen
            </div>
          </div>

          {/* Craft Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8E6E59] font-sans font-medium">
                Executive Chef & Culinary Team
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#23201D] font-light mt-1 mb-4">
                Chef Alex & The Kitchen
              </h3>
              <div className="w-12 h-[1px] bg-[#7A2E2E] mb-6" />
            </div>

            <p className="text-sm sm:text-base text-[#6E6862] leading-relaxed font-sans">
              Guided by a philosophy of restraint, precision, and elemental heat, our kitchen approaches each ingredient 
              with deep reverence. Rather than masking primary flavors behind excess complexity, we let pristine seasonality 
              and nuanced charcoal embers define the dining experience.
            </p>

            <p className="text-sm sm:text-base text-[#6E6862] leading-relaxed font-sans">
              From delicate cold infusions and tableside broth service to slow ember-roasting, hand-crafted reduction jus, 
              and micro-season fermentations, every dish bridges classical discipline with modern, intuitive tasting counter artistry.
            </p>

            {/* Craft Tenets list */}
            <div className="pt-6 border-t border-[#E4DDD3] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-xs text-[#23201D] font-medium font-sans uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-[#7A2E2E]" />
                  <span>Purveyor Driven</span>
                </div>
                <span className="text-[11px] text-[#8E6E59] font-sans">Artisanal & direct</span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-xs text-[#23201D] font-medium font-sans uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7A2E2E]" />
                  <span>Culinary Precision</span>
                </div>
                <span className="text-[11px] text-[#8E6E59] font-sans">Temperature & texture</span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-xs text-[#23201D] font-medium font-sans uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 text-[#7A2E2E]" />
                  <span>Live Embers</span>
                </div>
                <span className="text-[11px] text-[#8E6E59] font-sans">Hardwood charcoal</span>
              </div>
            </div>

            {/* Direct quote */}
            <div className="p-4 bg-[#FAF7F2] border-l-2 border-[#7A2E2E] text-xs italic text-[#23201D] font-serif">
              "Great cuisine requires patience, pristine sourcing, and exact calibration of heat. We let the purity of each harvest speak with clarity and warmth."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


