import Image from "next/image";
import { MapPin } from "lucide-react";
import type { PortfolioProject } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: PortfolioProject;
  priority?: boolean;
  className?: string;
}

export default function ProjectCard({ project, priority = false, className }: ProjectCardProps) {
  return (
    <article className={cn("group flex h-full flex-col", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] bg-surface">
        <Image
          src={project.image}
          alt={`${project.title} in ${project.location}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover"
          priority={priority}
        />
        <span className="absolute left-3 top-3 rounded-[var(--radius-sm)] bg-primary/90 px-2.5 py-1 text-xs font-medium text-invert backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <h3 className="text-[1.2rem]">{project.title}</h3>

        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={14} strokeWidth={1.8} aria-hidden="true" />
          {project.location}
          <span aria-hidden="true" className="mx-1 h-3 w-px bg-hairline-strong" />
          {project.duration}
        </p>

        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{project.description}</p>
      </div>
    </article>
  );
}
