import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarClock, Check, MapPin, Minus } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import SectionTitle from "@/components/common/SectionTitle";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import PriceTable from "./PriceTable";
import ServiceFaq from "./ServiceFaq";
import { portfolio, services, site } from "@/lib/content";
import type { Service } from "@/types";

/**
 * The whole body of a /services/[slug] page. Page files stay thin and only
 * handle params, metadata and structured data.
 */
export default function ServiceDetail({ service }: { service: Service }) {
  const otherTrades = services.filter((item) => item.slug !== service.slug);
  const relatedProjects = portfolio
    .filter((project) => service.title.toLowerCase().includes(project.category.toLowerCase()))
    .slice(0, 3);

  const sections = [
    { id: "jobs", label: "What we get called for" },
    { id: "scope", label: "What a quote covers" },
    { id: "materials", label: "Materials" },
    { id: "rates", label: "Indicative rates" },
    { id: "faqs", label: "Questions" },
  ];

  return (
    <>
      {/* Header ------------------------------------------------------------ */}
      <section className="border-b border-hairline bg-surface py-14 lg:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <nav aria-label="Breadcrumb" className="text-[0.85rem] text-muted">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="hover:text-primary">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink">
                  {service.title}
                </li>
              </ol>
            </nav>

            <span className="mt-7 inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-primary text-invert">
              <Icon name={service.icon} size={22} />
            </span>

            <h1 className="mt-5 text-[clamp(2.1rem,4.5vw,3.25rem)]">{service.title}</h1>
            <p className="prose-measure mt-5 text-[1.05rem] leading-relaxed text-muted">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="accent" size="lg">
                Get a quote
              </Button>
              <WhatsAppButton context={service.title.toLowerCase()} label="Send us a photo" />
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)]">
            <Image
              src={service.image}
              alt={`${service.title} in progress on one of our sites`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Quick facts ------------------------------------------------------- */}
      <section className="border-b border-hairline bg-primary py-8 text-invert">
        <Container>
          <dl className="grid gap-8 sm:grid-cols-3">
            <div className="flex gap-3.5">
              <CalendarClock size={20} strokeWidth={1.8} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="font-medium">How long it takes</dt>
                <dd className="mt-1 text-[0.92rem] leading-relaxed text-invert/70">{service.timeline}</dd>
              </div>
            </div>
            <div className="flex gap-3.5">
              <BadgeCheck size={20} strokeWidth={1.8} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="font-medium">What is guaranteed</dt>
                <dd className="mt-1 text-[0.92rem] leading-relaxed text-invert/70">{service.warranty}</dd>
              </div>
            </div>
            <div className="flex gap-3.5">
              <MapPin size={20} strokeWidth={1.8} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="font-medium">Where we work</dt>
                <dd className="mt-1 text-[0.92rem] leading-relaxed text-invert/70">
                  {site.serviceAreas.join(", ")}. Site visits and written quotes are free.
                </dd>
              </div>
            </div>
          </dl>
        </Container>
      </section>

      {/* On-page navigation ------------------------------------------------ */}
      <section className="border-b border-hairline">
        <Container>
          <nav aria-label="On this page">
            <ul className="-mx-1 flex gap-1 overflow-x-auto py-3 text-[0.9rem]">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-block whitespace-nowrap rounded-[var(--radius-pill)] px-4 py-1.5 text-muted transition-colors hover:bg-surface hover:text-primary"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {/* Intro and coverage ------------------------------------------------ */}
      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="prose-measure text-[1.15rem] leading-relaxed">{service.intro}</p>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-hairline bg-surface p-7">
            <h2 className="text-[1.25rem]">Everything under this trade</h2>
            <ul className="mt-5 grid gap-x-6 gap-y-2.5 text-[0.95rem] sm:grid-cols-2 lg:grid-cols-1">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Common jobs ------------------------------------------------------- */}
      <section id="jobs" className="border-t border-hairline bg-surface py-16 lg:py-24">
        <Container>
          <SectionTitle
            title="What we get called for"
            intro="The four jobs that make up most of this team's week, and how long each one usually takes."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {service.commonJobs.map((job) => (
              <li key={job.title} className="rounded-[var(--radius-lg)] border border-hairline bg-background p-7">
                <h3 className="text-[1.2rem]">{job.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{job.description}</p>
                <p className="mt-5 flex items-center gap-2 border-t border-hairline pt-4 text-[0.9rem]">
                  <CalendarClock size={16} strokeWidth={1.9} className="text-accent" aria-hidden="true" />
                  <span className="text-muted">Usually takes</span>
                  <span className="font-medium">{job.typicalTime}</span>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Scope ------------------------------------------------------------- */}
      <section id="scope" className="py-16 lg:py-24">
        <Container>
          <SectionTitle
            title="What a quote covers"
            intro="Written out so there is nothing to argue about halfway through the job."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-[1.15rem]">Included as standard</h3>
              <ul className="mt-5 space-y-3">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={17} strokeWidth={2.4} className="mt-1 shrink-0 text-success" aria-hidden="true" />
                    <span className="text-[0.98rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[1.15rem]">Quoted separately</h3>
              <ul className="mt-5 space-y-3">
                {service.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Minus size={17} strokeWidth={2.4} className="mt-1 shrink-0 text-muted" aria-hidden="true" />
                    <span className="text-[0.98rem] text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Materials --------------------------------------------------------- */}
      <section id="materials" className="border-y border-hairline bg-surface py-16 lg:py-24">
        <Container>
          <SectionTitle
            title="What we build with"
            intro="Brands and grades are named in your quote, and the purchase bills are handed over at the end of the job."
          />
          <dl className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {service.materials.map((material) => (
              <div key={material.label} className="bg-background p-7">
                <dt className="text-[1.05rem] font-medium">{material.label}</dt>
                <dd className="mt-2 text-[0.93rem] leading-relaxed text-muted">{material.detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Rates ------------------------------------------------------------- */}
      <section id="rates" className="py-16 lg:py-24">
        <Container>
          <SectionTitle
            title="Indicative rates"
            intro="Starting points, not a quote. The real number comes from the site visit, and it is free."
          />
          <div className="mt-10">
            <PriceTable rows={service.pricing} />
          </div>
          <p className="mt-5 max-w-3xl text-[0.9rem] text-muted">
            Rates are for {site.serviceAreas.slice(0, 3).join(", ")} and assume ground or lift-accessible
            floors. Material brand, access, height and the condition of existing work move the number in
            both directions. Nothing is charged that is not in your signed quote.
          </p>
        </Container>
      </section>

      {/* Related work ------------------------------------------------------ */}
      {relatedProjects.length > 0 && (
        <section className="border-t border-hairline bg-surface py-16 lg:py-24">
          <Container>
            <SectionTitle title="Jobs like yours" intro="Recent work from this team, with the timelines it actually took." />
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedProjects.map((project) => (
                <li key={project.id} className="border-l-2 border-accent bg-background p-6">
                  <h3 className="text-[1.1rem]">{project.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">
                    {project.location} &middot; {project.duration} &middot; {project.year}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{project.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/portfolio" variant="outline">
                See the full portfolio
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* FAQs -------------------------------------------------------------- */}
      <section id="faqs" className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionTitle
            title="Questions we answer on the phone"
            intro="If yours is not here, ask it on WhatsApp — you will get an answer from a supervisor, not a call centre."
          />
          <ServiceFaq faqs={service.faqs} />
        </Container>
      </section>

      {/* Other trades ------------------------------------------------------ */}
      <section className="border-t border-hairline bg-surface py-14">
        <Container>
          <h2 className="text-[1.4rem]">Other trades we cover</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherTrades.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-[var(--radius-md)] border border-hairline bg-background p-4 transition-colors hover:border-primary hover:text-primary"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-primary">
                      <Icon name={item.icon} size={18} />
                    </span>
                    {item.title}
                  </span>
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="text-muted group-hover:text-accent"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
