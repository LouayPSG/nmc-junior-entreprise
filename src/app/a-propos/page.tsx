import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import TeamCard from "@/components/TeamCard";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "NMC Junior Entreprise, la Junior Entreprise de la FSEGN (Nabeul) : mission, vision, valeurs et identité Junior Entreprise. Innover ensemble pour transformer les projets en réussites.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos — NMC Junior Entreprise",
    description:
      "Mission, vision et valeurs de NMC Junior Entreprise, la JE de la Faculté des Sciences Économiques et de Gestion de Nabeul.",
  },
};

const VALUES: { icon: IconName; name: string; text: string }[] = [
  {
    icon: "target",
    name: "Excellence",
    text: "Viser le meilleur niveau de qualité dans chaque livrable, chaque mission, chaque interaction.",
  },
  {
    icon: "spark",
    name: "Innovation",
    text: "Chercher l'angle neuf et les approches marketing créatives pour chaque problématique.",
  },
  {
    icon: "check",
    name: "Professionnalisme",
    text: "Adopter des méthodes de travail rigoureuses, entre engagement étudiant et standards du conseil.",
  },
  {
    icon: "handshake",
    name: "Engagement",
    text: "S'investir pleinement auprès des clients, des partenaires et de l'écosystème local.",
  },
];

const membersSample = team.poles.flatMap((p) => p.members).slice(0, 4);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une Junior Entreprise à l'exigence professionnelle"
        intro="NMC — Neapolis Marketing Consulting Junior Entreprise — est basée à la Faculté des Sciences Économiques et de Gestion de Nabeul."
      />

      {/* Mission / Vision */}
      <section className="bg-white">
        <div className="container-nmc grid gap-10 py-20 md:py-24 lg:grid-cols-2">
          <Reveal>
            <article className="card h-full border-t-4 p-8 md:p-10" style={{ borderTopColor: "var(--color-red)" }}>
              <h2 className="h2-display text-black">Notre mission</h2>
              <p className="mt-4 leading-relaxed text-black/75">
                Accompagner les entreprises locales dans leurs projets marketing tout en offrant aux
                étudiants une expérience professionnelle concrète qui améliore leur employabilité.
              </p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="card h-full border-t-4 bg-black p-8 md:p-10" style={{ borderTopColor: "var(--color-red)" }}>
              <h2 className="h2-display text-white">Notre vision</h2>
              <p className="mt-4 leading-relaxed text-white/75">
                Devenir un acteur important du marketing étudiant en Tunisie, en formant des
                étudiants compétents et en contribuant à l'écosystème économique local.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Qu'est-ce qu'une Junior Entreprise ? */}
      <section className="bg-gray-100">
        <div className="container-nmc grid gap-10 py-20 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Le modèle Junior Entreprise"
              title="Le pont entre l'université et l'entreprise"
              subtitle="Une Junior Entreprise (JE) est une association étudiante à but pédagogique et non lucratif, gérée comme un cabinet de conseil. Les étudiants y mènent de vraies missions pour de vrais clients, encadrés par des professionnels et des enseignants."
            />
            <Reveal delay={150}>
              <div className="mt-8 flex flex-col gap-4 text-black/75">
                <p className="flex gap-3">
                  <Icon name="check" size={20} className="mt-1 shrink-0 text-[color:var(--color-red)]" />
                  Les clients accèdent à des prestations marketing de qualité, à coût maîtrisé.
                </p>
                <p className="flex gap-3">
                  <Icon name="check" size={20} className="mt-1 shrink-0 text-[color:var(--color-red)]" />
                  Les étudiants appliquent leurs connaissances sur des cas réels et développent leur
                  employabilité.
                </p>
                <p className="flex gap-3">
                  <Icon name="check" size={20} className="mt-1 shrink-0 text-[color:var(--color-red)]" />
                  L'université renforce le lien entre formation académique et monde professionnel.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <blockquote className="card flex h-full flex-col justify-center gap-4 border-l-4 p-8" style={{ borderLeftColor: "var(--color-red)" }}>
                <p className="h3-display text-black">« Innover ensemble pour transformer les projets en réussites. »</p>
                <footer className="text-sm font-semibold uppercase tracking-widest text-black/50">
                  Message de marque NMC
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-white">
        <div className="container-nmc py-20 md:py-24">
          <SectionHeader
            align="center"
            eyebrow="Nos valeurs"
            title="Quatre principes qui guident chaque mission"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.name} delay={i * 80} className="h-full">
                <article className="card card-hover flex h-full flex-col gap-4 p-7 text-center">
                  <span
                    className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-md"
                    style={{ background: "rgba(162,35,35,0.08)", color: "var(--color-red)" }}
                  >
                    <Icon name={v.icon} size={24} />
                  </span>
                  <h3 className="h3-display text-black">{v.name}</h3>
                  <p className="text-sm leading-relaxed text-black/70">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser équipe (données réelles uniquement) */}
      {membersSample.length > 0 ? (
        <section className="bg-gray-100">
          <div className="container-nmc py-20 md:py-24">
            <SectionHeader eyebrow="L'équipe" title="Des étudiants engagés derrière chaque mission" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {membersSample.map((m, i) => (
                <TeamCard key={m.name} member={m} index={i} />
              ))}
            </div>
            <Reveal delay={200}>
              <div className="mt-10">
                <Link href="/equipe" className="btn btn-secondary">
                  Toute l'équipe
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Rejoindre NMC (ancre ciblée par le CTA global) */}
      <section id="rejoindre" className="bg-white">
        <div className="container-nmc grid gap-10 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="Rejoindre NMC"
            title="Vous êtes étudiant à la FSEGN ?"
            subtitle="Rejoindre NMC, c'est vivre l'entrepreneuriat et le conseil marketing de l'intérieur : missions client, événements, réseau. Les modalités de recrutement de chaque mandat sont communiquées par NMC sur ses réseaux officiels."
          />
          <Reveal delay={150}>
            <div className="flex flex-col items-start gap-4">
              <Link href="/contact" className="btn btn-primary">
                Nous contacter
              </Link>
              <a
                href="https://www.instagram.com/nmc_junior_entreprise"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm"
              >
                Suivre les annonces de recrutement sur Instagram
              </a>
              <p className="text-sm text-black/50">
                (Périodes de recrutement : à confirmer par NMC à chaque mandat.)
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
