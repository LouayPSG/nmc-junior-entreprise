import Reveal from "./Reveal";
import { getConfirmedStats, stats } from "@/lib/content";

/**
 * Chiffres clés — n'affiche que des valeurs confirmées par NMC.
 * Tant que rien n'est confirmé : état explicite "à confirmer", aucun chiffre inventé.
 */
export default function StatsBar() {
  const confirmed = getConfirmedStats();
  return (
    <section className="border-b border-black/10 bg-white">
      <div className="container-nmc py-14">
        <Reveal>
          <p className="note-pending mb-8 text-center">
            {confirmed.length > 0
              ? "Chiffres clés — confirmés par NMC"
              : "Chiffres clés — en attente de confirmation par NMC"}
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.stats.map((s, i) => {
            const isConfirmed = s.confirmed && typeof s.value === "number";
            return (
              <Reveal key={s.id} delay={i * 80}>
                <div className="flex flex-col items-center gap-1 border-t-2 pt-6 text-center" style={{ borderColor: "var(--color-red)" }}>
                  <span className="stat-number text-black">
                    {isConfirmed ? s.value : s.valuePlaceholder}
                  </span>
                  <span className="text-sm font-medium text-black/60">{s.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
