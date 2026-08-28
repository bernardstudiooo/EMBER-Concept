import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { Maximize2, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<'All' | 'Dish' | 'Interior' | 'Craft' | 'Pairings'>('All');

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <section
      id="gallery"
      className="w-full py-28 sm:py-36 bg-[#FAF7F2] text-[#23201D] border-b border-[#E4DDD3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#7A2E2E]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#7A2E2E] font-medium font-sans">
                Visual Sanctuary
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8E6E59] font-sans">Atmosphere</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#23201D]">
              The Atmosphere
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap text-xs uppercase tracking-[0.18em] font-sans">
            {(['All', 'Dish', 'Interior', 'Craft', 'Pairings'] as const).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`px-3.5 py-1.5 transition-colors border ${
                  filter === category
                    ? 'bg-[#23201D] text-[#FAF7F2] border-[#23201D]'
                    : 'bg-[#F6F2EC] text-[#6E6862] border-[#E4DDD3] hover:text-[#23201D]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Photography Grid with generous spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer relative bg-[#F6F2EC] border border-[#E4DDD3] overflow-hidden shadow-xs hover:border-[#8E6E59] transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-black/5 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2.5 bg-[#FAF7F2]/90 backdrop-blur-xs text-[#23201D]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#FAF7F2] flex items-center justify-between border-t border-[#E4DDD3]">
                <span className="text-xs uppercase tracking-[0.15em] text-[#23201D] font-sans font-medium">
                  {item.title}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#8E6E59] font-sans">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1C1917] p-2 border border-[#FAF7F2]/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/60 rounded-full"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full overflow-hidden bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 flex items-center justify-between text-[#FAF7F2]">
              <div>
                <p className="font-serif text-lg tracking-wide">{selectedImage.title}</p>
                <p className="text-[11px] text-[#FAF7F2]/60 uppercase tracking-widest font-sans">
                  {selectedImage.category} · EMBER Dining Room
                </p>
              </div>
              <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-sans">Chef's Table</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

