import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site, contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de NMC Junior Entreprise (FSEGN Nabeul).",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false },
};

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-black/10 py-10 last:border-b-0">
      <h2 className="h3-display mb-4 text-black">{title}</h2>
      <div className="flex flex-col gap-3 leading-relaxed text-black/75">{children}</div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero eyebrow="Informations légales" title="Mentions légales" />
      <section className="bg-white">
        <div className="container-nmc max-w-3xl py-16 md:py-20">
          <LegalSection title="Éditeur du site">
            <p>
              Le présent site est édité par <strong>{site.fullName}</strong> ({site.name}),
              Junior Entreprise de la Faculté des Sciences Économiques et de Gestion de Nabeul
              (FSEGN).
            </p>
            <p>
              Adresse : {contact.address}
              <br />
              Téléphone : {contact.phone}
              <br />
              E-mail : {contact.email}
            </p>
            <p>
              <em>
                Responsable de publication : le bureau exécutif de {site.name}. Pour toute question
                relative au site, contactez-nous à {contact.email}.
              </em>
            </p>
          </LegalSection>

          <LegalSection title="Hébergement">
            <p>
              Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
              États-Unis (vercel.com), avec certificat SSL.
            </p>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L'ensemble des contenus (textes, visuels, logos) est la propriété de {site.name}, sauf
              mention contraire. Toute reproduction sans autorisation écrite est interdite.
            </p>
          </LegalSection>

          <LegalSection title="Responsabilité">
            <p>
              Les informations publiées sont fournies à titre indicatif et peuvent évoluer. NMC
              s'efforce d'en assurer l'exactitude sans pouvoir la garantir de manière absolue.
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
