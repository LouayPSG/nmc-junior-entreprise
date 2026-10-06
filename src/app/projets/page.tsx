import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import { getAllProjects, social } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projets & réalisations — NMC Junior Entreprise",
  description:
    "Les missions menées par NMC Junior Entreprise (FSEGN Nabeul) : études de marché, stratégie marketing, branding. Découvrez comment nous travaillons et suivez nos réalisations.",
  alternates: { canonical: "/projets" },
  openGraph: {
    title: "Projets & réalisations — NMC Junior Entreprise",
    description:
      "Découvrez les missions marketing menées par les étudiants de NMC Junior Entreprise.",
  },
};

const COMMITMENTS: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "chart",
    title: "Des livrables exploitables",
    text: "Chaque mission vise un résultat concret : une étude lisible, un plan applicable, des supports utilisables. Pas un rapport qui dort dans un tiroir.",
  },
  {
    icon: "check",
    title: "Des clients associés",
    text: "Les projets sont présentés publiquement uniquement avec l'accord explicite des clients concernés — la discrétion fait partie du métier.",
  },
  {
    icon: "spark",
    title: "Des cas qui forment",
    text: "Chaque mission est aussi un terrain de formation : nos membres y appliquent les méthodes vues en cours, dans des conditions professionnelles.",
  },
];

export default function ProjectsPage() {
  const list = getAllProjects();
  return (
    <>
      <PageHero
        eyebrow="Projets"
        title="Des missions réelles, des résultats mesurables"
        intro="Études de marché, diagnostics, stratégies de communication, branding : NMC documente ses missions et publie celles que ses clients acceptent de partager."
      />

      <section className="bg-white">
        <div className="container-nmc py-20 md:py-24">
          {list.length > 0 ? (
            <>
              <SectionHeader
                eyebrow="Portfolio"
                title="Nos réalisations"
                subtitle={`${list.length} mission(s) référencée(s) — publiées avec l'accord des clients concernés.`}
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {list.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 80} className="h-full">
                    <article className="card card-hover flex h-full flex-col gap-3 p-6">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="h3-display text-black">{p.name}</h3>
                        {p.year ? (
                          <span className="font-display text-lg text-black/40">{p.year}</span>
                        ) : null}
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-black/50">
                        {p.category}
                      </p>
                      <p className="text-sm leading-relaxed text-black/70">{p.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <SectionHeader
                  eyebrow="Notre portfolio se construit"
                  title="Les missions d'aujourd'hui font les références de demain"
                  subtitle="NMC mène actuellement ses premières missions documentées. Les études de cas complètes — contexte, mission, résultats — seront publiées ici avec l'accord de nos clients."
                />
                <Reveal delay={150}>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Icon name="instagram" size={18} />
                      Suivre nos activités
                    </a>
                    <Link href="/contact" className="btn btn-secondary">
                      Lancer votre projet
                    </Link>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-6">
                <Reveal delay={200}>
                  <div className="flex flex-col gap-4">
                    {COMMITMENTS.map((c, i) => (
                      <article key={c.title} className="card flex gap-4 p-6">
                        <span
                          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md"
                          style={{ background: "rgba(162,35,35,0.08)", color: "var(--color-red)" }}
                        >
                          <Icon name={c.icon} size={22} />
                        </span>
                        <div>
                          <h3 className="text-base font-semibold text-black">{c.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-black/70">{c.text}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </Reveal>
              </div>
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
