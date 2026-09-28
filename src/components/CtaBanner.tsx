import Link from "next/link";
import Reveal from "./Reveal";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
}

/**
 * Bandeau CTA final (PRD §C-11) — double sortie : clients / étudiants,
 * pour ne forcer aucune audience.
 */
export default function CtaBanner({
  title = "Et si on construisait votre prochain projet ?",
  subtitle = "Entreprises : confiez-nous votre problématique marketing. Étudiants : venez l'expérimenter avec nous.",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="hero-motif" aria-hidden="true" />
      <div className="container-nmc relative flex flex-col items-center gap-6 py-20 text-center md:py-24">
        <Reveal>
          <h2 className="h2-display max-w-3xl">{title}</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-2xl text-white/75">{subtitle}</p>
        </Reveal>
        <Reveal delay={160}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Travaillons ensemble
            </Link>
            <Link href="/a-propos#rejoindre" className="btn btn-secondary-dark">
              Rejoindre NMC
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
