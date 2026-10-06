import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "@/components/common/Icon";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  /** How many of the service's features to list on the card. */
  featureCount?: number;
  className?: string;
}

export default function ServiceCard({ service, featureCount = 4, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col border border-hairline bg-background p-6",
        "rounded-[var(--radius-lg)] transition-colors duration-200 hover:border-primary",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-6 h-8 w-[3px] bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />

      <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-surface text-primary">
        <Icon name={service.icon} size={21} />
      </span>

      <h3 className="text-[1.3rem]">
        <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">
          {service.title}
        </Link>
      </h3>

      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{service.shortDescription}</p>

      <ul className="mt-5 space-y-1.5 text-[0.9rem] text-muted">
        {service.features.slice(0, featureCount).map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <span aria-hidden="true" className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
            {feature}
          </li>
        ))}
        {service.features.length > featureCount && (
          <li className="pl-[0.875rem] text-muted/80">
            and {service.features.length - featureCount} more
          </li>
        )}
      </ul>

      <span className="mt-6 inline-flex items-center gap-1.5 pt-1 text-[0.9rem] font-medium text-primary transition-colors group-hover:text-accent-dark">
        What is included
        <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
      </span>
    </article>
  );
}
