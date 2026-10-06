import { Clock, MapPin } from "lucide-react";
import Container from "@/components/common/Container";
import Navbar from "./Navbar";
import { contact, navLinks, site } from "@/lib/content";

/**
 * Sticky header: a thin utility strip with hours and coverage on wide screens,
 * then the navigation bar. Content lives in data/site.json and data/contact.json.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-primary-dark text-invert/80 lg:block">
        <Container className="flex h-9 items-center justify-between text-[0.8rem]">
          <p className="flex items-center gap-2">
            <MapPin size={13} strokeWidth={1.8} aria-hidden="true" />
            Covering {site.serviceAreas.slice(0, 4).join(", ")} and nearby
          </p>
          <p className="flex items-center gap-2">
            <Clock size={13} strokeWidth={1.8} aria-hidden="true" />
            {contact.businessHours[0].days}, {contact.businessHours[0].hours}
            <span aria-hidden="true" className="mx-1 h-3 w-px bg-invert/25" />
            Emergency callouts 24 hours
          </p>
        </Container>
      </div>

      <Navbar site={site} contact={contact} links={navLinks} />
    </header>
  );
}
