import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import { PendingTag } from "./Pending";
import type { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

/** Carte service — les services non confirmés par NMC restent explicitement marqués */
export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const unconfirmed = !service.confirmed;
  return (
    <Reveal delay={index * 80} className="h-full">
      <article className="card card-hover flex h-full flex-col gap-4 p-7">
        <span
          className="inline-flex h-12 w-12 items-center justify-center rounded-md"
          style={{ background: "rgba(162, 35, 35, 0.08)", color: "var(--color-red)" }}
        >
          <Icon name={service.icon as IconName} size={24} />
        </span>
        <h3 className="h3-display text-black">{service.title}</h3>
        <p className="text-sm leading-relaxed text-black/70">{service.shortDescription}</p>
        {unconfirmed ? (
          <p className="mt-auto pt-2 text-xs text-black/50">
            <PendingTag>Service en attente de confirmation par NMC</PendingTag>
          </p>
        ) : null}
      </article>
    </Reveal>
  );
}
