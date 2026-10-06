import { Phone } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { contact } from "@/lib/content";
import { telHref } from "@/lib/utils";

interface CTAProps {
  title?: string;
  intro?: string;
}

export default function CTA({
  title = "Tell us what needs fixing",
  intro = "Send a photo and a pin location and we will tell you which trade you need, what it usually costs and when we can be there.",
}: CTAProps) {
  return (
    <section className="bg-accent text-primary-dark">
      <Container className="flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center lg:py-16">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.75rem,3vw,2.4rem)]">{title}</h2>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-primary-dark/80">{intro}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href="/contact" size="lg" className="bg-primary-dark text-invert hover:bg-primary">
            Get a free quote
          </Button>
          <a
            href={telHref(contact.phoneRaw)}
            className="inline-flex items-center gap-2.5 rounded-[var(--radius-md)] border border-primary-dark/30 px-6 py-3.5 text-base font-medium transition-colors hover:border-primary-dark hover:bg-primary-dark hover:text-invert"
          >
            <Phone size={18} strokeWidth={2} aria-hidden="true" />
            {contact.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
