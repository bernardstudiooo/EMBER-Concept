import { MenuItem, PhilosophyPillar, GalleryItem, SeatingSchedule } from '../types';

export const RESTAURANT_INFO = {
  name: 'EMBER',
  tagline: "An intimate chef's tasting menu experience.",
  subTagline: 'Seasonal ingredients. Fire and precision. A curated multi-course culinary journey.',
  location: {
    area: 'The Dining Room',
    address: 'An intimate dining room in the city',
    landmark: 'Central District',
    mapsUrl: 'https://maps.google.com',
  },
  contact: {
    whatsapp: '+60163200486',
    whatsappDisplay: '+60 16-320 0486',
    phone: '+60 16-320 0486',
    email: 'concierge@ember-dining.com',
    instagram: 'ember.dining',
    instagramUrl: 'https://instagram.com',
  },
  service: {
    days: 'Wednesday to Monday',
    closed: 'Tuesday',
    capacity: 'Limited seating. Reservations recommended.',
    privateBuyout: 'Private dining & exclusive buyouts available upon advance request',
    seatings: [
      {
        name: 'First Seating',
        time: '6:00 PM',
        duration: 'approx. 2.5 hours',
        note: 'Prompt arrival requested at 5:50 PM',
      },
      {
        name: 'Second Seating',
        time: '8:30 PM',
        duration: 'approx. 2.5 hours',
        note: 'Prompt arrival requested at 8:20 PM',
      },
    ] as SeatingSchedule[],
  },
  menuOverview: {
    title: "The Chef's Tasting Menu",
    subtitle: 'Multi-Course Seasonal Progression',
    pricingNote: 'Evolving continuously with peak seasonal harvests and artisanal purveyors',
    pairingNote: 'Cellar reserve wine pairings and botanical infusions available',
  },
  accolade: {
    quote: "A masterclass in restraint and flavor — EMBER crafts a seamless dialogue between live fire, pristine seasonality, and understated elegance.",
    source: "The Epicurean Review",
  }
};

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    title: 'Pristine Seasonality',
    subtitle: 'Purveyor & Market Driven',
    description: 'Every menu begins with rigorous sourcing from trusted farmers, coastal divers, and artisanal growers. Ingredients arrive at peak ripeness and are prepared with minimal intervention to honor their natural vitality.',
  },
  {
    title: 'Live Fire & Precision',
    subtitle: 'Craft & Temperature',
    description: 'Balancing gentle embers, charcoal heat, and modern culinary technique. Each plate is calibrated to exacting temperatures to unlock aromatic depth and pure, unmasked flavor profiles.',
  },
  {
    title: 'An Intimate Dialogue',
    subtitle: 'Curated Progression',
    description: 'With limited seating each evening, dining at EMBER unfolds as an unhurried, multisensory sequence where each course tells a harmonious story from opening amuse to final confectionery.',
  },
];

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    id: 'opening-tartlet',
    name: 'Heirloom Tartlet & Cured Crudo',
    nativeTerm: 'Citrus · Herb Emulsion',
    courseType: 'Opening Course',
    description: 'A crisp buckwheat tartlet filled with delicate cured coastal crudo, pressed finger lime pearls, and a bright emulsion of garden herbs.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85',
    notes: 'Finished with cold-pressed extra virgin olive oil and hand-harvested sea salt',
  },
  {
    id: 'velvet-consomme',
    name: 'Velvet Leek & Shellfish Consommé',
    nativeTerm: 'Charred Embers · Brioche',
    courseType: 'Warm Infusion',
    description: 'Clarified shellfish consommé poured tableside over charred sweet leeks, butter-poached medallion, and warm laminated brioche.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
    notes: 'A rich yet crystal-clear broth balancing ocean minerality and roasted aromatics',
  },
  {
    id: 'roasted-roots',
    name: 'Wood-Roasted Roots & Winter Truffle',
    nativeTerm: 'Ember Glaze · Crisp Sunchoke',
    courseType: 'Garden Harvest',
    description: 'Slow-roasted seasonal roots finished over glowing charcoal, accompanied by crisp sunchoke ribbons, shaved winter truffle, and aged cultured cream.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85',
    notes: 'Highlighting peak harvest sweetness from regenerative local growers',
  },
  {
    id: 'aged-tenderloin',
    name: 'Aged Tenderloin & Smoked Marrow Jus',
    nativeTerm: 'Charred Shallot · Pomme Purée',
    courseType: 'Fire Signature',
    description: 'Dry-aged beef tenderloin gently seared over live embers, accompanied by charred sweet shallot confit, silken pomme purée, and a smoked bone marrow reduction.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
    notes: 'Rested patiently to achieve optimal tenderness and a delicate smoky crust',
  },
  {
    id: 'blossom-granita',
    name: 'Citrus Blossom Sorbet & White Tea Granita',
    nativeTerm: 'Orchard Blossom · Crisp Meringue',
    courseType: 'Palate Interlude',
    description: 'A palate-cleansing sorbet of seasonal orchard citrus and fragrant blossom, crowned with crushed white tea granita and delicate sea salt meringue.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
    notes: 'A refreshing, crystalline transition before the final sweet course',
  },
  {
    id: 'dark-chocolate-ganache',
    name: 'Smoked Dark Chocolate & Caramelized Fig',
    nativeTerm: 'Roasted Cocoa · Clotted Cream',
    courseType: 'Dessert Finale',
    description: 'Single-origin dark chocolate ganache layered with warm roasted cocoa crumble, ember-caramelized black fig, and hand-churned clotted cream.',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1200&q=85',
    notes: 'Paired with a light infusion of roasted chicory and single-origin coffee',
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g-interior',
    title: 'The Intimate Dining Room',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'g-craft-fire',
    title: 'Live Fire & Charcoal Technique',
    category: 'Craft',
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'g-dish-plated',
    title: 'Seasonal Plating & Textures',
    category: 'Dish',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'g-wine-pairings',
    title: 'Curated Cellar Pairings',
    category: 'Pairings',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'g-counter',
    title: 'Tasting Counter Craftsmanship',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'g-kitchen-prep',
    title: 'Culinary Precision & Balance',
    category: 'Craft',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
  },
];

export const DINING_GUIDELINES = [
  {
    title: 'Punctuality',
    description: 'Our multi-course tasting menu commences concurrently for all seated guests. We kindly request guests arrive 10 minutes prior to service to ensure the culinary journey begins smoothly.',
  },
  {
    title: 'Dietary Preferences & Allergens',
    description: 'Because our tasting menu is designed as a unified progression celebrating seasonal ingredients, please inform us of any dietary requirements or allergies at least 48 hours prior to your reservation.',
  },
  {
    title: 'Aromatic Atmosphere',
    description: 'To preserve the delicate aromas and sensory nuances of the cuisine and wine pairings, we kindly ask guests to refrain from wearing strong fragrances or colognes.',
  },
  {
    title: 'Cellar & Beverage Pairings',
    description: 'A thoughtfully curated beverage program featuring cellar-reserve wines, artisanal ciders, and botanical infusions is available to accompany the tasting menu. Corkage service is available upon request.',
  },
];


