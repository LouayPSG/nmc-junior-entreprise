import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import TeamCard from "@/components/TeamCard";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Équipe",
  description:
    "L'équipe de NMC Junior Entreprise (FSEGN Nabeul) : bureau, pôles marketing, études, finance et RH. Composition du mandat en cours de publication.",
  alternates: { canonical: "/equipe" },
  openGraph: {
    title: "Équipe — NMC Junior Entreprise",
    description: "Découvrez les étudiants qui font vivre NMC Junior Entreprise à la FSEGN Nabeul.",
  },
};

export default function TeamPage() {
  const polesWithMembers = team.poles.filter((p) => p.members.length > 0);
  const total = polesWithMembers.reduce((acc, p) => acc + p.members.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Équipe"
        title="Des étudiants, un standard professionnel"
        intro="NMC repose sur ses membres : bureau exécutif, pôles métiers et équipes projet. La composition du mandat est publiée à chaque rentrée."
      />

      <section className="bg-white">
        <div className="container-nmc py-20 md:py-24">
          {polesWithMembers.length > 0 ? (
            <div className="flex flex-col gap-16">
              {polesWithMembers.map((pole) => (
                <div key={pole.id}>
                  <SectionHeader eyebrow="Pôle" title={pole.name} />
                  <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {pole.members.map((m, i) => (
                      <TeamCard key={m.name} member={m} index={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 py-10 text-center">
              <Reveal>
                <p className="eyebrow">Effectif du mandat</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="h2-display max-w-3xl text-black">
                  La composition de l'équipe arrive
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="max-w-2xl text-black/70">
                  Chaque mandat de NMC est composé d'un bureau et de pôles (marketing, études,
                  finance, RH…). La liste officielle des membres, avec photos et rôles, sera publiée
                  après validation par NMC.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="placeholder-box mt-4 w-full max-w-2xl">
                  <span>
                    <span style={{ color: "var(--color-red)" }}>Contenu à venir</span>
                    <br />
                    Membres à fournir par NMC (nom, rôle, pôle, photo)
                  </span>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="text-sm text-black/50">{team.notice}</p>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title="Et vous, la prochaine équipe, ce sera peut-être vous."
        subtitle="Étudiant(e) à la FSEGN : rejoindre NMC, c'est apprendre le marketing sur des cas réels."
      />
    </>
  );
}
