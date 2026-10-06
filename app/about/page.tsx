import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/common/Container";
import PageHeader from "@/components/common/PageHeader";
import SectionTitle from "@/components/common/SectionTitle";
import Icon from "@/components/common/Icon";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowWeWork from "@/components/home/HowWeWork";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { services, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About us",
  description: `${site.legalName} has maintained and built homes, offices and commercial property across ${site.serviceAreas.join(", ")} since ${site.foundedYear}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const years = new Date().getFullYear() - site.foundedYear;

  return (
    <>
      <PageHeader
        breadcrumb="About"
        title={`${years} years of keeping buildings working`}
        intro={`${site.legalName} started as a two-man electrical outfit in ${site.foundedYear}. It grew every time a client asked whether we could also do the plumbing, the ceiling, the wardrobes — and we said yes and learned to do it properly.`}
      />

      <section className="py-20 lg:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-lg)]">
            <Image
              src="/images/hero/team.jpg"
              alt="Our supervisors and tradesmen on site"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover"
            />
          </div>

          <div>
            <SectionTitle title="How we work differently" />
            <div className="prose-measure mt-6 space-y-5 text-muted">
              <p>
                Property owners rarely have a single-trade problem. A damp patch is plumbing and
                painting. A new kitchen is carpentry, electrical, plumbing and tiling. When those
                trades belong to four different contractors, the owner becomes the project manager by
                default.
              </p>
              <p>
                We keep all eight trades in-house and give every job one supervisor who owns the
                sequence, the site, the mess and the snag list. You get one quote, one timeline and
                one person to call.
              </p>
              <p>
                We work across {site.serviceAreas.join(", ")} for homeowners, landlords, shops,
                offices and facility teams — from a single socket replacement to a floor-level
                fit-out on an annual maintenance contract.
              </p>
            </div>

            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {site.credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-2.5 text-[0.95rem]">
                  <Check size={17} strokeWidth={2.4} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                  {credential}
                </li>
              ))}
            </ul>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-hairline pt-8 sm:grid-cols-4">
              {site.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-[2rem] font-semibold leading-none text-primary">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-[0.85rem] leading-snug text-muted">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="border-y border-hairline bg-surface py-16">
        <Container>
          <SectionTitle title="The teams under this roof" />
          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li key={service.slug} className="flex items-start gap-3">
                <span className="mt-0.5 text-primary">
                  <Icon name={service.icon} size={20} />
                </span>
                <div>
                  <h3 className="text-[1.05rem]">{service.title}</h3>
                  <p className="mt-1 text-[0.9rem] leading-relaxed text-muted">{service.shortDescription}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <WhyChooseUs />
      <HowWeWork />
      <Testimonials />
      <CTA />
    </>
  );
}
