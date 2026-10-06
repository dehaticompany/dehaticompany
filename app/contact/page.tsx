import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/common/Container";
import PageHeader from "@/components/common/PageHeader";
import ContactForm from "@/components/common/ContactForm";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { contact, site } from "@/lib/content";
import { formatAddress, mailtoHref, telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact us for a free quote",
  description: `Call ${contact.phone}, message us on WhatsApp or send the enquiry form. Free site visits and written quotes across ${site.serviceAreas.join(", ")}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Contact"
        title="Tell us what needs doing"
        intro="Ring us for anything urgent, or send the details below and a supervisor will call you back within four working hours."
      />

      <section className="py-16 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <h2>Request a quote</h2>
            <p className="prose-measure mt-3 text-muted">
              The more you tell us about the property and the problem, the closer the first number
              will be to the final one.
            </p>
            <div className="mt-9">
              <ContactForm />
            </div>
          </div>

          <aside>
            <div className="rounded-[var(--radius-lg)] border border-hairline bg-surface p-7">
              <h2 className="text-[1.4rem]">Faster ways to reach us</h2>

              <ul className="mt-6 space-y-5 text-[0.98rem]">
                <li className="flex gap-3.5">
                  <Phone size={19} strokeWidth={1.8} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <a href={telHref(contact.phoneRaw)} className="font-medium hover:text-primary">
                      {contact.phone}
                    </a>
                    <p className="text-sm text-muted">Emergency callouts answered 24 hours</p>
                  </div>
                </li>

                <li className="flex gap-3.5">
                  <Mail size={19} strokeWidth={1.8} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <a href={mailtoHref(contact.email, "Website enquiry")} className="font-medium break-all hover:text-primary">
                      {contact.email}
                    </a>
                    <p className="text-sm text-muted">Drawings, site photos and tenders</p>
                  </div>
                </li>

                <li className="flex gap-3.5">
                  <MapPin size={19} strokeWidth={1.8} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <address className="not-italic font-medium">{formatAddress(contact.address)}</address>
                    <a
                      href={contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary underline underline-offset-4"
                    >
                      Open in maps
                    </a>
                  </div>
                </li>

                <li className="flex gap-3.5">
                  <Clock size={19} strokeWidth={1.8} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <dl className="space-y-1">
                    {contact.businessHours.map((entry) => (
                      <div key={entry.days} className="flex flex-wrap gap-x-2">
                        <dt className="font-medium">{entry.days}</dt>
                        <dd className="text-muted">{entry.hours}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              </ul>

              <div className="mt-7">
                <WhatsAppButton context="a property job" label="Message on WhatsApp" className="w-full justify-center bg-background" />
              </div>
            </div>

            <div className="mt-8 rounded-[var(--radius-lg)] border border-hairline p-7">
              <h2 className="text-[1.2rem]">Areas we cover</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {site.serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-[var(--radius-pill)] border border-hairline px-3.5 py-1.5 text-sm text-muted"
                  >
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">
                Outside these areas? Call anyway — we take larger projects further afield.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
