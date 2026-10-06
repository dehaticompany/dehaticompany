import type { Metadata } from "next";
import Container from "@/components/common/Container";
import PageHeader from "@/components/common/PageHeader";
import Icon from "@/components/common/Icon";
import ServiceList from "@/components/services/ServiceList";
import CTA from "@/components/home/CTA";
import { services, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Electrical, Plumbing, Construction, Interiors & Maintenance",
  description:
    "Eight in-house trades for homes, offices, shops and commercial buildings: electrical, plumbing, construction, interiors, furniture, carpentry, painting and planned maintenance.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Services"
        title="Eight trades, one point of contact"
        intro="Every team below is on our own payroll, so a job that needs three trades still needs one phone call, one quote and one supervisor."
      />

      {/* Jump list — the page is long, so let people get to their trade fast. */}
      <section className="border-b border-hairline bg-surface py-8">
        <Container>
          <ul className="flex flex-wrap gap-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-hairline bg-background px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  <span className="text-primary">
                    <Icon name={service.icon} size={16} />
                  </span>
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ServiceList services={services} />

      <section className="border-t border-hairline py-16">
        <Container>
          <h2 className="text-[clamp(1.5rem,2.4vw,2rem)]">Not sure which trade you need?</h2>
          <p className="prose-measure mt-3 text-muted">
            Most property problems show up in one trade and start in another — a damp wall is usually
            plumbing, a tripping circuit is often an appliance. Send a photo and we will tell you what
            it actually is before quoting. We cover {site.serviceAreas.join(", ")}.
          </p>
        </Container>
      </section>

      <CTA />
    </>
  );
}
