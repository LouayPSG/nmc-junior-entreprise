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
              Le présent site est édité par <strong>{site.fullName}</strong> (NMC Junior
              Entreprise), Junior Entreprise de la Faculté des Sciences Économiques et de Gestion de
              Nabeul.
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
                [À compléter par NMC : numéro d'enregistrement / statut associatif, nom du
                responsable de publication — à confirmer avec NMC / FSEGN.]
              </em>
            </p>
          </LegalSection>

          <LegalSection title="Hébergement">
            <p>
              Le site est hébergé sur une plateforme cloud (Vercel Inc. ou équivalent), avec
              certificat SSL. Les coordonnées complètes de l'hébergeur seront précisées lors de la
              mise en production définitive.
            </p>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L'ensemble des contenus (textes, visuels, logos) est la propriété de {site.name}, sauf
              mention contraire. Toute reproduction sans autorisation écrite est interdite. Les
              logos des partenaires sont utilisés avec leur accord.
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
