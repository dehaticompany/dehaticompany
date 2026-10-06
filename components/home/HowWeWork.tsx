import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { site } from "@/lib/content";

export default function HowWeWork() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          title="How a job runs"
          intro="The same five stages whether it is a leaking tap or a full floor fit-out."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-hairline bg-hairline md:grid-cols-3 lg:grid-cols-5">
          {site.process.map((stage) => (
            <li key={stage.step} className="flex flex-col bg-background p-7">
              <span
                aria-hidden="true"
                className="font-display text-[2.6rem] font-semibold leading-none text-surface-deep"
              >
                {String(stage.step).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[1.1rem]">{stage.title}</h3>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-muted">{stage.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
