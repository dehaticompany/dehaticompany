"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { cn, telHref } from "@/lib/utils";
import type { ContactData, NavLink, SiteData } from "@/types";

interface NavbarProps {
  site: SiteData;
  contact: ContactData;
  links: NavLink[];
}

export default function Navbar({ site, contact, links }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Stop the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav aria-label="Main" className="border-b border-hairline bg-background/95 backdrop-blur">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-[var(--radius-sm)] bg-primary font-display text-lg font-semibold text-invert"
          >
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.28rem] font-semibold tracking-tight">{site.name}</span>
            <span className="mt-1 text-[0.7rem] text-muted">Property &amp; building services</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "relative py-2 text-[0.95rem] transition-colors hover:text-primary",
                  isActive(link.href) ? "font-medium text-primary" : "text-muted",
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span aria-hidden="true" className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-accent" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telHref(contact.phoneRaw)}
            className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-ink hover:text-primary"
          >
            <Phone size={16} strokeWidth={2} aria-hidden="true" />
            {contact.phone}
          </a>
          <Button href="/contact" variant="accent">
            Get a quote
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={telHref(contact.phoneRaw)}
            aria-label={`Call ${contact.phone}`}
            className="grid h-10 w-10 place-items-center rounded-[var(--radius-md)] border border-hairline text-primary"
          >
            <Phone size={18} strokeWidth={2} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-[var(--radius-md)] border border-hairline text-ink"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[var(--header-height)] z-40 overflow-y-auto border-t border-hairline bg-background lg:hidden"
        >
          <Container className="py-6">
            <ul className="divide-y divide-hairline">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-4 text-lg",
                      isActive(link.href) ? "font-medium text-primary" : "text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Button href="/contact" variant="accent" size="lg" className="mt-7 w-full">
              Get a quote
            </Button>
            <p className="mt-4 text-sm text-muted">
              Or call{" "}
              <a className="font-medium text-primary" href={telHref(contact.phoneRaw)}>
                {contact.phone}
              </a>
              , {contact.businessHours[0].days.toLowerCase()}, {contact.businessHours[0].hours}.
            </p>
          </Container>
        </div>
      )}
    </nav>
  );
}
