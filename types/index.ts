export interface SiteStat {
  label: string;
  value: string;
}

export interface SiteData {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  foundedYear: number;
  url: string;
  logo: string;
  ogImage: string;
  stats: SiteStat[];
  serviceAreas: string[];
  credentials: string[];
  whyChooseUs: ValueProposition[];
  process: ProcessStep[];
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  /** Name of a lucide-react icon, resolved by `components/common/Icon.tsx`. */
  icon: string;
  featured: boolean;
  features: string[];
}

export type PortfolioCategory =
  | "Electrical"
  | "Plumbing"
  | "Construction"
  | "Interior"
  | "Furniture"
  | "Painting"
  | "Carpentry"
  | "Maintenance";

export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  category: PortfolioCategory | string;
  location: string;
  year: number;
  duration: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  service: string;
  message: string;
  rating: number;
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface ContactData {
  phone: string;
  /** Digits only, used for `tel:` links. */
  phoneRaw: string;
  /** Digits only with country code, used for wa.me links. */
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  address: Address;
  mapUrl: string;
  businessHours: BusinessHours[];
  social: SocialLink[];
}

export interface NavLink {
  label: string;
  href: string;
}

/** Shape the contact form posts. Matches a future POST /api/enquiry body. */
export interface EnquiryPayload {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface ValueProposition {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PriceLine {
  item: string;
  from: string;
  unit: string;
  note: string;
}
