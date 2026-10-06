import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { contact, social } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — NMC Junior Entreprise",
  description:
    "Contactez NMC Junior Entreprise (FSEGN Nabeul) : formulaire, e-mail, téléphone, Instagram. Parlons de votre projet marketing.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — NMC Junior Entreprise",
    description: "Parlons de votre projet marketing : formulaire, e-mail, téléphone, réseaux sociaux.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        intro="Entreprises, partenaires, étudiants : une seule adresse. Écrivez-nous, appelez-nous ou passez nous voir à la FSEGN."
      />

      <section className="bg-white">
        <div className="container-nmc grid gap-12 py-20 md:py-24 lg:grid-cols-12">
          {/* Formulaire */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="h2-display text-black">Écrivez-nous</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-3 text-black/70">
                Décrivez votre besoin : nous revenons vers vous pour en discuter. Les champs
                marqués d'un astérisque (*) sont obligatoires.
              </p>
            </Reveal>
            <Reveal delay={140} className="mt-8">
              <ContactForm />
            </Reveal>
          </div>

          {/* Coordonnées */}
          <aside className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="card flex flex-col gap-6 p-8">
                <h2 className="h3-display text-black">Coordonnées officielles</h2>
                <ul className="flex flex-col gap-5 text-sm">
                  <li>
                    <a href={`tel:${contact.phoneHref}`} className="group flex items-start gap-4 no-underline">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md" style={{ background: "rgba(162,35,35,0.08)", color: "var(--color-red)" }}>
                        <Icon name="phone" size={20} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-widest text-black/50">Téléphone</span>
                        <span className="font-semibold text-black group-hover:text-[color:var(--color-red)]">{contact.phone}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${contact.email}`} className="group flex items-start gap-4 no-underline">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md" style={{ background: "rgba(162,35,35,0.08)", color: "var(--color-red)" }}>
                        <Icon name="mail" size={20} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-widest text-black/50">E-mail</span>
                        <span className="break-all font-semibold text-black group-hover:text-[color:var(--color-red)]">{contact.email}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md" style={{ background: "rgba(162,35,35,0.08)", color: "var(--color-red)" }}>
                      <Icon name="pin" size={20} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-black/50">Adresse</span>
                      <span className="text-black/80">{contact.address}</span>
                    </span>
                  </li>
                </ul>

                <div className="border-t border-black/10 pt-6">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-black/50">
                    Suivre NMC
                  </h3>
                  <SocialLinks />
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-4 inline-block text-sm"
                  >
                    Actualité et événements sur Instagram
                  </a>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Carte Google Maps */}
      <section aria-label="Localisation de la FSEGN" className="border-t border-black/10 bg-gray-100">
        <div className="container-nmc py-16">
          <Reveal>
            <h2 className="h2-display mb-8 text-black">Nous trouver</h2>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="aspect-[4/3] w-full overflow-hidden rounded-md border border-black/10 shadow-[var(--shadow-card)] md:aspect-[16/7]"
            >
              <iframe
                title="Carte — Faculté des Sciences Économiques et de Gestion de Nabeul"
                src="https://www.google.com/maps?q=Facult%C3%A9%20des%20Sciences%20%C3%89conomiques%20et%20de%20Gestion%20de%20Nabeul&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
