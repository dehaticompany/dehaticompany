import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/lib/content";

export default function ServicesPreview() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            title="What we take on"
            intro="Single repairs, full fit-outs and everything in between. If it is attached to the building, one of these teams handles it."
          />
          <Button href="/services" variant="outline">
            All services in detail
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} featureCount={3} />
          ))}
        </div>
      </Container>
    </section>
  );
}
