import Image from "next/image";
import { Phone } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import { contact, services, site } from "@/lib/content";
import { telHref } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-dark text-invert">
      <div aria-hidden="true" className="grid-blueprint absolute inset-0" />

      <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <p className="flex items-center gap-2.5 text-[0.9rem] text-invert/70">
            <span className="rule-accent" aria-hidden="true" />
            Serving {site.serviceAreas[0]} and the tricity since {site.foundedYear}
          </p>

          <h1 className="mt-6 text-invert">Complete property maintenance and building solutions</h1>

          <p className="prose-measure mt-6 text-[1.1rem] leading-relaxed text-invert/80">
            From electrical and plumbing work to construction, furniture, interiors and planned
            maintenance — eight trades, one supervisor, one quote, one number to call when something
            goes wrong.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact" variant="accent" size="lg">
              Get a free quote
            </Button>
            <a
              href={telHref(contact.phoneRaw)}
              className="inline-flex items-center gap-2.5 rounded-[var(--radius-md)] border border-invert/30 px-6 py-3.5 text-base font-medium text-invert transition-colors hover:border-accent hover:text-accent"
            >
              <Phone size={18} strokeWidth={2} aria-hidden="true" />
              {contact.phone}
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-7 border-t border-invert/15 pt-8 sm:grid-cols-4">
            {site.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-[2rem] font-semibold leading-none text-accent">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-[0.85rem] leading-snug text-invert/65">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/hero/hero.jpg"
              alt="Our electrician and carpenter working together on a residential fit-out"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-md)] border border-invert/15 bg-invert/15 sm:grid-cols-4 lg:absolute lg:-bottom-7 lg:-left-8 lg:mt-0 lg:w-[calc(100%+4rem)] lg:grid-cols-4 lg:border-0">
            {services.slice(0, 4).map((service) => (
              <li
                key={service.slug}
                className="flex flex-col items-center gap-2 bg-primary-dark px-3 py-4 text-center lg:bg-primary"
              >
                <span className="text-accent">
                  <Icon name={service.icon} size={20} />
                </span>
                <span className="text-[0.78rem] leading-tight text-invert/80">
                  {service.title.replace(" Services", "").replace(" & Civil Work", "")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
