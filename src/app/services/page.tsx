import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import { getExpertises, contact, social } from "@/lib/content";

export const metadata: Metadata = {
  title: "Prestations marketing — NMC Junior Entreprise",
  description:
    "Les domaines d'intervention de NMC Junior Entreprise (FSEGN Nabeul) : études et recherche marketing, stratégie et conseil, branding et contenu. Des missions menées par une équipe étudiante formée aux méthodes professionnelles.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Prestations marketing — NMC Junior Entreprise",
    description:
      "Études, stratégie, branding : découvrez les domaines d'intervention de NMC Junior Entreprise.",
  },
};

const STEPS = [
  {
    step: "01",
    title: "Comprendre",
    text: "Un premier échange pour cerner votre besoin, vos objectifs et vos contraintes réelles.",
  },
  {
    step: "02",
    title: "Concevoir",
    text: "Vous recevez une proposition claire : périmètre, méthodologie, planning et livrables attendus.",
  },
  {
    step: "03",
    title: "Réaliser",
    text: "Une équipe projet dédiée mène la mission, avec des points d'étape réguliers.",
  },
  {
    step: "04",
    title: "Accompagner",
    text: "Restitution finale, recommandations actionnables et suivi de la mise en pratique.",
  },
];

export default function ServicesPage() {
  const expertises = getExpertises();
  return (
    <>
      <PageHero
        eyebrow="Prestations"
        title="Trois domaines d'intervention, une seule exigence"
        intro="NMC intervient sur trois fondations du marketing : comprendre un marché (research), décider d'un cap (strategy), faire exister une marque (branding). Chaque mission est menée par une équipe étudiante formée aux méthodes du conseil."
      />

      {/* Domaines détaillés */}
      <section className="bg-white">
        <div className="container-nmc flex flex-col py-20 md:py-24">
          {expertises.map((e, i) => (
            <Reveal key={e.id}>
              <article
                className={`grid gap-8 border-b border-black/10 py-14 last:border-b-0 lg:grid-cols-12 ${
                  i > 0 ? "" : "pt-0"
                }`}
              >
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="inline-flex h-14 w-14 items-center justify-center rounded-md"
                      style={{ background: "rgba(162, 35, 35, 0.08)", color: "var(--color-red)" }}
                    >
                      <Icon name={e.icon as IconName} size={28} />
                    </span>
                    <span className="font-display text-4xl uppercase tracking-wide text-black/12">
                      {e.title}
                    </span>
                  </div>
                  <h2 className="h2-display mt-5 text-black">{e.nameFr}</h2>
                </div>
                <div className="flex flex-col gap-5 lg:col-span-8">
                  <p className="text-lg leading-relaxed text-black/85">{e.intro}</p>
                  <p className="leading-relaxed text-black/70">{e.description}</p>
                  <div className="card border-l-4 p-6" style={{ borderLeftColor: "var(--color-red)" }}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-black/50">
                      Concrètement
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-black/80">{e.what}</p>
                  </div>
                  <div>
                    <Link href="/contact" className="btn btn-primary self-start">
                      Demander cette expertise
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ce que chaque mission inclut — cadre, pas catalogue de livrables */}
      <section className="bg-gray-100">
        <div className="container-nmc py-20 md:py-24">
          <SectionHeader
            align="center"
            eyebrow="Le cadre d'une mission"
            title="Ce que vous pouvez attendre de NMC"
            subtitle="Le périmètre exact et les livrables détaillés sont définis mission par mission, dans une proposition claire validée avec vous avant tout démarrage."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "users" as IconName,
                title: "Une équipe dédiée",
                text: "Des étudiants sélectionnés et formés, encadrés par le bureau pour la qualité et le respect des délais.",
              },
              {
                icon: "check" as IconName,
                title: "Une méthode structurée",
                text: "Brief, proposition écrite, points d'étape : vous suivez l'avancement à chaque étape, sans zone d'ombre.",
              },
              {
                icon: "handshake" as IconName,
                title: "Un coût maîtrisé",
                text: "Le statut de Junior Entreprise permet des tarifs accessibles, sans compromis sur la rigueur du travail.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="h-full">
                <article className="card flex h-full flex-col gap-4 p-8">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-md"
                    style={{ background: "rgba(162, 35, 35, 0.08)", color: "var(--color-red)" }}
                  >
                    <Icon name={c.icon} size={24} />
                  </span>
                  <h3 className="h3-display text-black">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-black/70">{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="bg-black text-white">
        <div className="container-nmc py-20 md:py-24">
          <SectionHeader
            dark
            eyebrow="Méthode"
            title="Comment se déroule une mission"
            subtitle="Un processus lisible en quatre étapes, du premier contact au suivi post-livrable."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.step} delay={i * 80}>
                <article className="card-dark h-full p-7">
                  <span className="font-display text-5xl text-white/20">{s.step}</span>
                  <h3 className="h3-display mt-3 text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA spécifique services */}
      <section className="bg-white">
        <div className="container-nmc flex flex-col items-center gap-6 py-20 text-center">
          <Reveal>
            <h2 className="h2-display max-w-3xl text-black">Un besoin précis ? Parlons-en.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-black/70">
              Décrivez-nous votre problématique : nous revenons vers vous avec une première analyse
              et une proposition adaptée à vos moyens.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Parler de mon projet
              </Link>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Icon name="instagram" size={18} />
                Voir nos réalisations sur Instagram
              </a>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-sm text-black/50">
              Vous pouvez aussi nous écrire directement :{" "}
              <a href={`mailto:${contact.email}`} className="link-underline">
                {contact.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
