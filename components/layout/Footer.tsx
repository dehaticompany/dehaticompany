import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/common/Container";
import Icon from "@/components/common/Icon";
import { contact, navLinks, services, site } from "@/lib/content";
import { formatAddress, mailtoHref, telHref } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-invert/75">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <p className="font-display text-2xl font-semibold text-invert">{site.name}</p>
          <p className="prose-measure mt-4 text-[0.95rem] leading-relaxed">{site.description}</p>
          <ul className="mt-6 flex gap-3">
            {contact.social.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${link.name}`}
                  className="grid h-10 w-10 place-items-center rounded-[var(--radius-md)] border border-invert/20 text-invert/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name={link.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Services">
          <h2 className="text-base font-semibold text-invert">Services</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="transition-colors hover:text-accent">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-base font-semibold text-invert">Company</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 text-base font-semibold text-invert">Areas covered</h2>
          <p className="mt-3 text-[0.95rem]">{site.serviceAreas.join(", ")}</p>
        </nav>

        <div>
          <h2 className="text-base font-semibold text-invert">Reach us</h2>
          <ul className="mt-4 space-y-4 text-[0.95rem]">
            <li className="flex gap-3">
              <Phone size={17} strokeWidth={1.8} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <a href={telHref(contact.phoneRaw)} className="hover:text-accent">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={17} strokeWidth={1.8} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <a href={mailtoHref(contact.email, "Website enquiry")} className="break-all hover:text-accent">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={17} strokeWidth={1.8} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <address className="not-italic">{formatAddress(contact.address)}</address>
            </li>
          </ul>

          <h2 className="mt-8 text-base font-semibold text-invert">Hours</h2>
          <dl className="mt-3 space-y-1.5 text-[0.95rem]">
            {contact.businessHours.map((entry) => (
              <div key={entry.days} className="flex justify-between gap-4">
                <dt>{entry.days}</dt>
                <dd className="text-right text-invert/60">{entry.hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div className="border-t border-invert/12">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-[0.85rem] text-invert/55 sm:flex-row">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Electrical, plumbing, construction, interiors, furniture, painting, carpentry and maintenance.
          </p>
        </Container>
      </div>
    </footer>
  );
}
