import Reveal from "./Reveal";
import { PendingBox } from "./Pending";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

/** Carte projet — visuel en aspect-ratio constant pour éviter tout décalage de mise en page */
export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={index * 80} className="h-full">
      <article className="card card-hover group flex h-full flex-col overflow-hidden">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
          {project.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.cover}
              alt={`Visuel du projet ${project.name}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <PendingBox compact>Visuel à fournir par NMC</PendingBox>
          )}
          {project.category ? (
            <span className="tag tag-red absolute left-4 top-4 bg-white/90">{project.category}</span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="h3-display text-black">{project.name}</h3>
            {project.year ? (
              <span className="font-display text-lg text-black/40">{project.year}</span>
            ) : null}
          </div>
          {project.client ? (
            <p className="text-xs font-semibold uppercase tracking-wider text-black/50">
              Client : {project.client}
            </p>
          ) : null}
          <p className="text-sm leading-relaxed text-black/70">{project.description}</p>
          {project.result ? (
            <p
              className="mt-auto border-l-2 pl-3 text-sm font-semibold"
              style={{ borderColor: "var(--color-red)" }}
            >
              {project.result}
            </p>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}
