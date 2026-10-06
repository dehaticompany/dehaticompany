import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Icon from "@/components/common/Icon";
import { site } from "@/lib/content";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-invert lg:py-28">
      <div aria-hidden="true" className="grid-blueprint absolute inset-0" />

      <Container className="relative">
        <SectionTitle
          tone="dark"
          title="Why owners keep our number"
          intro="Property work is bought on trust, not on price lists. These are the six things clients tell us made the difference."
        />

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {site.whyChooseUs.map((item) => (
            <li key={item.title} className="border-t border-invert/20 pt-6">
              <span className="text-accent">
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className="mt-4 text-[1.2rem] text-invert">{item.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-invert/70">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
