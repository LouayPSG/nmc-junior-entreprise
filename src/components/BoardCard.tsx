import Icon from "./Icon";
import Reveal from "./Reveal";
import type { BoardMember } from "@/lib/types";

interface BoardCardProps {
  member: BoardMember;
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

/** Carte membre du bureau exécutif — photo réelle ou monogramme tant que les photos manquent */
export default function BoardCard({ member, index = 0 }: BoardCardProps) {
  return (
    <Reveal delay={index * 60} className="h-full">
      <article className="card card-hover group flex h-full flex-col items-center gap-4 p-7 text-center">
        <div
          className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 transition-transform duration-300 group-hover:scale-[1.04]"
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
            <span className="font-display text-4xl text-[color:var(--color-red)]">
              {initials(member.name)}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-base font-semibold text-black">{member.name}</h3>
          <p className="mt-1 text-sm font-medium text-[color:var(--color-red)]">{member.role}</p>
          {member.roleNote ? (
            <p className="mt-1 text-xs leading-relaxed text-black/55">{member.roleNote}</p>
          ) : null}
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
