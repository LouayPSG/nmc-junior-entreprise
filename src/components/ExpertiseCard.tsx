import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import type { Expertise } from "@/lib/types";

interface ExpertiseCardProps {
  expertise: Expertise;
  index?: number;
}

/** Carte expertise — les 3 domaines confirmés par la bio officielle NMC */
export default function ExpertiseCard({ expertise, index = 0 }: ExpertiseCardProps) {
  return (
    <Reveal delay={index * 80} className="h-full">
      <article className="card card-hover flex h-full flex-col gap-4 p-8">
        <div className="flex items-center justify-between">
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-md"
            style={{ background: "rgba(162, 35, 35, 0.08)", color: "var(--color-red)" }}
          >
            <Icon name={expertise.icon as IconName} size={24} />
          </span>
          <span className="font-display text-2xl uppercase tracking-wide text-black/15">
            {expertise.title}
          </span>
        </div>
        <h3 className="h3-display text-black">{expertise.nameFr}</h3>
        <p className="text-sm leading-relaxed text-black/70">{expertise.intro}</p>
        <p className="mt-auto border-t border-black/10 pt-4 text-sm leading-relaxed text-black/60">
          {expertise.what}
        </p>
      </article>
    </Reveal>
  );
}
