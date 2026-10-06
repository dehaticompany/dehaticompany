import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { site } from "@/lib/content";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-lg)]">
            <Image
              src="/images/hero/team.jpg"
              alt="Supervisor reviewing drawings with the site team"
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-[var(--radius-md)] bg-accent px-6 py-5 text-primary-dark shadow-[var(--shadow-lifted)] sm:block">
            <span className="block font-display text-3xl font-semibold leading-none">
              {new Date().getFullYear() - site.foundedYear}
            </span>
            <span className="mt-1.5 block text-sm font-medium">years of site work</span>
          </div>
        </div>

        <div>
          <SectionTitle
            title="One contractor instead of eight"
            intro="Most property work goes wrong in the gaps between trades: the electrician leaves before the carpenter arrives, nobody owns the mess, and the owner does the chasing."
          />

          <p className="prose-measure mt-5 text-muted">
            We built {site.name} to close those gaps. Electricians, plumbers, masons, carpenters and
            painters are on our own payroll, scheduled by one supervisor who answers for the whole
            job — from the first site visit to the snag list on handover day.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {site.credentials.map((credential) => (
              <li key={credential} className="flex items-start gap-2.5 text-[0.95rem]">
                <Check size={17} strokeWidth={2.4} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                {credential}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/about">More about us</Button>
            <Button href="/portfolio" variant="outline">
              See completed work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
