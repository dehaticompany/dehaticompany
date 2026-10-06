import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import Icon from "@/components/common/Icon";
import Button from "@/components/common/Button";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Full detail listing used on /services: one banded row per trade, with the
 * image and copy sides swapping so the page does not read as a card grid.
 */
export default function ServiceList({ services }: { services: Service[] }) {
  return (
    <div>
      {services.map((service, index) => {
        const flipped = index % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            aria-labelledby={`${service.slug}-heading`}
            className={cn("border-t border-hairline py-14 md:py-20", flipped && "bg-surface")}
          >
            <Container>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={cn("relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)]", flipped && "lg:order-2")}>
                  <Image
                    src={service.image}
                    alt={`${service.title} carried out by our team`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>

                <div className={cn(flipped && "lg:order-1")}>
                  <div className="flex items-center gap-3 text-primary">
                    <Icon name={service.icon} size={24} />
                    <span className="text-sm font-medium tracking-wide text-muted">
                      Trade {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 id={`${service.slug}-heading`} className="mt-4 text-[clamp(1.75rem,3vw,2.35rem)]">
                    {service.title}
                  </h2>

                  <p className="prose-measure mt-4 text-muted">{service.description}</p>

                  <ul className="mt-7 grid gap-x-6 gap-y-2.5 text-[0.95rem] sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5">
                        <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Button href="/contact" variant="primary">
                      Get a quote for this
                    </Button>
                    <WhatsAppButton context={service.title.toLowerCase()} label="Ask a question" />
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-primary underline underline-offset-4 hover:text-accent-dark"
                    >
                      Full page
                      <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
