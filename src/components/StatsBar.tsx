import Reveal from "./Reveal";
import { getConfirmedStats, site } from "@/lib/content";

/** Bande de chiffres clés — uniquement des faits confirmés (aucune statistique inventée) */
export default function StatsBar() {
  const confirmed = getConfirmedStats();
  if (confirmed.length === 0) return null;

  return (
    <section className="border-b border-black/10 bg-white">
      <div className="container-nmc py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          {confirmed.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <div
                className="flex flex-col items-center gap-1 border-t-2 pt-6 text-center"
                style={{ borderColor: "var(--color-red)" }}
              >
                <span className="stat-number text-black">{s.value}</span>
                <span className="text-sm font-medium text-black/60">{s.label}</span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={confirmed.length * 80}>
            <div className="flex flex-col items-center gap-1 border-t-2 border-black/15 pt-6 text-center">
              <span className="stat-number text-black">FSEGN</span>
              <span className="text-sm font-medium text-black/60">Notre ancrage à Nabeul</span>
            </div>
          </Reveal>
          <Reveal delay={confirmed.length * 80 + 80}>
            <div className="flex flex-col items-center gap-1 border-t-2 border-black/15 pt-6 text-center">
              <span className="stat-number text-black">3</span>
              <span className="text-sm font-medium text-black/60">
                Domaines : research · strategy · branding
              </span>
            </div>
          </Reveal>
        </div>
        <p className="sr-only">
          NMC Junior Entreprise, fondée en {site.founded}, Junior Entreprise de la FSEGN.
        </p>
      </div>
    </section>
  );
}
