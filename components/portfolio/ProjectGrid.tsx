"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import type { PortfolioProject } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: PortfolioProject[];
  /** Show the category filter bar. Off for the short home-page preview. */
  filterable?: boolean;
}

const ALL = "All work";

export default function ProjectGrid({ projects, filterable = false }: ProjectGridProps) {
  const [active, setActive] = useState(ALL);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(projects.map((project) => project.category))).sort()],
    [projects],
  );

  const visible = active === ALL ? projects : projects.filter((project) => project.category === active);

  return (
    <div>
      {filterable && (
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by trade">
          {categories.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-[var(--radius-pill)] border px-4 py-1.5 text-sm transition-colors",
                  isActive
                    ? "border-primary bg-primary text-invert"
                    : "border-hairline text-muted hover:border-primary hover:text-primary",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      {visible.length === 0 ? (
        <p className="border border-dashed border-hairline-strong p-10 text-center text-muted">
          No projects listed under {active} yet. Ask us for references in this trade.
        </p>
      ) : (
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <ProjectCard key={project.id} project={project} priority={index < 3} />
          ))}
        </div>
      )}
    </div>
  );
}
