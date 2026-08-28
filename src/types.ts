export interface MenuItem {
  id: string;
  name: string;
  nativeTerm?: string;
  courseType: string;
  description: string;
  image: string;
  notes?: string;
}

export interface PhilosophyPillar {
  title: string;
  subtitle: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Dish' | 'Interior' | 'Craft' | 'Pairings';
  image: string;
  aspect?: string;
}

export interface SeatingSchedule {
  name: string;
  time: string;
  duration: string;
  note: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  seating: string;
  guests: string;
  dietary: string;
  occasion: string;
  notes: string;
}


