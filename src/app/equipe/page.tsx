import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import BoardCard from "@/components/BoardCard";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import { team, social } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notre équipe — NMC Junior Entreprise",
  description:
    "Le bureau exécutif de NMC Junior Entreprise (FSEGN Nabeul) et les départements qui font vivre la structure : développement commercial, projets, marketing & événementiel, RH & formations.",
  alternates: { canonical: "/equipe" },
  openGraph: {
    title: "Notre équipe — NMC Junior Entreprise",
    description:
      "Découvrez les étudiants qui dirigent NMC Junior Entreprise à la FSEGN Nabeul.",
  },
};

export default function TeamPage() {
  const { board, departments } = team;

  return (
    <>
      <PageHero
        eyebrow="Équipe"
        title="Une équipe jeune. Une ambition professionnelle."
        intro="NMC rassemble des étudiants de la FSEGN autour d'une même exigence : travailler le marketing avec la rigueur d'un cabinet, l'énergie d'un campus."
      />

      {/* Bureau exécutif */}
      <section className="bg-white">
        <div className="container-nmc py-20 md:py-24">
          <SectionHeader
            eyebrow="Bureau exécutif"
            title="L'équipe qui pilote le mandat"
            subtitle="Six membres élus dirigent NMC : stratégie, qualité des missions, relation client et vie interne."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {board.map((m, i) => (
              <BoardCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Départements */}
      <section className="bg-gray-100">
        <div className="container-nmc py-20 md:py-24">
          <SectionHeader
            eyebrow="Organisation"
            title="Quatre départements complémentaires"
            subtitle="Chaque mission mobilise plusieurs départements : c'est ce fonctionnement transversal qui garantit le suivi commercial, la qualité des livrables et la montée en compétences des membres."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {departments.map((d, i) => (
              <Reveal key={d.id} delay={i * 70} className="h-full">
                <article className="card flex h-full flex-col gap-4 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="h3-display text-black">{d.name}</h3>
                    <span
                      className="shrink-0 rounded-sm px-2 py-1 text-xs font-semibold uppercase tracking-wider text-white"
                      style={{ background: "var(--color-red)" }}
                    >
                      {d.lead.split(" ")[0]}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-black/70">{d.description}</p>
                  <p className="mt-auto text-xs font-semibold uppercase tracking-widest text-black/50">
                    Responsable : {d.lead}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comment on travaille ensemble */}
      <section className="bg-black text-white">
        <div className="container-nmc grid gap-12 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            dark
            eyebrow="Notre fonctionnement"
            title="Une équipe qui apprend en faisant"
            subtitle="Chez NMC, on ne recrute pas des profils tout faits : on forme. Chaque nouveau membre intègre une équipe projet, se forme aux méthodes du conseil, puis encadre à son tour."
          />
          <div className="flex flex-col gap-4">
            {[
              {
                title: "Des équipes projet transversales",
                text: "Commerciale, études, création : chaque mission mélange les profils pour couvrir tout le cycle marketing.",
              },
              {
                title: "Des formations internes régulières",
                text: "Le département RH & formations organise des sessions de montée en compétences tout au long de l'année.",
              },
              {
                title: "Une transmission continue",
                text: "Les membres expérimentés encadrent les nouveaux : le savoir-faire se transmet de mandat en mandat.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex gap-4 border-l-2 py-2 pl-6" style={{ borderColor: "var(--color-red)" }}>
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rejoindre NMC */}
      <section className="bg-white">
        <div className="container-nmc flex flex-col items-center gap-6 py-20 text-center md:py-24">
          <Reveal>
            <span
              className="inline-flex h-14 w-14 items-center justify-center rounded-full"
              style={{ background: "rgba(162,35,35,0.1)", color: "var(--color-red)" }}
            >
              <Icon name="users" size={26} />
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2-display max-w-3xl text-black">
              Et si la prochaine aventure commençait avec vous ?
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-2xl text-black/70">
              Étudiant(e) à la FSEGN : rejoindre NMC, c'est apprendre le marketing sur des cas
              réels, construire un réseau et vivre une expérience associative exigeante. Les
              périodes de recrutement sont annoncées sur nos réseaux.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Icon name="instagram" size={18} />
                Suivre les recrutements
              </a>
              <a href="/contact" className="btn btn-secondary">
                Nous écrire
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Un projet à confier à cette équipe ?"
        subtitle="Le bureau et les départements de NMC sont à votre écoute pour construire votre mission."
      />
    </>
  );
}
