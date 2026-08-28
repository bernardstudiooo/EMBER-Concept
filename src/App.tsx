/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { MenuHighlights } from './components/MenuHighlights';
import { ChefCraft } from './components/ChefCraft';
import { Gallery } from './components/Gallery';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { RESTAURANT_INFO } from './data/restaurantData';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [showFloatingWhatsApp, setShowFloatingWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button once user scrolls past hero
      if (window.scrollY > 450) {
        setShowFloatingWhatsApp(true);
      } else {
        setShowFloatingWhatsApp(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F2EC] text-[#23201D] font-sans selection:bg-[#7A2E2E]/15 selection:text-[#23201D] overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Philosophy Section */}
      <Philosophy />

      {/* 3. Menu Highlights Section */}
      <MenuHighlights />

      {/* 4. Chef / Craft Section */}
      <ChefCraft />

      {/* 5. Gallery Section */}
      <Gallery />

      {/* 6. Visit Us & Inquiry Section */}
      <VisitUs />

      {/* 7. Footer */}
      <Footer />

      {/* Discreet Floating WhatsApp Concierge Pill */}
      {showFloatingWhatsApp && (
        <aside
          aria-label="Concierge quick access"
          className="fixed bottom-6 right-6 z-40 animate-fadeIn"
        >
          <a
            href={`https://wa.me/${RESTAURANT_INFO.contact.whatsapp.replace(/\+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-pill"
            aria-label="Direct WhatsApp Concierge"
            className="flex items-center gap-2.5 px-4 py-3 bg-[#23201D] text-[#FAF7F2] border border-[#FAF7F2]/20 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-[#7A2E2E] transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-[#C4A47C] animate-pulse" />
            <MessageSquare className="w-4 h-4 text-[#FAF7F2]" />
            <span className="text-xs uppercase tracking-[0.18em] font-sans font-medium">
              WhatsApp Concierge
            </span>
          </a>
        </aside>
      )}
    </div>
  );
}
