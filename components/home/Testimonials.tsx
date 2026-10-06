import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import StarRating from "@/components/common/StarRating";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          title="What clients say"
          intro="Homeowners, landlords and facility managers across the tricity."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <figure className="flex h-full flex-col rounded-[var(--radius-lg)] border border-hairline p-7">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 flex-1 text-[1rem] leading-relaxed text-ink">
                  {testimonial.message}
                </blockquote>
                <figcaption className="mt-6 border-t border-hairline pt-4 text-sm">
                  <span className="font-medium text-ink">{testimonial.name}</span>
                  <span className="mt-0.5 block text-muted">
                    {testimonial.role}, {testimonial.location} &middot; {testimonial.service} work
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
