import type { Metadata } from "next";
import Container from "@/components/common/Container";
import PageHeader from "@/components/common/PageHeader";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import CTA from "@/components/home/CTA";
import { portfolio, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio — completed property and building projects",
  description: `Recent electrical, plumbing, construction, interior, furniture, painting, carpentry and maintenance projects completed across ${site.serviceAreas.join(", ")}.`,
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Portfolio"
        title="Work we have finished"
        intro="Filter by trade to see the jobs closest to yours, with the real timelines they took. We can arrange a reference call with most of these clients."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <ProjectGrid projects={portfolio} filterable />
        </Container>
      </section>

      <CTA
        title="Want to see one of these in person?"
        intro="We can usually arrange a visit to a recent site, or put you on a call with the owner."
      />
    </>
  );
}
