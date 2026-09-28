import Link from "next/link";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import EventCard from "@/components/EventCard";
import CtaBanner from "@/components/CtaBanner";
import PartnerWall from "@/components/PartnerWall";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import {
  getAllServices,
  getFeaturedProjects,
  getSortedEvents,
  contact,
} from "@/lib/content";

/* Contenus "Why NMC" : reformulation des 4 valeurs officielles (aucun fait inventé) */
const differentiators: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "target",
    title: "Rigueur étudiante, méthodologie pro",
    text: "Nos équipes combinent la fraîcheur des idées étudiantes et des méthodes de travail inspirées du conseil professionnel, au service de l'excellence.",
  },
  {
    icon: "spark",
    title: "Innovation marketing",
    text: "L'innovation est l'une de nos valeurs fondatrices : chaque mission cherche l'angle neuf, l'idée qui fait la différence pour le territoire local.",
  },
  {
    icon: "handshake",
    title: "Ancrage local Nabeul",
    text: "Basés à la FSEGN, nous connaissons le tissu économique du Cap Bon et l'engagement envers nos partenaires est total, du premier rendez-vous au rendu final.",
  },
];

export default function HomePage() {
  const servicesList = getAllServices().slice(0, 4);
  const featured = getFeaturedProjects();
  const latestEvents = getSortedEvents().slice(0, 2);

  return (
    <>
      <Hero />
      <StatsBar />

      {/* Introduction NMC */}
      <section className="bg-white">
        <div className="container-nmc grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Qui sommes-nous"
              title="Une Junior Entreprise, une exigence professionnelle."
              subtitle="NMC — Neapolis Marketing Consulting Junior Entreprise — est la Junior Entreprise de la Faculté des Sciences Économiques et de Gestion de Nabeul. NMC accompagne les entreprises locales dans leurs projets marketing tout en offrant aux étudiants une expérience professionnelle concrète qui améliore leur employabilité."
            />
            <Reveal delay={150}>
              <Link href="/a-propos" className="btn btn-secondary mt-8">
                Découvrir NMC
              </Link>
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
                <p className="h3-display text-black">Innover ensemble pour transformer les projets en réussites.</p>
                <footer className="text-sm font-semibold uppercase tracking-widest text-black/50">
                  Notre message de marque
                </footer>
                <a href={`mailto:${contact.email}`} className="link-underline text-sm">
                  Une question ? Écrivez-nous
                </a>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services (aperçu) */}
      <section className="bg-gray-100">
        <div className="container-nmc py-20 md:py-28">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Nos services"
              title="Ce que nous faisons pour votre entreprise"
              subtitle="Des missions marketing encadrées, livrées avec une exigence professionnelle. Catalogue détaillé en attente de confirmation officielle par NMC."
            />
            <Reveal delay={150}>
              <Link href="/services" className="btn btn-secondary shrink-0">
                Tous nos services
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesList.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 text-sm text-black/60">
              <span className="note-pending">Note :</span> le catalogue définitif sera validé par le
              bureau NMC avant publication — <Link href="/contact" className="link-underline">posez vos questions</Link> en attendant.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projets à la une */}
      <section className="bg-white">
        <div className="container-nmc py-20 md:py-28">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Réalisations"
              title="Nos projets sélectionnés"
              subtitle="Nos premières références sont en cours de documentation avec les clients concernés."
            />
            <Reveal delay={150}>
              <Link href="/projets" className="btn btn-secondary shrink-0">
                Voir tous nos projets
              </Link>
            </Reveal>
          </div>
          {featured.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="card flex flex-col items-center gap-4 p-12 text-center">
                <span className="font-display text-6xl leading-none text-black/10" aria-hidden="true">+</span>
                <h3 className="h3-display text-black">Nos premiers projets arrivent bientôt</h3>
                <p className="max-w-xl text-black/70">
                  NMC est en train de documenter ses premières missions (avec l'accord de ses
                  clients). Cette section présentera bientôt des cas concrets : contexte, mission,
                  résultats.
                </p>
                <Link href="/contact" className="btn btn-primary mt-2">
                  Parlons de votre projet
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Why NMC (Section 7 + 8 fusionnées) */}
      <section className="bg-black text-white">
        <div className="container-nmc py-20 md:py-28">
          <SectionHeader
            dark
            eyebrow="Pourquoi NMC"
            title="L'alliance d'un écosystème étudiant et d'un standard professionnel"
            subtitle="Quatre valeurs officielles — Excellence, Innovation, Professionnalisme, Engagement — traduites en engagements concrets."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 80} className="h-full">
                <article className="card-dark flex h-full flex-col gap-4 p-8">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-md"
                    style={{ background: "rgba(162,35,35,0.18)", color: "#fff" }}
                  >
                    <Icon name={d.icon} size={24} />
                  </span>
                  <h3 className="h3-display text-white">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{d.text}</p>
                </article>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* Événements récents */}
      <section className="bg-white">
        <div className="container-nmc py-20 md:py-28">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Vie de l'entreprise"
              title="Derniers événements & activités"
              subtitle="Ateliers, séminaires et partenariats qui rythment la vie de NMC."
            />
            <Reveal delay={150}>
              <Link href="/evenements" className="btn btn-secondary shrink-0">
                Tous les événements
              </Link>
            </Reveal>
          </div>
          {latestEvents.length > 0 ? (
            <div className="flex flex-col gap-4">
              {latestEvents.map((e, i) => (
                <EventCard key={e.slug} event={e} index={i} />
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="card flex flex-col items-center gap-4 p-12 text-center">
                <h3 className="h3-display text-black">Le calendrier des événements arrive</h3>
                <p className="max-w-xl text-black/70">
                  Les prochains ateliers et séminaires seront annoncés ici dès validation du
                  programme par NMC.
                </p>
                <Link href="/evenements" className="btn btn-secondary mt-2">
                  Voir la page Événements
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Partenaires */}
      <section className="bg-gray-100">
        <div className="container-nmc py-20 md:py-28">
          <SectionHeader
            align="center"
            eyebrow="Écosystème"
            title="Nos partenaires"
            subtitle="Entreprises, institutions académiques et réseau des Junior Entreprises qui nous font confiance."
          />
          <Reveal delay={150} className="mt-12">
            <PartnerWall />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
