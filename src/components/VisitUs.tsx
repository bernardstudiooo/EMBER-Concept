import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Send, 
  Calendar, 
  Users, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { RESTAURANT_INFO, DINING_GUIDELINES } from '../data/restaurantData';
import { InquiryFormData } from '../types';

export const VisitUs: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    seating: 'First Seating (6:00 PM)',
    guests: '2 Guests',
    dietary: '',
    occasion: 'Dinner / Leisure',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Helper to build a clean, polite WhatsApp prefilled URL
  const generateWhatsAppUrl = () => {
    const text = `Hello EMBER Concierge,%0A%0AI would like to inquire about a tasting menu reservation:%0A` +
      `• Guest Name: ${formData.name || 'Guest'}%0A` +
      `• Date: ${formData.date || 'To be decided'}%0A` +
      `• Seating: ${formData.seating}%0A` +
      `• Party Size: ${formData.guests}%0A` +
      `• Phone/Contact: ${formData.phone || 'N/A'}%0A` +
      (formData.dietary ? `• Dietary Notes: ${formData.dietary}%0A` : '') +
      (formData.notes ? `• Additional Message: ${formData.notes}%0A` : '') +
      `%0AThank you.`;

    return `https://wa.me/${RESTAURANT_INFO.contact.whatsapp.replace(/\+/g, '')}?text=${text}`;
  };

  const handleDirectWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(generateWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="visit"
      className="w-full py-28 sm:py-36 bg-[#F6F2EC] text-[#23201D] border-b border-[#E4DDD3] washi-pattern"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[#7A2E2E]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#7A2E2E] font-medium font-sans">
              Reservations & Experience
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#8E6E59] font-sans">The Dining Room</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#23201D]">
            Visit EMBER
          </h2>

          <p className="text-sm sm:text-base text-[#6E6862] leading-relaxed font-sans mt-4 max-w-2xl">
            To provide an unhurried, attentive experience, seating at EMBER is limited and offered by advance reservation. 
            Inquiries are confirmed personally by our guest concierge via WhatsApp.
          </p>
        </div>

        {/* Primary Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Location, Hours, Contact Details */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Location info card */}
            <div 
              id="location-info-card" 
              className="bg-[#FAF7F2] border border-[#E4DDD3] p-7 sm:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-4 text-[#7A2E2E]">
                <MapPin className="w-5 h-5" />
                <h3 className="font-serif text-xl font-medium tracking-wide text-[#23201D]">
                  Location & Arrival
                </h3>
              </div>

              <p className="text-sm text-[#23201D] font-medium leading-relaxed mb-1">
                {RESTAURANT_INFO.location.area}
              </p>
              <p className="text-xs sm:text-sm text-[#6E6862] leading-relaxed mb-4">
                {RESTAURANT_INFO.location.address}
              </p>
              <p className="text-xs text-[#8E6E59] italic mb-6">
                Setting: {RESTAURANT_INFO.location.landmark} · Private entrance
              </p>

              <div className="text-xs uppercase tracking-[0.18em] text-[#7A2E2E] font-semibold flex items-center gap-2">
                <span>Valet & Parking Available Upon Arrival</span>
              </div>
            </div>

            {/* Service Seatings & Hours */}
            <div 
              id="service-hours-card" 
              className="bg-[#FAF7F2] border border-[#E4DDD3] p-7 sm:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-4 text-[#7A2E2E]">
                <Clock className="w-5 h-5" />
                <h3 className="font-serif text-xl font-medium tracking-wide text-[#23201D]">
                  Service Hours & Seatings
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-sans mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-[#E4DDD3]">
                  <span className="text-[#6E6862]">Operating Days</span>
                  <span className="font-medium text-[#23201D]">{RESTAURANT_INFO.service.days}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#E4DDD3]">
                  <span className="text-[#6E6862]">Rest Day</span>
                  <span className="font-medium text-[#7A2E2E]">{RESTAURANT_INFO.service.closed}</span>
                </div>
              </div>

              {/* Specific Seatings */}
              <div className="space-y-3">
                {RESTAURANT_INFO.service.seatings.map((seating) => (
                  <div key={seating.name} className="p-3.5 bg-[#F6F2EC] border border-[#E4DDD3]/80">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#23201D]">
                        {seating.name}
                      </span>
                      <span className="font-serif text-base font-medium text-[#7A2E2E]">
                        {seating.time}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6E6862] mt-1">
                      {seating.duration} · {seating.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#E4DDD3] text-[11px] text-[#8E6E59] flex items-center justify-between">
                <span>{RESTAURANT_INFO.service.capacity}</span>
                <span className="font-sans uppercase tracking-widest text-[10px]">Advance Booking</span>
              </div>
            </div>

            {/* Direct WhatsApp Concierge Button */}
            <div className="bg-[#23201D] text-[#FAF7F2] p-6 sm:p-7 border border-[#23201D]">
              <div className="flex items-center gap-2 mb-2 text-[#C4A47C]">
                <MessageSquare className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium font-sans">
                  Direct Concierge
                </span>
              </div>
              <h4 className="font-serif text-lg text-white mb-2">
                Prefer immediate messaging?
              </h4>
              <p className="text-xs text-[#D8D0C5] leading-relaxed mb-5 font-sans">
                Our concierge is available on WhatsApp daily between 11:00 AM and 10:00 PM for booking inquiries, tasting menu questions, and private buyout arrangements.
              </p>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.contact.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                id="direct-whatsapp-button"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#7A2E2E] hover:bg-[#632222] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp: {RESTAURANT_INFO.contact.whatsappDisplay}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Reservation / Inquiry Form */}
          <div className="lg:col-span-7">
            <div 
              id="reservation-inquiry-box"
              className="bg-[#FAF7F2] border border-[#E4DDD3] p-8 sm:p-10 shadow-sm relative"
            >
              <div className="border-b border-[#E4DDD3] pb-6 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#7A2E2E] font-medium font-sans">
                      Inquiry Request
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#23201D] font-light mt-1">
                      Reserve Tasting Experience
                    </h3>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#8E6E59]/80 px-2.5 py-1 border border-[#8E6E59]/20">Tasting Room</span>
                </div>
                <p className="text-xs text-[#6E6862] mt-2 font-sans">
                  Please submit your preferred date and details. Our reservation manager will verify table availability and connect via WhatsApp.
                </p>
              </div>

              {submitted ? (
                /* Success Confirmation State */
                <div className="py-12 px-6 text-center space-y-5 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#7A2E2E]/10 text-[#7A2E2E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  
                  <h4 className="font-serif text-2xl text-[#23201D]">
                    Inquiry Received, {formData.name || 'Guest'}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#6E6862] max-w-md mx-auto leading-relaxed font-sans">
                    Thank you for your interest in dining at EMBER. We have noted your request for <strong>{formData.guests}</strong> on <strong>{formData.date || 'your selected date'}</strong> ({formData.seating}).
                  </p>

                  <div className="p-4 bg-[#F6F2EC] border border-[#E4DDD3] max-w-md mx-auto text-left text-xs space-y-1 font-sans">
                    <div className="flex justify-between">
                      <span className="text-[#6E6862]">Inquiry Ref:</span>
                      <span className="font-mono text-[#23201D]">EMB-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6E6862]">Contact:</span>
                      <span className="text-[#23201D]">{formData.phone || formData.email}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#7A2E2E] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#632222] transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 border border-[#E4DDD3] text-xs uppercase tracking-[0.18em] text-[#6E6862] hover:text-[#23201D] transition-colors"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleDirectWhatsApp} className="space-y-6">
                  
                  {/* Guest Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="inquiry-name" className="block text-xs uppercase tracking-[0.18em] text-[#3D3833] font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="inquiry-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Raymond Tan"
                        className="w-full px-4 py-3 bg-[#F6F2EC] border border-[#E4DDD3] text-sm text-[#23201D] focus:outline-none focus:border-[#7A2E2E] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-phone" className="block text-xs uppercase tracking-[0.18em] text-[#3D3833] font-medium mb-2">
                        WhatsApp / Contact *
                      </label>
                      <input
                        type="tel"
                        id="inquiry-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+60 12-345 6789"
                        className="w-full px-4 py-3 bg-[#F6F2EC] border border-[#E4DDD3] text-sm text-[#23201D] focus:outline-none focus:border-[#7A2E2E] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="inquiry-email" className="block text-xs uppercase tracking-[0.18em] text-[#3D3833] font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="inquiry-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="guest@domain.com"
                        className="w-full px-4 py-3 bg-[#F6F2EC] border border-[#E4DDD3] text-sm text-[#23201D] focus:outline-none focus:border-[#7A2E2E] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-date" className="block text-xs uppercase tracking-[0.18em] text-[#3D3833] font-medium mb-2 flex items-center justify-between">
                        <span>Preferred Date *</span>
                        <span className="text-[10px] text-[#8E6E59] normal-case">Closed Tuesdays</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="inquiry-date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-[#F6F2EC] border border-[#E4DDD3] text-sm text-[#23201D] focus:outline-none focus:border-[#7A2E2E] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Seating Time & Party Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="inquiry-seating" className="block text-xs uppercase tracking-[0.18em] text-[#3D3833] font-medium mb-2 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#7A2E2E]" />
                        <span>Seating Preference *</span>
                      </label>
                      <select
                        id="inquiry-seating"
                        name="seating"
                        value={formData.seating}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F6F2EC] border border-[#E4DDD3] text-sm text-[#23201D] focus:outline-none focus:border-[#7A2E2E] transition-colors cursor-pointer"
                      >
                        <option value="First Seating (6:00 PM)">First Seating — 6:00 PM</option>
                        <option value="Second Seating (8:30 PM)">Second Seating — 8:30 PM</option>
                        <option value="Private Dining / Buyout">Private Dining / Full Buyout</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="inquiry-guests" className="block text-xs uppercase tracking-[0.18em] text-[#3D3833] font-medium mb-2 flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#7A2E2E]" />
                        <span>Party Size *</span>
                      </label>
                      <select
                        id="inquiry-guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F6F2EC] border border-[#E4DDD3] text-sm text-[#23201D] focus:outline-none focus:border-[#7A2E2E] transition-colors cursor-pointer"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="5-8 Guests">5 to 8 Guests</option>
                        <option value="Private Buyout (Full Room)">Exclusive Dining Room Buyout</option>
                      </select>
                    </div>
                  </div>

                  {/* Dietary Restrictions */}
                  <div>
                    <label htmlFor="inquiry-dietary" className="block text-xs uppercase tracking-[0.18em] text-[#3D3833] font-medium mb-2">
                      Dietary Restrictions / Allergies
                    </label>
                    <input
                      type="text"
                      id="inquiry-dietary"
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      placeholder="e.g. Pescatarian, no shellfish, gluten sensitivity"
                      className="w-full px-4 py-3 bg-[#F6F2EC] border border-[#E4DDD3] text-sm text-[#23201D] focus:outline-none focus:border-[#7A2E2E] transition-colors"
                    />
                  </div>

                  {/* Notes / Special Occasion */}
                  <div>
                    <label htmlFor="inquiry-notes" className="block text-xs uppercase tracking-[0.18em] text-[#3D3833] font-medium mb-2">
                      Special Occasion or Notes
                    </label>
                    <textarea
                      id="inquiry-notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Anniversary, business hosting, or specific seating preferences..."
                      className="w-full px-4 py-3 bg-[#F6F2EC] border border-[#E4DDD3] text-sm text-[#23201D] focus:outline-none focus:border-[#7A2E2E] transition-colors resize-none"
                    />
                  </div>

                  {/* WhatsApp Reservation Button */}
                  <div className="pt-4 border-t border-[#E4DDD3] flex flex-col items-stretch gap-3">
                    <button
                      type="submit"
                      id="whatsapp-reserve-submit-btn"
                      className="w-full py-4 px-6 bg-[#7A2E2E] hover:bg-[#632222] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-[#FAF7F2]" />
                      <span>Proceed to WhatsApp Reservation</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#8E6E59] font-sans">
                      <span>Direct concierge: {RESTAURANT_INFO.contact.whatsappDisplay}</span>
                      <span>·</span>
                      <span>Opens WhatsApp with your inquiry</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#8E6E59] font-sans text-center">
                    All reservations are confirmed directly via WhatsApp by our reservation concierge.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Dining Etiquette & Guidelines */}
        <div className="mt-20 pt-16 border-t border-[#E4DDD3]">
          <div className="max-w-xl mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#7A2E2E] font-medium font-sans">
              House Etiquette
            </span>
            <h3 className="font-serif text-2xl text-[#23201D] font-light mt-1">
              Dining Guidelines
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DINING_GUIDELINES.map((guide) => (
              <div key={guide.title} className="p-5 bg-[#FAF7F2] border border-[#E4DDD3]">
                <h4 className="font-serif text-lg text-[#23201D] mb-2">
                  {guide.title}
                </h4>
                <p className="text-xs text-[#6E6862] leading-relaxed font-sans">
                  {guide.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

