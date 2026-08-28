import React, { useState } from 'react';
import { Sparkles, Info } from 'lucide-react';
import { MENU_HIGHLIGHTS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

export const MenuHighlights: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<MenuItem | null>(null);

  return (
    <section
      id="menu"
      className="w-full py-28 sm:py-36 bg-[#FAF7F2] text-[#23201D] border-b border-[#E4DDD3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[#7A2E2E]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#7A2E2E] font-medium font-sans">
              Culinary Progression
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#8E6E59] font-sans">Seasonal Tasting</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#23201D] mb-6">
            Menu Highlights
          </h2>

          <p className="text-sm sm:text-base text-[#6E6862] leading-relaxed font-sans max-w-2xl">
            At EMBER, we serve a curated multi-course chef's tasting progression without an à la carte menu. Each evening features 
            a synchronized culinary sequence highlighting prime seasonal ingredients, coastal seafood, dry-aged meats, and delicate garden harvests.
          </p>
        </div>

        {/* Tasting Menu Banner Note */}
        <div 
          id="tasting-menu-info-banner"
          className="mb-14 p-6 sm:p-8 bg-[#F6F2EC] border border-[#E4DDD3] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-[#FAF7F2] border border-[#E4DDD3] text-[#7A2E2E] mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-serif text-lg text-[#23201D] font-medium tracking-wide">
                  {RESTAURANT_INFO.menuOverview.title}
                </h3>
                <span className="text-[11px] px-2 py-0.5 bg-[#7A2E2E]/10 text-[#7A2E2E] uppercase tracking-widest font-sans font-medium">
                  {RESTAURANT_INFO.menuOverview.subtitle}
                </span>
              </div>
              <p className="text-xs text-[#6E6862] mt-1 font-sans">
                {RESTAURANT_INFO.menuOverview.pricingNote} · {RESTAURANT_INFO.menuOverview.pairingNote}
              </p>
            </div>
          </div>

          <a
            href="#visit"
            className="text-xs uppercase tracking-[0.2em] text-[#7A2E2E] hover:text-[#632222] font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors"
          >
            <span>Inquire for Season's Offerings</span>
            <span>→</span>
          </a>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {MENU_HIGHLIGHTS.map((item, idx) => (
            <article
              key={item.id}
              id={`menu-item-${item.id}`}
              onClick={() => setActiveCourse(item)}
              className="group cursor-pointer flex flex-col bg-[#F6F2EC] border border-[#E4DDD3] transition-all duration-300 hover:border-[#8E6E59]/60 hover:shadow-[0_8px_30px_rgba(42,38,34,0.06)]"
            >
              {/* Dish Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#23201D]/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#23201D] font-sans font-medium">
                  {item.courseType}
                </div>
                {item.nativeTerm && (
                  <div className="absolute top-3 right-3 bg-[#23201D]/80 backdrop-blur-xs px-2 py-1 text-[10px] uppercase tracking-widest font-sans text-[#FAF7F2]">
                    {item.nativeTerm}
                  </div>
                )}
              </div>

              {/* Dish Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#23201D] group-hover:text-[#7A2E2E] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[11px] text-[#8E6E59] font-sans">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6E6862] leading-relaxed font-sans mb-4">
                    {item.description}
                  </p>
                </div>

                {item.notes && (
                  <div className="pt-3 border-t border-[#E4DDD3] flex items-center gap-2 text-[11px] text-[#8E6E59] font-sans">
                    <Info className="w-3 h-3 text-[#7A2E2E] shrink-0" />
                    <span className="truncate">{item.notes}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Dietary and Seasonality Disclaimer */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-xs text-[#6E6862] leading-relaxed font-sans italic">
            * Courses evolve continuously based on seasonal availability and market harvests. 
            Dietary preferences and allergies must be stated at least 48 hours prior to reservation.
          </p>
        </div>

      </div>

      {/* Dish Detail Modal (Optional Lightbox) */}
      {activeCourse && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setActiveCourse(null)}
        >
          <div
            className="bg-[#FAF7F2] border border-[#E4DDD3] max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveCourse(null)}
              className="absolute top-4 right-4 text-xs tracking-widest uppercase text-[#6E6862] hover:text-[#23201D] p-2"
            >
              Close ✕
            </button>

            <div className="aspect-[16/9] w-full mb-6 overflow-hidden bg-black/10">
              <img
                src={activeCourse.image}
                alt={activeCourse.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#7A2E2E] font-medium font-sans">
                {activeCourse.courseType}
              </span>
              {activeCourse.nativeTerm && (
                <span className="text-xs uppercase tracking-widest text-[#8E6E59] font-sans">
                  {activeCourse.nativeTerm}
                </span>
              )}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#23201D] mb-3">
              {activeCourse.name}
            </h3>

            <p className="text-sm text-[#6E6862] leading-relaxed font-sans mb-4">
              {activeCourse.description}
            </p>

            {activeCourse.notes && (
              <div className="p-3 bg-[#F6F2EC] border border-[#E4DDD3] text-xs text-[#6B4E3D] font-sans">
                <strong>Craft & Origin:</strong> {activeCourse.notes}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};


