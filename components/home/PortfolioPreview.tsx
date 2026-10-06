import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { getRecentProjects } from "@/lib/content";

export default function PortfolioPreview() {
  const projects = getRecentProjects(3);

  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            title="Recent jobs"
            intro="A few properties we finished this year, with the trades and timelines they actually took."
          />
          <Button href="/portfolio" variant="outline">
            Browse the portfolio
          </Button>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
