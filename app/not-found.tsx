import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32">
      <Container size="narrow">
        <div className="rule-accent mb-6" />
        <h1>That page is not here</h1>
        <p className="prose-measure mt-5 text-muted">
          The link may be old or mistyped. Start from the services list, or tell us what needs doing
          and we will point you to the right team.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/services">Browse services</Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
