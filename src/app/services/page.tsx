import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { PendingTag } from "@/components/Pending";
import { getAllServices, contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services marketing de NMC Junior Entreprise (FSEGN Nabeul) : études de marché, marketing digital, branding, conseil. Catalogue en cours de validation par NMC.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — NMC Junior Entreprise",
    description: "Études, marketing digital, branding, conseil : découvrez nos prestations marketing encadrées.",
  },
};

const STEPS = [
  {
    step: "01",
    title: "Prise de brief",
    text: "Nous cadrons votre besoin, vos objectifs et vos contraintes lors d'un premier échange.",
  },
  {
    step: "02",
    title: "Proposition & devis",
    text: "Vous recevez une proposition détaillée : périmètre, planning, livrables et tarif étudiant réglementé.",
  },
  {
    step: "03",
    title: "Réalisation",
    text: "Une équipe projet dédiée mène la mission, avec des points d'étape réguliers.",
  },
  {
    step: "04",
    title: "Livrable & suivi",
    text: "Restitution finale, recommandations actionnables et accompagnement de la mise en pratique.",
  },
];

export default function ServicesPage() {
  const list = getAllServices();
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Des prestations marketing encadrées, à coût maîtrisé"
        intro="Chaque mission est menée par une équipe étudiante encadrée, avec la qualité de livraison d'un cabinet. Le catalogue ci-dessous est en attente de confirmation officielle par NMC."
      />

      {/* Avertissement catalogue */}
      <section className="bg-white border-b border-black/10">
        <div className="container-nmc py-8">
          <Reveal>
            <p className="flex items-start gap-3 text-sm text-black/70">
              <Icon name="compass" size={20} className="mt-0.5 shrink-0 text-[color:var(--color-red)]" />
              <span>
                <strong>Statut du catalogue :</strong> les catégories affichées structurent la page
                mais restent <PendingTag>à confirmer avec NMC avant publication officielle</PendingTag>. Le
                périmètre exact, les livrables et les conditions seront précisés à la validation.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Catalogue */}
      <section className="bg-white">
        <div className="container-nmc py-20 md:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>

          {/* Détail livrables par service (placeholder explicite) */}
          <div className="mt-16">
            <SectionHeader
              eyebrow="En détail"
              title="Ce que comprend chaque prestation"
              subtitle="Les livrables précis de chaque service seront publiés après validation du catalogue."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {list.map((s) => (
                <Reveal key={s.id}>
                  <article className="card p-7">
                    <h3 className="h3-display text-black">{s.title}</h3>
                    <p className="mt-3 text-sm text-black/70">{s.valueProposition}</p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {s.deliverables.map((d, di) => (
                        <li key={di} className="flex gap-2 text-sm text-black/60">
                          <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0" style={{ background: "var(--color-red)" }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
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
            <h2 className="h2-display max-w-3xl text-black">
              Un besoin précis ? Parlons-en.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-black/70">
              Décrivez-nous votre problématique : nous revenons vers vous avec une première analyse
              et une proposition adaptée.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Demander un devis
              </Link>
              <a href={`mailto:${contact.email}`} className="btn btn-secondary">
                {contact.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
