import Link from "next/link";
import Reveal from "./Reveal";
import Icon from "./Icon";

/**
 * Hero typographique — noir profond, accent rouge unique (motif géométrique),
 * aucune photo de stock. PRD §D.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="hero-motif" aria-hidden="true" />
      <div className="container-nmc relative flex flex-col gap-8 py-24 md:py-36 lg:py-44">
        <Reveal>
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            <span className="inline-block h-2 w-2" style={{ background: "var(--color-red)" }} />
            Junior Entreprise — FSEGN Nabeul
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="h1-display max-w-4xl">
            Des idées étudiantes.
            <br />
            <span className="accent">Des résultats professionnels.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            NMC Junior Entreprise accompagne les entreprises et porteurs de projets de la région de
            Nabeul dans leurs démarches marketing, avec l'exigence d'une équipe étudiante formée aux
            méthodes professionnelles.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Travaillons ensemble
              <Icon name="arrow-right" size={18} />
            </Link>
            <Link href="/projets" className="btn btn-secondary-dark">
              Découvrir nos projets
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Séparateur diagonal rouge — signature visuelle */}
      <div
        aria-hidden="true"
        className="h-1.5 w-full"
        style={{
          background: "linear-gradient(90deg, var(--color-red) 0%, var(--color-red) 65%, transparent 65%)",
        }}
      />
    </section>
  );
}
