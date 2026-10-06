import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import { getSortedEvents, social } from "@/lib/content";

export const metadata: Metadata = {
  title: "Événements & actualités — NMC Junior Entreprise",
  description:
    "Formations internes, ateliers, séminaires et partenariats : suivez la vie de NMC Junior Entreprise, la JE de la FSEGN Nabeul, sur cette page et sur nos réseaux.",
  alternates: { canonical: "/evenements" },
  openGraph: {
    title: "Événements & actualités — NMC Junior Entreprise",
    description:
      "Suivez les temps forts de NMC Junior Entreprise : formations, ateliers, séminaires et partenariats.",
  },
};

const ACTIVITIES: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "graduation",
    title: "Formations internes",
    text: "Le département RH & formations organise des sessions régulières : méthodologie d'étude, outils du conseil, prise de parole.",
  },
  {
    icon: "spark",
    title: "Ateliers & séminaires",
    text: "Des temps d'apprentissage collectif, parfois avec des intervenants professionnels, ouverts selon les éditions.",
  },
  {
    icon: "handshake",
    title: "Rencontres & partenariats",
    text: "Événements co-construits avec des entreprises, des institutions ou d'autres associations du campus.",
  },
];

export default function EventsPage() {
  const list = getSortedEvents();
  return (
    <>
      <PageHero
        eyebrow="Événements"
        title="La vie de NMC, au rythme des activités"
        intro="Formations, ateliers, séminaires, rencontres professionnelles : les temps forts rythment l'année et font grandir les membres. Les annonces officielles passent d'abord par Instagram."
      />

      <section className="bg-white">
        <div className="container-nmc py-20 md:py-24">
          {list.length > 0 ? (
            <div className="flex flex-col gap-4">
              {list.map((e, i) => (
                <Reveal key={e.slug} delay={i * 60}>
                  <article className="card card-hover flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6">
                    <div className="flex shrink-0 flex-col items-center">
                      <span className="font-display text-4xl leading-none text-black">
                        {e.date.slice(8, 10)}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-red)]">
                        {e.date.slice(5, 7)}/{e.date.slice(0, 4)}
                      </span>
                    </div>
                    <span className="hidden h-12 w-px bg-black/10 sm:block" aria-hidden="true" />
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="h3-display text-black">{e.title}</h3>
                        {e.tag ? <span className="tag tag-red">{e.tag}</span> : null}
                      </div>
                      <p className="text-sm leading-relaxed text-black/70">{e.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-6">
                <SectionHeader
                  eyebrow="Notre calendrier"
                  title="Trois types d'activités rythment l'année"
                  subtitle="Les dates et les programmes officiels sont annoncés au fur et à mesure sur notre Instagram — c'est notre canal de référence pour l'actualité."
                />
                <Reveal delay={150}>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-8"
                  >
                    <Icon name="instagram" size={18} />
                    Voir l'actualité sur Instagram
                  </a>
                </Reveal>
              </div>
              <div className="lg:col-span-6">
                <Reveal delay={200}>
                  <div className="flex flex-col gap-4">
                    {ACTIVITIES.map((a) => (
                      <article key={a.title} className="card flex gap-4 p-6">
                        <span
                          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md"
                          style={{ background: "rgba(162,35,35,0.08)", color: "var(--color-red)" }}
                        >
                          <Icon name={a.icon} size={22} />
                        </span>
                        <div>
                          <h3 className="text-base font-semibold text-black">{a.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-black/70">{a.text}</p>
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
        title="Un événement à co-construire avec NMC ?"
        subtitle="Vous organisez un séminaire ou un atelier dans le Cap Bon : parlons d'un partenariat."
      />
    </>
  );
}
