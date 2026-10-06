import siteJson from "@/data/site.json";
import servicesJson from "@/data/services.json";
import portfolioJson from "@/data/portfolio.json";
import testimonialsJson from "@/data/testimonials.json";
import contactJson from "@/data/contact.json";

import type {
  ContactData,
  NavLink,
  PortfolioProject,
  Service,
  SiteData,
  Testimonial,
} from "@/types";

/**
 * Every component reads content from here, never from a JSON file directly.
 * When the content moves to a CMS or database, only this file changes.
 */
export const site: SiteData = siteJson as SiteData;
export const services: Service[] = servicesJson as Service[];
export const portfolio: PortfolioProject[] = portfolioJson as PortfolioProject[];
export const testimonials: Testimonial[] = testimonialsJson as Testimonial[];
export const contact: ContactData = contactJson as ContactData;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  // Add { label: "Shop", href: "/shop" } here when the shop ships.
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getFeaturedServices(limit = 6): Service[] {
  return services.filter((service) => service.featured).slice(0, limit);
}

export function getRecentProjects(limit = 6): PortfolioProject[] {
  return [...portfolio].sort((a, b) => b.year - a.year).slice(0, limit);
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  return portfolio.filter((project) => project.category === category);
}
