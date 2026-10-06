import Link from "next/link";
import Container from "./Container";

interface PageHeaderProps {
  title: string;
  intro: string;
  /** Breadcrumb label for the current page; the parent is always Home. */
  breadcrumb: string;
}

export default function PageHeader({ title, intro, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-14 text-invert lg:py-20">
      <div aria-hidden="true" className="grid-blueprint absolute inset-0" />
      <Container className="relative">
        <nav aria-label="Breadcrumb" className="text-[0.85rem] text-invert/60">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-invert/85">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        <div className="rule-accent mb-5 mt-7" />
        <h1 className="max-w-3xl text-invert">{title}</h1>
        <p className="prose-measure mt-5 text-[1.08rem] leading-relaxed text-invert/75">{intro}</p>
      </Container>
    </section>
  );
}
