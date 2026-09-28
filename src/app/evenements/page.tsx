import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EventCard from "@/components/EventCard";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { getSortedEvents, events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Événements",
  description:
    "Ateliers, séminaires, partenariats : la vie de NMC Junior Entreprise, la JE de la FSEGN Nabeul. Programme en cours de finalisation.",
  alternates: { canonical: "/evenements" },
  openGraph: {
    title: "Événements — NMC Junior Entreprise",
    description: "Ateliers, séminaires et événements de NMC Junior Entreprise à la FSEGN Nabeul.",
  },
};

export default function EventsPage() {
  const list = getSortedEvents();
  return (
    <>
      <PageHero
        eyebrow="Événements"
        title="La vie de NMC, atelier après atelier"
        intro="Formations internes, séminaires, rencontres avec des professionnels : cette page recense les temps forts de NMC. Elle est mise à jour à la main, au rythme des activités."
      />

      <section className="bg-white">
        <div className="container-nmc py-20 md:py-24">
          {list.length > 0 ? (
            <div className="flex flex-col gap-4">
              {list.map((e, i) => (
                <EventCard key={e.slug} event={e} index={i} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 py-10 text-center">
              <Reveal>
                <p className="eyebrow">Programme en cours de finalisation</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="h2-display max-w-3xl text-black">
                  Le programme des événements arrive
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="max-w-2xl text-black/70">
                  Ateliers, séminaires et partenariats seront annoncés ici dès validation du
                  calendrier par NMC.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="placeholder-box mt-4 w-full max-w-2xl">
                  <span>
                    <span style={{ color: "var(--color-red)" }}>Contenu à venir</span>
                    <br />
                    Événements à fournir par NMC (date, titre, description, type)
                  </span>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="text-sm text-black/50">{events.notice}</p>
              </Reveal>
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
