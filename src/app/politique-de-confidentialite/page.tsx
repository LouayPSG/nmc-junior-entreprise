import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de NMC Junior Entreprise : données collectées via le formulaire de contact, finalités, durées de conservation et vos droits.",
  alternates: { canonical: "/politique-de-confidentialite" },
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

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Vos données"
        title="Politique de confidentialité"
        intro="Nous collectons le minimum de données nécessaires pour répondre à vos demandes. Cette page explique quoi, pourquoi, et comment exercer vos droits."
      />
      <section className="bg-white">
        <div className="container-nmc max-w-3xl py-16 md:py-20">
          <LegalSection title="Données collectées">
            <p>
              Le formulaire de contact collecte uniquement : nom complet, adresse e-mail, numéro de
              téléphone (facultatif), organisation (facultatif), sujet et contenu du message.
            </p>
            <p>
              Aucun cookie publicitaire n'est déposé par ce site. Aucune donnée n'est vendue ni
              cédée à des tiers. La carte Google Maps intégrée à la page Contact est fournie par
              Google et peut déposer ses propres cookies lorsqu'elle est affichée.
            </p>
          </LegalSection>

          <LegalSection title="Finalité et conservation">
            <p>
              Vos données servent exclusivement à répondre à votre demande (devis, partenariat,
              candidature, question). Elles sont conservées le temps nécessaire au traitement de
              votre demande, puis supprimées.
            </p>
          </LegalSection>

          <LegalSection title="Destinataires">
            <p>
              Les soumissions du formulaire sont transmises via un prestataire technique de routage
              d'e-mails vers la boîte officielle {contact.email}. Le prestataire agit en qualité de
              sous-traitant technique et n'utilise pas vos données à d'autres fins.
            </p>
          </LegalSection>

          <LegalSection title="Vos droits">
            <p>
              Conformément à la réglementation en vigueur sur la protection des données personnelles
              (loi tunisienne 2004-63 et principes généraux type RGPD), vous disposez d'un droit
              d'accès, de rectification et de suppression des données vous concernant.
            </p>
            <p>
              Pour exercer ces droits : <strong>{contact.email}</strong>
            </p>
          </LegalSection>

          <LegalSection title="Consentement">
            <p>
              L'envoi du formulaire requiert le consentement explicite via la case à cocher dédiée.
              Vous pouvez retirer votre consentement à tout moment par e-mail.
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
