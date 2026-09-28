import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { getAllProjects, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Projets et missions menés par NMC Junior Entreprise (FSEGN Nabeul) : études de marché, stratégie digitale, branding. Nos premières références arrivent.",
  alternates: { canonical: "/projets" },
  openGraph: {
    title: "Projets — NMC Junior Entreprise",
    description: "Découvrez les missions marketing menées par les étudiants de NMC Junior Entreprise.",
  },
};

export default function ProjectsPage() {
  const list = getAllProjects();
  return (
    <>
      <PageHero
        eyebrow="Projets"
        title="Des missions réelles, des résultats mesurables"
        intro="Chaque projet est l'occasion pour nos équipes de livrer un travail dont le client peut tirer des décisions concrètes. Les contenus de cette page seront fournis et validés par NMC."
      />

      <section className="bg-white">
        <div className="container-nmc py-20 md:py-24">
          {list.length > 0 ? (
            <>
              <SectionHeader
                eyebrow="Portfolio"
                title="Nos réalisations"
                subtitle={`${list.length} projet(s) référencé(s) — catégories et clients affichés avec l'accord des intéressés.`}
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {list.map((p, i) => (
                  <ProjectCard key={p.slug} project={p} index={i} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-6 py-10 text-center">
              <Reveal>
                <p className="eyebrow">Portfolio en construction</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="h2-display max-w-3xl text-black">
                  Nos premiers projets arrivent bientôt
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="max-w-2xl text-black/70">
                  NMC documente actuellement ses premières missions avec l'accord de ses clients.
                  Cette page présentera bientôt des cas concrets : contexte, mission menée,
                  résultats obtenus.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="placeholder-box mt-4 w-full max-w-2xl">
                  <span>
                    <span style={{ color: "var(--color-red)" }}>Contenu à venir</span>
                    <br />
                    Projets à fournir par NMC (nom, client si autorisé, catégorie, année, visuel)
                  </span>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="text-sm text-black/50">
                  {projects.notice}
                </p>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title="Votre projet pourrait être le prochain."
        subtitle="Entreprises : lancez la conversation. Étudiants : participez aux prochaines missions."
      />
    </>
  );
}
