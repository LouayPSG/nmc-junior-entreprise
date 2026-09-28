import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

/** En-tête de page interne — même registre typographique que le hero d'accueil */
export default function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-black text-white">
      <div className="container-nmc flex flex-col gap-4 py-16 md:py-20">
        <Reveal>
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            <span className="inline-block h-2 w-2" style={{ background: "var(--color-red)" }} />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="h1-display max-w-4xl">{title}</h1>
        </Reveal>
        {intro ? (
          <Reveal delay={180}>
            <p className="max-w-2xl text-base leading-relaxed text-white/75">{intro}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
