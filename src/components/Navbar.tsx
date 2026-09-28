"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { nav, contact } from "@/lib/content";

/** Header global sticky — fond opaque après le scroll, lien actif souligné en rouge */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile à chaque navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloque le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-black/10 bg-white/95 backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <div className="container-nmc flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative py-2 text-sm font-medium no-underline transition-colors ${
                    isActive(item.href) ? "text-black" : "text-black/70 hover:text-black"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-[color:var(--color-red)] transition-transform duration-200 ${
                      isActive(item.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`mailto:${contact.email}`}
            aria-label={`Écrire à ${contact.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/15 text-black/70 transition-colors hover:border-[color:var(--color-red)] hover:text-[color:var(--color-red)]"
          >
            <Icon name="mail" size={18} />
          </a>
          <Link href="/contact" className="btn btn-primary btn-sm">
            Travaillons ensemble
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/15 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>

      {/* Menu mobile plein écran */}
      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-black/10 bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[calc(100vh-4rem)]" : "max-h-0 border-t-0"
        }`}
      >
        <nav aria-label="Navigation mobile" className="container-nmc py-6">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-black/5 last:border-b-0">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between py-4 text-lg font-semibold no-underline ${
                    isActive(item.href) ? "text-[color:var(--color-red)]" : "text-black"
                  }`}
                >
                  {item.label}
                  <Icon name="arrow-right" size={18} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/contact" className="btn btn-primary w-full">
              Travaillons ensemble
            </Link>
            <a href={`tel:${contact.phoneHref}`} className="btn btn-secondary w-full">
              {contact.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
