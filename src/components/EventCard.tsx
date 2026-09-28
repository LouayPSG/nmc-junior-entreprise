import Reveal from "./Reveal";
import Icon from "./Icon";
import type { EventItem } from "@/lib/types";

const MONTHS_FR = [
  "janv.", "févr.", "mars", "avr.", "mai", "juin",
  "juil.", "août", "sept.", "oct.", "nov.", "déc.",
];

interface EventCardProps {
  event: EventItem;
  index?: number;
}

function formatDate(date: string) {
  const d = new Date(`${date}T00:00:00`);
  if (Number.isNaN(d.getTime())) return { day: "—", month: "", year: "" };
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: MONTHS_FR[d.getMonth()],
    year: String(d.getFullYear()),
  };
}

/** Carte événement — liste chronologique, tag de type (Atelier / Séminaire / Partenariat / Annonce) */
export default function EventCard({ event, index = 0 }: EventCardProps) {
  const date = formatDate(event.date);
  return (
    <Reveal delay={index * 60}>
      <article className="card card-hover flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-center sm:gap-0">
          <span className="font-display text-4xl leading-none text-black">{date.day}</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-red)]">
            {date.month} {date.year}
          </span>
        </div>
        <span className="hidden h-12 w-px bg-black/10 sm:block" aria-hidden="true" />
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="h3-display text-black">{event.title}</h3>
            {event.tag ? <span className="tag tag-red">{event.tag}</span> : null}
          </div>
          <p className="text-sm leading-relaxed text-black/70">{event.description}</p>
        </div>
        <Icon
          name="arrow-right"
          size={20}
          className="hidden shrink-0 text-black/30 sm:block"
        />
      </article>
    </Reveal>
  );
}
