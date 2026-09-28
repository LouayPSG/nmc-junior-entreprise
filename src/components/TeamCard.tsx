import Icon from "./Icon";
import Reveal from "./Reveal";
import type { TeamMember } from "@/lib/types";

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Carte membre — photo carrée ou monogramme tant que les photos ne sont pas fournies */
export default function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <Reveal delay={index * 60} className="h-full">
      <article className="card card-hover flex h-full flex-col items-center gap-3 p-6 text-center">
        <div
          className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2"
          style={{ borderColor: "var(--color-red)", background: "rgba(162, 35, 35, 0.06)" }}
        >
          {member.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={member.photo}
              alt={`Photo de ${member.name}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="font-display text-3xl text-[color:var(--color-red)]">
              {initials(member.name)}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-base font-semibold text-black">{member.name}</h3>
          <p className="text-sm text-black/60">{member.role}</p>
        </div>
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Profil LinkedIn de ${member.name}`}
            className="mt-auto inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/15 text-black/60 transition-colors hover:border-[color:var(--color-red)] hover:text-[color:var(--color-red)]"
          >
            <Icon name="linkedin" size={16} />
          </a>
        ) : null}
      </article>
    </Reveal>
  );
}
