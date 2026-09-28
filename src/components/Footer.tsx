import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import SocialLinks from "./SocialLinks";
import { nav, contact } from "@/lib/content";

/** Footer global — structure PRD §DD : logo, description, nav, contact, sociaux, légal */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white">
      <div className="container-nmc grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Marque */}
        <div className="flex flex-col gap-4">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            NMC Junior Entreprise — FSEGN Nabeul. Innover ensemble pour transformer les projets en
            réussites.
          </p>
          <SocialLinks variant="light" />
        </div>

        {/* Navigation */}
        <nav aria-label="Navigation pied de page">
          <h2 className="eyebrow mb-5">Navigation</h2>
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 no-underline transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="eyebrow mb-5">Contact</h2>
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <a
                href={`tel:${contact.phoneHref}`}
                className="flex items-center gap-3 text-white/70 no-underline transition-colors hover:text-white"
              >
                <Icon name="phone" size={16} className="shrink-0 text-[color:var(--color-red)]" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 break-all text-white/70 no-underline transition-colors hover:text-white"
              >
                <Icon name="mail" size={16} className="shrink-0 text-[color:var(--color-red)]" />
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/70">
              <Icon name="pin" size={16} className="mt-1 shrink-0 text-[color:var(--color-red)]" />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>

        {/* Mentions légales */}
        <div>
          <h2 className="eyebrow mb-5">Informations</h2>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                href="/mentions-legales"
                className="text-white/70 no-underline transition-colors hover:text-white"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/politique-de-confidentialite"
                className="text-white/70 no-underline transition-colors hover:text-white"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white/70 no-underline transition-colors hover:text-white"
              >
                Nous contacter
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-nmc flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} NMC Junior Entreprise. Tous droits réservés.</p>
          <p>Neapolis Marketing Consulting — FSEGN, Nabeul, Tunisie</p>
        </div>
      </div>
    </footer>
  );
}
