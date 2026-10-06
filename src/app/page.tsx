import Link from "next/link";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SectionHeader from "@/components/SectionHeader";
import ExpertiseCard from "@/components/ExpertiseCard";
import BoardCard from "@/components/BoardCard";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import { getExpertises, team, site, social } from "@/lib/content";

/* Valeurs officielles — traduites en engagements concrets (aucune invention) */
const VALUES: { icon: IconName; name: string; text: string }[] = [
  {
    icon: "target",
    name: "Excellence",
    text: "Un standard de qualité professionnel sur chaque livrable, du premier échange à la restitution finale.",
  },
  {
    icon: "spark",
    name: "Innovation",
    text: "Chercher l'angle neuf : chaque mission mérite une approche créative, pas un modèle copié.",
  },
  {
    icon: "check",
    name: "Professionnalisme",
    text: "Des méthodes de travail rigoureuses, héritées du conseil et appliquées à chaque étape.",
  },
  {
    icon: "handshake",
    name: "Engagement",
    text: "Un investissement total auprès des clients, des partenaires et du tissu économique local.",
  },
];

/* Notre approche — les 4 étapes du déroulé d'une mission */
const APPROACH = [
  {
    step: "01",
    title: "Comprendre",
    text: "Un premier échange pour cerner votre besoin, vos objectifs et vos contraintes réelles.",
  },
  {
    step: "02",
    title: "Concevoir",
    text: "Une proposition claire : périmètre, méthodologie, planning et livrables attendus.",
  },
  {
    step: "03",
    title: "Réaliser",
    text: "Une équipe dédiée mène la mission, avec des points d'étape réguliers et mesurables.",
  },
  {
    step: "04",
    title: "Accompagner",
    text: "Restitution, recommandations actionnables et suivi de la mise en pratique.",
  },
];

export default function HomePage() {
  const expertises = getExpertises();
  const board = team.board;

  return (
    <>
      <Hero />
      <StatsBar />

      {/* NMC en bref */}
      <section className="bg-white">
        <div className="container-nmc grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="NMC en bref"
              title="Une Junior Entreprise, une exigence professionnelle."
            />
            <Reveal delay={100}>
              <div className="mt-6 flex flex-col gap-4 text-black/75">
                <p>
                  <strong className="text-black">NMC — Neapolis Marketing Consulting</strong> est la
                  Junior Entreprise de la Faculté des Sciences Économiques et de Gestion de Nabeul.
                  Depuis {site.founded}, nous connectons trois mondes : les étudiants qui veulent
                  apprendre sur des cas réels, les entreprises qui cherchent des réponses marketing,
                  et un campus qui relie la formation au terrain.
                </p>
                <p>
                  Nos équipes travaillent en petits groupes, encadrées par des méthodes issues du
                  conseil : brief structuré, étapes cadencées, livrables exploitables. Le tout à
                  coût maîtrisé, parce que la mission est portée par des étudiants motivés et
                  bien formés — pas parce que la qualité est négociée.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/a-propos" className="btn btn-secondary">
                  Découvrir NMC
                </Link>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Icon name="instagram" size={18} />
                  Notre Instagram
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <blockquote
                className="card flex h-full flex-col justify-center gap-4 border-l-4 p-8"
                style={{ borderLeftColor: "var(--color-red)" }}
              >
                <span className="font-display text-5xl leading-none text-black/10" aria-hidden="true">
                  “
                </span>
                <p className="h3-display text-black">{site.baseline}</p>
                <footer className="text-sm font-semibold uppercase tracking-widest text-black/50">
                  Notre message de marque
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="bg-gray-100">
        <div className="container-nmc py-20 md:py-28">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Nos prestations"
              title="Trois domaines, une même exigence"
              subtitle="Research, Strategy, Branding : les fondations de chaque mission NMC, menées par une équipe formée aux méthodes professionnelles."
            />
            <Reveal delay={150}>
              <Link href="/services" className="btn btn-secondary shrink-0">
                Toutes nos prestations
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {expertises.map((e, i) => (
              <ExpertiseCard key={e.id} expertise={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi NMC — valeurs */}
      <section className="bg-black text-white">
        <div className="container-nmc py-20 md:py-28">
          <SectionHeader
            dark
            eyebrow="Pourquoi NMC"
            title="Quatre valeurs qui structurent chaque mission"
            subtitle="Excellence, Innovation, Professionnalisme, Engagement : pas des mots d'affichage, des exigences de travail."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.name} delay={i * 70} className="h-full">
                <article className="flex h-full flex-col gap-4 bg-black p-8">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md"
                    style={{ background: "rgba(162,35,35,0.2)", color: "#fff" }}
                  >
                    <Icon name={v.icon} size={22} />
                  </span>
                  <h3 className="h3-display text-white">{v.name}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="bg-white">
        <div className="container-nmc py-20 md:py-28">
          <SectionHeader
            eyebrow="Notre approche"
            title="Comment se déroule une mission"
            subtitle="Un processus lisible en quatre étapes — vous savez toujours où en est votre projet."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((a, i) => (
              <Reveal as="li" key={a.step} delay={i * 80} className="h-full">
                <article className="flex h-full flex-col gap-3 border-t-2 pt-6" style={{ borderColor: "var(--color-red)" }}>
                  <span className="font-display text-5xl leading-none text-black/15" aria-hidden="true">
                    {a.step}
                  </span>
                  <h3 className="h3-display text-black">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-black/70">{a.text}</p>
                </article>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <div className="mt-10">
              <Link href="/services" className="btn btn-secondary">
                Voir le détail des prestations
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Équipe — bureau exécutif */}
      <section className="bg-gray-100">
        <div className="container-nmc py-20 md:py-28">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="L'équipe"
              title="Un bureau engagé derrière chaque mission"
              subtitle="Le bureau exécutif du mandat en cours pilote les départements, la qualité et la relation client."
            />
            <Reveal delay={150}>
              <Link href="/equipe" className="btn btn-secondary shrink-0">
                Découvrir notre équipe
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {board.slice(0, 3).map((m, i) => (
              <BoardCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Écosystème */}
      <section className="bg-white">
        <div className="container-nmc grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Écosystème"
              title="Ancrés à la FSEGN, tournés vers le terrain"
              subtitle="NMC vit au cœur de la Faculté des Sciences Économiques et de Gestion de Nabeul : nos membres y étudient, nos missions y prennent racine, et nos partenaires y trouvent des étudiants formés et disponibles."
            />
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={150}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card flex flex-col gap-2 p-6">
                  <Icon name="graduation" size={22} className="text-[color:var(--color-red)]" />
                  <h3 className="text-sm font-semibold text-black">FSEGN</h3>
                  <p className="text-sm text-black/70">
                    Notre faculté d'attache à Nabeul, terrain de formation et de recrutement.
                  </p>
                </div>
                <div className="card flex flex-col gap-2 p-6">
                  <Icon name="handshake" size={22} className="text-[color:var(--color-red)]" />
                  <h3 className="text-sm font-semibold text-black">Réseau Junior Entreprise</h3>
                  <p className="text-sm text-black/70">
                    Le mouvement national des JE étudiantes : mêmes standards, mêmes exigences.
                  </p>
                </div>
                <div className="card flex flex-col gap-2 p-6 sm:col-span-2">
                  <Icon name="pin" size={22} className="text-[color:var(--color-red)]" />
                  <h3 className="text-sm font-semibold text-black">Cap Bon</h3>
                  <p className="text-sm text-black/70">
                    Le tissu économique local : PME, commerces, artisans et porteurs de projets que
                    nous accompagnons au quotidien.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
