import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import CTA from "@/components/home/CTA";
import { getService, portfolio, services, site } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render every service page at build time. */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return { title: "Service not found" };

  return {
    title: `${service.title} in ${site.serviceAreas[0]}`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.shortDescription,
      images: [{ url: service.image, alt: service.title }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const relatedProjects = portfolio
    .filter((project) => service.title.toLowerCase().includes(project.category.toLowerCase()))
    .slice(0, 2);

  return (
    <>
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

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <h2>What this covers</h2>
            <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check size={17} strokeWidth={2.4} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            {relatedProjects.length > 0 && (
              <div className="mt-14">
                <h2>Jobs like yours</h2>
                <ul className="mt-6 space-y-5">
                  {relatedProjects.map((project) => (
                    <li key={project.id} className="border-l-2 border-accent pl-5">
                      <h3 className="text-[1.1rem]">{project.title}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {project.location} &middot; {project.duration} &middot; {project.year}
                      </p>
                      <p className="mt-2 text-[0.95rem] text-muted">{project.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="h-max rounded-[var(--radius-lg)] border border-hairline bg-surface p-7">
            <h2 className="text-[1.3rem]">Other trades</h2>
            <ul className="mt-5 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-[var(--radius-md)] bg-background p-4 transition-colors hover:text-primary"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-primary">
                        <Icon name={item.icon} size={18} />
                      </span>
                      {item.title}
                    </span>
                    <ArrowRight size={16} strokeWidth={2} aria-hidden="true" className="text-muted group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[0.92rem] text-muted">
              Covering {site.serviceAreas.join(", ")}. Site visits and quotes are free.
            </p>
          </aside>
        </Container>
      </section>

      <CTA title={`Need ${service.title.toLowerCase()}?`} />
    </>
  );
}
